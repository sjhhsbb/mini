var vLS4d59d9b6cc24740ef3ab = "073ded1edcedd11f60005ae969cabf11";
( () => {
    var t = {
        "./node_modules/@socket.io/component-emitter/lib/esm/index.js": (t, e, n) => {
            "use strict";
            function o(t) {
                if (t)
                    return function(t) {
                        for (var e in o.prototype)
                            t[e] = o.prototype[e];
                        return t
                    }(t)
            }
            n.r(e),
            n.d(e, {
                Emitter: () => o
            }),
            o.prototype.on = o.prototype.addEventListener = function(t, e) {
                return this._callbacks = this._callbacks || {},
                (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
                this
            }
            ,
            o.prototype.once = function(t, e) {
                function n() {
                    this.off(t, n),
                    e.apply(this, arguments)
                }
                return n.fn = e,
                this.on(t, n),
                this
            }
            ,
            o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function(t, e) {
                if (this._callbacks = this._callbacks || {},
                0 == arguments.length)
                    return this._callbacks = {},
                    this;
                var n, o = this._callbacks["$" + t];
                if (!o)
                    return this;
                if (1 == arguments.length)
                    return delete this._callbacks["$" + t],
                    this;
                for (var i = 0; i < o.length; i++)
                    if ((n = o[i]) === e || n.fn === e) {
                        o.splice(i, 1);
                        break
                    }
                return 0 === o.length && delete this._callbacks["$" + t],
                this
            }
            ,
            o.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], o = 1; o < arguments.length; o++)
                    e[o - 1] = arguments[o];
                if (n) {
                    o = 0;
                    for (var i = (n = n.slice(0)).length; o < i; ++o)
                        n[o].apply(this, e)
                }
                return this
            }
            ,
            o.prototype.emitReserved = o.prototype.emit,
            o.prototype.listeners = function(t) {
                return this._callbacks = this._callbacks || {},
                this._callbacks["$" + t] || []
            }
            ,
            o.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/contrib/has-cors.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                hasCORS: () => i
            });
            let o = !1;
            try {
                o = "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
            } catch (t) {}
            const i = o
        }
        ,
        "./node_modules/engine.io-client/build/esm/contrib/parseqs.js": (t, e, n) => {
            "use strict";
            function o(t) {
                let e = "";
                for (let n in t)
                    t.hasOwnProperty(n) && (e.length && (e += "&"),
                    e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e
            }
            function i(t) {
                let e = {}
                  , n = t.split("&");
                for (let t = 0, o = n.length; t < o; t++) {
                    let o = n[t].split("=");
                    e[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                }
                return e
            }
            n.r(e),
            n.d(e, {
                decode: () => i,
                encode: () => o
            })
        }
        ,
        "./node_modules/engine.io-client/build/esm/contrib/parseuri.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                parse: () => r
            });
            const o = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              , i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            function r(t) {
                if (t.length > 8e3)
                    throw "URI too long";
                const e = t
                  , n = t.indexOf("[")
                  , r = t.indexOf("]");
                -1 != n && -1 != r && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
                let s = o.exec(t || "")
                  , a = {}
                  , c = 14;
                for (; c--; )
                    a[i[c]] = s[c] || "";
                return -1 != n && -1 != r && (a.source = e,
                a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"),
                a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                a.ipv6uri = !0),
                a.pathNames = function(t, e) {
                    const n = e.replace(/\/{2,9}/g, "/").split("/");
                    return "/" != e.slice(0, 1) && 0 !== e.length || n.splice(0, 1),
                    "/" == e.slice(-1) && n.splice(n.length - 1, 1),
                    n
                }(0, a.path),
                a.queryKey = function(t, e) {
                    const n = {};
                    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(t, e, o) {
                        e && (n[e] = o)
                    }
                    )),
                    n
                }(0, a.query),
                a
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/globals.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                createCookieJar: () => s,
                defaultBinaryType: () => r,
                globalThisShim: () => i,
                nextTick: () => o
            });
            const o = "function" == typeof Promise && "function" == typeof Promise.resolve ? t => Promise.resolve().then(t) : (t, e) => e(t, 0)
              , i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")()
              , r = "arraybuffer";
            function s() {}
        }
        ,
        "./node_modules/engine.io-client/build/esm/index.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Fetch: () => l.Fetch,
                NodeWebSocket: () => u.WS,
                NodeXHR: () => d.XHR,
                Socket: () => o.Socket,
                SocketWithUpgrade: () => o.SocketWithUpgrade,
                SocketWithoutUpgrade: () => o.SocketWithoutUpgrade,
                Transport: () => i.Transport,
                TransportError: () => i.TransportError,
                WebSocket: () => u.WS,
                WebTransport: () => h.WT,
                XHR: () => d.XHR,
                installTimerFunctions: () => s.installTimerFunctions,
                nextTick: () => c.nextTick,
                parse: () => a.parse,
                protocol: () => p,
                transports: () => r.transports
            });
            var o = n("./node_modules/engine.io-client/build/esm/socket.js")
              , i = n("./node_modules/engine.io-client/build/esm/transport.js")
              , r = n("./node_modules/engine.io-client/build/esm/transports/index.js")
              , s = n("./node_modules/engine.io-client/build/esm/util.js")
              , a = n("./node_modules/engine.io-client/build/esm/contrib/parseuri.js")
              , c = n("./node_modules/engine.io-client/build/esm/globals.js")
              , l = n("./node_modules/engine.io-client/build/esm/transports/polling-fetch.js")
              , d = n("./node_modules/engine.io-client/build/esm/transports/polling-xhr.js")
              , u = n("./node_modules/engine.io-client/build/esm/transports/websocket.js")
              , h = n("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
            const p = o.Socket.protocol
        }
        ,
        "./node_modules/engine.io-client/build/esm/socket.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Socket: () => f,
                SocketWithUpgrade: () => p,
                SocketWithoutUpgrade: () => h
            });
            var o = n("./node_modules/engine.io-client/build/esm/transports/index.js")
              , i = n("./node_modules/engine.io-client/build/esm/util.js")
              , r = n("./node_modules/engine.io-client/build/esm/contrib/parseqs.js")
              , s = n("./node_modules/engine.io-client/build/esm/contrib/parseuri.js")
              , a = n("./node_modules/@socket.io/component-emitter/lib/esm/index.js")
              , c = n("./node_modules/engine.io-parser/build/esm/index.js")
              , l = n("./node_modules/engine.io-client/build/esm/globals.js");
            const d = "function" == typeof addEventListener && "function" == typeof removeEventListener
              , u = [];
            d && addEventListener("offline", ( () => {
                u.forEach((t => t()))
            }
            ), !1);
            class h extends a.Emitter {
                constructor(t, e) {
                    if (super(),
                    this.binaryType = l.defaultBinaryType,
                    this.writeBuffer = [],
                    this._prevBufferLen = 0,
                    this._pingInterval = -1,
                    this._pingTimeout = -1,
                    this._maxPayload = -1,
                    this._pingTimeoutTime = 1 / 0,
                    t && "object" == typeof t && (e = t,
                    t = null),
                    t) {
                        const n = (0,
                        s.parse)(t);
                        e.hostname = n.host,
                        e.secure = "https" === n.protocol || "wss" === n.protocol,
                        e.port = n.port,
                        n.query && (e.query = n.query)
                    } else
                        e.host && (e.hostname = (0,
                        s.parse)(e.host).host);
                    (0,
                    i.installTimerFunctions)(this, e),
                    this.secure = e.secure ?? ("undefined" != typeof location && "https:" === location.protocol),
                    e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
                    this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"),
                    this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80"),
                    this.transports = [],
                    this._transportsByName = {},
                    e.transports.forEach((t => {
                        const e = t.prototype.name;
                        this.transports.push(e),
                        this._transportsByName[e] = t
                    }
                    )),
                    this.opts = Object.assign({
                        path: "/engine.io",
                        agent: !1,
                        withCredentials: !1,
                        upgrade: !0,
                        timestampParam: "t",
                        rememberUpgrade: !1,
                        addTrailingSlash: !0,
                        rejectUnauthorized: !0,
                        perMessageDeflate: {
                            threshold: 1024
                        },
                        transportOptions: {},
                        closeOnBeforeunload: !1
                    }, e),
                    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
                    "string" == typeof this.opts.query && (this.opts.query = (0,
                    r.decode)(this.opts.query)),
                    d && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
                        this.transport && (this.transport.removeAllListeners(),
                        this.transport.close())
                    }
                    ,
                    addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
                    "localhost" !== this.hostname && (this._offlineEventListener = () => {
                        this._onClose("transport close", {
                            description: "network connection lost"
                        })
                    }
                    ,
                    u.push(this._offlineEventListener))),
                    this.opts.withCredentials && (this._cookieJar = (0,
                    l.createCookieJar)()),
                    this._open()
                }
                createTransport(t) {
                    const e = Object.assign({}, this.opts.query);
                    e.EIO = c.protocol,
                    e.transport = t,
                    this.id && (e.sid = this.id);
                    const n = Object.assign({}, this.opts, {
                        query: e,
                        socket: this,
                        hostname: this.hostname,
                        secure: this.secure,
                        port: this.port
                    }, this.opts.transportOptions[t]);
                    return new this._transportsByName[t](n)
                }
                _open() {
                    if (0 === this.transports.length)
                        return void this.setTimeoutFn(( () => {
                            this.emitReserved("error", "No transports available")
                        }
                        ), 0);
                    const t = this.opts.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket") ? "websocket" : this.transports[0];
                    this.readyState = "opening";
                    const e = this.createTransport(t);
                    e.open(),
                    this.setTransport(e)
                }
                setTransport(t) {
                    this.transport && this.transport.removeAllListeners(),
                    this.transport = t,
                    t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (t => this._onClose("transport close", t)))
                }
                onOpen() {
                    this.readyState = "open",
                    h.priorWebsocketSuccess = "websocket" === this.transport.name,
                    this.emitReserved("open"),
                    this.flush()
                }
                _onPacket(t) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                        switch (this.emitReserved("packet", t),
                        this.emitReserved("heartbeat"),
                        t.type) {
                        case "open":
                            this.onHandshake(JSON.parse(t.data));
                            break;
                        case "ping":
                            this._sendPacket("pong"),
                            this.emitReserved("ping"),
                            this.emitReserved("pong"),
                            this._resetPingTimeout();
                            break;
                        case "error":
                            const e = new Error("server error");
                            e.code = t.data,
                            this._onError(e);
                            break;
                        case "message":
                            this.emitReserved("data", t.data),
                            this.emitReserved("message", t.data)
                        }
                }
                onHandshake(t) {
                    this.emitReserved("handshake", t),
                    this.id = t.sid,
                    this.transport.query.sid = t.sid,
                    this._pingInterval = t.pingInterval,
                    this._pingTimeout = t.pingTimeout,
                    this._maxPayload = t.maxPayload,
                    this.onOpen(),
                    "closed" !== this.readyState && this._resetPingTimeout()
                }
                _resetPingTimeout() {
                    this.clearTimeoutFn(this._pingTimeoutTimer);
                    const t = this._pingInterval + this._pingTimeout;
                    this._pingTimeoutTime = Date.now() + t,
                    this._pingTimeoutTimer = this.setTimeoutFn(( () => {
                        this._onClose("ping timeout")
                    }
                    ), t),
                    this.opts.autoUnref && this._pingTimeoutTimer.unref()
                }
                _onDrain() {
                    this.writeBuffer.splice(0, this._prevBufferLen),
                    this._prevBufferLen = 0,
                    0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
                }
                flush() {
                    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                        const t = this._getWritablePackets();
                        this.transport.send(t),
                        this._prevBufferLen = t.length,
                        this.emitReserved("flush")
                    }
                }
                _getWritablePackets() {
                    if (!(this._maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1))
                        return this.writeBuffer;
                    let t = 1;
                    for (let e = 0; e < this.writeBuffer.length; e++) {
                        const n = this.writeBuffer[e].data;
                        if (n && (t += (0,
                        i.byteLength)(n)),
                        e > 0 && t > this._maxPayload)
                            return this.writeBuffer.slice(0, e);
                        t += 2
                    }
                    return this.writeBuffer
                }
                _hasPingExpired() {
                    if (!this._pingTimeoutTime)
                        return !0;
                    const t = Date.now() > this._pingTimeoutTime;
                    return t && (this._pingTimeoutTime = 0,
                    (0,
                    l.nextTick)(( () => {
                        this._onClose("ping timeout")
                    }
                    ), this.setTimeoutFn)),
                    t
                }
                write(t, e, n) {
                    return this._sendPacket("message", t, e, n),
                    this
                }
                send(t, e, n) {
                    return this._sendPacket("message", t, e, n),
                    this
                }
                _sendPacket(t, e, n, o) {
                    if ("function" == typeof e && (o = e,
                    e = void 0),
                    "function" == typeof n && (o = n,
                    n = null),
                    "closing" === this.readyState || "closed" === this.readyState)
                        return;
                    (n = n || {}).compress = !1 !== n.compress;
                    const i = {
                        type: t,
                        data: e,
                        options: n
                    };
                    this.emitReserved("packetCreate", i),
                    this.writeBuffer.push(i),
                    o && this.once("flush", o),
                    this.flush()
                }
                close() {
                    const t = () => {
                        this._onClose("forced close"),
                        this.transport.close()
                    }
                      , e = () => {
                        this.off("upgrade", e),
                        this.off("upgradeError", e),
                        t()
                    }
                      , n = () => {
                        this.once("upgrade", e),
                        this.once("upgradeError", e)
                    }
                    ;
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing",
                    this.writeBuffer.length ? this.once("drain", ( () => {
                        this.upgrading ? n() : t()
                    }
                    )) : this.upgrading ? n() : t()),
                    this
                }
                _onError(t) {
                    if (h.priorWebsocketSuccess = !1,
                    this.opts.tryAllTransports && this.transports.length > 1 && "opening" === this.readyState)
                        return this.transports.shift(),
                        this._open();
                    this.emitReserved("error", t),
                    this._onClose("transport error", t)
                }
                _onClose(t, e) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                        if (this.clearTimeoutFn(this._pingTimeoutTimer),
                        this.transport.removeAllListeners("close"),
                        this.transport.close(),
                        this.transport.removeAllListeners(),
                        d && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
                        this._offlineEventListener)) {
                            const t = u.indexOf(this._offlineEventListener);
                            -1 !== t && u.splice(t, 1)
                        }
                        this.readyState = "closed",
                        this.id = null,
                        this.emitReserved("close", t, e),
                        this.writeBuffer = [],
                        this._prevBufferLen = 0
                    }
                }
            }
            h.protocol = c.protocol;
            class p extends h {
                constructor() {
                    super(...arguments),
                    this._upgrades = []
                }
                onOpen() {
                    if (super.onOpen(),
                    "open" === this.readyState && this.opts.upgrade)
                        for (let t = 0; t < this._upgrades.length; t++)
                            this._probe(this._upgrades[t])
                }
                _probe(t) {
                    let e = this.createTransport(t)
                      , n = !1;
                    h.priorWebsocketSuccess = !1;
                    const o = () => {
                        n || (e.send([{
                            type: "ping",
                            data: "probe"
                        }]),
                        e.once("packet", (t => {
                            if (!n)
                                if ("pong" === t.type && "probe" === t.data) {
                                    if (this.upgrading = !0,
                                    this.emitReserved("upgrading", e),
                                    !e)
                                        return;
                                    h.priorWebsocketSuccess = "websocket" === e.name,
                                    this.transport.pause(( () => {
                                        n || "closed" !== this.readyState && (l(),
                                        this.setTransport(e),
                                        e.send([{
                                            type: "upgrade"
                                        }]),
                                        this.emitReserved("upgrade", e),
                                        e = null,
                                        this.upgrading = !1,
                                        this.flush())
                                    }
                                    ))
                                } else {
                                    const t = new Error("probe error");
                                    t.transport = e.name,
                                    this.emitReserved("upgradeError", t)
                                }
                        }
                        )))
                    }
                    ;
                    function i() {
                        n || (n = !0,
                        l(),
                        e.close(),
                        e = null)
                    }
                    const r = t => {
                        const n = new Error("probe error: " + t);
                        n.transport = e.name,
                        i(),
                        this.emitReserved("upgradeError", n)
                    }
                    ;
                    function s() {
                        r("transport closed")
                    }
                    function a() {
                        r("socket closed")
                    }
                    function c(t) {
                        e && t.name !== e.name && i()
                    }
                    const l = () => {
                        e.removeListener("open", o),
                        e.removeListener("error", r),
                        e.removeListener("close", s),
                        this.off("close", a),
                        this.off("upgrading", c)
                    }
                    ;
                    e.once("open", o),
                    e.once("error", r),
                    e.once("close", s),
                    this.once("close", a),
                    this.once("upgrading", c),
                    -1 !== this._upgrades.indexOf("webtransport") && "webtransport" !== t ? this.setTimeoutFn(( () => {
                        n || e.open()
                    }
                    ), 200) : e.open()
                }
                onHandshake(t) {
                    this._upgrades = this._filterUpgrades(t.upgrades),
                    super.onHandshake(t)
                }
                _filterUpgrades(t) {
                    const e = [];
                    for (let n = 0; n < t.length; n++)
                        ~this.transports.indexOf(t[n]) && e.push(t[n]);
                    return e
                }
            }
            class f extends p {
                constructor(t, e={}) {
                    const n = "object" == typeof t ? t : e;
                    (!n.transports || n.transports && "string" == typeof n.transports[0]) && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((t => o.transports[t])).filter((t => !!t))),
                    super(t, n)
                }
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/transport.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Transport: () => c,
                TransportError: () => a
            });
            var o = n("./node_modules/engine.io-parser/build/esm/index.js")
              , i = n("./node_modules/@socket.io/component-emitter/lib/esm/index.js")
              , r = n("./node_modules/engine.io-client/build/esm/util.js")
              , s = n("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
            class a extends Error {
                constructor(t, e, n) {
                    super(t),
                    this.description = e,
                    this.context = n,
                    this.type = "TransportError"
                }
            }
            class c extends i.Emitter {
                constructor(t) {
                    super(),
                    this.writable = !1,
                    (0,
                    r.installTimerFunctions)(this, t),
                    this.opts = t,
                    this.query = t.query,
                    this.socket = t.socket,
                    this.supportsBinary = !t.forceBase64
                }
                onError(t, e, n) {
                    return super.emitReserved("error", new a(t,e,n)),
                    this
                }
                open() {
                    return this.readyState = "opening",
                    this.doOpen(),
                    this
                }
                close() {
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
                    this.onClose()),
                    this
                }
                send(t) {
                    "open" === this.readyState && this.write(t)
                }
                onOpen() {
                    this.readyState = "open",
                    this.writable = !0,
                    super.emitReserved("open")
                }
                onData(t) {
                    const e = (0,
                    o.decodePacket)(t, this.socket.binaryType);
                    this.onPacket(e)
                }
                onPacket(t) {
                    super.emitReserved("packet", t)
                }
                onClose(t) {
                    this.readyState = "closed",
                    super.emitReserved("close", t)
                }
                pause(t) {}
                createUri(t, e={}) {
                    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(e)
                }
                _hostname() {
                    const t = this.opts.hostname;
                    return -1 === t.indexOf(":") ? t : "[" + t + "]"
                }
                _port() {
                    return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : ""
                }
                _query(t) {
                    const e = (0,
                    s.encode)(t);
                    return e.length ? "?" + e : ""
                }
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/transports/index.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                transports: () => s
            });
            var o = n("./node_modules/engine.io-client/build/esm/transports/polling-xhr.js")
              , i = n("./node_modules/engine.io-client/build/esm/transports/websocket.js")
              , r = n("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
            const s = {
                websocket: i.WS,
                webtransport: r.WT,
                polling: o.XHR
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/transports/polling-fetch.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Fetch: () => i
            });
            var o = n("./node_modules/engine.io-client/build/esm/transports/polling.js");
            class i extends o.Polling {
                doPoll() {
                    this._fetch().then((t => {
                        if (!t.ok)
                            return this.onError("fetch read error", t.status, t);
                        t.text().then((t => this.onData(t)))
                    }
                    )).catch((t => {
                        this.onError("fetch read error", t)
                    }
                    ))
                }
                doWrite(t, e) {
                    this._fetch(t).then((t => {
                        if (!t.ok)
                            return this.onError("fetch write error", t.status, t);
                        e()
                    }
                    )).catch((t => {
                        this.onError("fetch write error", t)
                    }
                    ))
                }
                _fetch(t) {
                    var e;
                    const n = void 0 !== t
                      , o = new Headers(this.opts.extraHeaders);
                    return n && o.set("content-type", "text/plain;charset=UTF-8"),
                    null === (e = this.socket._cookieJar) || void 0 === e || e.appendCookies(o),
                    fetch(this.uri(), {
                        method: n ? "POST" : "GET",
                        body: n ? t : null,
                        headers: o,
                        credentials: this.opts.withCredentials ? "include" : "omit"
                    }).then((t => {
                        var e;
                        return null === (e = this.socket._cookieJar) || void 0 === e || e.parseCookies(t.headers.getSetCookie()),
                        t
                    }
                    ))
                }
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/transports/polling-xhr.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                BaseXHR: () => l,
                Request: () => d,
                XHR: () => p
            });
            var o = n("./node_modules/engine.io-client/build/esm/transports/polling.js")
              , i = n("./node_modules/@socket.io/component-emitter/lib/esm/index.js")
              , r = n("./node_modules/engine.io-client/build/esm/util.js")
              , s = n("./node_modules/engine.io-client/build/esm/globals.js")
              , a = n("./node_modules/engine.io-client/build/esm/contrib/has-cors.js");
            function c() {}
            class l extends o.Polling {
                constructor(t) {
                    if (super(t),
                    "undefined" != typeof location) {
                        const e = "https:" === location.protocol;
                        let n = location.port;
                        n || (n = e ? "443" : "80"),
                        this.xd = "undefined" != typeof location && t.hostname !== location.hostname || n !== t.port
                    }
                }
                doWrite(t, e) {
                    const n = this.request({
                        method: "POST",
                        data: t
                    });
                    n.on("success", e),
                    n.on("error", ( (t, e) => {
                        this.onError("xhr post error", t, e)
                    }
                    ))
                }
                doPoll() {
                    const t = this.request();
                    t.on("data", this.onData.bind(this)),
                    t.on("error", ( (t, e) => {
                        this.onError("xhr poll error", t, e)
                    }
                    )),
                    this.pollXhr = t
                }
            }
            class d extends i.Emitter {
                constructor(t, e, n) {
                    super(),
                    this.createRequest = t,
                    (0,
                    r.installTimerFunctions)(this, n),
                    this._opts = n,
                    this._method = n.method || "GET",
                    this._uri = e,
                    this._data = void 0 !== n.data ? n.data : null,
                    this._create()
                }
                _create() {
                    var t;
                    const e = (0,
                    r.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    e.xdomain = !!this._opts.xd;
                    const n = this._xhr = this.createRequest(e);
                    try {
                        n.open(this._method, this._uri, !0);
                        try {
                            if (this._opts.extraHeaders) {
                                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                                for (let t in this._opts.extraHeaders)
                                    this._opts.extraHeaders.hasOwnProperty(t) && n.setRequestHeader(t, this._opts.extraHeaders[t])
                            }
                        } catch (t) {}
                        if ("POST" === this._method)
                            try {
                                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                            } catch (t) {}
                        try {
                            n.setRequestHeader("Accept", "*/*")
                        } catch (t) {}
                        null === (t = this._opts.cookieJar) || void 0 === t || t.addCookies(n),
                        "withCredentials"in n && (n.withCredentials = this._opts.withCredentials),
                        this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout),
                        n.onreadystatechange = () => {
                            var t;
                            3 === n.readyState && (null === (t = this._opts.cookieJar) || void 0 === t || t.parseCookies(n.getResponseHeader("set-cookie"))),
                            4 === n.readyState && (200 === n.status || 1223 === n.status ? this._onLoad() : this.setTimeoutFn(( () => {
                                this._onError("number" == typeof n.status ? n.status : 0)
                            }
                            ), 0))
                        }
                        ,
                        n.send(this._data)
                    } catch (t) {
                        return void this.setTimeoutFn(( () => {
                            this._onError(t)
                        }
                        ), 0)
                    }
                    "undefined" != typeof document && (this._index = d.requestsCount++,
                    d.requests[this._index] = this)
                }
                _onError(t) {
                    this.emitReserved("error", t, this._xhr),
                    this._cleanup(!0)
                }
                _cleanup(t) {
                    if (void 0 !== this._xhr && null !== this._xhr) {
                        if (this._xhr.onreadystatechange = c,
                        t)
                            try {
                                this._xhr.abort()
                            } catch (t) {}
                        "undefined" != typeof document && delete d.requests[this._index],
                        this._xhr = null
                    }
                }
                _onLoad() {
                    const t = this._xhr.responseText;
                    null !== t && (this.emitReserved("data", t),
                    this.emitReserved("success"),
                    this._cleanup())
                }
                abort() {
                    this._cleanup()
                }
            }
            if (d.requestsCount = 0,
            d.requests = {},
            "undefined" != typeof document)
                if ("function" == typeof attachEvent)
                    attachEvent("onunload", u);
                else if ("function" == typeof addEventListener) {
                    const t = "onpagehide"in s.globalThisShim ? "pagehide" : "unload";
                    addEventListener(t, u, !1)
                }
            function u() {
                for (let t in d.requests)
                    d.requests.hasOwnProperty(t) && d.requests[t].abort()
            }
            const h = function() {
                const t = f({
                    xdomain: !1
                });
                return t && null !== t.responseType
            }();
            class p extends l {
                constructor(t) {
                    super(t);
                    const e = t && t.forceBase64;
                    this.supportsBinary = h && !e
                }
                request(t={}) {
                    return Object.assign(t, {
                        xd: this.xd
                    }, this.opts),
                    new d(f,this.uri(),t)
                }
            }
            function f(t) {
                const e = t.xdomain;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!e || a.hasCORS))
                        return new XMLHttpRequest
                } catch (t) {}
                if (!e)
                    try {
                        return new (s.globalThisShim[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (t) {}
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/transports/polling.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Polling: () => s
            });
            var o = n("./node_modules/engine.io-client/build/esm/transport.js")
              , i = n("./node_modules/engine.io-client/build/esm/util.js")
              , r = n("./node_modules/engine.io-parser/build/esm/index.js");
            class s extends o.Transport {
                constructor() {
                    super(...arguments),
                    this._polling = !1
                }
                get name() {
                    return "polling"
                }
                doOpen() {
                    this._poll()
                }
                pause(t) {
                    this.readyState = "pausing";
                    const e = () => {
                        this.readyState = "paused",
                        t()
                    }
                    ;
                    if (this._polling || !this.writable) {
                        let t = 0;
                        this._polling && (t++,
                        this.once("pollComplete", (function() {
                            --t || e()
                        }
                        ))),
                        this.writable || (t++,
                        this.once("drain", (function() {
                            --t || e()
                        }
                        )))
                    } else
                        e()
                }
                _poll() {
                    this._polling = !0,
                    this.doPoll(),
                    this.emitReserved("poll")
                }
                onData(t) {
                    (0,
                    r.decodePayload)(t, this.socket.binaryType).forEach((t => {
                        if ("opening" === this.readyState && "open" === t.type && this.onOpen(),
                        "close" === t.type)
                            return this.onClose({
                                description: "transport closed by the server"
                            }),
                            !1;
                        this.onPacket(t)
                    }
                    )),
                    "closed" !== this.readyState && (this._polling = !1,
                    this.emitReserved("pollComplete"),
                    "open" === this.readyState && this._poll())
                }
                doClose() {
                    const t = () => {
                        this.write([{
                            type: "close"
                        }])
                    }
                    ;
                    "open" === this.readyState ? t() : this.once("open", t)
                }
                write(t) {
                    this.writable = !1,
                    (0,
                    r.encodePayload)(t, (t => {
                        this.doWrite(t, ( () => {
                            this.writable = !0,
                            this.emitReserved("drain")
                        }
                        ))
                    }
                    ))
                }
                uri() {
                    const t = this.opts.secure ? "https" : "http"
                      , e = this.query || {};
                    return !1 !== this.opts.timestampRequests && (e[this.opts.timestampParam] = (0,
                    i.randomString)()),
                    this.supportsBinary || e.sid || (e.b64 = 1),
                    this.createUri(t, e)
                }
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/transports/websocket.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                BaseWS: () => c,
                WS: () => d
            });
            var o = n("./node_modules/engine.io-client/build/esm/transport.js")
              , i = n("./node_modules/engine.io-client/build/esm/util.js")
              , r = n("./node_modules/engine.io-parser/build/esm/index.js")
              , s = n("./node_modules/engine.io-client/build/esm/globals.js");
            const a = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
            class c extends o.Transport {
                get name() {
                    return "websocket"
                }
                doOpen() {
                    const t = this.uri()
                      , e = this.opts.protocols
                      , n = a ? {} : (0,
                    i.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                    try {
                        this.ws = this.createSocket(t, e, n)
                    } catch (t) {
                        return this.emitReserved("error", t)
                    }
                    this.ws.binaryType = this.socket.binaryType,
                    this.addEventListeners()
                }
                addEventListeners() {
                    this.ws.onopen = () => {
                        this.opts.autoUnref && this.ws._socket.unref(),
                        this.onOpen()
                    }
                    ,
                    this.ws.onclose = t => this.onClose({
                        description: "websocket connection closed",
                        context: t
                    }),
                    this.ws.onmessage = t => this.onData(t.data),
                    this.ws.onerror = t => this.onError("websocket error", t)
                }
                write(t) {
                    this.writable = !1;
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e]
                          , o = e === t.length - 1;
                        (0,
                        r.encodePacket)(n, this.supportsBinary, (t => {
                            try {
                                this.doWrite(n, t)
                            } catch (t) {}
                            o && (0,
                            s.nextTick)(( () => {
                                this.writable = !0,
                                this.emitReserved("drain")
                            }
                            ), this.setTimeoutFn)
                        }
                        ))
                    }
                }
                doClose() {
                    void 0 !== this.ws && (this.ws.onerror = () => {}
                    ,
                    this.ws.close(),
                    this.ws = null)
                }
                uri() {
                    const t = this.opts.secure ? "wss" : "ws"
                      , e = this.query || {};
                    return this.opts.timestampRequests && (e[this.opts.timestampParam] = (0,
                    i.randomString)()),
                    this.supportsBinary || (e.b64 = 1),
                    this.createUri(t, e)
                }
            }
            const l = s.globalThisShim.WebSocket || s.globalThisShim.MozWebSocket;
            class d extends c {
                createSocket(t, e, n) {
                    return a ? new l(t,e,n) : e ? new l(t,e) : new l(t)
                }
                doWrite(t, e) {
                    this.ws.send(e)
                }
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/transports/webtransport.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                WT: () => s
            });
            var o = n("./node_modules/engine.io-client/build/esm/transport.js")
              , i = n("./node_modules/engine.io-client/build/esm/globals.js")
              , r = n("./node_modules/engine.io-parser/build/esm/index.js");
            class s extends o.Transport {
                get name() {
                    return "webtransport"
                }
                doOpen() {
                    try {
                        this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
                    } catch (t) {
                        return this.emitReserved("error", t)
                    }
                    this._transport.closed.then(( () => {
                        this.onClose()
                    }
                    )).catch((t => {
                        this.onError("webtransport error", t)
                    }
                    )),
                    this._transport.ready.then(( () => {
                        this._transport.createBidirectionalStream().then((t => {
                            const e = (0,
                            r.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                              , n = t.readable.pipeThrough(e).getReader()
                              , o = (0,
                            r.createPacketEncoderStream)();
                            o.readable.pipeTo(t.writable),
                            this._writer = o.writable.getWriter();
                            const i = () => {
                                n.read().then(( ({done: t, value: e}) => {
                                    t || (this.onPacket(e),
                                    i())
                                }
                                )).catch((t => {}
                                ))
                            }
                            ;
                            i();
                            const s = {
                                type: "open"
                            };
                            this.query.sid && (s.data = '{"sid":"' + this.query.sid + '"}'),
                            this._writer.write(s).then(( () => this.onOpen()))
                        }
                        ))
                    }
                    ))
                }
                write(t) {
                    this.writable = !1;
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e]
                          , o = e === t.length - 1;
                        this._writer.write(n).then(( () => {
                            o && (0,
                            i.nextTick)(( () => {
                                this.writable = !0,
                                this.emitReserved("drain")
                            }
                            ), this.setTimeoutFn)
                        }
                        ))
                    }
                }
                doClose() {
                    var t;
                    null === (t = this._transport) || void 0 === t || t.close()
                }
            }
        }
        ,
        "./node_modules/engine.io-client/build/esm/util.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                byteLength: () => l,
                installTimerFunctions: () => a,
                pick: () => i,
                randomString: () => d
            });
            var o = n("./node_modules/engine.io-client/build/esm/globals.js");
            function i(t, ...e) {
                return e.reduce(( (e, n) => (t.hasOwnProperty(n) && (e[n] = t[n]),
                e)), {})
            }
            const r = o.globalThisShim.setTimeout
              , s = o.globalThisShim.clearTimeout;
            function a(t, e) {
                e.useNativeTimers ? (t.setTimeoutFn = r.bind(o.globalThisShim),
                t.clearTimeoutFn = s.bind(o.globalThisShim)) : (t.setTimeoutFn = o.globalThisShim.setTimeout.bind(o.globalThisShim),
                t.clearTimeoutFn = o.globalThisShim.clearTimeout.bind(o.globalThisShim))
            }
            const c = 1.33;
            function l(t) {
                return "string" == typeof t ? function(t) {
                    let e = 0
                      , n = 0;
                    for (let o = 0, i = t.length; o < i; o++)
                        e = t.charCodeAt(o),
                        e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (o++,
                        n += 4);
                    return n
                }(t) : Math.ceil((t.byteLength || t.size) * c)
            }
            function d() {
                return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
            }
        }
        ,
        "./node_modules/engine.io-parser/build/esm/commons.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                ERROR_PACKET: () => r,
                PACKET_TYPES: () => o,
                PACKET_TYPES_REVERSE: () => i
            });
            const o = Object.create(null);
            o.open = "0",
            o.close = "1",
            o.ping = "2",
            o.pong = "3",
            o.message = "4",
            o.upgrade = "5",
            o.noop = "6";
            const i = Object.create(null);
            Object.keys(o).forEach((t => {
                i[o[t]] = t
            }
            ));
            const r = {
                type: "error",
                data: "parser error"
            }
        }
        ,
        "./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                decode: () => s,
                encode: () => r
            });
            const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , i = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
            for (let t = 0; t < 64; t++)
                i[o.charCodeAt(t)] = t;
            const r = t => {
                let e, n = new Uint8Array(t), i = n.length, r = "";
                for (e = 0; e < i; e += 3)
                    r += o[n[e] >> 2],
                    r += o[(3 & n[e]) << 4 | n[e + 1] >> 4],
                    r += o[(15 & n[e + 1]) << 2 | n[e + 2] >> 6],
                    r += o[63 & n[e + 2]];
                return i % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : i % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="),
                r
            }
              , s = t => {
                let e, n, o, r, s, a = .75 * t.length, c = t.length, l = 0;
                "=" === t[t.length - 1] && (a--,
                "=" === t[t.length - 2] && a--);
                const d = new ArrayBuffer(a)
                  , u = new Uint8Array(d);
                for (e = 0; e < c; e += 4)
                    n = i[t.charCodeAt(e)],
                    o = i[t.charCodeAt(e + 1)],
                    r = i[t.charCodeAt(e + 2)],
                    s = i[t.charCodeAt(e + 3)],
                    u[l++] = n << 2 | o >> 4,
                    u[l++] = (15 & o) << 4 | r >> 2,
                    u[l++] = (3 & r) << 6 | 63 & s;
                return d
            }
        }
        ,
        "./node_modules/engine.io-parser/build/esm/decodePacket.browser.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                decodePacket: () => s
            });
            var o = n("./node_modules/engine.io-parser/build/esm/commons.js")
              , i = n("./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");
            const r = "function" == typeof ArrayBuffer
              , s = (t, e) => {
                if ("string" != typeof t)
                    return {
                        type: "message",
                        data: c(t, e)
                    };
                const n = t.charAt(0);
                return "b" === n ? {
                    type: "message",
                    data: a(t.substring(1), e)
                } : o.PACKET_TYPES_REVERSE[n] ? t.length > 1 ? {
                    type: o.PACKET_TYPES_REVERSE[n],
                    data: t.substring(1)
                } : {
                    type: o.PACKET_TYPES_REVERSE[n]
                } : o.ERROR_PACKET
            }
              , a = (t, e) => {
                if (r) {
                    const n = (0,
                    i.decode)(t);
                    return c(n, e)
                }
                return {
                    base64: !0,
                    data: t
                }
            }
              , c = (t, e) => "blob" === e ? t instanceof Blob ? t : new Blob([t]) : t instanceof ArrayBuffer ? t : t.buffer
        }
        ,
        "./node_modules/engine.io-parser/build/esm/encodePacket.browser.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                encodePacket: () => a,
                encodePacketToBinary: () => u
            });
            var o = n("./node_modules/engine.io-parser/build/esm/commons.js");
            const i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob)
              , r = "function" == typeof ArrayBuffer
              , s = t => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
              , a = ({type: t, data: e}, n, a) => i && e instanceof Blob ? n ? a(e) : c(e, a) : r && (e instanceof ArrayBuffer || s(e)) ? n ? a(e) : c(new Blob([e]), a) : a(o.PACKET_TYPES[t] + (e || ""))
              , c = (t, e) => {
                const n = new FileReader;
                return n.onload = function() {
                    const t = n.result.split(",")[1];
                    e("b" + (t || ""))
                }
                ,
                n.readAsDataURL(t)
            }
            ;
            function l(t) {
                return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
            }
            let d;
            function u(t, e) {
                return i && t.data instanceof Blob ? t.data.arrayBuffer().then(l).then(e) : r && (t.data instanceof ArrayBuffer || s(t.data)) ? e(l(t.data)) : void a(t, !1, (t => {
                    d || (d = new TextEncoder),
                    e(d.encode(t))
                }
                ))
            }
        }
        ,
        "./node_modules/engine.io-parser/build/esm/index.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                createPacketDecoderStream: () => p,
                createPacketEncoderStream: () => l,
                decodePacket: () => i.decodePacket,
                decodePayload: () => c,
                encodePacket: () => o.encodePacket,
                encodePayload: () => a,
                protocol: () => f
            });
            var o = n("./node_modules/engine.io-parser/build/esm/encodePacket.browser.js")
              , i = n("./node_modules/engine.io-parser/build/esm/decodePacket.browser.js")
              , r = n("./node_modules/engine.io-parser/build/esm/commons.js");
            const s = String.fromCharCode(30)
              , a = (t, e) => {
                const n = t.length
                  , i = new Array(n);
                let r = 0;
                t.forEach(( (t, a) => {
                    (0,
                    o.encodePacket)(t, !1, (t => {
                        i[a] = t,
                        ++r === n && e(i.join(s))
                    }
                    ))
                }
                ))
            }
              , c = (t, e) => {
                const n = t.split(s)
                  , o = [];
                for (let t = 0; t < n.length; t++) {
                    const r = (0,
                    i.decodePacket)(n[t], e);
                    if (o.push(r),
                    "error" === r.type)
                        break
                }
                return o
            }
            ;
            function l() {
                return new TransformStream({
                    transform(t, e) {
                        (0,
                        o.encodePacketToBinary)(t, (n => {
                            const o = n.length;
                            let i;
                            if (o < 126)
                                i = new Uint8Array(1),
                                new DataView(i.buffer).setUint8(0, o);
                            else if (o < 65536) {
                                i = new Uint8Array(3);
                                const t = new DataView(i.buffer);
                                t.setUint8(0, 126),
                                t.setUint16(1, o)
                            } else {
                                i = new Uint8Array(9);
                                const t = new DataView(i.buffer);
                                t.setUint8(0, 127),
                                t.setBigUint64(1, BigInt(o))
                            }
                            t.data && "string" != typeof t.data && (i[0] |= 128),
                            e.enqueue(i),
                            e.enqueue(n)
                        }
                        ))
                    }
                })
            }
            let d;
            function u(t) {
                return t.reduce(( (t, e) => t + e.length), 0)
            }
            function h(t, e) {
                if (t[0].length === e)
                    return t.shift();
                const n = new Uint8Array(e);
                let o = 0;
                for (let i = 0; i < e; i++)
                    n[i] = t[0][o++],
                    o === t[0].length && (t.shift(),
                    o = 0);
                return t.length && o < t[0].length && (t[0] = t[0].slice(o)),
                n
            }
            function p(t, e) {
                d || (d = new TextDecoder);
                const n = [];
                let o = 0
                  , s = -1
                  , a = !1;
                return new TransformStream({
                    transform(c, l) {
                        for (n.push(c); ; ) {
                            if (0 === o) {
                                if (u(n) < 1)
                                    break;
                                const t = h(n, 1);
                                a = 128 == (128 & t[0]),
                                s = 127 & t[0],
                                o = s < 126 ? 3 : 126 === s ? 1 : 2
                            } else if (1 === o) {
                                if (u(n) < 2)
                                    break;
                                const t = h(n, 2);
                                s = new DataView(t.buffer,t.byteOffset,t.length).getUint16(0),
                                o = 3
                            } else if (2 === o) {
                                if (u(n) < 8)
                                    break;
                                const t = h(n, 8)
                                  , e = new DataView(t.buffer,t.byteOffset,t.length)
                                  , i = e.getUint32(0);
                                if (i > Math.pow(2, 21) - 1) {
                                    l.enqueue(r.ERROR_PACKET);
                                    break
                                }
                                s = i * Math.pow(2, 32) + e.getUint32(4),
                                o = 3
                            } else {
                                if (u(n) < s)
                                    break;
                                const t = h(n, s);
                                l.enqueue((0,
                                i.decodePacket)(a ? t : d.decode(t), e)),
                                o = 0
                            }
                            if (0 === s || s > t) {
                                l.enqueue(r.ERROR_PACKET);
                                break
                            }
                        }
                    }
                })
            }
            const f = 4
        }
        ,
        "./node_modules/howler/dist/howler.js": (t, e, n) => {
            var o;
            !function() {
                "use strict";
                function i() {
                    this.init()
                }
                i.prototype = {
                    init: function() {
                        var t = this || r;
                        return t._counter = 1e3,
                        t._html5AudioPool = [],
                        t.html5PoolSize = 10,
                        t._codecs = {},
                        t._howls = [],
                        t._muted = !1,
                        t._volume = 1,
                        t._canPlayEvent = "canplaythrough",
                        t._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null,
                        t.masterGain = null,
                        t.noAudio = !1,
                        t.usingWebAudio = !0,
                        t.autoSuspend = !0,
                        t.ctx = null,
                        t.autoUnlock = !0,
                        t._setup(),
                        t
                    },
                    volume: function(t) {
                        var e = this || r;
                        if (t = parseFloat(t),
                        e.ctx || u(),
                        void 0 !== t && t >= 0 && t <= 1) {
                            if (e._volume = t,
                            e._muted)
                                return e;
                            e.usingWebAudio && e.masterGain.gain.setValueAtTime(t, r.ctx.currentTime);
                            for (var n = 0; n < e._howls.length; n++)
                                if (!e._howls[n]._webAudio)
                                    for (var o = e._howls[n]._getSoundIds(), i = 0; i < o.length; i++) {
                                        var s = e._howls[n]._soundById(o[i]);
                                        s && s._node && (s._node.volume = s._volume * t)
                                    }
                            return e
                        }
                        return e._volume
                    },
                    mute: function(t) {
                        var e = this || r;
                        e.ctx || u(),
                        e._muted = t,
                        e.usingWebAudio && e.masterGain.gain.setValueAtTime(t ? 0 : e._volume, r.ctx.currentTime);
                        for (var n = 0; n < e._howls.length; n++)
                            if (!e._howls[n]._webAudio)
                                for (var o = e._howls[n]._getSoundIds(), i = 0; i < o.length; i++) {
                                    var s = e._howls[n]._soundById(o[i]);
                                    s && s._node && (s._node.muted = !!t || s._muted)
                                }
                        return e
                    },
                    stop: function() {
                        for (var t = this || r, e = 0; e < t._howls.length; e++)
                            t._howls[e].stop();
                        return t
                    },
                    unload: function() {
                        for (var t = this || r, e = t._howls.length - 1; e >= 0; e--)
                            t._howls[e].unload();
                        return t.usingWebAudio && t.ctx && void 0 !== t.ctx.close && (t.ctx.close(),
                        t.ctx = null,
                        u()),
                        t
                    },
                    codecs: function(t) {
                        return (this || r)._codecs[t.replace(/^x-/, "")]
                    },
                    _setup: function() {
                        var t = this || r;
                        if (t.state = t.ctx && t.ctx.state || "suspended",
                        t._autoSuspend(),
                        !t.usingWebAudio)
                            if ("undefined" != typeof Audio)
                                try {
                                    void 0 === (new Audio).oncanplaythrough && (t._canPlayEvent = "canplay")
                                } catch (e) {
                                    t.noAudio = !0
                                }
                            else
                                t.noAudio = !0;
                        try {
                            (new Audio).muted && (t.noAudio = !0)
                        } catch (t) {}
                        return t.noAudio || t._setupCodecs(),
                        t
                    },
                    _setupCodecs: function() {
                        var t = this || r
                          , e = null;
                        try {
                            e = "undefined" != typeof Audio ? new Audio : null
                        } catch (e) {
                            return t
                        }
                        if (!e || "function" != typeof e.canPlayType)
                            return t;
                        var n = e.canPlayType("audio/mpeg;").replace(/^no$/, "")
                          , o = t._navigator ? t._navigator.userAgent : ""
                          , i = o.match(/OPR\/(\d+)/g)
                          , s = i && parseInt(i[0].split("/")[1], 10) < 33
                          , a = -1 !== o.indexOf("Safari") && -1 === o.indexOf("Chrome")
                          , c = o.match(/Version\/(.*?) /)
                          , l = a && c && parseInt(c[1], 10) < 15;
                        return t._codecs = {
                            mp3: !(s || !n && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
                            mpeg: !!n,
                            opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!(e.canPlayType('audio/wav; codecs="1"') || e.canPlayType("audio/wav")).replace(/^no$/, ""),
                            aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            m4b: !!(e.canPlayType("audio/x-m4b;") || e.canPlayType("audio/m4b;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !l && !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            webm: !l && !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            dolby: !!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                            flac: !!(e.canPlayType("audio/x-flac;") || e.canPlayType("audio/flac;")).replace(/^no$/, "")
                        },
                        t
                    },
                    _unlockAudio: function() {
                        var t = this || r;
                        if (!t._audioUnlocked && t.ctx)
                            return t._audioUnlocked = !1,
                            t.autoUnlock = !1,
                            t._mobileUnloaded || 44100 === t.ctx.sampleRate || (t._mobileUnloaded = !0,
                            t.unload()),
                            t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050),
                            document.addEventListener("touchstart", e, !0),
                            document.addEventListener("touchend", e, !0),
                            document.addEventListener("click", e, !0),
                            document.addEventListener("keydown", e, !0),
                            t;
                        function e(n) {
                            for (; t._html5AudioPool.length < t.html5PoolSize; )
                                try {
                                    var o = new Audio;
                                    o._unlocked = !0,
                                    t._releaseHtml5Audio(o)
                                } catch (e) {
                                    t.noAudio = !0;
                                    break
                                }
                            for (var i = 0; i < t._howls.length; i++)
                                if (!t._howls[i]._webAudio)
                                    for (var r = t._howls[i]._getSoundIds(), s = 0; s < r.length; s++) {
                                        var a = t._howls[i]._soundById(r[s]);
                                        a && a._node && !a._node._unlocked && (a._node._unlocked = !0,
                                        a._node.load())
                                    }
                            t._autoResume();
                            var c = t.ctx.createBufferSource();
                            c.buffer = t._scratchBuffer,
                            c.connect(t.ctx.destination),
                            void 0 === c.start ? c.noteOn(0) : c.start(0),
                            "function" == typeof t.ctx.resume && t.ctx.resume(),
                            c.onended = function() {
                                c.disconnect(0),
                                t._audioUnlocked = !0,
                                document.removeEventListener("touchstart", e, !0),
                                document.removeEventListener("touchend", e, !0),
                                document.removeEventListener("click", e, !0),
                                document.removeEventListener("keydown", e, !0);
                                for (var n = 0; n < t._howls.length; n++)
                                    t._howls[n]._emit("unlock")
                            }
                        }
                    },
                    _obtainHtml5Audio: function() {
                        var t = this || r;
                        if (t._html5AudioPool.length)
                            return t._html5AudioPool.pop();
                        var e = (new Audio).play();
                        return e && "undefined" != typeof Promise && (e instanceof Promise || "function" == typeof e.then) && e.catch((function() {
                            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                        }
                        )),
                        new Audio
                    },
                    _releaseHtml5Audio: function(t) {
                        var e = this || r;
                        return t._unlocked && e._html5AudioPool.push(t),
                        e
                    },
                    _autoSuspend: function() {
                        var t = this;
                        if (t.autoSuspend && t.ctx && void 0 !== t.ctx.suspend && r.usingWebAudio) {
                            for (var e = 0; e < t._howls.length; e++)
                                if (t._howls[e]._webAudio)
                                    for (var n = 0; n < t._howls[e]._sounds.length; n++)
                                        if (!t._howls[e]._sounds[n]._paused)
                                            return t;
                            return t._suspendTimer && clearTimeout(t._suspendTimer),
                            t._suspendTimer = setTimeout((function() {
                                function e() {
                                    t.state = "suspended",
                                    t._resumeAfterSuspend && (delete t._resumeAfterSuspend,
                                    t._autoResume())
                                }
                                t.autoSuspend && (t._suspendTimer = null,
                                t.state = "suspending",
                                t.ctx.suspend().then(e, e))
                            }
                            ), 3e4),
                            t
                        }
                    },
                    _autoResume: function() {
                        var t = this;
                        if (t.ctx && void 0 !== t.ctx.resume && r.usingWebAudio)
                            return "running" === t.state && "interrupted" !== t.ctx.state && t._suspendTimer ? (clearTimeout(t._suspendTimer),
                            t._suspendTimer = null) : "suspended" === t.state || "running" === t.state && "interrupted" === t.ctx.state ? (t.ctx.resume().then((function() {
                                t.state = "running";
                                for (var e = 0; e < t._howls.length; e++)
                                    t._howls[e]._emit("resume")
                            }
                            )),
                            t._suspendTimer && (clearTimeout(t._suspendTimer),
                            t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0),
                            t
                    }
                };
                var r = new i;
                function s(t) {
                    t.src && 0 !== t.src.length ? this.init(t) : console.error("An array of source files must be passed with any new Howl.")
                }
                function a(t) {
                    this._parent = t,
                    this.init()
                }
                s.prototype = {
                    init: function(t) {
                        var e = this;
                        return r.ctx || u(),
                        e._autoplay = t.autoplay || !1,
                        e._format = "string" != typeof t.format ? t.format : [t.format],
                        e._html5 = t.html5 || !1,
                        e._muted = t.mute || !1,
                        e._loop = t.loop || !1,
                        e._pool = t.pool || 5,
                        e._preload = "boolean" != typeof t.preload && "metadata" !== t.preload || t.preload,
                        e._rate = t.rate || 1,
                        e._sprite = t.sprite || {},
                        e._src = "string" != typeof t.src ? t.src : [t.src],
                        e._volume = void 0 !== t.volume ? t.volume : 1,
                        e._xhr = {
                            method: t.xhr && t.xhr.method ? t.xhr.method : "GET",
                            headers: t.xhr && t.xhr.headers ? t.xhr.headers : null,
                            withCredentials: !(!t.xhr || !t.xhr.withCredentials) && t.xhr.withCredentials
                        },
                        e._duration = 0,
                        e._state = "unloaded",
                        e._sounds = [],
                        e._endTimers = {},
                        e._queue = [],
                        e._playLock = !1,
                        e._onend = t.onend ? [{
                            fn: t.onend
                        }] : [],
                        e._onfade = t.onfade ? [{
                            fn: t.onfade
                        }] : [],
                        e._onload = t.onload ? [{
                            fn: t.onload
                        }] : [],
                        e._onloaderror = t.onloaderror ? [{
                            fn: t.onloaderror
                        }] : [],
                        e._onplayerror = t.onplayerror ? [{
                            fn: t.onplayerror
                        }] : [],
                        e._onpause = t.onpause ? [{
                            fn: t.onpause
                        }] : [],
                        e._onplay = t.onplay ? [{
                            fn: t.onplay
                        }] : [],
                        e._onstop = t.onstop ? [{
                            fn: t.onstop
                        }] : [],
                        e._onmute = t.onmute ? [{
                            fn: t.onmute
                        }] : [],
                        e._onvolume = t.onvolume ? [{
                            fn: t.onvolume
                        }] : [],
                        e._onrate = t.onrate ? [{
                            fn: t.onrate
                        }] : [],
                        e._onseek = t.onseek ? [{
                            fn: t.onseek
                        }] : [],
                        e._onunlock = t.onunlock ? [{
                            fn: t.onunlock
                        }] : [],
                        e._onresume = [],
                        e._webAudio = r.usingWebAudio && !e._html5,
                        void 0 !== r.ctx && r.ctx && r.autoUnlock && r._unlockAudio(),
                        r._howls.push(e),
                        e._autoplay && e._queue.push({
                            event: "play",
                            action: function() {
                                e.play()
                            }
                        }),
                        e._preload && "none" !== e._preload && e.load(),
                        e
                    },
                    load: function() {
                        var t = this
                          , e = null;
                        if (r.noAudio)
                            t._emit("loaderror", null, "No audio support.");
                        else {
                            "string" == typeof t._src && (t._src = [t._src]);
                            for (var n = 0; n < t._src.length; n++) {
                                var o, i;
                                if (t._format && t._format[n])
                                    o = t._format[n];
                                else {
                                    if ("string" != typeof (i = t._src[n])) {
                                        t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                        continue
                                    }
                                    (o = /^data:audio\/([^;,]+);/i.exec(i)) || (o = /\.([^.]+)$/.exec(i.split("?", 1)[0])),
                                    o &&= o[1].toLowerCase()
                                }
                                if (o || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),
                                o && r.codecs(o)) {
                                    e = t._src[n];
                                    break
                                }
                            }
                            if (e)
                                return t._src = e,
                                t._state = "loading",
                                "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (t._html5 = !0,
                                t._webAudio = !1),
                                new a(t),
                                t._webAudio && function(t) {
                                    var e = t._src;
                                    if (c[e])
                                        return t._duration = c[e].duration,
                                        void d(t);
                                    if (/^data:[^;]+;base64,/.test(e)) {
                                        for (var n = atob(e.split(",")[1]), o = new Uint8Array(n.length), i = 0; i < n.length; ++i)
                                            o[i] = n.charCodeAt(i);
                                        l(o.buffer, t)
                                    } else {
                                        var r = new XMLHttpRequest;
                                        r.open(t._xhr.method, e, !0),
                                        r.withCredentials = t._xhr.withCredentials,
                                        r.responseType = "arraybuffer",
                                        t._xhr.headers && Object.keys(t._xhr.headers).forEach((function(e) {
                                            r.setRequestHeader(e, t._xhr.headers[e])
                                        }
                                        )),
                                        r.onload = function() {
                                            var e = (r.status + "")[0];
                                            "0" === e || "2" === e || "3" === e ? l(r.response, t) : t._emit("loaderror", null, "Failed loading audio file with status: " + r.status + ".")
                                        }
                                        ,
                                        r.onerror = function() {
                                            t._webAudio && (t._html5 = !0,
                                            t._webAudio = !1,
                                            t._sounds = [],
                                            delete c[e],
                                            t.load())
                                        }
                                        ,
                                        function(t) {
                                            try {
                                                t.send()
                                            } catch (e) {
                                                t.onerror()
                                            }
                                        }(r)
                                    }
                                }(t),
                                t;
                            t._emit("loaderror", null, "No codec support for selected audio sources.")
                        }
                    },
                    play: function(t, e) {
                        var n = this
                          , o = null;
                        if ("number" == typeof t)
                            o = t,
                            t = null;
                        else {
                            if ("string" == typeof t && "loaded" === n._state && !n._sprite[t])
                                return null;
                            if (void 0 === t && (t = "__default",
                            !n._playLock)) {
                                for (var i = 0, s = 0; s < n._sounds.length; s++)
                                    n._sounds[s]._paused && !n._sounds[s]._ended && (i++,
                                    o = n._sounds[s]._id);
                                1 === i ? t = null : o = null
                            }
                        }
                        var a = o ? n._soundById(o) : n._inactiveSound();
                        if (!a)
                            return null;
                        if (o && !t && (t = a._sprite || "__default"),
                        "loaded" !== n._state) {
                            a._sprite = t,
                            a._ended = !1;
                            var c = a._id;
                            return n._queue.push({
                                event: "play",
                                action: function() {
                                    n.play(c)
                                }
                            }),
                            c
                        }
                        if (o && !a._paused)
                            return e || n._loadQueue("play"),
                            a._id;
                        n._webAudio && r._autoResume();
                        var l = Math.max(0, a._seek > 0 ? a._seek : n._sprite[t][0] / 1e3)
                          , d = Math.max(0, (n._sprite[t][0] + n._sprite[t][1]) / 1e3 - l)
                          , u = 1e3 * d / Math.abs(a._rate)
                          , h = n._sprite[t][0] / 1e3
                          , p = (n._sprite[t][0] + n._sprite[t][1]) / 1e3;
                        function f() {
                            a._paused = !1,
                            a._seek = l,
                            a._start = h,
                            a._stop = p,
                            a._loop = !!a._loop || !!n._sprite[t][2]
                        }
                        if (a._sprite = t,
                        a._ended = !1,
                        !(l >= p)) {
                            var m = a._node;
                            if (n._webAudio) {
                                function g() {
                                    n._playLock = !1,
                                    f(),
                                    n._refreshBuffer(a);
                                    var t = a._muted || n._muted ? 0 : a._volume;
                                    m.gain.setValueAtTime(t, r.ctx.currentTime),
                                    a._playStart = r.ctx.currentTime,
                                    void 0 === m.bufferSource.start ? a._loop ? m.bufferSource.noteGrainOn(0, l, 86400) : m.bufferSource.noteGrainOn(0, l, d) : a._loop ? m.bufferSource.start(0, l, 86400) : m.bufferSource.start(0, l, d),
                                    u !== 1 / 0 && (n._endTimers[a._id] = setTimeout(n._ended.bind(n, a), u)),
                                    e || setTimeout((function() {
                                        n._emit("play", a._id),
                                        n._loadQueue()
                                    }
                                    ), 0)
                                }
                                "running" === r.state && "interrupted" !== r.ctx.state ? g() : (n._playLock = !0,
                                n.once("resume", g),
                                n._clearTimer(a._id))
                            } else {
                                function y() {
                                    m.currentTime = l,
                                    m.muted = a._muted || n._muted || r._muted || m.muted,
                                    m.volume = a._volume * r.volume(),
                                    m.playbackRate = a._rate;
                                    try {
                                        var o = m.play();
                                        if (o && "undefined" != typeof Promise && (o instanceof Promise || "function" == typeof o.then) ? (n._playLock = !0,
                                        f(),
                                        o.then((function() {
                                            n._playLock = !1,
                                            m._unlocked = !0,
                                            e ? n._loadQueue() : n._emit("play", a._id)
                                        }
                                        )).catch((function() {
                                            n._playLock = !1,
                                            n._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),
                                            a._ended = !0,
                                            a._paused = !0
                                        }
                                        ))) : e || (n._playLock = !1,
                                        f(),
                                        n._emit("play", a._id)),
                                        m.playbackRate = a._rate,
                                        m.paused)
                                            return void n._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                        "__default" !== t || a._loop ? n._endTimers[a._id] = setTimeout(n._ended.bind(n, a), u) : (n._endTimers[a._id] = function() {
                                            n._ended(a),
                                            m.removeEventListener("ended", n._endTimers[a._id], !1)
                                        }
                                        ,
                                        m.addEventListener("ended", n._endTimers[a._id], !1))
                                    } catch (t) {
                                        n._emit("playerror", a._id, t)
                                    }
                                }
                                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === m.src && (m.src = n._src,
                                m.load());
                                var b = window && window.ejecta || !m.readyState && r._navigator.isCocoonJS;
                                if (m.readyState >= 3 || b)
                                    y();
                                else {
                                    function v() {
                                        n._state = "loaded",
                                        y(),
                                        m.removeEventListener(r._canPlayEvent, v, !1)
                                    }
                                    n._playLock = !0,
                                    n._state = "loading",
                                    m.addEventListener(r._canPlayEvent, v, !1),
                                    n._clearTimer(a._id)
                                }
                            }
                            return a._id
                        }
                        n._ended(a)
                    },
                    pause: function(t) {
                        var e = this;
                        if ("loaded" !== e._state || e._playLock)
                            return e._queue.push({
                                event: "pause",
                                action: function() {
                                    e.pause(t)
                                }
                            }),
                            e;
                        for (var n = e._getSoundIds(t), o = 0; o < n.length; o++) {
                            e._clearTimer(n[o]);
                            var i = e._soundById(n[o]);
                            if (i && !i._paused && (i._seek = e.seek(n[o]),
                            i._rateSeek = 0,
                            i._paused = !0,
                            e._stopFade(n[o]),
                            i._node))
                                if (e._webAudio) {
                                    if (!i._node.bufferSource)
                                        continue;
                                    void 0 === i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0),
                                    e._cleanBuffer(i._node)
                                } else
                                    isNaN(i._node.duration) && i._node.duration !== 1 / 0 || i._node.pause();
                            arguments[1] || e._emit("pause", i ? i._id : null)
                        }
                        return e
                    },
                    stop: function(t, e) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock)
                            return n._queue.push({
                                event: "stop",
                                action: function() {
                                    n.stop(t)
                                }
                            }),
                            n;
                        for (var o = n._getSoundIds(t), i = 0; i < o.length; i++) {
                            n._clearTimer(o[i]);
                            var r = n._soundById(o[i]);
                            r && (r._seek = r._start || 0,
                            r._rateSeek = 0,
                            r._paused = !0,
                            r._ended = !0,
                            n._stopFade(o[i]),
                            r._node && (n._webAudio ? r._node.bufferSource && (void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0),
                            n._cleanBuffer(r._node)) : isNaN(r._node.duration) && r._node.duration !== 1 / 0 || (r._node.currentTime = r._start || 0,
                            r._node.pause(),
                            r._node.duration === 1 / 0 && n._clearSound(r._node))),
                            e || n._emit("stop", r._id))
                        }
                        return n
                    },
                    mute: function(t, e) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock)
                            return n._queue.push({
                                event: "mute",
                                action: function() {
                                    n.mute(t, e)
                                }
                            }),
                            n;
                        if (void 0 === e) {
                            if ("boolean" != typeof t)
                                return n._muted;
                            n._muted = t
                        }
                        for (var o = n._getSoundIds(e), i = 0; i < o.length; i++) {
                            var s = n._soundById(o[i]);
                            s && (s._muted = t,
                            s._interval && n._stopFade(s._id),
                            n._webAudio && s._node ? s._node.gain.setValueAtTime(t ? 0 : s._volume, r.ctx.currentTime) : s._node && (s._node.muted = !!r._muted || t),
                            n._emit("mute", s._id))
                        }
                        return n
                    },
                    volume: function() {
                        var t, e, n, o = this, i = arguments;
                        if (0 === i.length)
                            return o._volume;
                        if (1 === i.length || 2 === i.length && void 0 === i[1] ? o._getSoundIds().indexOf(i[0]) >= 0 ? e = parseInt(i[0], 10) : t = parseFloat(i[0]) : i.length >= 2 && (t = parseFloat(i[0]),
                        e = parseInt(i[1], 10)),
                        !(void 0 !== t && t >= 0 && t <= 1))
                            return (n = e ? o._soundById(e) : o._sounds[0]) ? n._volume : 0;
                        if ("loaded" !== o._state || o._playLock)
                            return o._queue.push({
                                event: "volume",
                                action: function() {
                                    o.volume.apply(o, i)
                                }
                            }),
                            o;
                        void 0 === e && (o._volume = t),
                        e = o._getSoundIds(e);
                        for (var s = 0; s < e.length; s++)
                            (n = o._soundById(e[s])) && (n._volume = t,
                            i[2] || o._stopFade(e[s]),
                            o._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(t, r.ctx.currentTime) : n._node && !n._muted && (n._node.volume = t * r.volume()),
                            o._emit("volume", n._id));
                        return o
                    },
                    fade: function(t, e, n, o) {
                        var i = this;
                        if ("loaded" !== i._state || i._playLock)
                            return i._queue.push({
                                event: "fade",
                                action: function() {
                                    i.fade(t, e, n, o)
                                }
                            }),
                            i;
                        t = Math.min(Math.max(0, parseFloat(t)), 1),
                        e = Math.min(Math.max(0, parseFloat(e)), 1),
                        n = parseFloat(n),
                        i.volume(t, o);
                        for (var s = i._getSoundIds(o), a = 0; a < s.length; a++) {
                            var c = i._soundById(s[a]);
                            if (c) {
                                if (o || i._stopFade(s[a]),
                                i._webAudio && !c._muted) {
                                    var l = r.ctx.currentTime
                                      , d = l + n / 1e3;
                                    c._volume = t,
                                    c._node.gain.setValueAtTime(t, l),
                                    c._node.gain.linearRampToValueAtTime(e, d)
                                }
                                i._startFadeInterval(c, t, e, n, s[a], void 0 === o)
                            }
                        }
                        return i
                    },
                    _startFadeInterval: function(t, e, n, o, i, r) {
                        var s = this
                          , a = e
                          , c = n - e
                          , l = Math.abs(c / .01)
                          , d = Math.max(4, l > 0 ? o / l : o)
                          , u = Date.now();
                        t._fadeTo = n,
                        t._interval = setInterval((function() {
                            var i = (Date.now() - u) / o;
                            u = Date.now(),
                            a += c * i,
                            a = Math.round(100 * a) / 100,
                            a = c < 0 ? Math.max(n, a) : Math.min(n, a),
                            s._webAudio ? t._volume = a : s.volume(a, t._id, !0),
                            r && (s._volume = a),
                            (n < e && a <= n || n > e && a >= n) && (clearInterval(t._interval),
                            t._interval = null,
                            t._fadeTo = null,
                            s.volume(n, t._id),
                            s._emit("fade", t._id))
                        }
                        ), d)
                    },
                    _stopFade: function(t) {
                        var e = this
                          , n = e._soundById(t);
                        return n && n._interval && (e._webAudio && n._node.gain.cancelScheduledValues(r.ctx.currentTime),
                        clearInterval(n._interval),
                        n._interval = null,
                        e.volume(n._fadeTo, t),
                        n._fadeTo = null,
                        e._emit("fade", t)),
                        e
                    },
                    loop: function() {
                        var t, e, n, o = this, i = arguments;
                        if (0 === i.length)
                            return o._loop;
                        if (1 === i.length) {
                            if ("boolean" != typeof i[0])
                                return !!(n = o._soundById(parseInt(i[0], 10))) && n._loop;
                            t = i[0],
                            o._loop = t
                        } else
                            2 === i.length && (t = i[0],
                            e = parseInt(i[1], 10));
                        for (var r = o._getSoundIds(e), s = 0; s < r.length; s++)
                            (n = o._soundById(r[s])) && (n._loop = t,
                            o._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = t,
                            t && (n._node.bufferSource.loopStart = n._start || 0,
                            n._node.bufferSource.loopEnd = n._stop,
                            o.playing(r[s]) && (o.pause(r[s], !0),
                            o.play(r[s], !0)))));
                        return o
                    },
                    rate: function() {
                        var t, e, n, o = this, i = arguments;
                        if (0 === i.length ? e = o._sounds[0]._id : 1 === i.length ? o._getSoundIds().indexOf(i[0]) >= 0 ? e = parseInt(i[0], 10) : t = parseFloat(i[0]) : 2 === i.length && (t = parseFloat(i[0]),
                        e = parseInt(i[1], 10)),
                        "number" != typeof t)
                            return (n = o._soundById(e)) ? n._rate : o._rate;
                        if ("loaded" !== o._state || o._playLock)
                            return o._queue.push({
                                event: "rate",
                                action: function() {
                                    o.rate.apply(o, i)
                                }
                            }),
                            o;
                        void 0 === e && (o._rate = t),
                        e = o._getSoundIds(e);
                        for (var s = 0; s < e.length; s++)
                            if (n = o._soundById(e[s])) {
                                o.playing(e[s]) && (n._rateSeek = o.seek(e[s]),
                                n._playStart = o._webAudio ? r.ctx.currentTime : n._playStart),
                                n._rate = t,
                                o._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(t, r.ctx.currentTime) : n._node && (n._node.playbackRate = t);
                                var a = o.seek(e[s])
                                  , c = 1e3 * ((o._sprite[n._sprite][0] + o._sprite[n._sprite][1]) / 1e3 - a) / Math.abs(n._rate);
                                !o._endTimers[e[s]] && n._paused || (o._clearTimer(e[s]),
                                o._endTimers[e[s]] = setTimeout(o._ended.bind(o, n), c)),
                                o._emit("rate", n._id)
                            }
                        return o
                    },
                    seek: function() {
                        var t, e, n = this, o = arguments;
                        if (0 === o.length ? n._sounds.length && (e = n._sounds[0]._id) : 1 === o.length ? n._getSoundIds().indexOf(o[0]) >= 0 ? e = parseInt(o[0], 10) : n._sounds.length && (e = n._sounds[0]._id,
                        t = parseFloat(o[0])) : 2 === o.length && (t = parseFloat(o[0]),
                        e = parseInt(o[1], 10)),
                        void 0 === e)
                            return 0;
                        if ("number" == typeof t && ("loaded" !== n._state || n._playLock))
                            return n._queue.push({
                                event: "seek",
                                action: function() {
                                    n.seek.apply(n, o)
                                }
                            }),
                            n;
                        var i = n._soundById(e);
                        if (i) {
                            if (!("number" == typeof t && t >= 0)) {
                                if (n._webAudio) {
                                    var s = n.playing(e) ? r.ctx.currentTime - i._playStart : 0
                                      , a = i._rateSeek ? i._rateSeek - i._seek : 0;
                                    return i._seek + (a + s * Math.abs(i._rate))
                                }
                                return i._node.currentTime
                            }
                            {
                                var c = n.playing(e);
                                function l() {
                                    c && n.play(e, !0),
                                    n._emit("seek", e)
                                }
                                if (c && n.pause(e, !0),
                                i._seek = t,
                                i._ended = !1,
                                n._clearTimer(e),
                                n._webAudio || !i._node || isNaN(i._node.duration) || (i._node.currentTime = t),
                                c && !n._webAudio) {
                                    function d() {
                                        n._playLock ? setTimeout(d, 0) : l()
                                    }
                                    setTimeout(d, 0)
                                } else
                                    l()
                            }
                        }
                        return n
                    },
                    playing: function(t) {
                        var e = this;
                        if ("number" == typeof t) {
                            var n = e._soundById(t);
                            return !!n && !n._paused
                        }
                        for (var o = 0; o < e._sounds.length; o++)
                            if (!e._sounds[o]._paused)
                                return !0;
                        return !1
                    },
                    duration: function(t) {
                        var e = this
                          , n = e._duration
                          , o = e._soundById(t);
                        return o && (n = e._sprite[o._sprite][1] / 1e3),
                        n
                    },
                    state: function() {
                        return this._state
                    },
                    unload: function() {
                        for (var t = this, e = t._sounds, n = 0; n < e.length; n++)
                            e[n]._paused || t.stop(e[n]._id),
                            t._webAudio || (t._clearSound(e[n]._node),
                            e[n]._node.removeEventListener("error", e[n]._errorFn, !1),
                            e[n]._node.removeEventListener(r._canPlayEvent, e[n]._loadFn, !1),
                            e[n]._node.removeEventListener("ended", e[n]._endFn, !1),
                            r._releaseHtml5Audio(e[n]._node)),
                            delete e[n]._node,
                            t._clearTimer(e[n]._id);
                        var o = r._howls.indexOf(t);
                        o >= 0 && r._howls.splice(o, 1);
                        var i = !0;
                        for (n = 0; n < r._howls.length; n++)
                            if (r._howls[n]._src === t._src || t._src.indexOf(r._howls[n]._src) >= 0) {
                                i = !1;
                                break
                            }
                        return c && i && delete c[t._src],
                        r.noAudio = !1,
                        t._state = "unloaded",
                        t._sounds = [],
                        t = null,
                        null
                    },
                    on: function(t, e, n, o) {
                        var i = this["_on" + t];
                        return "function" == typeof e && i.push(o ? {
                            id: n,
                            fn: e,
                            once: o
                        } : {
                            id: n,
                            fn: e
                        }),
                        this
                    },
                    off: function(t, e, n) {
                        var o = this
                          , i = o["_on" + t]
                          , r = 0;
                        if ("number" == typeof e && (n = e,
                        e = null),
                        e || n)
                            for (r = 0; r < i.length; r++) {
                                var s = n === i[r].id;
                                if (e === i[r].fn && s || !e && s) {
                                    i.splice(r, 1);
                                    break
                                }
                            }
                        else if (t)
                            o["_on" + t] = [];
                        else {
                            var a = Object.keys(o);
                            for (r = 0; r < a.length; r++)
                                0 === a[r].indexOf("_on") && Array.isArray(o[a[r]]) && (o[a[r]] = [])
                        }
                        return o
                    },
                    once: function(t, e, n) {
                        return this.on(t, e, n, 1),
                        this
                    },
                    _emit: function(t, e, n) {
                        for (var o = this, i = o["_on" + t], r = i.length - 1; r >= 0; r--)
                            i[r].id && i[r].id !== e && "load" !== t || (setTimeout(function(t) {
                                t.call(this, e, n)
                            }
                            .bind(o, i[r].fn), 0),
                            i[r].once && o.off(t, i[r].fn, i[r].id));
                        return o._loadQueue(t),
                        o
                    },
                    _loadQueue: function(t) {
                        var e = this;
                        if (e._queue.length > 0) {
                            var n = e._queue[0];
                            n.event === t && (e._queue.shift(),
                            e._loadQueue()),
                            t || n.action()
                        }
                        return e
                    },
                    _ended: function(t) {
                        var e = this
                          , n = t._sprite;
                        if (!e._webAudio && t._node && !t._node.paused && !t._node.ended && t._node.currentTime < t._stop)
                            return setTimeout(e._ended.bind(e, t), 100),
                            e;
                        var o = !!t._loop || !!e._sprite[n][2];
                        if (e._emit("end", t._id),
                        !e._webAudio && o && e.stop(t._id, !0).play(t._id),
                        e._webAudio && o) {
                            e._emit("play", t._id),
                            t._seek = t._start || 0,
                            t._rateSeek = 0,
                            t._playStart = r.ctx.currentTime;
                            var i = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                            e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), i)
                        }
                        return e._webAudio && !o && (t._paused = !0,
                        t._ended = !0,
                        t._seek = t._start || 0,
                        t._rateSeek = 0,
                        e._clearTimer(t._id),
                        e._cleanBuffer(t._node),
                        r._autoSuspend()),
                        e._webAudio || o || e.stop(t._id, !0),
                        e
                    },
                    _clearTimer: function(t) {
                        var e = this;
                        if (e._endTimers[t]) {
                            if ("function" != typeof e._endTimers[t])
                                clearTimeout(e._endTimers[t]);
                            else {
                                var n = e._soundById(t);
                                n && n._node && n._node.removeEventListener("ended", e._endTimers[t], !1)
                            }
                            delete e._endTimers[t]
                        }
                        return e
                    },
                    _soundById: function(t) {
                        for (var e = this, n = 0; n < e._sounds.length; n++)
                            if (t === e._sounds[n]._id)
                                return e._sounds[n];
                        return null
                    },
                    _inactiveSound: function() {
                        var t = this;
                        t._drain();
                        for (var e = 0; e < t._sounds.length; e++)
                            if (t._sounds[e]._ended)
                                return t._sounds[e].reset();
                        return new a(t)
                    },
                    _drain: function() {
                        var t = this
                          , e = t._pool
                          , n = 0
                          , o = 0;
                        if (!(t._sounds.length < e)) {
                            for (o = 0; o < t._sounds.length; o++)
                                t._sounds[o]._ended && n++;
                            for (o = t._sounds.length - 1; o >= 0; o--) {
                                if (n <= e)
                                    return;
                                t._sounds[o]._ended && (t._webAudio && t._sounds[o]._node && t._sounds[o]._node.disconnect(0),
                                t._sounds.splice(o, 1),
                                n--)
                            }
                        }
                    },
                    _getSoundIds: function(t) {
                        if (void 0 === t) {
                            for (var e = [], n = 0; n < this._sounds.length; n++)
                                e.push(this._sounds[n]._id);
                            return e
                        }
                        return [t]
                    },
                    _refreshBuffer: function(t) {
                        return t._node.bufferSource = r.ctx.createBufferSource(),
                        t._node.bufferSource.buffer = c[this._src],
                        t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node),
                        t._node.bufferSource.loop = t._loop,
                        t._loop && (t._node.bufferSource.loopStart = t._start || 0,
                        t._node.bufferSource.loopEnd = t._stop || 0),
                        t._node.bufferSource.playbackRate.setValueAtTime(t._rate, r.ctx.currentTime),
                        this
                    },
                    _cleanBuffer: function(t) {
                        var e = r._navigator && r._navigator.vendor.indexOf("Apple") >= 0;
                        if (!t.bufferSource)
                            return this;
                        if (r._scratchBuffer && t.bufferSource && (t.bufferSource.onended = null,
                        t.bufferSource.disconnect(0),
                        e))
                            try {
                                t.bufferSource.buffer = r._scratchBuffer
                            } catch (t) {}
                        return t.bufferSource = null,
                        this
                    },
                    _clearSound: function(t) {
                        /MSIE |Trident\//.test(r._navigator && r._navigator.userAgent) || (t.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                    }
                },
                a.prototype = {
                    init: function() {
                        var t = this
                          , e = t._parent;
                        return t._muted = e._muted,
                        t._loop = e._loop,
                        t._volume = e._volume,
                        t._rate = e._rate,
                        t._seek = 0,
                        t._paused = !0,
                        t._ended = !0,
                        t._sprite = "__default",
                        t._id = ++r._counter,
                        e._sounds.push(t),
                        t.create(),
                        t
                    },
                    create: function() {
                        var t = this
                          , e = t._parent
                          , n = r._muted || t._muted || t._parent._muted ? 0 : t._volume;
                        return e._webAudio ? (t._node = void 0 === r.ctx.createGain ? r.ctx.createGainNode() : r.ctx.createGain(),
                        t._node.gain.setValueAtTime(n, r.ctx.currentTime),
                        t._node.paused = !0,
                        t._node.connect(r.masterGain)) : r.noAudio || (t._node = r._obtainHtml5Audio(),
                        t._errorFn = t._errorListener.bind(t),
                        t._node.addEventListener("error", t._errorFn, !1),
                        t._loadFn = t._loadListener.bind(t),
                        t._node.addEventListener(r._canPlayEvent, t._loadFn, !1),
                        t._endFn = t._endListener.bind(t),
                        t._node.addEventListener("ended", t._endFn, !1),
                        t._node.src = e._src,
                        t._node.preload = !0 === e._preload ? "auto" : e._preload,
                        t._node.volume = n * r.volume(),
                        t._node.load()),
                        t
                    },
                    reset: function() {
                        var t = this
                          , e = t._parent;
                        return t._muted = e._muted,
                        t._loop = e._loop,
                        t._volume = e._volume,
                        t._rate = e._rate,
                        t._seek = 0,
                        t._rateSeek = 0,
                        t._paused = !0,
                        t._ended = !0,
                        t._sprite = "__default",
                        t._id = ++r._counter,
                        t
                    },
                    _errorListener: function() {
                        var t = this;
                        t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0),
                        t._node.removeEventListener("error", t._errorFn, !1)
                    },
                    _loadListener: function() {
                        var t = this
                          , e = t._parent;
                        e._duration = Math.ceil(10 * t._node.duration) / 10,
                        0 === Object.keys(e._sprite).length && (e._sprite = {
                            __default: [0, 1e3 * e._duration]
                        }),
                        "loaded" !== e._state && (e._state = "loaded",
                        e._emit("load"),
                        e._loadQueue()),
                        t._node.removeEventListener(r._canPlayEvent, t._loadFn, !1)
                    },
                    _endListener: function() {
                        var t = this
                          , e = t._parent;
                        e._duration === 1 / 0 && (e._duration = Math.ceil(10 * t._node.duration) / 10,
                        e._sprite.__default[1] === 1 / 0 && (e._sprite.__default[1] = 1e3 * e._duration),
                        e._ended(t)),
                        t._node.removeEventListener("ended", t._endFn, !1)
                    }
                };
                var c = {};
                function l(t, e) {
                    function n() {
                        e._emit("loaderror", null, "Decoding audio data failed.")
                    }
                    function o(t) {
                        t && e._sounds.length > 0 ? (c[e._src] = t,
                        d(e, t)) : n()
                    }
                    "undefined" != typeof Promise && 1 === r.ctx.decodeAudioData.length ? r.ctx.decodeAudioData(t).then(o).catch(n) : r.ctx.decodeAudioData(t, o, n)
                }
                function d(t, e) {
                    e && !t._duration && (t._duration = e.duration),
                    0 === Object.keys(t._sprite).length && (t._sprite = {
                        __default: [0, 1e3 * t._duration]
                    }),
                    "loaded" !== t._state && (t._state = "loaded",
                    t._emit("load"),
                    t._loadQueue())
                }
                function u() {
                    if (r.usingWebAudio) {
                        try {
                            "undefined" != typeof AudioContext ? r.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? r.ctx = new webkitAudioContext : r.usingWebAudio = !1
                        } catch (t) {
                            r.usingWebAudio = !1
                        }
                        r.ctx || (r.usingWebAudio = !1);
                        var t = /iP(hone|od|ad)/.test(r._navigator && r._navigator.platform)
                          , e = r._navigator && r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
                          , n = e ? parseInt(e[1], 10) : null;
                        if (t && n && n < 9) {
                            var o = /safari/.test(r._navigator && r._navigator.userAgent.toLowerCase());
                            r._navigator && !o && (r.usingWebAudio = !1)
                        }
                        r.usingWebAudio && (r.masterGain = void 0 === r.ctx.createGain ? r.ctx.createGainNode() : r.ctx.createGain(),
                        r.masterGain.gain.setValueAtTime(r._muted ? 0 : r._volume, r.ctx.currentTime),
                        r.masterGain.connect(r.ctx.destination)),
                        r._setup()
                    }
                }
                void 0 !== (o = function() {
                    return {
                        Howler: r,
                        Howl: s
                    }
                }
                .apply(e, [])) && (t.exports = o),
                e.Howler = r,
                e.Howl = s,
                void 0 !== n.g ? (n.g.HowlerGlobal = i,
                n.g.Howler = r,
                n.g.Howl = s,
                n.g.Sound = a) : "undefined" != typeof window && (window.HowlerGlobal = i,
                window.Howler = r,
                window.Howl = s,
                window.Sound = a)
            }(),
            function() {
                "use strict";
                var t, e, n;
                function o(t, e) {
                    "spatial" === (e = e || "spatial") ? (t._panner = Howler.ctx.createPanner(),
                    t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle,
                    t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle,
                    t._panner.coneOuterGain = t._pannerAttr.coneOuterGain,
                    t._panner.distanceModel = t._pannerAttr.distanceModel,
                    t._panner.maxDistance = t._pannerAttr.maxDistance,
                    t._panner.refDistance = t._pannerAttr.refDistance,
                    t._panner.rolloffFactor = t._pannerAttr.rolloffFactor,
                    t._panner.panningModel = t._pannerAttr.panningModel,
                    void 0 !== t._panner.positionX ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime),
                    t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime),
                    t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]),
                    void 0 !== t._panner.orientationX ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime),
                    t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime),
                    t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(),
                    t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)),
                    t._panner.connect(t._node),
                    t._paused || t._parent.pause(t._id, !0).play(t._id, !0)
                }
                HowlerGlobal.prototype._pos = [0, 0, 0],
                HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
                HowlerGlobal.prototype.stereo = function(t) {
                    var e = this;
                    if (!e.ctx || !e.ctx.listener)
                        return e;
                    for (var n = e._howls.length - 1; n >= 0; n--)
                        e._howls[n].stereo(t);
                    return e
                }
                ,
                HowlerGlobal.prototype.pos = function(t, e, n) {
                    var o = this;
                    return o.ctx && o.ctx.listener ? (e = "number" != typeof e ? o._pos[1] : e,
                    n = "number" != typeof n ? o._pos[2] : n,
                    "number" != typeof t ? o._pos : (o._pos = [t, e, n],
                    void 0 !== o.ctx.listener.positionX ? (o.ctx.listener.positionX.setTargetAtTime(o._pos[0], Howler.ctx.currentTime, .1),
                    o.ctx.listener.positionY.setTargetAtTime(o._pos[1], Howler.ctx.currentTime, .1),
                    o.ctx.listener.positionZ.setTargetAtTime(o._pos[2], Howler.ctx.currentTime, .1)) : o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]),
                    o)) : o
                }
                ,
                HowlerGlobal.prototype.orientation = function(t, e, n, o, i, r) {
                    var s = this;
                    if (!s.ctx || !s.ctx.listener)
                        return s;
                    var a = s._orientation;
                    return e = "number" != typeof e ? a[1] : e,
                    n = "number" != typeof n ? a[2] : n,
                    o = "number" != typeof o ? a[3] : o,
                    i = "number" != typeof i ? a[4] : i,
                    r = "number" != typeof r ? a[5] : r,
                    "number" != typeof t ? a : (s._orientation = [t, e, n, o, i, r],
                    void 0 !== s.ctx.listener.forwardX ? (s.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1),
                    s.ctx.listener.forwardY.setTargetAtTime(e, Howler.ctx.currentTime, .1),
                    s.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1),
                    s.ctx.listener.upX.setTargetAtTime(o, Howler.ctx.currentTime, .1),
                    s.ctx.listener.upY.setTargetAtTime(i, Howler.ctx.currentTime, .1),
                    s.ctx.listener.upZ.setTargetAtTime(r, Howler.ctx.currentTime, .1)) : s.ctx.listener.setOrientation(t, e, n, o, i, r),
                    s)
                }
                ,
                Howl.prototype.init = (t = Howl.prototype.init,
                function(e) {
                    var n = this;
                    return n._orientation = e.orientation || [1, 0, 0],
                    n._stereo = e.stereo || null,
                    n._pos = e.pos || null,
                    n._pannerAttr = {
                        coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
                        coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
                        coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
                        distanceModel: void 0 !== e.distanceModel ? e.distanceModel : "inverse",
                        maxDistance: void 0 !== e.maxDistance ? e.maxDistance : 1e4,
                        panningModel: void 0 !== e.panningModel ? e.panningModel : "HRTF",
                        refDistance: void 0 !== e.refDistance ? e.refDistance : 1,
                        rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : 1
                    },
                    n._onstereo = e.onstereo ? [{
                        fn: e.onstereo
                    }] : [],
                    n._onpos = e.onpos ? [{
                        fn: e.onpos
                    }] : [],
                    n._onorientation = e.onorientation ? [{
                        fn: e.onorientation
                    }] : [],
                    t.call(this, e)
                }
                ),
                Howl.prototype.stereo = function(t, e) {
                    var n = this;
                    if (!n._webAudio)
                        return n;
                    if ("loaded" !== n._state)
                        return n._queue.push({
                            event: "stereo",
                            action: function() {
                                n.stereo(t, e)
                            }
                        }),
                        n;
                    var i = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                    if (void 0 === e) {
                        if ("number" != typeof t)
                            return n._stereo;
                        n._stereo = t,
                        n._pos = [t, 0, 0]
                    }
                    for (var r = n._getSoundIds(e), s = 0; s < r.length; s++) {
                        var a = n._soundById(r[s]);
                        if (a) {
                            if ("number" != typeof t)
                                return a._stereo;
                            a._stereo = t,
                            a._pos = [t, 0, 0],
                            a._node && (a._pannerAttr.panningModel = "equalpower",
                            a._panner && a._panner.pan || o(a, i),
                            "spatial" === i ? void 0 !== a._panner.positionX ? (a._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime),
                            a._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                            a._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : a._panner.setPosition(t, 0, 0) : a._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)),
                            n._emit("stereo", a._id)
                        }
                    }
                    return n
                }
                ,
                Howl.prototype.pos = function(t, e, n, i) {
                    var r = this;
                    if (!r._webAudio)
                        return r;
                    if ("loaded" !== r._state)
                        return r._queue.push({
                            event: "pos",
                            action: function() {
                                r.pos(t, e, n, i)
                            }
                        }),
                        r;
                    if (e = "number" != typeof e ? 0 : e,
                    n = "number" != typeof n ? -.5 : n,
                    void 0 === i) {
                        if ("number" != typeof t)
                            return r._pos;
                        r._pos = [t, e, n]
                    }
                    for (var s = r._getSoundIds(i), a = 0; a < s.length; a++) {
                        var c = r._soundById(s[a]);
                        if (c) {
                            if ("number" != typeof t)
                                return c._pos;
                            c._pos = [t, e, n],
                            c._node && (c._panner && !c._panner.pan || o(c, "spatial"),
                            void 0 !== c._panner.positionX ? (c._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime),
                            c._panner.positionY.setValueAtTime(e, Howler.ctx.currentTime),
                            c._panner.positionZ.setValueAtTime(n, Howler.ctx.currentTime)) : c._panner.setPosition(t, e, n)),
                            r._emit("pos", c._id)
                        }
                    }
                    return r
                }
                ,
                Howl.prototype.orientation = function(t, e, n, i) {
                    var r = this;
                    if (!r._webAudio)
                        return r;
                    if ("loaded" !== r._state)
                        return r._queue.push({
                            event: "orientation",
                            action: function() {
                                r.orientation(t, e, n, i)
                            }
                        }),
                        r;
                    if (e = "number" != typeof e ? r._orientation[1] : e,
                    n = "number" != typeof n ? r._orientation[2] : n,
                    void 0 === i) {
                        if ("number" != typeof t)
                            return r._orientation;
                        r._orientation = [t, e, n]
                    }
                    for (var s = r._getSoundIds(i), a = 0; a < s.length; a++) {
                        var c = r._soundById(s[a]);
                        if (c) {
                            if ("number" != typeof t)
                                return c._orientation;
                            c._orientation = [t, e, n],
                            c._node && (c._panner || (c._pos || (c._pos = r._pos || [0, 0, -.5]),
                            o(c, "spatial")),
                            void 0 !== c._panner.orientationX ? (c._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime),
                            c._panner.orientationY.setValueAtTime(e, Howler.ctx.currentTime),
                            c._panner.orientationZ.setValueAtTime(n, Howler.ctx.currentTime)) : c._panner.setOrientation(t, e, n)),
                            r._emit("orientation", c._id)
                        }
                    }
                    return r
                }
                ,
                Howl.prototype.pannerAttr = function() {
                    var t, e, n, i = this, r = arguments;
                    if (!i._webAudio)
                        return i;
                    if (0 === r.length)
                        return i._pannerAttr;
                    if (1 === r.length) {
                        if ("object" != typeof r[0])
                            return (n = i._soundById(parseInt(r[0], 10))) ? n._pannerAttr : i._pannerAttr;
                        t = r[0],
                        void 0 === e && (t.pannerAttr || (t.pannerAttr = {
                            coneInnerAngle: t.coneInnerAngle,
                            coneOuterAngle: t.coneOuterAngle,
                            coneOuterGain: t.coneOuterGain,
                            distanceModel: t.distanceModel,
                            maxDistance: t.maxDistance,
                            refDistance: t.refDistance,
                            rolloffFactor: t.rolloffFactor,
                            panningModel: t.panningModel
                        }),
                        i._pannerAttr = {
                            coneInnerAngle: void 0 !== t.pannerAttr.coneInnerAngle ? t.pannerAttr.coneInnerAngle : i._coneInnerAngle,
                            coneOuterAngle: void 0 !== t.pannerAttr.coneOuterAngle ? t.pannerAttr.coneOuterAngle : i._coneOuterAngle,
                            coneOuterGain: void 0 !== t.pannerAttr.coneOuterGain ? t.pannerAttr.coneOuterGain : i._coneOuterGain,
                            distanceModel: void 0 !== t.pannerAttr.distanceModel ? t.pannerAttr.distanceModel : i._distanceModel,
                            maxDistance: void 0 !== t.pannerAttr.maxDistance ? t.pannerAttr.maxDistance : i._maxDistance,
                            refDistance: void 0 !== t.pannerAttr.refDistance ? t.pannerAttr.refDistance : i._refDistance,
                            rolloffFactor: void 0 !== t.pannerAttr.rolloffFactor ? t.pannerAttr.rolloffFactor : i._rolloffFactor,
                            panningModel: void 0 !== t.pannerAttr.panningModel ? t.pannerAttr.panningModel : i._panningModel
                        })
                    } else
                        2 === r.length && (t = r[0],
                        e = parseInt(r[1], 10));
                    for (var s = i._getSoundIds(e), a = 0; a < s.length; a++)
                        if (n = i._soundById(s[a])) {
                            var c = n._pannerAttr;
                            c = {
                                coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : c.coneInnerAngle,
                                coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : c.coneOuterAngle,
                                coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : c.coneOuterGain,
                                distanceModel: void 0 !== t.distanceModel ? t.distanceModel : c.distanceModel,
                                maxDistance: void 0 !== t.maxDistance ? t.maxDistance : c.maxDistance,
                                refDistance: void 0 !== t.refDistance ? t.refDistance : c.refDistance,
                                rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : c.rolloffFactor,
                                panningModel: void 0 !== t.panningModel ? t.panningModel : c.panningModel
                            };
                            var l = n._panner;
                            l || (n._pos || (n._pos = i._pos || [0, 0, -.5]),
                            o(n, "spatial"),
                            l = n._panner),
                            l.coneInnerAngle = c.coneInnerAngle,
                            l.coneOuterAngle = c.coneOuterAngle,
                            l.coneOuterGain = c.coneOuterGain,
                            l.distanceModel = c.distanceModel,
                            l.maxDistance = c.maxDistance,
                            l.refDistance = c.refDistance,
                            l.rolloffFactor = c.rolloffFactor,
                            l.panningModel = c.panningModel
                        }
                    return i
                }
                ,
                Sound.prototype.init = (e = Sound.prototype.init,
                function() {
                    var t = this
                      , n = t._parent;
                    t._orientation = n._orientation,
                    t._stereo = n._stereo,
                    t._pos = n._pos,
                    t._pannerAttr = n._pannerAttr,
                    e.call(this),
                    t._stereo ? n.stereo(t._stereo) : t._pos && n.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
                }
                ),
                Sound.prototype.reset = (n = Sound.prototype.reset,
                function() {
                    var t = this
                      , e = t._parent;
                    return t._orientation = e._orientation,
                    t._stereo = e._stereo,
                    t._pos = e._pos,
                    t._pannerAttr = e._pannerAttr,
                    t._stereo ? e.stereo(t._stereo) : t._pos ? e.pos(t._pos[0], t._pos[1], t._pos[2], t._id) : t._panner && (t._panner.disconnect(0),
                    t._panner = void 0,
                    e._refreshBuffer(t)),
                    n.call(this)
                }
                )
            }()
        }
        ,
        "./node_modules/socket.io-client/build/esm/contrib/backo2.js": (t, e, n) => {
            "use strict";
            function o(t) {
                t = t || {},
                this.ms = t.min || 100,
                this.max = t.max || 1e4,
                this.factor = t.factor || 2,
                this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
                this.attempts = 0
            }
            n.r(e),
            n.d(e, {
                Backoff: () => o
            }),
            o.prototype.duration = function() {
                var t = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var e = Math.random()
                      , n = Math.floor(e * this.jitter * t);
                    t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
                }
                return 0 | Math.min(t, this.max)
            }
            ,
            o.prototype.reset = function() {
                this.attempts = 0
            }
            ,
            o.prototype.setMin = function(t) {
                this.ms = t
            }
            ,
            o.prototype.setMax = function(t) {
                this.max = t
            }
            ,
            o.prototype.setJitter = function(t) {
                this.jitter = t
            }
        }
        ,
        "./node_modules/socket.io-client/build/esm/index.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Fetch: () => a.Fetch,
                Manager: () => i.Manager,
                NodeWebSocket: () => a.NodeWebSocket,
                NodeXHR: () => a.NodeXHR,
                Socket: () => r.Socket,
                WebSocket: () => a.WebSocket,
                WebTransport: () => a.WebTransport,
                XHR: () => a.XHR,
                connect: () => l,
                default: () => l,
                io: () => l,
                protocol: () => s.protocol
            });
            var o = n("./node_modules/socket.io-client/build/esm/url.js")
              , i = n("./node_modules/socket.io-client/build/esm/manager.js")
              , r = n("./node_modules/socket.io-client/build/esm/socket.js")
              , s = n("./node_modules/socket.io-parser/build/esm/index.js")
              , a = n("./node_modules/engine.io-client/build/esm/index.js");
            const c = {};
            function l(t, e) {
                "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
                const n = (0,
                o.url)(t, e.path || "/socket.io")
                  , r = n.source
                  , s = n.id
                  , a = n.path
                  , l = c[s] && a in c[s].nsps;
                let d;
                return e.forceNew || e["force new connection"] || !1 === e.multiplex || l ? d = new i.Manager(r,e) : (c[s] || (c[s] = new i.Manager(r,e)),
                d = c[s]),
                n.query && !e.query && (e.query = n.queryKey),
                d.socket(n.path, e)
            }
            Object.assign(l, {
                Manager: i.Manager,
                Socket: r.Socket,
                io: l,
                connect: l
            })
        }
        ,
        "./node_modules/socket.io-client/build/esm/manager.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Manager: () => l
            });
            var o = n("./node_modules/engine.io-client/build/esm/index.js")
              , i = n("./node_modules/socket.io-client/build/esm/socket.js")
              , r = n("./node_modules/socket.io-parser/build/esm/index.js")
              , s = n("./node_modules/socket.io-client/build/esm/on.js")
              , a = n("./node_modules/socket.io-client/build/esm/contrib/backo2.js")
              , c = n("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
            class l extends c.Emitter {
                constructor(t, e) {
                    super(),
                    this.nsps = {},
                    this.subs = [],
                    t && "object" == typeof t && (e = t,
                    t = void 0),
                    (e = e || {}).path = e.path || "/socket.io",
                    this.opts = e,
                    (0,
                    o.installTimerFunctions)(this, e),
                    this.reconnection(!1 !== e.reconnection),
                    this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
                    this.reconnectionDelay(e.reconnectionDelay || 1e3),
                    this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
                    this.randomizationFactor(e.randomizationFactor ?? .5),
                    this.backoff = new a.Backoff({
                        min: this.reconnectionDelay(),
                        max: this.reconnectionDelayMax(),
                        jitter: this.randomizationFactor()
                    }),
                    this.timeout(null == e.timeout ? 2e4 : e.timeout),
                    this._readyState = "closed",
                    this.uri = t;
                    const n = e.parser || r;
                    this.encoder = new n.Encoder,
                    this.decoder = new n.Decoder,
                    this._autoConnect = !1 !== e.autoConnect,
                    this._autoConnect && this.open()
                }
                reconnection(t) {
                    return arguments.length ? (this._reconnection = !!t,
                    t || (this.skipReconnect = !0),
                    this) : this._reconnection
                }
                reconnectionAttempts(t) {
                    return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t,
                    this)
                }
                reconnectionDelay(t) {
                    var e;
                    return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t,
                    null === (e = this.backoff) || void 0 === e || e.setMin(t),
                    this)
                }
                randomizationFactor(t) {
                    var e;
                    return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t,
                    null === (e = this.backoff) || void 0 === e || e.setJitter(t),
                    this)
                }
                reconnectionDelayMax(t) {
                    var e;
                    return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t,
                    null === (e = this.backoff) || void 0 === e || e.setMax(t),
                    this)
                }
                timeout(t) {
                    return arguments.length ? (this._timeout = t,
                    this) : this._timeout
                }
                maybeReconnectOnOpen() {
                    !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                }
                open(t) {
                    if (~this._readyState.indexOf("open"))
                        return this;
                    this.engine = new o.Socket(this.uri,this.opts);
                    const e = this.engine
                      , n = this;
                    this._readyState = "opening",
                    this.skipReconnect = !1;
                    const i = (0,
                    s.on)(e, "open", (function() {
                        n.onopen(),
                        t && t()
                    }
                    ))
                      , r = e => {
                        this.cleanup(),
                        this._readyState = "closed",
                        this.emitReserved("error", e),
                        t ? t(e) : this.maybeReconnectOnOpen()
                    }
                      , a = (0,
                    s.on)(e, "error", r);
                    if (!1 !== this._timeout) {
                        const t = this._timeout
                          , n = this.setTimeoutFn(( () => {
                            i(),
                            r(new Error("timeout")),
                            e.close()
                        }
                        ), t);
                        this.opts.autoUnref && n.unref(),
                        this.subs.push(( () => {
                            this.clearTimeoutFn(n)
                        }
                        ))
                    }
                    return this.subs.push(i),
                    this.subs.push(a),
                    this
                }
                connect(t) {
                    return this.open(t)
                }
                onopen() {
                    this.cleanup(),
                    this._readyState = "open",
                    this.emitReserved("open");
                    const t = this.engine;
                    this.subs.push((0,
                    s.on)(t, "ping", this.onping.bind(this)), (0,
                    s.on)(t, "data", this.ondata.bind(this)), (0,
                    s.on)(t, "error", this.onerror.bind(this)), (0,
                    s.on)(t, "close", this.onclose.bind(this)), (0,
                    s.on)(this.decoder, "decoded", this.ondecoded.bind(this)))
                }
                onping() {
                    this.emitReserved("ping")
                }
                ondata(t) {
                    try {
                        this.decoder.add(t)
                    } catch (t) {
                        this.onclose("parse error", t)
                    }
                }
                ondecoded(t) {
                    (0,
                    o.nextTick)(( () => {
                        this.emitReserved("packet", t)
                    }
                    ), this.setTimeoutFn)
                }
                onerror(t) {
                    this.emitReserved("error", t)
                }
                socket(t, e) {
                    let n = this.nsps[t];
                    return n ? this._autoConnect && !n.active && n.connect() : (n = new i.Socket(this,t,e),
                    this.nsps[t] = n),
                    n
                }
                _destroy(t) {
                    const e = Object.keys(this.nsps);
                    for (const t of e)
                        if (this.nsps[t].active)
                            return;
                    this._close()
                }
                _packet(t) {
                    const e = this.encoder.encode(t);
                    for (let n = 0; n < e.length; n++)
                        this.engine.write(e[n], t.options)
                }
                cleanup() {
                    this.subs.forEach((t => t())),
                    this.subs.length = 0,
                    this.decoder.destroy()
                }
                _close() {
                    this.skipReconnect = !0,
                    this._reconnecting = !1,
                    this.onclose("forced close")
                }
                disconnect() {
                    return this._close()
                }
                onclose(t, e) {
                    var n;
                    this.cleanup(),
                    null === (n = this.engine) || void 0 === n || n.close(),
                    this.backoff.reset(),
                    this._readyState = "closed",
                    this.emitReserved("close", t, e),
                    this._reconnection && !this.skipReconnect && this.reconnect()
                }
                reconnect() {
                    if (this._reconnecting || this.skipReconnect)
                        return this;
                    const t = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts)
                        this.backoff.reset(),
                        this.emitReserved("reconnect_failed"),
                        this._reconnecting = !1;
                    else {
                        const e = this.backoff.duration();
                        this._reconnecting = !0;
                        const n = this.setTimeoutFn(( () => {
                            t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                            t.skipReconnect || t.open((e => {
                                e ? (t._reconnecting = !1,
                                t.reconnect(),
                                this.emitReserved("reconnect_error", e)) : t.onreconnect()
                            }
                            )))
                        }
                        ), e);
                        this.opts.autoUnref && n.unref(),
                        this.subs.push(( () => {
                            this.clearTimeoutFn(n)
                        }
                        ))
                    }
                }
                onreconnect() {
                    const t = this.backoff.attempts;
                    this._reconnecting = !1,
                    this.backoff.reset(),
                    this.emitReserved("reconnect", t)
                }
            }
        }
        ,
        "./node_modules/socket.io-client/build/esm/on.js": (t, e, n) => {
            "use strict";
            function o(t, e, n) {
                return t.on(e, n),
                function() {
                    t.off(e, n)
                }
            }
            n.r(e),
            n.d(e, {
                on: () => o
            })
        }
        ,
        "./node_modules/socket.io-client/build/esm/socket.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Socket: () => a
            });
            var o = n("./node_modules/socket.io-parser/build/esm/index.js")
              , i = n("./node_modules/socket.io-client/build/esm/on.js")
              , r = n("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
            const s = Object.freeze({
                connect: 1,
                connect_error: 1,
                disconnect: 1,
                disconnecting: 1,
                newListener: 1,
                removeListener: 1
            });
            class a extends r.Emitter {
                constructor(t, e, n) {
                    super(),
                    this.connected = !1,
                    this.recovered = !1,
                    this.receiveBuffer = [],
                    this.sendBuffer = [],
                    this._queue = [],
                    this._queueSeq = 0,
                    this.ids = 0,
                    this.acks = {},
                    this.flags = {},
                    this.io = t,
                    this.nsp = e,
                    n && n.auth && (this.auth = n.auth),
                    this._opts = Object.assign({}, n),
                    this.io._autoConnect && this.open()
                }
                get disconnected() {
                    return !this.connected
                }
                subEvents() {
                    if (this.subs)
                        return;
                    const t = this.io;
                    this.subs = [(0,
                    i.on)(t, "open", this.onopen.bind(this)), (0,
                    i.on)(t, "packet", this.onpacket.bind(this)), (0,
                    i.on)(t, "error", this.onerror.bind(this)), (0,
                    i.on)(t, "close", this.onclose.bind(this))]
                }
                get active() {
                    return !!this.subs
                }
                connect() {
                    return this.connected || (this.subEvents(),
                    this.io._reconnecting || this.io.open(),
                    "open" === this.io._readyState && this.onopen()),
                    this
                }
                open() {
                    return this.connect()
                }
                send(...t) {
                    return t.unshift("message"),
                    this.emit.apply(this, t),
                    this
                }
                emit(t, ...e) {
                    var n;
                    if (s.hasOwnProperty(t))
                        throw new Error('"' + t.toString() + '" is a reserved event name');
                    if (e.unshift(t),
                    this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
                        return this._addToQueue(e),
                        this;
                    const i = {
                        type: o.PacketType.EVENT,
                        data: e,
                        options: {}
                    };
                    if (i.options.compress = !1 !== this.flags.compress,
                    "function" == typeof e[e.length - 1]) {
                        const t = this.ids++
                          , n = e.pop();
                        this._registerAckCallback(t, n),
                        i.id = t
                    }
                    const r = this.io.engine?.transport?.writable
                      , a = this.connected && !(null === (n = this.io.engine) || void 0 === n ? void 0 : n._hasPingExpired());
                    return this.flags.volatile && !r || (a ? (this.notifyOutgoingListeners(i),
                    this.packet(i)) : this.sendBuffer.push(i)),
                    this.flags = {},
                    this
                }
                _registerAckCallback(t, e) {
                    const n = this.flags.timeout ?? this._opts.ackTimeout;
                    if (void 0 === n)
                        return void (this.acks[t] = e);
                    const o = this.io.setTimeoutFn(( () => {
                        delete this.acks[t];
                        for (let e = 0; e < this.sendBuffer.length; e++)
                            this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1);
                        e.call(this, new Error("operation has timed out"))
                    }
                    ), n)
                      , i = (...t) => {
                        this.io.clearTimeoutFn(o),
                        e.apply(this, t)
                    }
                    ;
                    i.withError = !0,
                    this.acks[t] = i
                }
                emitWithAck(t, ...e) {
                    return new Promise(( (n, o) => {
                        const i = (t, e) => t ? o(t) : n(e);
                        i.withError = !0,
                        e.push(i),
                        this.emit(t, ...e)
                    }
                    ))
                }
                _addToQueue(t) {
                    let e;
                    "function" == typeof t[t.length - 1] && (e = t.pop());
                    const n = {
                        id: this._queueSeq++,
                        tryCount: 0,
                        pending: !1,
                        args: t,
                        flags: Object.assign({
                            fromQueue: !0
                        }, this.flags)
                    };
                    t.push(( (t, ...o) => {
                        if (n === this._queue[0])
                            return null !== t ? n.tryCount > this._opts.retries && (this._queue.shift(),
                            e && e(t)) : (this._queue.shift(),
                            e && e(null, ...o)),
                            n.pending = !1,
                            this._drainQueue()
                    }
                    )),
                    this._queue.push(n),
                    this._drainQueue()
                }
                _drainQueue(t=!1) {
                    if (!this.connected || 0 === this._queue.length)
                        return;
                    const e = this._queue[0];
                    e.pending && !t || (e.pending = !0,
                    e.tryCount++,
                    this.flags = e.flags,
                    this.emit.apply(this, e.args))
                }
                packet(t) {
                    t.nsp = this.nsp,
                    this.io._packet(t)
                }
                onopen() {
                    "function" == typeof this.auth ? this.auth((t => {
                        this._sendConnectPacket(t)
                    }
                    )) : this._sendConnectPacket(this.auth)
                }
                _sendConnectPacket(t) {
                    this.packet({
                        type: o.PacketType.CONNECT,
                        data: this._pid ? Object.assign({
                            pid: this._pid,
                            offset: this._lastOffset
                        }, t) : t
                    })
                }
                onerror(t) {
                    this.connected || this.emitReserved("connect_error", t)
                }
                onclose(t, e) {
                    this.connected = !1,
                    delete this.id,
                    this.emitReserved("disconnect", t, e),
                    this._clearAcks()
                }
                _clearAcks() {
                    Object.keys(this.acks).forEach((t => {
                        if (!this.sendBuffer.some((e => String(e.id) === t))) {
                            const e = this.acks[t];
                            delete this.acks[t],
                            e.withError && e.call(this, new Error("socket has been disconnected"))
                        }
                    }
                    ))
                }
                onpacket(t) {
                    if (t.nsp === this.nsp)
                        switch (t.type) {
                        case o.PacketType.CONNECT:
                            t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                            break;
                        case o.PacketType.EVENT:
                        case o.PacketType.BINARY_EVENT:
                            this.onevent(t);
                            break;
                        case o.PacketType.ACK:
                        case o.PacketType.BINARY_ACK:
                            this.onack(t);
                            break;
                        case o.PacketType.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case o.PacketType.CONNECT_ERROR:
                            this.destroy();
                            const e = new Error(t.data.message);
                            e.data = t.data.data,
                            this.emitReserved("connect_error", e)
                        }
                }
                onevent(t) {
                    const e = t.data || [];
                    null != t.id && e.push(this.ack(t.id)),
                    this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
                }
                emitEvent(t) {
                    if (this._anyListeners && this._anyListeners.length) {
                        const e = this._anyListeners.slice();
                        for (const n of e)
                            n.apply(this, t)
                    }
                    super.emit.apply(this, t),
                    this._pid && t.length && "string" == typeof t[t.length - 1] && (this._lastOffset = t[t.length - 1])
                }
                ack(t) {
                    const e = this;
                    let n = !1;
                    return function(...i) {
                        n || (n = !0,
                        e.packet({
                            type: o.PacketType.ACK,
                            id: t,
                            data: i
                        }))
                    }
                }
                onack(t) {
                    const e = this.acks[t.id];
                    "function" == typeof e && (delete this.acks[t.id],
                    e.withError && t.data.unshift(null),
                    e.apply(this, t.data))
                }
                onconnect(t, e) {
                    this.id = t,
                    this.recovered = e && this._pid === e,
                    this._pid = e,
                    this.connected = !0,
                    this.emitBuffered(),
                    this.emitReserved("connect"),
                    this._drainQueue(!0)
                }
                emitBuffered() {
                    this.receiveBuffer.forEach((t => this.emitEvent(t))),
                    this.receiveBuffer = [],
                    this.sendBuffer.forEach((t => {
                        this.notifyOutgoingListeners(t),
                        this.packet(t)
                    }
                    )),
                    this.sendBuffer = []
                }
                ondisconnect() {
                    this.destroy(),
                    this.onclose("io server disconnect")
                }
                destroy() {
                    this.subs && (this.subs.forEach((t => t())),
                    this.subs = void 0),
                    this.io._destroy(this)
                }
                disconnect() {
                    return this.connected && this.packet({
                        type: o.PacketType.DISCONNECT
                    }),
                    this.destroy(),
                    this.connected && this.onclose("io client disconnect"),
                    this
                }
                close() {
                    return this.disconnect()
                }
                compress(t) {
                    return this.flags.compress = t,
                    this
                }
                get volatile() {
                    return this.flags.volatile = !0,
                    this
                }
                timeout(t) {
                    return this.flags.timeout = t,
                    this
                }
                onAny(t) {
                    return this._anyListeners = this._anyListeners || [],
                    this._anyListeners.push(t),
                    this
                }
                prependAny(t) {
                    return this._anyListeners = this._anyListeners || [],
                    this._anyListeners.unshift(t),
                    this
                }
                offAny(t) {
                    if (!this._anyListeners)
                        return this;
                    if (t) {
                        const e = this._anyListeners;
                        for (let n = 0; n < e.length; n++)
                            if (t === e[n])
                                return e.splice(n, 1),
                                this
                    } else
                        this._anyListeners = [];
                    return this
                }
                listenersAny() {
                    return this._anyListeners || []
                }
                onAnyOutgoing(t) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
                    this._anyOutgoingListeners.push(t),
                    this
                }
                prependAnyOutgoing(t) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
                    this._anyOutgoingListeners.unshift(t),
                    this
                }
                offAnyOutgoing(t) {
                    if (!this._anyOutgoingListeners)
                        return this;
                    if (t) {
                        const e = this._anyOutgoingListeners;
                        for (let n = 0; n < e.length; n++)
                            if (t === e[n])
                                return e.splice(n, 1),
                                this
                    } else
                        this._anyOutgoingListeners = [];
                    return this
                }
                listenersAnyOutgoing() {
                    return this._anyOutgoingListeners || []
                }
                notifyOutgoingListeners(t) {
                    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                        const e = this._anyOutgoingListeners.slice();
                        for (const n of e)
                            n.apply(this, t.data)
                    }
                }
            }
        }
        ,
        "./node_modules/socket.io-client/build/esm/url.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                url: () => i
            });
            var o = n("./node_modules/engine.io-client/build/esm/index.js");
            function i(t, e="", n) {
                let i = t;
                n = n || "undefined" != typeof location && location,
                null == t && (t = n.protocol + "//" + n.host),
                "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t),
                /^(https?|wss?):\/\//.test(t) || (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t),
                i = (0,
                o.parse)(t)),
                i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
                i.path = i.path || "/";
                const r = -1 !== i.host.indexOf(":") ? "[" + i.host + "]" : i.host;
                return i.id = i.protocol + "://" + r + ":" + i.port + e,
                i.href = i.protocol + "://" + r + (n && n.port === i.port ? "" : ":" + i.port),
                i
            }
        }
        ,
        "./node_modules/socket.io-parser/build/esm/binary.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                deconstructPacket: () => i,
                reconstructPacket: () => s
            });
            var o = n("./node_modules/socket.io-parser/build/esm/is-binary.js");
            function i(t) {
                const e = []
                  , n = t.data
                  , o = t;
                return o.data = r(n, e),
                o.attachments = e.length,
                {
                    packet: o,
                    buffers: e
                }
            }
            function r(t, e) {
                if (!t)
                    return t;
                if ((0,
                o.isBinary)(t)) {
                    const n = {
                        _placeholder: !0,
                        num: e.length
                    };
                    return e.push(t),
                    n
                }
                if (Array.isArray(t)) {
                    const n = new Array(t.length);
                    for (let o = 0; o < t.length; o++)
                        n[o] = r(t[o], e);
                    return n
                }
                if ("object" == typeof t && !(t instanceof Date)) {
                    const n = {};
                    for (const o in t)
                        Object.prototype.hasOwnProperty.call(t, o) && (n[o] = r(t[o], e));
                    return n
                }
                return t
            }
            function s(t, e) {
                return t.data = a(t.data, e),
                delete t.attachments,
                t
            }
            function a(t, e) {
                if (!t)
                    return t;
                if (t && !0 === t._placeholder) {
                    if ("number" == typeof t.num && t.num >= 0 && t.num < e.length)
                        return e[t.num];
                    throw new Error("illegal attachments")
                }
                if (Array.isArray(t))
                    for (let n = 0; n < t.length; n++)
                        t[n] = a(t[n], e);
                else if ("object" == typeof t)
                    for (const n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (t[n] = a(t[n], e));
                return t
            }
        }
        ,
        "./node_modules/socket.io-parser/build/esm/index.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                Decoder: () => h,
                Encoder: () => d,
                PacketType: () => c,
                protocol: () => a
            });
            var o = n("./node_modules/@socket.io/component-emitter/lib/esm/index.js")
              , i = n("./node_modules/socket.io-parser/build/esm/binary.js")
              , r = n("./node_modules/socket.io-parser/build/esm/is-binary.js");
            const s = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
              , a = 5;
            var c, l;
            (l = c ||= {})[l.CONNECT = 0] = "CONNECT",
            l[l.DISCONNECT = 1] = "DISCONNECT",
            l[l.EVENT = 2] = "EVENT",
            l[l.ACK = 3] = "ACK",
            l[l.CONNECT_ERROR = 4] = "CONNECT_ERROR",
            l[l.BINARY_EVENT = 5] = "BINARY_EVENT",
            l[l.BINARY_ACK = 6] = "BINARY_ACK";
            class d {
                constructor(t) {
                    this.replacer = t
                }
                encode(t) {
                    return t.type !== c.EVENT && t.type !== c.ACK || !(0,
                    r.hasBinary)(t) ? [this.encodeAsString(t)] : this.encodeAsBinary({
                        type: t.type === c.EVENT ? c.BINARY_EVENT : c.BINARY_ACK,
                        nsp: t.nsp,
                        data: t.data,
                        id: t.id
                    })
                }
                encodeAsString(t) {
                    let e = "" + t.type;
                    return t.type !== c.BINARY_EVENT && t.type !== c.BINARY_ACK || (e += t.attachments + "-"),
                    t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
                    null != t.id && (e += t.id),
                    null != t.data && (e += JSON.stringify(t.data, this.replacer)),
                    e
                }
                encodeAsBinary(t) {
                    const e = (0,
                    i.deconstructPacket)(t)
                      , n = this.encodeAsString(e.packet)
                      , o = e.buffers;
                    return o.unshift(n),
                    o
                }
            }
            function u(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }
            class h extends o.Emitter {
                constructor(t) {
                    super(),
                    this.reviver = t
                }
                add(t) {
                    let e;
                    if ("string" == typeof t) {
                        if (this.reconstructor)
                            throw new Error("got plaintext data when reconstructing a packet");
                        e = this.decodeString(t);
                        const n = e.type === c.BINARY_EVENT;
                        n || e.type === c.BINARY_ACK ? (e.type = n ? c.EVENT : c.ACK,
                        this.reconstructor = new p(e),
                        0 === e.attachments && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e)
                    } else {
                        if (!(0,
                        r.isBinary)(t) && !t.base64)
                            throw new Error("Unknown type: " + t);
                        if (!this.reconstructor)
                            throw new Error("got binary data when not reconstructing a packet");
                        e = this.reconstructor.takeBinaryData(t),
                        e && (this.reconstructor = null,
                        super.emitReserved("decoded", e))
                    }
                }
                decodeString(t) {
                    let e = 0;
                    const n = {
                        type: Number(t.charAt(0))
                    };
                    if (void 0 === c[n.type])
                        throw new Error("unknown packet type " + n.type);
                    if (n.type === c.BINARY_EVENT || n.type === c.BINARY_ACK) {
                        const o = e + 1;
                        for (; "-" !== t.charAt(++e) && e != t.length; )
                            ;
                        const i = t.substring(o, e);
                        if (i != Number(i) || "-" !== t.charAt(e))
                            throw new Error("Illegal attachments");
                        n.attachments = Number(i)
                    }
                    if ("/" === t.charAt(e + 1)) {
                        const o = e + 1;
                        for (; ++e && "," !== t.charAt(e) && e !== t.length; )
                            ;
                        n.nsp = t.substring(o, e)
                    } else
                        n.nsp = "/";
                    const o = t.charAt(e + 1);
                    if ("" !== o && Number(o) == o) {
                        const o = e + 1;
                        for (; ++e; ) {
                            const n = t.charAt(e);
                            if (null == n || Number(n) != n) {
                                --e;
                                break
                            }
                            if (e === t.length)
                                break
                        }
                        n.id = Number(t.substring(o, e + 1))
                    }
                    if (t.charAt(++e)) {
                        const o = this.tryParse(t.substr(e));
                        if (!h.isPayloadValid(n.type, o))
                            throw new Error("invalid payload");
                        n.data = o
                    }
                    return n
                }
                tryParse(t) {
                    try {
                        return JSON.parse(t, this.reviver)
                    } catch (t) {
                        return !1
                    }
                }
                static isPayloadValid(t, e) {
                    switch (t) {
                    case c.CONNECT:
                        return u(e);
                    case c.DISCONNECT:
                        return void 0 === e;
                    case c.CONNECT_ERROR:
                        return "string" == typeof e || u(e);
                    case c.EVENT:
                    case c.BINARY_EVENT:
                        return Array.isArray(e) && ("number" == typeof e[0] || "string" == typeof e[0] && -1 === s.indexOf(e[0]));
                    case c.ACK:
                    case c.BINARY_ACK:
                        return Array.isArray(e)
                    }
                }
                destroy() {
                    this.reconstructor && (this.reconstructor.finishedReconstruction(),
                    this.reconstructor = null)
                }
            }
            class p {
                constructor(t) {
                    this.packet = t,
                    this.buffers = [],
                    this.reconPack = t
                }
                takeBinaryData(t) {
                    if (this.buffers.push(t),
                    this.buffers.length === this.reconPack.attachments) {
                        const t = (0,
                        i.reconstructPacket)(this.reconPack, this.buffers);
                        return this.finishedReconstruction(),
                        t
                    }
                    return null
                }
                finishedReconstruction() {
                    this.reconPack = null,
                    this.buffers = []
                }
            }
        }
        ,
        "./node_modules/socket.io-parser/build/esm/is-binary.js": (t, e, n) => {
            "use strict";
            n.r(e),
            n.d(e, {
                hasBinary: () => l,
                isBinary: () => c
            });
            const o = "function" == typeof ArrayBuffer
              , i = t => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
              , r = Object.prototype.toString
              , s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === r.call(Blob)
              , a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === r.call(File);
            function c(t) {
                return o && (t instanceof ArrayBuffer || i(t)) || s && t instanceof Blob || a && t instanceof File
            }
            function l(t, e) {
                if (!t || "object" != typeof t)
                    return !1;
                if (Array.isArray(t)) {
                    for (let e = 0, n = t.length; e < n; e++)
                        if (l(t[e]))
                            return !0;
                    return !1
                }
                if (c(t))
                    return !0;
                if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length)
                    return l(t.toJSON(), !0);
                for (const e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e) && l(t[e]))
                        return !0;
                return !1
            }
        }
        ,
        "./src/temp.js": (t, e, n) => {
            "use strict";
            n.r(e);
            var o = n("./node_modules/howler/dist/howler.js")
              , r = (n.n(o),
            n("./node_modules/socket.io-client/build/esm/index.js"));
            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, b(o.key), o)
                }
            }
            function c(t, e, n) {
                return e && a(t.prototype, e),
                n && a(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }
            function l(t) {
                return function(t) {
                    if (Array.isArray(t))
                        return u(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                        return Array.from(t)
                }(t) || d(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function d(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return u(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                }
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = Array(e); n < e; n++)
                    o[n] = t[n];
                return o
            }
            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e] ?? {};
                    e % 2 ? h(Object(n), !0).forEach((function(e) {
                        m(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function m(t, e, n) {
                return (e = b(e))in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function b(t) {
                var e = function(t, e) {
                    if ("object" != w(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, "string");
                        if ("object" != w(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == w(e) ? e : e + ""
            }
            function g() {
                var t;
                g = function() {
                    return e
                }
                ;
                var e = {}
                  , n = Object.prototype
                  , o = n.hasOwnProperty
                  , i = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                }
                  , r = "function" == typeof Symbol ? Symbol : {}
                  , s = r.iterator || "@@iterator"
                  , a = r.asyncIterator || "@@asyncIterator"
                  , c = r.toStringTag || "@@toStringTag";
                function l(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, n) {
                        return t[e] = n
                    }
                }
                function d(e, n, o, r) {
                    var s, a, c, l, d = n && n.prototype instanceof y ? n : y, g = Object.create(d.prototype), v = new E(r || []);
                    return i(g, "_invoke", {
                        value: (s = e,
                        a = o,
                        c = v,
                        l = h,
                        function(e, n) {
                            if (l === f)
                                throw Error("Generator is already running");
                            if (l === m) {
                                if ("throw" === e)
                                    throw n;
                                return {
                                    value: t,
                                    done: !0
                                }
                            }
                            for (c.method = e,
                            c.arg = n; ; ) {
                                var o = c.delegate;
                                if (o) {
                                    var i = T(o, c);
                                    if (i) {
                                        if (i === b)
                                            continue;
                                        return i
                                    }
                                }
                                if ("next" === c.method)
                                    c.sent = c._sent = c.arg;
                                else if ("throw" === c.method) {
                                    if (l === h)
                                        throw l = m,
                                        c.arg;
                                    c.dispatchException(c.arg)
                                } else
                                    "return" === c.method && c.abrupt("return", c.arg);
                                l = f;
                                var r = u(s, a, c);
                                if ("normal" === r.type) {
                                    if (l = c.done ? m : p,
                                    r.arg === b)
                                        continue;
                                    return {
                                        value: r.arg,
                                        done: c.done
                                    }
                                }
                                "throw" === r.type && (l = m,
                                c.method = "throw",
                                c.arg = r.arg)
                            }
                        }
                        )
                    }),
                    g
                }
                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = d;
                var h = "suspendedStart"
                  , p = "suspendedYield"
                  , f = "executing"
                  , m = "completed"
                  , b = {};
                function y() {}
                function v() {}
                function _() {}
                var k = {};
                l(k, s, (function() {
                    return this
                }
                ));
                var x = Object.getPrototypeOf
                  , j = x && x(x(R([])));
                j && j !== n && o.call(j, s) && (k = j);
                var I = _.prototype = y.prototype = Object.create(k);
                function S(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function C(t, e) {
                    function n(i, r, s, a) {
                        var c = u(t[i], t, r);
                        if ("throw" !== c.type) {
                            var l = c.arg
                              , d = l.value;
                            return d && "object" == w(d) && o.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                n("next", t, s, a)
                            }
                            ), (function(t) {
                                n("throw", t, s, a)
                            }
                            )) : e.resolve(d).then((function(t) {
                                l.value = t,
                                s(l)
                            }
                            ), (function(t) {
                                return n("throw", t, s, a)
                            }
                            ))
                        }
                        a(c.arg)
                    }
                    var r;
                    i(this, "_invoke", {
                        value: function(t, o) {
                            function i() {
                                return new e((function(e, i) {
                                    n(t, o, e, i)
                                }
                                ))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    })
                }
                function T(e, n) {
                    var o = n.method
                      , i = e.iterator[o];
                    if (i === t)
                        return n.delegate = null,
                        "throw" === o && e.iterator.return && (n.method = "return",
                        n.arg = t,
                        T(e, n),
                        "throw" === n.method) || "return" !== o && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + o + "' method")),
                        b;
                    var r = u(i, e.iterator, n.arg);
                    if ("throw" === r.type)
                        return n.method = "throw",
                        n.arg = r.arg,
                        n.delegate = null,
                        b;
                    var s = r.arg;
                    return s ? s.done ? (n[e.resultName] = s.value,
                    n.next = e.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = t),
                    n.delegate = null,
                    b) : s : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    b)
                }
                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function A(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(O, this),
                    this.reset(!0)
                }
                function R(e) {
                    if (e || "" === e) {
                        var n = e[s];
                        if (n)
                            return n.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var i = -1
                              , r = function n() {
                                for (; ++i < e.length; )
                                    if (o.call(e, i))
                                        return n.value = e[i],
                                        n.done = !1,
                                        n;
                                return n.value = t,
                                n.done = !0,
                                n
                            };
                            return r.next = r
                        }
                    }
                    throw new TypeError(w(e) + " is not iterable")
                }
                return v.prototype = _,
                i(I, "constructor", {
                    value: _,
                    configurable: !0
                }),
                i(_, "constructor", {
                    value: v,
                    configurable: !0
                }),
                v.displayName = l(_, c, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _,
                    l(t, c, "GeneratorFunction")),
                    t.prototype = Object.create(I),
                    t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                S(C.prototype),
                l(C.prototype, a, (function() {
                    return this
                }
                )),
                e.AsyncIterator = C,
                e.async = function(t, n, o, i, r=Promise) {
                    var s = new C(d(t, n, o, i),r);
                    return e.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                        return t.done ? t.value : s.next()
                    }
                    ))
                }
                ,
                S(I),
                l(I, c, "Generator"),
                l(I, s, (function() {
                    return this
                }
                )),
                l(I, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                      , n = [];
                    for (var o in e)
                        n.push(o);
                    return n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var o = n.pop();
                            if (o in e)
                                return t.value = o,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                e.values = R,
                E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(A),
                        !e)
                            for (var n in this)
                                "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var n = this;
                        function i(o, i) {
                            return a.type = "throw",
                            a.arg = e,
                            n.next = o,
                            i && (n.method = "next",
                            n.arg = t),
                            !!i
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var s = this.tryEntries[r]
                              , a = s.completion;
                            if ("root" === s.tryLoc)
                                return i("end");
                            if (s.tryLoc <= this.prev) {
                                var c = o.call(s, "catchLoc")
                                  , l = o.call(s, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < s.catchLoc)
                                        return i(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc)
                                        return i(s.finallyLoc)
                                } else if (c) {
                                    if (this.prev < s.catchLoc)
                                        return i(s.catchLoc, !0)
                                } else {
                                    if (!l)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc)
                                        return i(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var r = i;
                                break
                            }
                        }
                        r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = t,
                        s.arg = e,
                        r ? (this.method = "next",
                        this.next = r.finallyLoc,
                        b) : this.complete(s)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        b
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                A(n),
                                b
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var i = o.arg;
                                    A(n)
                                }
                                return i
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, o) {
                        return this.delegate = {
                            iterator: R(e),
                            resultName: n,
                            nextLoc: o
                        },
                        "next" === this.method && (this.arg = t),
                        b
                    }
                },
                e
            }
            function y(t, e, n, o, i, r, s) {
                try {
                    var a = t[r](s)
                      , c = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(c) : Promise.resolve(c).then(o, i)
            }
            function v(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(o, i) {
                        var r = t.apply(e, n);
                        function s(t) {
                            y(r, o, i, s, a, "next", t)
                        }
                        function a(t) {
                            y(r, o, i, s, a, "throw", t)
                        }
                        s(void 0)
                    }
                    ))
                }
            }
            function w(t) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            t = n.hmd(t),
            window.URLSERV_WORMWORLD = "https://wormworld.io/extension/",
            window.URL_CDN = "",
            window.URL_CDN_B = "asserts.wormworld.io",
            window.URL_CDN_C = 0,
            window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
            var _ = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/
              , k = 18;
            window.backgroundArena = [{
                nome: "Default",
                uri: window.URL_CDN + "/backgrounds/bkgnd0.png"
            }, {
                nome: "aRENA",
                uri: window.URL_CDN + "0000#"
            }, {
                nome: "Textil1",
                uri: window.URL_CDN + "https://wormup.in/assets/images/bg_sky_10.png"
            }, {
                nome: "ARENA",
                uri: window.URL_CDN + "https://wormup.in/assets/images/bg_sky_7.png"
            }, {
                nome: "Blue Light",
                uri: window.URL_CDN + "https://wormup.in/assets/images/Galaxy-Star.png"
            }, {
                nome: "Desert",
                uri: window.URL_CDN + "/backgrounds/bkgnd7.png"
            }, {
                nome: "Textil",
                uri: window.URL_CDN + "/backgrounds/bkgnd11.png"
            }, {
                nome: "Sky Blue",
                uri: window.URL_CDN + "/backgrounds/bg_sky_1.png"
            }, {
                nome: "Sky Purp",
                uri: window.URL_CDN + "/backgrounds/bg_sky_2.png"
            }, {
                nome: "Sky Violet",
                uri: window.URL_CDN + "/backgrounds/bg_sky_3.png"
            }, {
                nome: "Sky Orange",
                uri: window.URL_CDN + "/backgrounds/bg_sky_4.png"
            }, {
                nome: "Sky Write",
                uri: window.URL_CDN + "/backgrounds/bg_sky_5.png"
            }, {
                nome: "Arena 1",
                uri: window.URL_CDN + "/backgrounds/arena01.png",
                w: 1100,
                h: 1100
            }, {
                nome: "Arena 2",
                uri: window.URL_CDN + "/backgrounds/arena02.png",
                w: 1100,
                h: 1100
            }, {
                nome: "Arena 3",
                uri: window.URL_CDN + "/backgrounds/arena03.png",
                w: 1100,
                h: 1100
            }, {
                nome: "Arena 4",
                uri: window.URL_CDN + "/backgrounds/arena04.png",
                w: 1100,
                h: 1100
            }],
            function(e) {
                "object" === ("undefined" == typeof exports ? "undefined" : w(exports)) ? t.exports = e() : "function" == typeof define && n.amdO ? define([], e) : ("undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : this).nipplejs = e()
            }((function() {
                var t, e = !!("ontouchstart"in window), n = !!window.PointerEvent, o = !!window.MSPointerEvent, i = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, r = {};
                n ? t = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup, pointercancel"
                } : o ? t = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                } : e ? (t = {
                    start: "touchstart",
                    move: "touchmove",
                    end: "touchend, touchcancel"
                },
                r = i) : t = i;
                var s = {};
                function a() {}
                function c(t, e) {
                    return this.identifier = e.identifier,
                    this.position = e.position,
                    this.frontPosition = e.frontPosition,
                    this.collection = t,
                    this.defaults = {
                        size: 100,
                        threshold: .1,
                        color: "white",
                        fadeTime: 250,
                        dataOnly: !1,
                        restJoystick: !0,
                        restOpacity: .5,
                        mode: "dynamic",
                        zone: document.body,
                        lockX: !1,
                        lockY: !1,
                        dumbBox: null
                    },
                    this.config(e),
                    "dynamic" === this.options.mode && (this.options.restOpacity = 0),
                    this.id = c.id,
                    c.id += 1,
                    this.buildEl().stylize(),
                    this.instance = {
                        el: this.ui.el,
                        on: this.on.bind(this),
                        off: this.off.bind(this),
                        show: this.show.bind(this),
                        hide: this.hide.bind(this),
                        add: this.addToDom.bind(this),
                        remove: this.removeFromDom.bind(this),
                        destroy: this.destroy.bind(this),
                        resetDirection: this.resetDirection.bind(this),
                        computeDirection: this.computeDirection.bind(this),
                        trigger: this.trigger.bind(this),
                        position: this.position,
                        frontPosition: this.frontPosition,
                        ui: this.ui,
                        identifier: this.identifier,
                        id: this.id,
                        options: this.options
                    },
                    this.instance
                }
                function l(t, e) {
                    var n = this;
                    return n.nipples = [],
                    n.idles = [],
                    n.actives = [],
                    n.ids = [],
                    n.pressureIntervals = {},
                    n.manager = t,
                    n.id = l.id,
                    l.id += 1,
                    n.defaults = {
                        zone: document.body,
                        multitouch: !1,
                        maxNumberOfNipples: 10,
                        mode: "dynamic",
                        position: {
                            top: 0,
                            left: 0
                        },
                        catchDistance: 200,
                        size: 100,
                        threshold: .1,
                        color: "white",
                        fadeTime: 250,
                        dataOnly: !1,
                        restJoystick: !0,
                        restOpacity: .5,
                        lockX: !1,
                        lockY: !1,
                        dumbBox: null
                    },
                    n.config(e),
                    "static" !== n.options.mode && "semi" !== n.options.mode || (n.options.multitouch = !1),
                    n.options.multitouch || (n.options.maxNumberOfNipples = 1),
                    n.updateBox(),
                    n.prepareNipples(),
                    n.bindings(),
                    n.begin(),
                    n.nipples
                }
                function d(t) {
                    var e, n = this;
                    return n.ids = {},
                    n.index = 0,
                    n.collections = [],
                    n.config(t),
                    n.prepareCollections(),
                    s.bindEvt(window, "resize", (function(t) {
                        clearTimeout(e),
                        e = setTimeout((function() {
                            var t, e = s.getScroll();
                            n.collections.forEach((function(n) {
                                n.forEach((function(n) {
                                    t = n.el.getBoundingClientRect(),
                                    n.position = {
                                        x: e.x + t.left,
                                        y: e.y + t.top
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ), 100)
                    }
                    )),
                    n.collections
                }
                s.distance = function(t, e) {
                    var n = e.x - t.x
                      , o = e.y - t.y;
                    return Math.sqrt(n * n + o * o)
                }
                ,
                s.angle = function(t, e) {
                    var n = e.x - t.x
                      , o = e.y - t.y;
                    return s.degrees(Math.atan2(o, n))
                }
                ,
                s.findCoord = function(t, e, n) {
                    var o = {
                        x: 0,
                        y: 0
                    };
                    return n = s.radians(n),
                    o.x = t.x - e * Math.cos(n),
                    o.y = t.y - e * Math.sin(n),
                    o
                }
                ,
                s.radians = function(t) {
                    return t * (Math.PI / 180)
                }
                ,
                s.degrees = function(t) {
                    return t * (180 / Math.PI)
                }
                ,
                s.bindEvt = function(t, e, n) {
                    for (var o, i = e.split(/[ ,]+/g), r = 0; r < i.length; r += 1)
                        o = i[r],
                        t.addEventListener ? t.addEventListener(o, n, !1) : t.attachEvent && t.attachEvent(o, n)
                }
                ,
                s.unbindEvt = function(t, e, n) {
                    for (var o, i = e.split(/[ ,]+/g), r = 0; r < i.length; r += 1)
                        o = i[r],
                        t.removeEventListener ? t.removeEventListener(o, n) : t.detachEvent && t.detachEvent(o, n)
                }
                ,
                s.trigger = function(t, e, n) {
                    var o = new CustomEvent(e,n);
                    t.dispatchEvent(o)
                }
                ,
                s.prepareEvent = function(t) {
                    return t.preventDefault(),
                    t.type.match(/^touch/) ? t.changedTouches : t
                }
                ,
                s.getScroll = function() {
                    return {
                        x: void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                        y: void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
                    }
                }
                ,
                s.applyPosition = function(t, e) {
                    e.top || e.right || e.bottom || e.left ? (t.style.top = e.top,
                    t.style.right = e.right,
                    t.style.bottom = e.bottom,
                    t.style.left = e.left) : (t.style.left = e.x + "px",
                    t.style.top = e.y + "px")
                }
                ,
                s.getTransitionStyle = function(t, e, n) {
                    var o = s.configStylePropertyObject(t);
                    for (var i in o)
                        if (o.hasOwnProperty(i))
                            if ("string" == typeof e)
                                o[i] = e + " " + n;
                            else {
                                for (var r = "", a = 0, c = e.length; a < c; a += 1)
                                    r += e[a] + " " + n + ", ";
                                o[i] = r.slice(0, -2)
                            }
                    return o
                }
                ,
                s.getVendorStyle = function(t, e) {
                    var n = s.configStylePropertyObject(t);
                    for (var o in n)
                        n.hasOwnProperty(o) && (n[o] = e);
                    return n
                }
                ,
                s.configStylePropertyObject = function(t) {
                    var e = {
                        [t]: ""
                    };
                    return ["webkit", "Moz", "o"].forEach((function(n) {
                        e[n + t.charAt(0).toUpperCase() + t.slice(1)] = ""
                    }
                    )),
                    e
                }
                ,
                s.extend = function(t, e) {
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }
                ,
                s.safeExtend = function(t, e) {
                    var n = {};
                    for (var o in t)
                        t.hasOwnProperty(o) && e.hasOwnProperty(o) ? n[o] = e[o] : t.hasOwnProperty(o) && (n[o] = t[o]);
                    return n
                }
                ,
                s.map = function(t, e) {
                    if (t.length)
                        for (var n = 0, o = t.length; n < o; n += 1)
                            e(t[n]);
                    else
                        e(t)
                }
                ,
                a.prototype.on = function(t, e) {
                    var n, o = this, i = t.split(/[ ,]+/g);
                    o._handlers_ = o._handlers_ || {};
                    for (var r = 0; r < i.length; r += 1)
                        n = i[r],
                        o._handlers_[n] = o._handlers_[n] || [],
                        o._handlers_[n].push(e);
                    return o
                }
                ,
                a.prototype.off = function(t, e) {
                    var n = this;
                    return n._handlers_ = n._handlers_ || {},
                    void 0 === t ? n._handlers_ = {} : void 0 === e ? n._handlers_[t] = null : n._handlers_[t] && n._handlers_[t].indexOf(e) >= 0 && n._handlers_[t].splice(n._handlers_[t].indexOf(e), 1),
                    n
                }
                ,
                a.prototype.trigger = function(t, e) {
                    var n, o = this, i = t.split(/[ ,]+/g);
                    o._handlers_ = o._handlers_ || {};
                    for (var r = 0; r < i.length; r += 1)
                        n = i[r],
                        o._handlers_[n] && o._handlers_[n].length && o._handlers_[n].forEach((function(t) {
                            t.call(o, {
                                type: n,
                                target: o
                            }, e)
                        }
                        ))
                }
                ,
                a.prototype.config = function(t) {
                    var e = this;
                    e.options = e.defaults || {},
                    t && (e.options = s.safeExtend(e.options, t))
                }
                ,
                a.prototype.bindEvt = function(e, n) {
                    var o = this;
                    return o._domHandlers_ = o._domHandlers_ || {},
                    o._domHandlers_[n] = function() {
                        "function" == typeof o["on" + n] ? o["on" + n].apply(o, arguments) : console.warn('[WARNING] : Missing "on' + n + '" handler.')
                    }
                    ,
                    s.bindEvt(e, t[n], o._domHandlers_[n]),
                    r[n] && s.bindEvt(e, r[n], o._domHandlers_[n]),
                    o
                }
                ,
                a.prototype.unbindEvt = function(e, n) {
                    var o = this;
                    return o._domHandlers_ = o._domHandlers_ || {},
                    s.unbindEvt(e, t[n], o._domHandlers_[n]),
                    r[n] && s.unbindEvt(e, r[n], o._domHandlers_[n]),
                    delete o._domHandlers_[n],
                    this
                }
                ,
                c.prototype = new a,
                c.constructor = c,
                c.id = 0,
                c.prototype.buildEl = function(t) {
                    return this.ui = {},
                    this.options.dataOnly || (this.ui.el = document.createElement("div"),
                    this.ui.back = document.createElement("div"),
                    this.ui.front = document.createElement("div"),
                    this.ui.el.className = "nipple collection_" + this.collection.id,
                    this.ui.back.className = "back",
                    this.ui.front.className = "front",
                    this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id),
                    this.ui.el.appendChild(this.ui.back),
                    this.ui.el.appendChild(this.ui.front)),
                    this
                }
                ,
                c.prototype.stylize = function() {
                    if (this.options.dataOnly)
                        return this;
                    var t = this.options.fadeTime + "ms"
                      , e = s.getVendorStyle("borderRadius", "50%")
                      , n = s.getTransitionStyle("transition", "opacity", t)
                      , o = {
                        el: {
                            position: "absolute",
                            opacity: this.options.restOpacity,
                            display: "unblock",
                            zIndex: 999
                        },
                        back: {
                            position: "absolute",
                            display: "unblock",
                            width: this.options.size + "px",
                            height: this.options.size + "px",
                            marginLeft: -this.options.size / 2 + "px",
                            marginTop: -this.options.size / 2 + "px",
                            background: this.options.color,
                            opacity: ".5"
                        },
                        front: {
                            width: this.options.size / 2 + "px",
                            height: this.options.size / 2 + "px",
                            position: "absolute",
                            display: "unblock",
                            marginLeft: -this.options.size / 4 + "px",
                            marginTop: -this.options.size / 4 + "px",
                            background: this.options.color,
                            opacity: ".5"
                        }
                    };
                    return s.extend(o.el, n),
                    s.extend(o.back, e),
                    s.extend(o.front, e),
                    this.applyStyles(o),
                    this
                }
                ,
                c.prototype.applyStyles = function(t) {
                    for (var e in this.ui)
                        if (this.ui.hasOwnProperty(e))
                            for (var n in t[e])
                                this.ui[e].style[n] = t[e][n];
                    return this
                }
                ,
                c.prototype.addToDom = function() {
                    return this.options.dataOnly || document.body.contains(this.ui.el) || this.options.zone.appendChild(this.ui.el),
                    this
                }
                ,
                c.prototype.removeFromDom = function() {
                    return this.options.dataOnly || !document.body.contains(this.ui.el) || this.options.zone.removeChild(this.ui.el),
                    this
                }
                ,
                c.prototype.destroy = function() {
                    clearTimeout(this.removeTimeout),
                    clearTimeout(this.showTimeout),
                    clearTimeout(this.restTimeout),
                    this.trigger("destroyed", this.instance),
                    this.removeFromDom(),
                    this.off()
                }
                ,
                c.prototype.show = function(t) {
                    var e = this;
                    return e.options.dataOnly || (clearTimeout(e.removeTimeout),
                    clearTimeout(e.showTimeout),
                    clearTimeout(e.restTimeout),
                    e.addToDom(),
                    e.restCallback(),
                    setTimeout((function() {
                        e.ui.el.style.opacity = 1
                    }
                    ), 0),
                    e.showTimeout = setTimeout((function() {
                        e.trigger("shown", e.instance),
                        "function" == typeof t && t.call(this)
                    }
                    ), e.options.fadeTime)),
                    e
                }
                ,
                c.prototype.hide = function(t) {
                    var e = this;
                    return e.options.dataOnly || (e.ui.el.style.opacity = e.options.restOpacity,
                    clearTimeout(e.removeTimeout),
                    clearTimeout(e.showTimeout),
                    clearTimeout(e.restTimeout),
                    e.removeTimeout = setTimeout((function() {
                        var n = "dynamic" === e.options.mode ? "none" : "unblock";
                        e.ui.el.style.display = n,
                        "function" == typeof t && t.call(e),
                        e.trigger("hidden", e.instance)
                    }
                    ), e.options.fadeTime),
                    e.options.restJoystick && e.restPosition()),
                    e
                }
                ,
                c.prototype.restPosition = function(t) {
                    var e = this;
                    e.frontPosition = {
                        x: 0,
                        y: 0
                    };
                    var n = e.options.fadeTime + "ms"
                      , o = {};
                    o.front = s.getTransitionStyle("transition", ["top", "left"], n);
                    var i = {
                        front: {}
                    };
                    i.front = {
                        left: e.frontPosition.x + "px",
                        top: e.frontPosition.y + "px"
                    },
                    e.applyStyles(o),
                    e.applyStyles(i),
                    e.restTimeout = setTimeout((function() {
                        "function" == typeof t && t.call(e),
                        e.restCallback()
                    }
                    ), e.options.fadeTime)
                }
                ,
                c.prototype.restCallback = function() {
                    var t = this
                      , e = {};
                    e.front = s.getTransitionStyle("transition", "none", ""),
                    t.applyStyles(e),
                    t.trigger("rested", t.instance)
                }
                ,
                c.prototype.resetDirection = function() {
                    this.direction = {
                        x: !1,
                        y: !1,
                        angle: !1
                    }
                }
                ,
                c.prototype.computeDirection = function(t) {
                    var e, n, o, i = t.angle.radian, r = Math.PI / 4, s = Math.PI / 2;
                    if (i > r && i < 3 * r && !t.lockX ? e = "up" : i > -r && i <= r && !t.lockY ? e = "left" : i > 3 * -r && i <= -r && !t.lockX ? e = "down" : t.lockY || (e = "right"),
                    t.lockY || (n = i > -s && i < s ? "left" : "right"),
                    t.lockX || (o = i > 0 ? "up" : "down"),
                    t.force > this.options.threshold) {
                        var a = {};
                        for (var c in this.direction)
                            this.direction.hasOwnProperty(c) && (a[c] = this.direction[c]);
                        var l = {};
                        for (var c in this.direction = {
                            x: n,
                            y: o,
                            angle: e
                        },
                        t.direction = this.direction,
                        a)
                            a[c] === this.direction[c] && (l[c] = !0);
                        if (l.x && l.y && l.angle)
                            return t;
                        l.x && l.y || this.trigger("plain", t),
                        l.x || this.trigger("plain:" + n, t),
                        l.y || this.trigger("plain:" + o, t),
                        l.angle || this.trigger("dir dir:" + e, t)
                    }
                    return t
                }
                ,
                l.prototype = new a,
                l.constructor = l,
                l.id = 0,
                l.prototype.prepareNipples = function() {
                    var t = this
                      , e = t.nipples;
                    e.on = t.on.bind(t),
                    e.off = t.off.bind(t),
                    e.options = t.options,
                    e.destroy = t.destroy.bind(t),
                    e.ids = t.ids,
                    e.id = t.id,
                    e.processOnMove = t.processOnMove.bind(t),
                    e.processOnEnd = t.processOnEnd.bind(t),
                    e.get = function(t) {
                        if (void 0 === t)
                            return e[0];
                        for (var n = 0, o = e.length; n < o; n += 1)
                            if (e[n].identifier === t)
                                return e[n];
                        return !1
                    }
                }
                ,
                l.prototype.bindings = function() {
                    var t = this;
                    t.bindEvt(t.options.zone, "start"),
                    t.options.zone.style.touchAction = "none",
                    t.options.zone.style.msTouchAction = "none"
                }
                ,
                l.prototype.begin = function() {
                    var t = this
                      , e = t.options;
                    if ("static" === e.mode) {
                        var n = t.createNipple(e.position, t.manager.getIdentifier());
                        n.add(),
                        t.idles.push(n)
                    }
                }
                ,
                l.prototype.createNipple = function(t, e) {
                    var n = this
                      , o = s.getScroll()
                      , i = {}
                      , r = n.options;
                    if (t.x && t.y)
                        i = {
                            x: t.x - (o.x + n.box.left),
                            y: t.y - (o.y + n.box.top)
                        };
                    else if (t.top || t.right || t.bottom || t.left) {
                        var a = document.createElement("DIV");
                        a.style.display = "hidden",
                        a.style.top = t.top,
                        a.style.right = t.right,
                        a.style.bottom = t.bottom,
                        a.style.left = t.left,
                        a.style.position = "absolute",
                        r.zone.appendChild(a);
                        var l = a.getBoundingClientRect();
                        r.zone.removeChild(a),
                        i = t,
                        t = {
                            x: (r.dumbBox ? r.dumbBox.left : l.left) + o.x,
                            y: (r.dumbBox ? r.dumbBox.top : l.top) + o.y
                        }
                    }
                    var d = new c(n,{
                        color: r.color,
                        size: r.size,
                        threshold: r.threshold,
                        fadeTime: r.fadeTime,
                        dataOnly: r.dataOnly,
                        restJoystick: r.restJoystick,
                        restOpacity: r.restOpacity,
                        mode: r.mode,
                        identifier: e,
                        position: t,
                        zone: r.zone,
                        frontPosition: {
                            x: 0,
                            y: 0
                        }
                    });
                    return r.dataOnly || (s.applyPosition(d.ui.el, i),
                    s.applyPosition(d.ui.front, d.frontPosition)),
                    n.nipples.push(d),
                    n.trigger("added " + d.identifier + ":added", d),
                    n.manager.trigger("added " + d.identifier + ":added", d),
                    n.bindNipple(d),
                    d
                }
                ,
                l.prototype.updateBox = function() {
                    this.box = this.options.zone.getBoundingClientRect()
                }
                ,
                l.prototype.bindNipple = function(t) {
                    var e, n = this, o = function(t, o) {
                        e = t.type + " " + o.id + ":" + t.type,
                        n.trigger(e, o)
                    };
                    t.on("destroyed", n.onDestroyed.bind(n)),
                    t.on("shown hidden rested dir plain", o),
                    t.on("dir:up dir:right dir:down dir:left", o),
                    t.on("plain:up plain:right plain:down plain:left", o)
                }
                ,
                l.prototype.pressureFn = function(t, e, n) {
                    var o = this
                      , i = 0;
                    clearInterval(o.pressureIntervals[n]),
                    o.pressureIntervals[n] = setInterval(function() {
                        var n = t.force || t.pressure || t.webkitForce || 0;
                        n !== i && (e.trigger("pressure", n),
                        o.trigger("pressure " + e.identifier + ":pressure", n),
                        i = n)
                    }
                    .bind(o), 100)
                }
                ,
                l.prototype.onstart = function(t) {
                    var e = this
                      , n = e.options;
                    return t = s.prepareEvent(t),
                    e.updateBox(),
                    s.map(t, (function(t) {
                        e.actives.length < n.maxNumberOfNipples && e.processOnStart(t)
                    }
                    )),
                    e.manager.bindDocument(),
                    !1
                }
                ,
                l.prototype.processOnStart = function(t) {
                    var e, n = this, o = n.options, i = n.manager.getIdentifier(t), r = t.force || t.pressure || t.webkitForce || 0, a = {
                        x: t.pageX,
                        y: t.pageY
                    }, c = n.getOrCreate(i, a);
                    c.identifier !== i && n.manager.removeIdentifier(c.identifier),
                    c.identifier = i;
                    var l = function(e) {
                        e.trigger("start", e),
                        n.trigger("start " + e.id + ":start", e),
                        e.show(),
                        r > 0 && n.pressureFn(t, e, e.identifier),
                        n.processOnMove(t)
                    };
                    if ((e = n.idles.indexOf(c)) >= 0 && n.idles.splice(e, 1),
                    n.actives.push(c),
                    n.ids.push(c.identifier),
                    "semi" !== o.mode)
                        l(c);
                    else {
                        if (!(s.distance(a, c.position) <= o.catchDistance))
                            return c.destroy(),
                            void n.processOnStart(t);
                        l(c)
                    }
                    return c
                }
                ,
                l.prototype.getOrCreate = function(t, e) {
                    var n, o = this, i = o.options;
                    return /(semi|static)/.test(i.mode) ? (n = o.idles[0]) ? (o.idles.splice(0, 1),
                    n) : "semi" === i.mode ? o.createNipple(e, t) : (console.warn("Coudln't find the needed nipple."),
                    !1) : n = o.createNipple(e, t)
                }
                ,
                l.prototype.processOnMove = function(t) {
                    var e = this
                      , n = e.options
                      , o = e.manager.getIdentifier(t)
                      , i = e.nipples.get(o);
                    if (!i)
                        return console.error("Found zombie joystick with ID " + o),
                        void e.manager.removeIdentifier(o);
                    i.identifier = o;
                    var r = i.options.size / 2
                      , a = {
                        x: t.pageX,
                        y: t.pageY
                    }
                      , c = s.distance(a, i.position)
                      , l = s.angle(a, i.position)
                      , d = s.radians(l)
                      , u = c / r;
                    c > r && (c = r,
                    a = s.findCoord(i.position, c, l));
                    var h = a.x - i.position.x
                      , p = a.y - i.position.y;
                    n.lockX && (p = 0),
                    n.lockY && (h = 0),
                    i.frontPosition = {
                        x: h,
                        y: p
                    },
                    n.dataOnly || s.applyPosition(i.ui.front, i.frontPosition);
                    var f = {
                        identifier: i.identifier,
                        position: a,
                        force: u,
                        pressure: t.force || t.pressure || t.webkitForce || 0,
                        distance: c,
                        angle: {
                            radian: d,
                            degree: l
                        },
                        instance: i,
                        lockX: n.lockX,
                        lockY: n.lockY
                    };
                    (f = i.computeDirection(f)).angle = {
                        radian: s.radians(180 - l),
                        degree: 180 - l
                    },
                    i.trigger("move", f),
                    e.trigger("move " + i.id + ":move", f)
                }
                ,
                l.prototype.processOnEnd = function(t) {
                    var e = this
                      , n = e.options
                      , o = e.manager.getIdentifier(t)
                      , i = e.nipples.get(o)
                      , r = e.manager.removeIdentifier(i.identifier);
                    i && (n.dataOnly || i.hide((function() {
                        "dynamic" === n.mode && (i.trigger("removed", i),
                        e.trigger("removed " + i.id + ":removed", i),
                        e.manager.trigger("removed " + i.id + ":removed", i),
                        i.destroy())
                    }
                    )),
                    clearInterval(e.pressureIntervals[i.identifier]),
                    i.resetDirection(),
                    i.trigger("end", i),
                    e.trigger("end " + i.id + ":end", i),
                    e.ids.indexOf(i.identifier) >= 0 && e.ids.splice(e.ids.indexOf(i.identifier), 1),
                    e.actives.indexOf(i) >= 0 && e.actives.splice(e.actives.indexOf(i), 1),
                    /(semi|static)/.test(n.mode) ? e.idles.push(i) : e.nipples.indexOf(i) >= 0 && e.nipples.splice(e.nipples.indexOf(i), 1),
                    e.manager.unbindDocument(),
                    /(semi|static)/.test(n.mode) && (e.manager.ids[r.id] = r.identifier))
                }
                ,
                l.prototype.onDestroyed = function(t, e) {
                    var n = this;
                    n.nipples.indexOf(e) >= 0 && n.nipples.splice(n.nipples.indexOf(e), 1),
                    n.actives.indexOf(e) >= 0 && n.actives.splice(n.actives.indexOf(e), 1),
                    n.idles.indexOf(e) >= 0 && n.idles.splice(n.idles.indexOf(e), 1),
                    n.ids.indexOf(e.identifier) >= 0 && n.ids.splice(n.ids.indexOf(e.identifier), 1),
                    n.manager.removeIdentifier(e.identifier),
                    n.manager.unbindDocument()
                }
                ,
                l.prototype.destroy = function() {
                    var t = this;
                    for (var e in t.unbindEvt(t.options.zone, "start"),
                    t.nipples.forEach((function(t) {
                        t.destroy()
                    }
                    )),
                    t.pressureIntervals)
                        t.pressureIntervals.hasOwnProperty(e) && clearInterval(t.pressureIntervals[e]);
                    t.trigger("destroyed", t.nipples),
                    t.manager.unbindDocument(),
                    t.off()
                }
                ,
                d.prototype = new a,
                d.constructor = d,
                d.prototype.prepareCollections = function() {
                    var t = this;
                    t.collections.create = t.create.bind(t),
                    t.collections.on = t.on.bind(t),
                    t.collections.off = t.off.bind(t),
                    t.collections.destroy = t.destroy.bind(t),
                    t.collections.get = function(e) {
                        var n;
                        return t.collections.every((function(t) {
                            return !(n = t.get(e))
                        }
                        )),
                        n
                    }
                }
                ,
                d.prototype.create = function(t) {
                    return this.createCollection(t)
                }
                ,
                d.prototype.createCollection = function(t) {
                    var e = this
                      , n = new l(e,t);
                    return e.bindCollection(n),
                    e.collections.push(n),
                    n
                }
                ,
                d.prototype.bindCollection = function(t) {
                    var e, n = this, o = function(t, o) {
                        e = t.type + " " + o.id + ":" + t.type,
                        n.trigger(e, o)
                    };
                    t.on("destroyed", n.onDestroyed.bind(n)),
                    t.on("shown hidden rested dir plain", o),
                    t.on("dir:up dir:right dir:down dir:left", o),
                    t.on("plain:up plain:right plain:down plain:left", o)
                }
                ,
                d.prototype.bindDocument = function() {
                    var t = this;
                    t.binded || (t.bindEvt(document, "move").bindEvt(document, "end"),
                    t.binded = !0)
                }
                ,
                d.prototype.unbindDocument = function(t) {
                    var e = this;
                    Object.keys(e.ids).length && !0 !== t || (e.unbindEvt(document, "move").unbindEvt(document, "end"),
                    e.binded = !1)
                }
                ,
                d.prototype.getIdentifier = function(t) {
                    var e;
                    return t ? void 0 === (e = void 0 === t.identifier ? t.pointerId : t.identifier) && (e = this.latest || 0) : e = this.index,
                    void 0 === this.ids[e] && (this.ids[e] = this.index,
                    this.index += 1),
                    this.latest = e,
                    this.ids[e]
                }
                ,
                d.prototype.removeIdentifier = function(t) {
                    var e = {};
                    for (var n in this.ids)
                        if (this.ids[n] === t) {
                            e.id = n,
                            e.identifier = this.ids[n],
                            delete this.ids[n];
                            break
                        }
                    return e
                }
                ,
                d.prototype.onmove = function(t) {
                    return this.onAny("move", t),
                    !1
                }
                ,
                d.prototype.onend = function(t) {
                    return this.onAny("end", t),
                    !1
                }
                ,
                d.prototype.oncancel = function(t) {
                    return this.onAny("end", t),
                    !1
                }
                ,
                d.prototype.onAny = function(t, e) {
                    var n, o = this, i = "processOn" + t.charAt(0).toUpperCase() + t.slice(1);
                    e = s.prepareEvent(e);
                    var r = function(t, e, n) {
                        n.ids.indexOf(e) >= 0 && (n[i](t),
                        t._found_ = !0)
                    };
                    return s.map(e, (function(t) {
                        n = o.getIdentifier(t),
                        s.map(o.collections, r.bind(null, t, n)),
                        t._found_ || o.removeIdentifier(n)
                    }
                    )),
                    !1
                }
                ,
                d.prototype.destroy = function() {
                    var t = this;
                    t.unbindDocument(!0),
                    t.ids = {},
                    t.index = 0,
                    t.collections.forEach((function(t) {
                        t.destroy()
                    }
                    )),
                    t.off()
                }
                ,
                d.prototype.onDestroyed = function(t, e) {
                    var n = this;
                    if (n.collections.indexOf(e) < 0)
                        return !1;
                    n.collections.splice(n.collections.indexOf(e), 1)
                }
                ;
                var u = new d;
                return {
                    create: function(t) {
                        return u.create(t)
                    },
                    factory: u
                }
            }
            ));
            var x = !1
              , j = !0
              , I = null
              , S = 1
              , C = null
              , T = 0;
            window.createLine = function(t, e) {
                var n = new PIXI.Graphics
                  , o = "#ff0000";
                bbs.laserColor && "string" == typeof bbs.laserColor && (o = parseInt(bbs.laserColor.toString().replace("#", "0x"))),
                n.lineStyle(bbs.laser || .2, o, 1),
                n.moveTo(0, 0),
                n.lineTo(0, 0),
                n.zIndex = 10001,
                n.name = "lineHS",
                n.alpha = 0,
                n.filters = [new PIXI.filters.BlurFilter(5)],
                t.addChild(n)
            }
            ,
            window.movimentaLinha = function() {
                try {
                    if (!_wwc._anApp.dh.ch.Nm)
                        return;
                    var t = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS")
                      , e = _wwc._anApp.dh.ch.Nm.oc
                      , n = e.position.x
                      , o = e.position.y
                      , i = "#ff0000";
                    bbs.laserColor && "string" == typeof bbs.laserColor && (i = parseInt(bbs.laserColor.toString().replace("#", "0x"))),
                    t.lineStyle(bbs.laser || .2, i, 1),
                    t.clear(),
                    t.lineStyle(bbs.laser || .1, i, 1),
                    t.moveTo(0, 0),
                    t.lineTo(n, o),
                    bbs.laserActive && _wwc.ismobile && (t.alpha = .3),
                    t.filters = [new PIXI.filters.BlurFilter(5)]
                } catch (t) {
                    console.error(t)
                }
            }
            ,
            window.gerarCodigoUnico = function() {
                for (var t = ((bbs.userId || "").match(/\d/g) || []).reduce((function(t, e) {
                    return t + parseInt(e, 10)
                }
                ), 0), e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", n = "", o = "", i = 0; i < 5; i++) {
                    var r = Math.floor(62 * Math.random());
                    n += e.charAt(r);
                    var s = Math.floor(62 * Math.random());
                    o += e.charAt(s)
                }
                return "ROOM" + o + "_" + t + "_" + n
            }
            ;
            var O = {
                sao: "wss://nycsam01.wormworld.io",
                dal: "wss://nycsam01.wormworld.io",
                hil: "wss://nycsam01.wormworld.io",
                vin: "wss://nycsam01.wormworld.io",
                fra: "wss://fraceu01.wormworld.io",
                gra: "wss://fraceu01.wormworld.io",
                dxb: "wss://fraceu01.wormworld.io",
                sin: "wss://fraceu01.wormworld.io",
                tok: "wss://fraceu01.wormworld.io",
                local: "wss://nycsam01.wormworld.io"
            }
              , A = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
            $("#mm-params-nickname").attr("maxlength", k);
            var E, R, P = {
                ref: [],
                hs: {},
                fxdo: function(t) {
                    bbs.activeSounds2 && bbs.start && (P[t].playing() || P[t].play())
                },
                fxAux: function(t, e) {
                    return 1 !== e || P.fxStatus.top1 || (P.fxStatus.top1 = !0,
                    P.fxdo("top1")),
                    t
                },
                fxStatus: {
                    top1: !1
                }
            };
            window._wwcio = {
                message: null,
                obj: {},
                player: {},
                join: function() {},
                update: function() {},
                leave: function() {},
                leaderboardUpdated: function(t, e) {
                    bt(t, e)
                },
                sendLocation: function() {},
                findFriend: function() {},
                close: function() {},
                set: function(t) {
                    return t
                },
                friend: null,
                myLocation: {},
                crown: null
            },
            window._wwc = {
                deadPositionMap: function() {
                    var t = new PIXI.Text("X",_wwc.fontStyleMap());
                    t.position.x = _wwc.memory.positionOfDead.x,
                    t.position.y = _wwc.memory.positionOfDead.y,
                    _wwc._anApp.og.af.ng.Tg.addChild(t);
                    var e = 0
                      , n = setInterval((function() {
                        e = !e,
                        t.alpha = e
                    }
                    ), 500)
                      , o = setTimeout((function() {
                        clearInterval(n),
                        _wwc._anApp.og.af.ng.Tg && (_wwc._anApp.og.af.ng.Tg.removeChild(t),
                        t.destroy())
                    }
                    ), 6e4);
                    _wwc.removeDeadPositionMap = function() {
                        clearInterval(n),
                        clearTimeout(o),
                        _wwc._anApp.og.af.ng.Tg && (_wwc._anApp.og.af.ng.Tg.removeChild(t),
                        t && t.destroy && t.destroy())
                    }
                },
                fontStyleMap: function(t) {
                    return {
                        fontFamily: "Arial",
                        fontSize: "12px",
                        fill: "red",
                        align: "center",
                        fontWeight: "bold"
                    }
                },
                startGame: function() {
                    _wwc.memory.positionOfDead && _wwc.deadPositionMap()
                },
                stopGame: function() {
                    var t, e;
                    _wwcio.close(),
                    _wwcio.findFriendActived = !1,
                    _wwcio.myLocation && (_wwc.memory.positionOfDead = {
                        x: null === (t = _wwcio.myLocation) || void 0 === t || null === (t = t.position) || void 0 === t ? void 0 : t.x,
                        y: null === (e = _wwcio.myLocation) || void 0 === e || null === (e = e.position) || void 0 === e ? void 0 : e.y
                    },
                    _wwc.removeDeadPositionMap && _wwc.removeDeadPositionMap())
                },
                memory: {},
                mySkin: null,
                customPaths: {
                    map: null
                },
                _ass_type: [],
                testSkinMod: function(t) {
                    var e = "string" == typeof t;
                    return t = parseInt(t),
                    (!e || !isNaN(t)) && parseInt(t) >= 399 && parseInt(t) < 8999
                },
                testWear: function(t) {
                    var e = "string" == typeof t;
                    return t = parseInt(t),
                    (!e || !isNaN(t)) && parseInt(t) >= 399 && parseInt(t) < 8999
                },
                isNumberValid: function(t) {
                    return "" !== t && null != t && !isNaN(t)
                },
                validInputWear: function(t) {
                    var e = _wwc.testWear(t)
                      , n = "string" == typeof skinId;
                    return e || n ? 0 : t
                },
                validInput: function(t) {
                    if (!_wwc.testSkinMod(t) && "string" != typeof t)
                        return t;
                    try {
                        var e = $("#inputReplaceSkin").val();
                        return encodeURI(_wwc.isNumberValid(e) ? e : bbs.idReplaceSkin || 35)
                    } catch (t) {
                        return encodeURI(35)
                    }
                },
                fullscreen: null,
                joystick: function(t) {
                    return {
                        checked: !0,
                        color: "red",
                        mode: "dynamic",
                        positionMode: "L",
                        size: 100,
                        pxy: 100
                    }
                },
                load_con: function() {
                    $(".selecionar-sala-v2").click((function(t) {
                        t.preventDefault();
                        var e = $(this).attr("data-con") || bbs.con;
                        $(this).attr("data-type"),
                        w2c2020.addRoom($(this).attr("data-room")),
                        kt.dh.Zp = function(t, n, o) {
                            bbs.con = o ? t : e || t,
                            _wwc.Zp(bbs.con, n)
                        }
                        ,
                        kt.Pn()
                    }
                    ))
                },
                fnSaveGame: function() {
                    var t = $("#saveGame");
                    t.prop("checked", bbs.saveGame),
                    t.change((function() {
                        if (!this.checked) {
                            var t = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù  Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
                            $(this).prop("checked", !t),
                            this.checked || _wwc.fnSetCounts("zerar")
                        }
                        bbs.saveGame = this.checked,
                        w2c2020.hsTotal.alpha = this.checked ? 1 : 0,
                        w2c2020.killTotal.alpha = this.checked ? 1 : 0,
                        localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null)
                    }
                    ))
                },
                fnSetCounts: function(t, e) {
                    var n, o, i, r;
                    "count" === t && (bbs.kill = (bbs.kill || 0) + (e ? 0 : 1),
                    bbs.headshot = (bbs.headshot || 0) + (e ? 1 : 0),
                    bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL,
                    bbs.tkill = bbs.tkill + (e ? 0 : 1),
                    bbs.theadshot = bbs.theadshot + (e ? 1 : 0)),
                    "open" === t && (bbs.kill = 0,
                    bbs.headshot = 0,
                    bbs.saveGame),
                    "close" === t && (bbs.saveGame ? bbs.died = (bbs.died || 0) + 1 : _wwc.fnSetCounts("zerar")),
                    "zerar" === t && (bbs.kill = 0,
                    bbs.tkill = 0,
                    bbs.headshot = 0,
                    bbs.theadshot = 0,
                    bbs.died = 0),
                    n = bbs.kill,
                    o = bbs.headshot,
                    i = bbs.tkill,
                    r = bbs.theadshot,
                    _wwc.setCountGame(n, o, i, r),
                    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs))
                },
                setCountGame: function(t, e, n, o) {
                    bbs.saveGame || (w2c2020.hsTotal.alpha = 0,
                    w2c2020.killTotal.alpha = 0),
                    w2c2020.hs.text = e,
                    w2c2020.hsTotal.text = o,
                    w2c2020.kill.text = t,
                    w2c2020.killTotal.text = n
                },
                ismobile: (R = !1,
                E = navigator.userAgent || navigator.vendor || window.opera,
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(E) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(E.substr(0, 4))) && (R = !0),
                R),
                Zp: void 0
            },
            window.bbs = {
                version: 0,
                headshot: 0,
                kill: 0,
                theadshot: 0,
                tkill: 0,
                died: 0,
                start: 0,
                HOL: 0,
                tk: null,
                country: null,
                finish: 0,
                saveGame: !1,
                idReplaceSkin: 34,
                mobile: !1,
                joystick: null,
                configJoystick: {
                    buttons: {
                        respawn: {
                            label: "RESPAWN",
                            labelAbbreviation: "RP",
                            active: !1,
                            action: "mbf.mbfass6()"
                        },
                        lobby: {
                            label: "LOBBY",
                            labelAbbreviation: "L",
                            active: !0,
                            action: "mbf.mbfass5()"
                        },
                        rotate: {
                            label: "ROTATE",
                            labelAbbreviation: "A",
                            active: !0,
                            action: "mbf.mbfass4()"
                        },
                        snail: {
                            label: "SNAIL",
                            labelAbbreviation: "B",
                            active: !0,
                            action: "mbf.mbfass3()"
                        },
                        search: {
                            label: "SEARCH",
                            labelAbbreviation: "SE",
                            active: !1,
                            action: "mbf.mbfass0()"
                        },
                        swap: {
                            label: "SWAP",
                            labelAbbreviation: "SW",
                            active: !1,
                            action: "mbf.mbf_cambiar()"
                        },
                        zoomplus: {
                            label: "Z+",
                            labelAbbreviation: "+",
                            active: !0,
                            action: "mbf.mbfass1()"
                        },
                        zoomminus: {
                            label: "Z-",
                            labelAbbreviation: "-",
                            active: !0,
                            action: "mbf.mbfass2()"
                        },
                        zoom: {
                            label: "x1",
                            labelAbbreviation: "x1",
                            active: !0,
                            action: "mbf.mbfass7()"
                        }
                    },
                    typeZoom: ["btn", "range"],
                    typeCurrent: "btn",
                    typeName: ["all", "abb"],
                    typeCurrentName: "abb"
                },
                customJoystick: null,
                display: {
                    customClock: null,
                    clock: {
                        x: 60,
                        y: 60
                    },
                    top: {
                        x: 225,
                        y: 1
                    },
                    default: !1,
                    custom: !1,
                    m: {
                        x: 60,
                        y: 60
                    },
                    r: {
                        x: 225,
                        y: 1
                    },
                    ms: !1
                },
                PropertyManager: {},
                acs: !0,
                lr: !1,
                showTophs: !0,
                showRechs: !0,
                con: null,
                params: "",
                arrow: !0,
                activeBadLang: !1,
                activeSounds2: !0,
                activeZoom: !1,
                activeZoomMobile: !1,
                top10Show: [],
                background: null,
                backgroundIsCustom: !1,
                nickname: null,
                code: null,
                configZoom: {
                    limitDown: .25,
                    step: .25,
                    closeUp: .5,
                    closeDown: 1
                },
                laserActive: !1,
                laserColor: 16711680,
                laser: .1,
                displayFriends: {
                    x: -10,
                    y: 315,
                    rotation: 0
                },
                enemyNameColor: null,
                enemyNameFontSize: null,
                novidadewormworld: 0
            };
            var M = localStorage.getItem("wwc_version")
              , L = localStorage.getItem("wwcSaveGame")
              , B = localStorage.getItem("wwc_config");
            for (var D in L &&= JSON.parse(L),
            L)
                switch (D) {
                case "configJoystick":
                    if (!L[D])
                        break;
                    for (var N in bbs[D] = L[D],
                    L[D].buttons)
                        bbs[D].buttons[N] = L[D].buttons[N];
                    for (var q in L[D])
                        bbs[D][q] = L[D][q];
                    break;
                case "joystick":
                    for (var F in bbs[D] = _wwc.joystick(),
                    L[D])
                        bbs[D][F] = L[D][F];
                    break;
                case "display":
                    for (var H in L[D])
                        bbs[D][H] = L[D][H];
                    break;
                default:
                    bbs[D] = L[D]
                }
            bbs.version && 2 === bbs.version || (bbs.version = 2,
            bbs.joystick = _wwc.joystick()),
            bbs.loading = !0,
            window.respawnFn = function() {
                kt.dh.Cn = 0,
                kt.dh.mq && kt.dh.mq.close(),
                kt.dh.mq = null,
                kt.dh.Zp = function(t, e) {
                    _wwc.Zp(bbs.con || t, e)
                }
                ,
                kt.Pn()
            }
            ,
            window.lobbyFn = function() {
                kt.dh.Cn = 0,
                kt.dh.mq && kt.dh.mq.close(),
                kt.dh.mq = null,
                kt.dh.Np(),
                K()
            }
            ,
            $('<button type="button" id="mm-wwc" style="float: right;line-height: 48px;width: 61px;background:rgb(53, 179, 21);color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;">⚙️</button>').insertAfter("#mm-store"),
            $(".store-view-cont").append('<div id="idReplaceSkin"></div>'),
            $(".wear-view-cont").append('<div id="idWearViewCont"></div>');
            var z = "display:none;position:relative;background:#000;padding:15px;max-width:680px;margin:10px auto;";
            _wwc.ismobile && (z = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;"),
            $("body").append('<div id="wwc-set-view" class="base-popup-view" style="' + z + '"></div>'),
            function() {
                if (!document.getElementById("wwc-set-view-style")) {
                    var t = document.createElement("style");
                    t.id = "wwc-set-view-style",
                    t.textContent = ["#wwc-set-view{", "  border-radius:12px;", "  box-shadow:0 12px 24px rgba(0,0,0,0.25);", "  position: relative;", "  overflow:hidden;", "}", "#wwc-set-view::before {", '  content:"";', "  position:absolute;", "  inset:0;", "  background: linear-gradient(120deg, #0ea5e9, #22c55e, #f59e0b, #0ea5e9);", "  background-size: 400% 400%;", "  animation: liveGradient 24s ease infinite;", "  opacity: 0.35;", "  pointer-events: none;", "}", "#wwc-set-view, #wwc-set-view * {", "  color:#000000 !important;", "}", "#wwc-set-view .section, #wwc-set-view .panel {", "  border-radius:10px;", "}", "#wwc-set-view::after {", '  content:"";', "  position:absolute;", "  inset:0;", '  background-image: url("https://timmapwormate.com/images/store/confetti-tmw.png");', "  background-repeat: repeat;", "  background-size: 300px 300px;", "  background-position: 0 0;", "  animation: snowDrift 22s ease-in-out infinite;", "  opacity: 0.22;", "  pointer-events: none;", "}", "@keyframes snowDrift {", "  0%   { background-position: 0px   -120px; }", "  25%  { background-position: 40px   120px; }", "  50%  { background-position: 0px    260px; }", "  75%  { background-position: -40px  120px; }", "  100% { background-position: 0px   -120px; }", "}", "#wwc-set-view button, #wwc-set-view .btn, #wwc-set-view a.button {", "  background: linear-gradient(180deg,#3b82f6 0%, #2563eb 100%);", "  color:#000000 !important;", "  border:none;", "  border-radius:10px;", "  padding:8px 14px;", "  cursor:pointer;", "  box-shadow:0 2px 8px rgba(0,0,0,0.20);", "  transition: transform .06s ease, filter .2s ease;", "}", "#wwc-set-view button:hover, #wwc-set-view .btn:hover, #wwc-set-view a.button:hover {", "  filter:brightness(1.05);", "}", "#wwc-set-view button:active, #wwc-set-view .btn:active, #wwc-set-view a.button:active {", "  transform: translateY(1px);", "}", "#wwc-set-view .btn-secondary {", "  background: linear-gradient(180deg,#10b981 0%, #059669 100%) !important;", "}", "#wwc-set-view .btn-danger {", "  background: linear-gradient(180deg,#ef4444 0%, #dc2626 100%) !important;", "}"].join("\n"),
                    document.head.appendChild(t)
                }
            }(),
            function() {
                if (!document.getElementById("live-bg-style")) {
                    var t = document.createElement("style");
                    t.id = "live-bg-style",
                    t.textContent = ["html, body { height: 100%; }", "body.live-bg {", "  background: linear-gradient(120deg, #0ea5e9, #22c55e, #f59e0b, #0ea5e9);", "  background-size: 400% 400%;", "  animation: liveGradient 24s ease infinite;", "}", "@keyframes liveGradient {", "  0% { background-position: 0% 50%; }", "  50% { background-position: 100% 50%; }", "  100% { background-position: 0% 50%; }", "}", "#wwc-set-view { background-color: rgba(255,255,255,0.92) !important; }"].join("\n"),
                    document.head.appendChild(t)
                }
                function e() {
                    var t = document.getElementById("mm-menu-cont");
                    !t || null === t.offsetParent && "none" === window.getComputedStyle(t).display ? document.body.classList.add("live-bg") : document.body.classList.remove("live-bg")
                }
                e(),
                setInterval(e, 500)
            }(),
            function() {
                if (!document.getElementById("live-bgcanvas-style")) {
                    var t = document.createElement("style");
                    t.id = "live-bgcanvas-style",
                    t.textContent = ["#background-canvas { position: relative; ", '  background-image: url("https://timmapwormate.com/images/store/confetti-tmw.png");', "  background-repeat: repeat;", "  background-size: 320px 320px;", "  background-position: 0 0;", "  animation: moveBgCanvas 18s linear infinite; }", "@keyframes moveBgCanvas {", "  0%   { background-position: 0px 0px; }", "  50%  { background-position: 320px 240px; }", "  100% { background-position: 640px 0px; }", "}", "#background-canvas::before {", '  content: "";', "  position: absolute;", "  inset: 0;", "  background: linear-gradient(120deg, rgba(14,165,233,0.25), rgba(34,197,94,0.25), rgba(245,158,11,0.25), rgba(14,165,233,0.25));", "  background-size: 300% 300%;", "  animation: liveGradientBgCanvas 28s ease infinite;", "  pointer-events: none;", "}", "#background-canvas::after {", '  content: "";', "  position: absolute;", "  inset: 0;", '  background-image: url("https://timmapwormate.com/images/store/confetti-tmw.png");', "  background-repeat: repeat;", "  background-size: 320px 320px;", "  background-position: 0 0;", "  animation: snowDriftBgCanvas 26s ease-in-out infinite;", "  opacity: .18;", "  pointer-events: none;", "}", "@keyframes liveGradientBgCanvas {", "  0% { background-position: 0% 50%; }", "  50% { background-position: 100% 50%; }", "  100% { background-position: 0% 50%; }", "}", "@keyframes snowDriftBgCanvas {", "  0%   { background-position: 0px   -120px; }", "  25%  { background-position: 60px   120px; }", "  50%  { background-position: 0px    260px; }", "  75%  { background-position: -60px  120px; }", "  100% { background-position: 0px   -120px; }", "}"].join("\n"),
                    document.head.appendChild(t)
                }
            }(),
            window.mbf = {};
            var G = function(t) {
                if (!bbs.shiftKey) {
                    var e = 30
                      , n = 0;
                    return 7 != t && "7" != t.key || null !== x ? 8 != t && "8" != t.key || null !== x ? void (null !== x && (clearInterval(x),
                    kt.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, !0),
                    x = null)) : (kt.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, !0),
                    void o(2)) : (kt.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, !0),
                    void o(1))
                }
                function o(t) {
                    x = setInterval((function() {
                        var i;
                        1 === t && (n += 1) % 80 == 0 && (e += 18,
                        clearInterval(x),
                        o(1)),
                        (i = ((i = parseFloat(kt.og.af.Bn)) - .06) % (2 * Math.PI)) < 0 && (i += 2 * Math.PI),
                        kt.og.af.Bn = i.toFixed(2)
                    }
                    ), e)
                }
            };
            mbf.mbfass0 = function() {
                _wwcio.findFriend()
            }
            ,
            mbf.mbfass1 = function(t=!0) {
                var e = C ? 100 : 400;
                t ? S < e && (S *= 1.25) > e && (S = e) : S > .5 && (S > 5 ? S /= 1.25 : S *= .75,
                S < .5 && (S = .5)),
                w2c2020.zoom.text = "x" + S.toFixed(2)
            }
            ,
            mbf.mbfass2 = function() {
                S > .5 && (S > 5 ? S /= 1.25 : S *= .75,
                S < .5 && (S = .5)),
                w2c2020.zoom.text = "x" + S.toFixed(2)
            }
            ,
            mbf.mbfass3 = function() {
                mbf.mbf_rotate ? (G(8),
                $("#mbf_rotate").css("background-color", "#000")) : G(x ? 0 : 8),
                x ? (mbf.mbf_snail = !0,
                $("#mbf_snail").css("background-color", "#156ab3")) : (mbf.mbf_snail = !1,
                $("#mbf_snail").css("background-color", "#000"))
            }
            ,
            mbf.mbfass4 = function() {
                mbf.mbf_snail ? ($("#mbf_snail").css("background-color", "#000"),
                G(8)) : G(x ? 0 : 8),
                x ? (mbf.mbf_rotate = !0,
                $("#mbf_rotate").css("background-color", "#156ab3")) : (mbf.mbf_rotate = !1,
                $("#mbf_rotate").css("background-color", "#000"))
            }
            ,
            mbf.mbfass5 = function() {
                window.location.reload()
            }
            ,
            mbf.mbfass6 = function() {
                respawnFn()
            }
            ,
            mbf.mbfass7 = function() {
                S = 1,
                w2c2020.zoom.text = "x1"
            }
            ,
            mbf.mbfass9 = function(t) {
                var e = C ? 100 : 2;
                t.value <= e && (S = t.value,
                w2c2020.zoom.text = "x" + t.value)
            }
            ,
            mbf.mbf_cambiar_origin = null,
            mbf.mbf_cambiar_current = 35,
            mbf.mbf_cambiar_seq = 35,
            mbf.mbf_cambiar_add = function(t, e) {
                bbs.cambiar || (bbs.cambiar = {}),
                bbs.cambiar[t] ? alert("Skin already exists in the list of skins to be") : (bbs.cambiar[t] = e || "Skin " + t,
                alert("Skin added to the list of skins to be"),
                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs)),
                console.log(bbs.cambiar))
            }
            ,
            mbf.mbf_cambiar = function() {
                null === mbf.mbf_cambiar_origin && (mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh);
                var t = Object.keys(bbs.cambiar);
                mbf.mbf_cambiar_seq >= t.length && (mbf.mbf_cambiar_seq = 0);
                for (var e = 0; e < t.length; e++)
                    if (mbf.mbf_cambiar_current = t[e],
                    e === mbf.mbf_cambiar_seq) {
                        mbf.mbf_cambiar_current = t[e];
                        break
                    }
                mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1,
                _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current,
                _wwc._anApp.dh.ch.Sm()
            }
            ,
            bbs.activeZoom && (window.onwheel = function(t) {
                t.deltaY < 0 ? mbf.mbfass1() : mbf.mbfass2()
            }
            );
            var U, V, X = $("#idReplaceSkin"), W = (U = v(g().mark((function t(e, n) {
                return g().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (!n) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return e || (e = kt.u.wi),
                            console.log(e),
                            bbs.userId = e.userId,
                            t.next = 7,
                            fetch(URLSERV_WORMWORLD + "/load-page", {
                                headers: {
                                    "Content-Type": "application/json",
                                    "x-access-token": bbs.tk,
                                    "x-uid": vLS4d59d9b6cc24740ef3ab
                                },
                                method: "POST",
                                body: JSON.stringify(e)
                            }).then((function(t) {
                                t.text().then((function(t) {
                                    $(".description-text").html(t),
                                    "error" === e.type && $(".description-text").html(e.msg)
                                }
                                ))
                            }
                            )).catch((function() {
                                $(".description-text").html("Problema de conexão.")
                            }
                            ));
                        case 7:
                            return t.next = 9,
                            fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                                headers: {
                                    "Content-Type": "application/json",
                                    "x-access-token": bbs.tk,
                                    "x-uid": vLS4d59d9b6cc24740ef3ab
                                },
                                method: "POST",
                                body: JSON.stringify({
                                    userId: bbs.userId
                                })
                            }).then((function(t) {
                                t.text().then((function(t) {
                                    $("#wwc-set-view").html(t),
                                    $("#mm-wwc").click((function(t) {
                                        $("#wwc-set-view").css("display", "block")
                                    }
                                    )),
                                    _wwc.load_con(),
                                    _wwc.fnSaveGame(),
                                    _wwc.fnSetCounts("start"),
                                    $("#backgroundArena").change((function() {
                                        var t = $(this).val();
                                        bbs.background = t,
                                        bbs.backgroundUri = null,
                                        kt.xe._g = xt.bgg(t),
                                        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs)),
                                        _wwc._anApp.og.af.ng.Lg.$g(kt.xe._g),
                                        alert("Background changed!")
                                    }
                                    ));
                                    var e = _wwc.isNumberValid(bbs.idReplaceSkin);
                                    if (e)
                                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                                    else {
                                        var n = $("#inputReplaceSkin").val();
                                        e = _wwc.isNumberValid(n),
                                        bbs.idReplaceSkin = e ? n : 33
                                    }
                                    bbs.joystick ? ($("#joystick_checked").prop("checked", bbs.joystick.checked),
                                    $("#joystick_color").val(bbs.joystick.color),
                                    $("#joystick_mode").val(bbs.joystick.mode),
                                    $("#joystick_position").val(bbs.joystick.positionMode),
                                    $("#joystick_size").val(bbs.joystick.size),
                                    $("#joystick_pxy").val(bbs.joystick.pxy)) : ($("#joystick_checked").val(!0),
                                    $("#joystick_color").val("red"),
                                    $("#joystick_mode").val("dynamic"),
                                    $("#joystick_position").val("L"),
                                    $("#joystick_size").val(100),
                                    $("#joystick_pxy").val(100))
                                }
                                ))
                            }
                            ));
                        case 9:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return U.apply(this, arguments)
            }
            ), J = function(t) {
                bbs.PropertyManager && (bbs.PropertyManager.lj && (t.skinId = bbs.PropertyManager.lj),
                bbs.PropertyManager.mj && (t.eyesId = bbs.PropertyManager.mj),
                bbs.PropertyManager.nj && (t.mouthId = bbs.PropertyManager.nj),
                bbs.PropertyManager.pj && (t.glassesId = bbs.PropertyManager.pj),
                bbs.PropertyManager.oj && (t.hatId = bbs.PropertyManager.oj))
            }, Z = (V = v(g().mark((function t(e, n) {
                var o, r, s, a, c;
                return g().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return $("#mm-params-nickname").prop("maxlength", k),
                            t.next = 3,
                            fetch(URLSERV_WORMWORLD + "/register", {
                                headers: {
                                    "Content-Type": "application/json",
                                    "x-access-token": bbs.tk,
                                    "x-wuid": bbs.wuid,
                                    "x-uid": vLS4d59d9b6cc24740ef3ab
                                },
                                method: "POST",
                                body: JSON.stringify(e)
                            }).then(function() {
                                var t = v(g().mark((function t(e) {
                                    return g().wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                e.json();
                                            case 2:
                                                return t.abrupt("return", t.sent);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()).catch((function() {
                                $(".description-text").html("Problema de conexão.")
                            }
                            ));
                        case 3:
                            for ((o = t.sent) || ((o = {}).tk = 1),
                            bbs.tk = o.tk,
                            C = o.customer,
                            e.propertyList = o.propertyList,
                            n(e),
                            W(o),
                            _wwc._anApp = kt,
                            _wwc._tx = function(t) {
                                Object.keys(t).forEach((function(e) {
                                    t[e].Yi && (t[e].fj.nh.Cc.xc.width = t[e].fj.nh.Cc.xc.width + 2,
                                    t[e].fj.nh.Cc.xc.height = t[e].fj.nh.Cc.xc.height + 2)
                                }
                                ))
                            }
                            ,
                            _wwc.Zp = kt.dh.Zp,
                            kt.dh.Dq = function(t, e, n=0) {
                                try {
                                    fetch(URLSERV_WORMWORLD + "/game-connect", {
                                        headers: {
                                            "Content-Type": "application/json",
                                            "x-access-token": bbs.tk,
                                            "x-uid": vLS4d59d9b6cc24740ef3ab
                                        },
                                        method: "POST",
                                        body: JSON.stringify({
                                            userId: kt.Ij.Rk.userId,
                                            nickname: bbs.nickname,
                                            code: bbs.code,
                                            teamRoom: _wwcio.player.teamRoom
                                        })
                                    }).then((o = v(g().mark((function o(i) {
                                        var r, s;
                                        return g().wrap((function(o) {
                                            for (; ; )
                                                switch (o.prev = o.next) {
                                                case 0:
                                                    return o.next = 2,
                                                    i.json();
                                                case 2:
                                                    if (r = o.sent,
                                                    s = kt.dh,
                                                    !r.connected) {
                                                        o.next = 8;
                                                        break
                                                    }
                                                    return alert("Update Page\n\nWarning:We detected an invalid action. This may have occurred because your access token was updated, but the game was not properly restarted. Please refresh the page to continue playing safely. If the problem persists, make sure you are not using external modifications or unauthorized extensions."),
                                                    s.Cq(),
                                                    o.abrupt("return");
                                                case 8:
                                                    s.mq = new WebSocket(t),
                                                    s.mq.binaryType = "arraybuffer",
                                                    S = _wwc.ismobile ? 1.25 : 1,
                                                    bbs.start = new Date,
                                                    bbs.con = t,
                                                    xt.setIntervalRun = setInterval((function() {
                                                        xt.ps3()
                                                    }
                                                    ), 16),
                                                    s.mq.onopen = function() {
                                                        Y(),
                                                        _wwc.fnSetCounts("open"),
                                                        e()
                                                    }
                                                    ,
                                                    s.mq.onclose = function() {
                                                        K(),
                                                        _wwc.fnSetCounts("close"),
                                                        _wwc.stopGame(),
                                                        clearInterval(xt.setIntervalRun),
                                                        xt.loadBg = !1,
                                                        bbs.start = 0
                                                    }
                                                    ,
                                                    s.mq.onerror = function(t) {
                                                        K(),
                                                        _wwc.fnSetCounts("close"),
                                                        _wwc.stopGame(),
                                                        clearInterval(xt.setIntervalRun),
                                                        xt.loadBg = !1,
                                                        bbs.start = 0,
                                                        n > 4 ? s.Cq() : setTimeout((function() {
                                                            n++,
                                                            console.log("Reconnect server"),
                                                            kt.dh.Dq(bbs.con, e, n)
                                                        }
                                                        ), 2e3)
                                                    }
                                                    ,
                                                    s.mq.onmessage = function(t) {
                                                        s.Kp.Ph(t.data)
                                                    }
                                                    ;
                                                case 19:
                                                case "end":
                                                    return o.stop()
                                                }
                                        }
                                        ), o)
                                    }
                                    ))),
                                    function(t) {
                                        return o.apply(this, arguments)
                                    }
                                    ))
                                } catch (t) {
                                    console.log(t),
                                    i.Cq()
                                }
                                var o
                            }
                            ,
                            kt.dh.Kp.Yh = function(t, e) {
                                K(),
                                this.dh.Oi()
                            }
                            ,
                            kt.og.af.ng.Ug.Uf = function(t) {
                                var e = xt.$F.M(xt.POGL.Sprite, (function() {
                                    xt.POGL.Sprite.call(this),
                                    this.sh = 0
                                }
                                ));
                                for (var n in this.rh)
                                    null != t[n] && t[n].hd || (xt.$F.U(this.rh[n]),
                                    delete this.rh[n]);
                                var o = 0
                                  , i = 1;
                                for (var r in bbs.display.custom && (i = window.innerWidth),
                                t) {
                                    var s = t[r];
                                    if (s.hd) {
                                        var a = this.rh[r];
                                        if (!a) {
                                            var c = kt.Lc.Ub().pb(s.nd).ub;
                                            (a = new e).texture = c.Ea(),
                                            a.width = 40,
                                            a.height = 40,
                                            this.rh[r] = a,
                                            this.addChild(a)
                                        }
                                        w2c2020.setPtc(this, r, s.od),
                                        a.sh = s.od,
                                        a.position.x = o + (bbs.display.custom ? bbs.display.clock.x * i : 0),
                                        a.position.y = bbs.display.custom ? bbs.display.clock.y : a.position.y,
                                        o += 40
                                    }
                                }
                            }
                            ,
                            bbs.display.customClock || kt.og.af.ng.Tg.addChild(w2c2020.clock),
                            kt.og.af.ng.Tg.addChild(w2c2020.containerCountInfo),
                            kt.og.af.ng.Tg.addChild(w2c2020.containerHstop),
                            w2c2020.containerHstop.alpha = bbs.showTophs ? 1 : 0,
                            kt.og.af.ng.Tg.addChild(w2c2020.containerHsRec),
                            w2c2020.containerHsRec.alpha = bbs.showRechs ? 1 : 0,
                            kt.og.af.ng.Tg.addChild(w2c2020.labelRoom),
                            w2c2020.ptc = {},
                            r = [30, 30, 30, 80, 30, 20, 30],
                            s = 0; s < r.length; s++)
                                a = "clock_ad" + s,
                                w2c2020.ptc[a] = new PIXI.Text(r[s],w2c2020.fontStyle["tfc" + s]),
                                w2c2020.ptc[a].y = 61;
                            w2c2020.setPtc = function(t, e, n) {
                                var o = r[e] - parseInt((.99 == n ? 1 : n) * r[e] / 1)
                                  , i = "clock_ad" + e;
                                t.rh[e].addChild(w2c2020.ptc[i]),
                                w2c2020.ptc[i] && (w2c2020.ptc[i].x = o >= 100 ? 11 : o >= 10 ? 18 : 26,
                                w2c2020.ptc[i].text = o)
                            }
                            ,
                            c = kt.og.af.ng.Eb,
                            mbf.onmovepoint = function(t) {
                                ("touch" !== t.pointerType || t.isPrimary) && (void 0 !== t.clientX ? kt.og.af.Bn = Math.atan2(t.clientY - .5 * c.offsetHeight, t.clientX - .5 * c.offsetWidth) : kt.og.af.Bn = Math.atan2(t.pageY - .5 * c.offsetHeight, t.pageX - .5 * c.offsetWidth))
                            }
                            ,
                            mbf.onRun = function(t) {
                                t && "touch" === t.pointerType || (kt.og.af.An = !0)
                            }
                            ,
                            mbf.onStop = function(t) {
                                t && "touch" === t.pointerType || (kt.og.af.An = !1)
                            }
                            ,
                            c.addEventListener("pointermove", mbf.onmovepoint, !0),
                            c.addEventListener("pointerdown", mbf.onRun, !0),
                            c.addEventListener("pointerup", mbf.onStop, !0),
                            _wwc.ismobile && (c.addEventListener("touchstart", (function(t) {
                                (t = t || window.event) && (kt.og.af.An = t.touches.length >= 2),
                                t.preventDefault()
                            }
                            ), !0),
                            c.addEventListener("touchend", (function(t) {
                                (t = t || window.event) && (kt.og.af.An = t.touches.length >= 2)
                            }
                            ), !0));
                        case 35:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return V.apply(this, arguments)
            }
            ), K = function() {
                var t;
                I && ($("#wwc-mobile-box").remove(),
                $("#wwc-mobile-box-slider").remove(),
                I.destroy()),
                (t = document.getElementById("zone_joystick")) && t.remove()
            }, Y = function() {
                try {
                    if (_wwc.ismobile) {
                        var t = ""
                          , e = "all" === bbs.configJoystick.typeCurrentName ? "label" : "labelAbbreviation";
                        Object.keys(bbs.configJoystick.buttons).forEach((function(n) {
                            t += bbs.configJoystick.buttons[n].active ? '<button onclick="' + bbs.configJoystick.buttons[n].action + '" id="mbf_' + n + '">' + bbs.configJoystick.buttons[n][e] + "</button>" : ""
                        }
                        ));
                        var n = '\n        <style>\n          #wwc-mobile-box {\n            position: fixed;z-index: 1001;width: 100%;top: 10px;\n          }\n          #wwc-mobile-buttons {\n            position: relative;margin: 0 auto;width: 265px;\n            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;\n          }\n          #wwc-mobile-buttons > button {\n            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;\n            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;\n            align-items: center;\n          }\n          .game-slider-container-02 {\n            position: fixed;z-index: 1000;bottom: 50px;right: 45px;\n          }\n          .game-slider-container-02 input[type=range][orient=vertical] {\n              writing-mode: vertical-lr;\n              direction: rtl;\n              appearance: slider-vertical;\n              width: 16px;\n              vertical-align: bottom;\n          }\n        </style>\n        <div id="wwc-mobile-box"><div id="wwc-mobile-buttons" style="">' + t + "</div></div>";
                        n += "btn" === bbs.configJoystick.typeCurrent ? "" : '<div id="wwc-mobile-box-slider" class="game-slider-container-02"><input id="sliderZoom" orient="vertical" onchange="mbf.mbfass9(this)" type="range" min="0.25" max="' + (C ? 12 : 2) + '" step="0.25" value="1" style="height: 65vh;"></div>',
                        $("body").append(n)
                    }
                    _wwc.ismobile && bbs.joystick.checked && (bbs.customJoystick && console.log("customJoystick"),
                    function() {
                        I && I.destroy();
                        var t, e = f({}, bbs.joystick), n = {};
                        if (bbs.customJoystick) {
                            (t = document.createElement("div")).style.position = "fixed",
                            t.style.top = "0",
                            t.style.height = "100%",
                            t.style.width = "100%",
                            t.style.zIndex = "1000",
                            t.id = "zone_joystick",
                            document.body.appendChild(t);
                            var o, i = function(t, e) {
                                var n, o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!o) {
                                    if (Array.isArray(t) || (o = d(t))) {
                                        o && (t = o);
                                        var i = 0
                                          , r = function() {};
                                        return {
                                            s: r,
                                            n: function(t) {
                                                function e() {
                                                    return t.apply(this, arguments)
                                                }
                                                return e.toString = function() {
                                                    return t.toString()
                                                }
                                                ,
                                                e
                                            }((function() {
                                                return i >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[i++]
                                                }
                                            }
                                            )),
                                            e: function(t) {
                                                throw t
                                            },
                                            f: r
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var s = !0
                                  , a = !1;
                                return {
                                    s: function() {
                                        o = o.call(t)
                                    },
                                    n: function() {
                                        var t = o.next();
                                        return s = t.done,
                                        t
                                    },
                                    e: function(t) {
                                        a = !0,
                                        n = t
                                    },
                                    f: function() {
                                        try {
                                            s || null == o.return || o.return()
                                        } finally {
                                            if (a)
                                                throw n
                                        }
                                    }
                                }
                            }(bbs.customJoystick.buttons);
                            try {
                                for (i.s(); !(o = i.n()).done; ) {
                                    var r = o.value
                                      , s = document.createElement("div");
                                    r.svg ? s.innerHTML = r.svg : (s.style.color = r.color || "#FFF",
                                    s.style.backgroundColor = r.backgroundColor || "#000",
                                    s.style.borderRadius = "10px",
                                    s.style.textAlign = "center",
                                    s.style.fontWeight = "bold",
                                    s.style.padding = "5px",
                                    s.style.border = "1px solid #f00",
                                    s.style.fontSize = r.size || "25px",
                                    s.innerHTML = r.value),
                                    s.style.position = "absolute",
                                    s.style.top = r.top,
                                    s.style.left = r.left,
                                    s.style.display = r.display,
                                    s.style.cursor = "pointer",
                                    s.id = "cbjt_" + r.value,
                                    s.dataset.size = r.size,
                                    s.dataset.color = r.color || "#FFF",
                                    s.style.opacity = .6,
                                    document.getElementById("zone_joystick").appendChild(s),
                                    "none" !== r.display && ("ZoomIn" === r.value && s.addEventListener("click", (function(t) {
                                        mbf.mbfass2()
                                    }
                                    )),
                                    "ZoomOut" === r.value && s.addEventListener("click", (function(t) {
                                        mbf.mbfass1()
                                    }
                                    )),
                                    "Accelerator" === r.value && (s.addEventListener("pointerdown", (function(t) {
                                        mbf.onRun()
                                    }
                                    )),
                                    s.addEventListener("pointerup", (function(t) {
                                        mbf.onStop()
                                    }
                                    ))),
                                    "Respawn" === r.value && s.addEventListener("click", (function(t) {
                                        respawnFn()
                                    }
                                    )),
                                    "Rotate" === r.value && s.addEventListener("click", (function(t) {
                                        G(x ? 0 : 8)
                                    }
                                    )),
                                    "Snail" === r.value && s.addEventListener("click", (function(t) {
                                        G(x ? 0 : 7)
                                    }
                                    )),
                                    "Lobby" === r.value && s.addEventListener("click", (function(t) {
                                        lobbyFn()
                                    }
                                    )),
                                    "Search" === r.value && s.addEventListener("click", (function(t) {
                                        mbf.mbfass0()
                                    }
                                    ))),
                                    n[r.value] = s
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                            n.Directional;
                            var a = n.Directional.dataset.size / 2
                              , c = parseInt(n.Directional.style.left.replace("px", "")) + a
                              , l = parseInt(n.Directional.style.top.replace("px", "")) + a;
                            e = {
                                zone: n.Directional,
                                mode: "static",
                                position: {
                                    left: "50%",
                                    top: "50%"
                                },
                                dumbBox: {
                                    left: c,
                                    top: l
                                },
                                color: "transparent",
                                size: Math.floor(n.Directional.dataset.size / 1.6)
                            }
                        } else
                            e.zone = document.getElementById("game-view"),
                            "static" === e.mode && delete e.zone;
                        (I = nipplejs.create(e)).on("start end", (function(t, e) {}
                        )).on("move", (function(t, e) {
                            var n = e.angle.radian <= Math.PI ? -1 * e.angle.radian : Math.PI - (e.angle.radian - Math.PI);
                            kt.og.af.Bn = n
                        }
                        )),
                        bbs.customJoystick && $(".nipple > .front").css("background", n.Directional.dataset.color)
                    }())
                } catch (t) {
                    console.error(t)
                }
            }, Q = localStorage.getItem("custom_wormworld_wear"), tt = localStorage.getItem("custom_wormworld_skin"), et = localStorage.getItem("custom_wormworld_badLang"), nt = localStorage.getItem("custom_wormworld_background"), ot = localStorage.getItem("custom_wormworld_audio"), it = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
            et && (it = it.concat(JSON.parse(et))),
            window.badLanguageRegEx = (it || []).join("|");
            var rt = function(t) {
                return (t = (t = t.replace(new RegExp(badLanguageRegEx,"gim"), ":")).replace(/\uFDFD/g, "")).substring(0, k)
            };
            _wwc.customConfig = function(t) {
                var e, n;
                if (Q && (Q = JSON.parse(Q)).wear)
                    if ("2" == Q.version)
                        Q.data.forEach((function(e, n) {
                            !function(e, n=0) {
                                var o = e.id.toString()
                                  , i = e.type.toString().toLowerCase() + "VariantArray"
                                  , r = e.type.toString().toLowerCase() + "Dict";
                                t.textureDict[o] = {
                                    custom: !0,
                                    re1ativePath: e.file,
                                    reference: 1e3 + n
                                },
                                t.regionDict[o] = {
                                    texture: o,
                                    x: e.x,
                                    y: e.y,
                                    w: e.w,
                                    h: e.h,
                                    px: e.px,
                                    py: e.py,
                                    pw: 128,
                                    ph: 128
                                },
                                t[r][1e3 + n] = {
                                    base: [{
                                        region: o
                                    }],
                                    guest: !1,
                                    nonbuyable: !1,
                                    price: 0,
                                    priceBefore: 0,
                                    id: o
                                },
                                t[i].push([1e3 + n])
                            }(e, n)
                        }
                        ));
                    else {
                        for (var o in Q.wear.textureDict)
                            t.textureDict[o] = {},
                            t.textureDict[o].h1 = !0,
                            t.textureDict[o].h3 = !0,
                            t.textureDict[o].re1ativePath = Q.wear.textureDict[o].file;
                        for (var i in Q.wear.regionDict) {
                            t.regionDict[i] = Q.wear.regionDict[i];
                            var r = t.regionDict[i];
                            t[r.list][r.obj.id.toString()] = r.obj,
                            t[r.listVariant].push([r.obj.id.toString()])
                        }
                    }
                if (tt) {
                    if ("2" == (tt = JSON.parse(tt)).version_skin) {
                        for (var s = "SKIN_" + tt.id + "___Z", a = {
                            id: s,
                            regionDict: {},
                            textureDict: {},
                            skinArrayDict: [],
                            skinGroupArrayDict: [{
                                id: s,
                                name: {
                                    en: "Custom V2"
                                },
                                list: []
                            }],
                            version_skin: 3
                        }, c = {
                            id: s,
                            guest: !1,
                            price: 0,
                            priceBefore: 0,
                            nonbuyable: !1,
                            prime: "c_white",
                            glow: tt.glow,
                            base: []
                        }, d = tt.len - 1; d >= 0; d--)
                            a.regionDict[s + "_" + d] = (e = d,
                            {
                                texture: s,
                                h: (n = tt.cos) - 5,
                                w: n - 5,
                                x: n * (e || 0),
                                y: 0
                            }),
                            c.base.push(s + "_" + d);
                        if (a.textureDict[s] = {
                            custom: !0,
                            re1ativePath: tt.file || tt.td.file,
                            h1: !0,
                            h4: !0
                        },
                        a.skinArrayDict.push(c),
                        a.skinGroupArrayDict[0].list.push(s),
                        !tt.textureDict[s])
                            return void alert("Error! Texture not found:" + p + " - load again.")
                    }
                    if ("3" == tt.version_skin) {
                        for (var u in tt)
                            "object" === w(tt[u]) && (t[u] = Array.isArray(tt[u]) ? [].concat(l(t[u]), l(tt[u])) : f(f({}, t[u]), tt[u]));
                        return
                    }
                    var h = tt.skin.id;
                    for (var m in tt.skin.id = h.toString(),
                    tt.textureDict)
                        t.textureDict[m] = tt.textureDict[m],
                        t.textureDict[m].re1ativePath = tt.textureDict[m].file,
                        t.textureDict[m].h1 = !0,
                        t.textureDict[m].h4 = !0;
                    for (var b in tt.regionDict)
                        t.regionDict[b] = tt.regionDict[b];
                    t.skinGroupArrayDict.push({
                        id: "custom",
                        name: {
                            en: "Custom"
                        },
                        list: [h]
                    }),
                    t.skinArrayDict.push(tt.skin)
                }
            }
            ,
            window.w2c2020 = {
                fontStyle: {
                    amarelo: new PIXI.TextStyle({
                        align: "center",
                        fill: "#f8d968",
                        fontSize: 10,
                        lineJoin: "round",
                        stroke: "white",
                        strokeThickness: 1,
                        whiteSpace: "normal",
                        wordWrap: !0
                    }),
                    branco: new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 10,
                        lineJoin: "round",
                        whiteSpace: "normal",
                        wordWrap: !0,
                        fontWeight: "bold"
                    }),
                    hsBranco: new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 9,
                        lineJoin: "round",
                        whiteSpace: "normal",
                        wordWrap: !0,
                        fontWeight: "bold"
                    }),
                    hsBrancoRight: new PIXI.TextStyle(m({
                        align: "center",
                        fill: "#fff",
                        fontSize: 9,
                        lineJoin: "round",
                        whiteSpace: "normal",
                        wordWrap: !0,
                        fontWeight: "bold"
                    }, "align", "right")),
                    brancoXzoom: new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 12,
                        lineJoin: "round",
                        whiteSpace: "normal",
                        wordWrap: !0,
                        fontWeight: "bold"
                    }),
                    verdeXzoom: new PIXI.TextStyle({
                        align: "center",
                        fill: "#0ff555",
                        fontSize: 9,
                        lineJoin: "round",
                        whiteSpace: "normal",
                        wordWrap: !0,
                        fontWeight: "bold"
                    })
                }
            };
            for (var st = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"], at = 0; at < st.length; at++) {
                var ct = st[at];
                w2c2020.fontStyle["tfc" + at] = new PIXI.TextStyle({
                    align: "center",
                    fill: ct,
                    fontSize: 25,
                    lineJoin: "round",
                    whiteSpace: "normal",
                    wordWrap: !0,
                    fontWeight: "bold"
                })
            }
            w2c2020.zoom = new PIXI.Text("x1",w2c2020.fontStyle.brancoXzoom),
            w2c2020.zoom.x = 82,
            w2c2020.zoom.y = 105,
            w2c2020.conteinerTeam = new PIXI.Container,
            w2c2020.conteinerTeam.id = "team",
            w2c2020.friends = new PIXI.Container,
            w2c2020.friends.background = new PIXI.Graphics,
            w2c2020.friends.background.beginFill(0, .4),
            w2c2020.friends.background.drawRect(0, 0, 100, 130),
            w2c2020.friends.background.endFill(),
            w2c2020.friends.addChild(w2c2020.friends.background),
            w2c2020.friends.position.x = bbs.displayFriends?.x || -10,
            w2c2020.friends.position.y = bbs.displayFriends?.y || 315,
            w2c2020.friends.position.rotate = bbs.displayFriends?.rotate || 0,
            w2c2020.friends.alpha = 0,
            w2c2020.moveSprite = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/move-icon.png"),
            w2c2020.moveSprite.width = 20,
            w2c2020.moveSprite.height = 20,
            w2c2020.moveSprite.x = 75,
            w2c2020.moveSprite.y = 130,
            w2c2020.moveSprite.interactive = !0,
            w2c2020.moveSprite.buttonMode = !0,
            w2c2020.rotation = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/rotate-icon.png"),
            w2c2020.rotation.width = 25,
            w2c2020.rotation.height = 25,
            w2c2020.rotation.x = 45,
            w2c2020.rotation.y = 130,
            w2c2020.rotation.interactive = !0,
            w2c2020.rotation.buttonMode = !0,
            w2c2020.friends.addChild(w2c2020.moveSprite),
            w2c2020.friends.addChild(w2c2020.rotation);
            var lt = !1
              , dt = {
                x: 0,
                y: 0
            };
            w2c2020.rotation.on("pointerdown", (function(t) {
                w2c2020.friends.rotation += Math.PI / 2,
                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}))
            }
            )),
            w2c2020.moveSprite.on("pointerdown", (function(t) {
                lt = !0,
                dt.x = t.data.global.x - w2c2020.friends.x,
                dt.y = t.data.global.y - w2c2020.friends.y
            }
            )),
            w2c2020.moveSprite.on("pointerup", (function() {
                lt = !1
            }
            )),
            w2c2020.moveSprite.on("pointerupoutside", (function() {
                lt = !1
            }
            )),
            w2c2020.moveSprite.on("pointermove", (function(t) {
                if (lt) {
                    var e = t.data.global;
                    w2c2020.friends.x = e.x - dt.x,
                    w2c2020.friends.y = e.y - dt.y,
                    bbs.displayFriends.x = w2c2020.friends.x,
                    bbs.displayFriends.y = w2c2020.friends.y,
                    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}))
                }
            }
            )),
            w2c2020.moveSprite.visible = !1,
            w2c2020.rotation.visible = !1,
            window.addEventListener("keydown", (function(t) {
                "Escape" === t.key && (w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible,
                w2c2020.rotation.visible = !w2c2020.rotation.visible)
            }
            )),
            w2c2020.label_hs = new PIXI.Text("HS",w2c2020.fontStyle.amarelo),
            w2c2020.label_hs.x = 15,
            w2c2020.label_hs.y = 107,
            w2c2020.hs = new PIXI.Text("0",w2c2020.fontStyle.amarelo),
            w2c2020.hs.x = 20,
            w2c2020.hs.y = 119,
            w2c2020.hsTotal = new PIXI.Text("0",w2c2020.fontStyle.branco),
            w2c2020.hsTotal.x = 20,
            w2c2020.hsTotal.y = 132,
            w2c2020.label_kill = new PIXI.Text("KILL",w2c2020.fontStyle.amarelo),
            w2c2020.label_kill.x = 50,
            w2c2020.label_kill.y = 107,
            w2c2020.kill = new PIXI.Text("0",w2c2020.fontStyle.amarelo),
            w2c2020.kill.x = 60,
            w2c2020.kill.y = 120,
            w2c2020.killTotal = new PIXI.Text("0",w2c2020.fontStyle.branco),
            w2c2020.killTotal.x = 60,
            w2c2020.killTotal.y = 133,
            w2c2020.clock = PIXI.Sprite.from(URL_CDN + "https://wormup.in/assets/images/clock.png"),
            w2c2020.clock.width = 100,
            w2c2020.clock.height = 100,
            w2c2020.clock.x = -50,
            w2c2020.clock.y = -50,
            w2c2020.containerHsRec = new PIXI.Container,
            w2c2020.containerHsRec.x = -55,
            w2c2020.containerHsRec.y = 195,
            w2c2020.containerHstop = new PIXI.Container,
            w2c2020.containerHstop.x = -55,
            w2c2020.containerHstop.y = 95,
            w2c2020.containerHsIndex = new PIXI.Container,
            w2c2020.containerHsNames = new PIXI.Container,
            w2c2020.containerHsValue = new PIXI.Container,
            w2c2020.top1rec = "🥇",
            w2c2020.top2rec = "🥈",
            w2c2020.top3rec = "🥉",
            w2c2020.titleRec = new PIXI.Text("Records (kb 0)",w2c2020.fontStyle.amarelo),
            w2c2020.titleRec.y = -5;
            for (var ut = 0; ut < 3; ut++) {
                var ht = ut + 1
                  , pt = new PIXI.Text(w2c2020["top" + ht + "rec"],w2c2020.fontStyle.hsBrancoRight);
                pt.x = ut >= 9 ? -5 : 0,
                pt.y = 13 * ht,
                w2c2020.containerHsRec.addChild(pt);
                var ft = new PIXI.Text("--",w2c2020.fontStyle.hsBranco);
                ft.x = 15,
                ft.y = 13 * ht,
                w2c2020.containerHsRec.addChild(ft);
                var mt = new PIXI.Text("-",w2c2020.fontStyle.hsBrancoRight);
                mt.x = 135,
                mt.y = 13 * ht,
                w2c2020.containerHsRec.addChild(mt)
            }
            w2c2020.containerHsRec.addChild(w2c2020.titleRec);
            var bt = function(t, e) {
                if (e && e.length > 0)
                    for (var n = 0; n < 3; n++)
                        w2c2020.containerHsRec.children[n] && (w2c2020.containerHsRec.children[3 * n + 1].text = e && e[n] ? e[n].nickname.substring(0, 17) : "--"),
                        w2c2020.containerHsRec.children[n] && (w2c2020.containerHsRec.children[3 * n + 2].text = e && e[n] ? e[n].score : "--");
                if (t && t.length > 0)
                    for (var o = 0; o < 6; o++) {
                        var i = "--"
                          , r = "--";
                        t && t[o] && (i = t[o].nickname ? t[o].nickname.substring(0, 14) : "--",
                        r = parseInt(t[o].score || 0)),
                        w2c2020.containerHsNames.children[o] && (w2c2020.containerHsNames.children[o].text = i),
                        w2c2020.containerHsValue.children[o] && (w2c2020.containerHsValue.children[o].text = r)
                    }
            };
            w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)",w2c2020.fontStyle.amarelo));
            for (var gt = 0; gt < 6; gt++) {
                var yt = new PIXI.Text(gt + 1,w2c2020.fontStyle.hsBranco);
                yt.x = gt >= 9 ? -5 : 0,
                yt.y = 13 * (gt + 1),
                w2c2020.containerHsIndex.addChild(yt);
                var vt = new PIXI.Text("..",w2c2020.fontStyle.hsBranco);
                vt.x = 10,
                vt.y = 13 * (gt + 1),
                w2c2020.containerHsNames.addChild(vt);
                var wt = new PIXI.Text(0,w2c2020.fontStyle.hsBrancoRight);
                wt.x = 130,
                wt.y = 13 * (gt + 1),
                w2c2020.containerHsValue.addChild(wt)
            }
            w2c2020.containerHstop.addChild(w2c2020.containerHsIndex),
            w2c2020.containerHstop.addChild(w2c2020.containerHsNames),
            w2c2020.containerHstop.addChild(w2c2020.containerHsValue),
            w2c2020.containerCountInfo = new PIXI.Container,
            w2c2020.containerCountInfo.x = -45,
            w2c2020.containerCountInfo.y = -52,
            w2c2020.containerCountInfo.addChild(w2c2020.zoom),
            w2c2020.containerCountInfo.addChild(w2c2020.friends),
            w2c2020.containerCountInfo.addChild(w2c2020.label_hs),
            w2c2020.containerCountInfo.addChild(w2c2020.hs),
            w2c2020.containerCountInfo.addChild(w2c2020.hsTotal),
            w2c2020.containerCountInfo.addChild(w2c2020.label_kill),
            w2c2020.containerCountInfo.addChild(w2c2020.kill),
            w2c2020.containerCountInfo.addChild(w2c2020.killTotal),
            w2c2020.labelRoom = new PIXI.Text("",w2c2020.fontStyle.amarelo),
            w2c2020.labelRoom.x = -50,
            w2c2020.labelRoom.y = -56,
            w2c2020.addRoom = function(t) {
                w2c2020.labelRoom.text = t || "?"
            }
            ,
            window.addEventListener("keydown", (function(t) {
                if ("7" == t.key && G(x ? 0 : 7),
                "8" == t.key && G(x ? 0 : 8),
                "0" === t.key && bbs.showRechs && (w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha),
                "9" === t.key && bbs.showTophs && (w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha),
                "6" === t.key && xt.setIntervalRun && (j = !j),
                "5" === t.key && respawnFn(),
                "4" === t.key) {
                    var e = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
                    e && (e.alpha = e.alpha ? 0 : .3)
                }
                if ("3" === t.key) {
                    var n = T;
                    backgroundArena.length < n && (n = bbs.background || 0,
                    T = 0),
                    _wwc._anApp.og.af.ng.Lg.$g(xt.bgg(n)),
                    T++
                }
                "1" === t.key && mbf.mbf_cambiar(),
                "x1" === t.key && _wwcio.update(1),
                "x2" === t.key && _wwcio.update(2),
                ("<" === t.key || "," === t.key && xt.setIntervalRun) && mbf.mbfass1(),
                (">" === t.key || "." === t.key && xt.setIntervalRun) && mbf.mbfass2(),
                ("z" === t.key || "Z" === t.key && xt.setIntervalRun) && (S = bbs.configZoom?.closeDown || 1,
                w2c2020.zoom.text = "x" + S),
                ("c" === t.key || "C" === t.key && xt.setIntervalRun) && (w2c2020.zoom.text = .5 === S ? "x2" : "CLOSE-UP",
                S = .5 === S ? 2 : bbs.configZoom?.closeUp || .25)
            }
            ));
            var _t, kt = {
                Lc: {
                    Gb: {}
                }
            }, xt = {
                pm: {},
                ps: 0,
                ps2: function(t, e, n) {
                    var o = 255 & ((n ? 128 : 0) | xt.$F.N(e) / xt.$V.F * 128 & 127)
                      , i = new ArrayBuffer(1);
                    new DataView(i).setInt8(0, o),
                    t.Eq(i),
                    t.nq = o
                },
                ps3: function() {
                    kt.dh.xq(kt.og.af.Gn(), kt.og.af.Hn())
                },
                setIntervalRun: null,
                loadBg: !1,
                LG: function(t, e, n) {
                    t.Ll("gg", n.credential, null)
                },
                Lg: function(t) {
                    return kt.xe._g = xt.bgg(),
                    _wwc.$C = t,
                    _wwc.$W = xt,
                    bbs.bgGameWidth > 512 ? new t.WMGBS1 : new t.WMGBS2
                },
                registry: (_t = v(g().mark((function t(e) {
                    var n;
                    return g().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "x-uid": vLS4d59d9b6cc24740ef3ab
                                    },
                                    body: JSON.stringify(e)
                                }).then((function(t) {
                                    return t.ok ? t.json() : e
                                }
                                ));
                            case 2:
                                return n = t.sent,
                                t.abrupt("return", n);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function(t) {
                    return _t.apply(this, arguments)
                }
                ),
                Vd: function(t, e) {
                    if (_wwc.customConfig(t),
                    t) {
                        var n = this;
                        if (this.Fd)
                            this.Pd();
                        else {
                            var o = []
                              , i = new PIXI.Loader;
                            for (var r in t.textureDict)
                                if (t.textureDict.hasOwnProperty(r)) {
                                    var s = t.textureDict[r]
                                      , a = s.re1ativePath || s.relativePath
                                      , c = s.fileSize || 100
                                      , l = s.sha256 || null
                                      , d = new e.Wd(r,a,c,l);
                                    d.h1 = s.h1,
                                    d.h4 = s.h4,
                                    d.skinEvo = s.skinEvo,
                                    d.lines = s.lines,
                                    d.speed = s.speed,
                                    o.push(d),
                                    i.add(r, a)
                                }
                            i.onProgress.add((function(t, o) {
                                var i, r;
                                i = t.progress / 100,
                                r = e.Id.Ld,
                                n.Rd(r, e.Od.bc(r).lc(i))
                            }
                            )),
                            i.load((function(i, r) {
                                o.forEach((function(t) {
                                    t.resource = r[t.ae]
                                }
                                )),
                                n.$d(t, o, e)
                            }
                            ))
                        }
                    }
                },
                Zd: function(t, e, n, o) {
                    $.ajax({
                        type: "GET",
                        url: t._d,
                        xhrFields: {
                            responseType: "arraybuffer",
                            onprogress: function(t) {
                                t.lengthComputable && o(t.loaded / t.total)
                            }
                        }
                    }).fail((function() {
                        e(new Error)
                    }
                    )).done((function(t) {
                        n(t)
                    }
                    ))
                },
                $d: function(t, e, n) {
                    var o = this;
                    if (this.Fd)
                        this.Pd();
                    else {
                        var i, r = {}, s = function() {
                            try {
                                return a < e.length ? (i = e[a],
                                a++,
                                r[i.ae] = new xt.$C.be(i.resource.texture,i.resource.texture.baseTexture),
                                void s()) : o.ce(t, r)
                            } catch (t) {
                                console.error(t)
                            }
                        }, a = 0;
                        s()
                    }
                },
                p: function(t, e) {
                    t = t.split("|"),
                    xt.pm[t[0]] = {
                        p: t[1],
                        i: e
                    }
                },
                ae: function(t, e, n) {
                    if (1 !== e.maV) {
                        e.maV = 1;
                        var o = e.ma.trim().match(_);
                        if (o && n.dh.Fh[e.ae]) {
                            var i = function(t, e) {
                                return t.includes("_") ? h["WEAR_W" + s + "_" + t] ? h["WEAR_W" + s + "_" + t].reference : e : _wwc.wearMap[t]
                            }
                              , r = o[3]
                              , s = o[4]
                              , a = o[5]
                              , c = o[6]
                              , l = o[7]
                              , d = o[8]
                              , u = o[9]
                              , h = kt.Lc.Xb().textureDict
                              , p = "B" === r;
                            if ("000" !== a) {
                                var f = "SKIN_S" + a.substring(0, 2) + "___" + a.substring(2)
                                  , m = h[f];
                                n.dh.Fh[e.ae].Eh.Hh = p ? m ? f : n.dh.Fh[e.ae].Eh.Hh : parseInt(_wwc.skinMap[a])
                            }
                            "00" !== c && (n.dh.Fh[e.ae].Eh.ni = i(c, n.dh.Fh[e.ae].Eh.ni)),
                            "00" !== l && (n.dh.Fh[e.ae].Eh.oi = i(l, n.dh.Fh[e.ae].Eh.oi)),
                            "00" !== d && (n.dh.Fh[e.ae].Eh.pi = i(d, n.dh.Fh[e.ae].Eh.pi)),
                            "00" !== u && (n.dh.Fh[e.ae].Eh.qi = i(u, n.dh.Fh[e.ae].Eh.qi)),
                            n.dh.Fh[e.ae].Eh.ma = rt(n.dh.Fh[e.ae].Eh.ma)
                        }
                    }
                    e.ma = rt(e.ma)
                },
                Xp: function(t, e, n, o, i, r, s) {
                    _wwc.skinMap || (_wwc.skinMap = kt.Lc.Xb().skinMap),
                    _wwc.wearMap || (_wwc.wearMap = kt.Lc.Xb().wearMap);
                    var a = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/
                      , c = kt.Lc.Xb().hatDict[s] ? kt.Lc.Xb().hatDict[s].id : s
                      , l = kt.Lc.Xb().glassesDict[r] ? kt.Lc.Xb().glassesDict[r].id : r
                      , d = kt.Lc.Xb().glassesDict[i] ? kt.Lc.Xb().mouthDict[i].id : i
                      , u = kt.Lc.Xb().glassesDict[o] ? kt.Lc.Xb().eyesDict[o].id : o
                      , h = "A"
                      , p = ""
                      , f = "__"
                      , m = function(t, e) {
                        if (a.test(t)) {
                            var n = a.exec(t);
                            return {
                                id: n[2],
                                value: n[3],
                                testRun: !0
                            }
                        }
                        return {
                            id: null,
                            value: null,
                            testRun: !1
                        }
                    }
                      , b = {
                        h: m(n),
                        r: m(u),
                        a: m(d),
                        f: m(l),
                        c: m(c)
                    };
                    b.h.testRun && (p = b.h.id.substring(1),
                    h = "B"),
                    (b.r.testRun || b.a.testRun || b.f.testRun || b.c.testRun) && (f = (b.r.id || b.a.id || b.f.id || b.c.id).substring(1));
                    var g, y = function(t, e) {
                        return b[e].value ? b[e].value.padStart("h" === e ? 3 : 2, "0") : _wwc["h" === e ? "testSkinMod" : "testWear"](t || 0) ? _wwc["h" === e ? "skinMap" : "wearMap"][t] || ("h" === e ? "000" : "00") : b[e].testRun ? t.toString().padStart("h" === e ? 3 : 2, "0") : "h" === e ? "000" : "00"
                    }, v = y(n, "h"), w = y(o, "r"), _ = y(i, "a"), x = y(r, "f"), j = y(s, "c"), I = h + f + p + v.replace("__", "") + w + _ + x + j;
                    return bbs.code = (v || "000") + "|" + (j || "00"),
                    bbs.nickname = (g = I,
                    e.substring(0, k).padEnd(k, "_") + g),
                    bbs.nickname
                },
                bgg: function(t) {
                    t = parseInt(t);
                    var e = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
                    isNaN(t) || (e = backgroundArena[t]?.uri || e,
                    bbs.bgGameWidth = backgroundArena[t]?.w || 512,
                    bbs.bgGameHeight = backgroundArena[t]?.h || 256);
                    var n = PIXI.BaseTexture.from(e);
                    return bbs.bgGameWidth = n.width || bbs.bgGameWidth || 512,
                    bbs.bgGameHeight = n.height || bbs.bgGameHeight || 256,
                    n.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT,
                    new PIXI.Texture(n)
                },
                genereteTexture: function(t) {
                    var e = 128;
                    try {
                        return function() {
                            for (var n = [], o = 0; o < t.lines; o++) {
                                lineContainer = [];
                                for (var i = 0; i < 9; i++)
                                    try {
                                        var r = PIXI.Texture.from(t._d, {
                                            x: i * e,
                                            y: o * e,
                                            width: e,
                                            height: e
                                        });
                                        lineContainer.push(r)
                                    } catch (t) {
                                        return console.log(o, i),
                                        void console.log(t)
                                    }
                                n.push(lineContainer)
                            }
                            return n
                        }()
                    } catch (t) {
                        return []
                    }
                }
            }, jt = {
                headshot: window.URL_CDN + "/sounds/headshot_sound_effect.mp3",
                shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
                speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
                curve: window.URL_CDN + "/sounds/yes_effect.mp3",
                loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
                top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
            };
            for (var It in P.ref = ["speed", "curve"],
            jt)
                P[It] = new o.Howl({
                    src: [jt[It]],
                    html5: !0,
                    autoplay: "top1" == It,
                    loop: !1
                });
            var St, Ct = {
                "rotate(0deg)": 0,
                "rotate(90deg)": 1.5707963267948966,
                "rotate(180deg)": 3.141592653589793,
                "rotate(270deg)": 4.71238898038469,
                "rotate(360deg)": 0
            }, Tt = "function" == typeof Symbol && "symbol" == w(Symbol.iterator) ? function(t) {
                return w(t)
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : w(t)
            }
            ;
            window.addEventListener("load", (function() {
                document.getElementById("game-wrap").style.display = "unblock",
                function(t, e, n) {
                    function o() {
                        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : d ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
                    }
                    var i = []
                      , r = []
                      , s = {
                        _version: "3.3.1",
                        _config: {
                            classPrefix: "",
                            enableClasses: !0,
                            enableJSClass: !0,
                            usePrefixes: !0
                        },
                        _q: [],
                        on: function(t, e) {
                            var n = this;
                            setTimeout((function() {
                                e(n[t])
                            }
                            ), 0)
                        },
                        addTest: function(t, e, n) {
                            r.push({
                                name: t,
                                fn: e,
                                options: n
                            })
                        },
                        addAsyncTest: function(t) {
                            r.push({
                                name: null,
                                fn: t
                            })
                        }
                    }
                      , a = function() {};
                    a.prototype = s,
                    a = new a;
                    var c = !1;
                    try {
                        c = "WebSocket"in t && 2 === t.WebSocket.CLOSING
                    } catch (t) {}
                    a.addTest("websockets", c);
                    var l = e.documentElement
                      , d = "svg" === l.nodeName.toLowerCase();
                    a.addTest("canvas", (function() {
                        var t = o("canvas");
                        return !!t.getContext && !!t.getContext("2d")
                    }
                    )),
                    a.addTest("canvastext", (function() {
                        return !1 !== a.canvas && "function" == typeof o("canvas").getContext("2d").fillText
                    }
                    )),
                    function() {
                        var t, e, n, o, s, c, l;
                        for (var d in r)
                            if (r.hasOwnProperty(d)) {
                                if (t = [],
                                (e = r[d]).name && (t.push(e.name.toLowerCase()),
                                e.options && e.options.aliases && e.options.aliases.length))
                                    for (n = 0; n < e.options.aliases.length; n++)
                                        t.push(e.options.aliases[n].toLowerCase());
                                for (o = "function" === (void 0 === (l = e.fn) ? "undefined" : Tt(l)) ? e.fn() : e.fn,
                                s = 0; s < t.length; s++)
                                    1 === (c = t[s].split(".")).length ? a[c[0]] = o : (!a[c[0]] || a[c[0]]instanceof Boolean || (a[c[0]] = new Boolean(a[c[0]])),
                                    a[c[0]][c[1]] = o),
                                    i.push((o ? "" : "no-") + c.join("-"))
                            }
                    }(),
                    function(t) {
                        var e = l.className
                          , n = a._config.classPrefix || "";
                        if (d && (e = e.baseVal),
                        a._config.enableJSClass) {
                            var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                            e = e.replace(o, "$1" + n + "js$2")
                        }
                        a._config.enableClasses && (e += " " + n + t.join(" " + n),
                        d ? l.className.baseVal = e : l.className = e)
                    }(i),
                    delete s.addTest,
                    delete s.addAsyncTest;
                    for (var u = 0; u < a._q.length; u++)
                        a._q[u]();
                    t.Modernizr = a
                }(window, document),
                Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext ? function() {
                    function t() {
                        return kt
                    }
                    var e, n = {}, o = {}, i = {
                        a: {
                            r: window.runtimeHash,
                            b: "https://gateway.wormate.io",
                            c: "https://resources.wormate.io",
                            d: "/images/linelogo-valday2023.png",
                            e: "/images/guest-avatar-valday2023.png",
                            f: "/images/confetti-valday2023.png",
                            g: "/images/bg-event-pattern-valday2023.png"
                        }
                    };
                    i.a.i = (e = window.I18N_LANG,
                    e ||= "en",
                    e),
                    i.a.j = function() {
                        var t = void 0;
                        switch (i.a.i) {
                        case "uk":
                            t = "uk_UA";
                            break;
                        case "de":
                            t = "de_DE";
                            break;
                        case "fr":
                            t = "fr_FR";
                            break;
                        case "es":
                            t = "es_ES";
                            break;
                        default:
                            t = "en_US"
                        }
                        return t
                    }(),
                    moment.locale(i.a.j);
                    var r, a, l, d, u, h, p, b, y, w, _ = {
                        Container: PIXI.Container,
                        BaseTexture: PIXI.BaseTexture,
                        Texture: PIXI.Texture,
                        Renderer: PIXI.Renderer,
                        Graphics: PIXI.Graphics,
                        Shader: PIXI.Shader,
                        Rectangle: PIXI.Rectangle,
                        Sprite: PIXI.Sprite,
                        Text: PIXI.Text,
                        Geometry: PIXI.Geometry,
                        Mesh: PIXI.Mesh,
                        v: {
                            z: PIXI.BLEND_MODES.ADD,
                            A: PIXI.BLEND_MODES.SCREEN,
                            B: PIXI.BLEND_MODES.MULTIPLY
                        },
                        C: {
                            D: PIXI.WRAP_MODES.REPEAT
                        }
                    };
                    o.F = 6.283185307179586,
                    o.G = Math.PI,
                    i.H = function(t) {
                        return window.I18N_MESSAGES[t]
                    }
                    ,
                    i.I = function(t) {
                        return t[i.a.i] ? t[i.a.i] : t.en ? t.en : t.x
                    }
                    ,
                    i.J = function(t) {
                        var e = (Math.floor(t) % 60).toString()
                          , n = (Math.floor(t / 60) % 60).toString()
                          , o = (Math.floor(t / 3600) % 24).toString()
                          , r = Math.floor(t / 86400).toString()
                          , s = i.H("util.time.days")
                          , a = i.H("util.time.hours")
                          , c = i.H("util.time.min")
                          , l = i.H("util.time.sec");
                        return r > 0 ? r + " " + s + " " + o + " " + a + " " + n + " " + c + " " + e + " " + l : o > 0 ? o + " " + a + " " + n + " " + c + " " + e + " " + l : n > 0 ? n + " " + c + " " + e + " " + l : e + " " + l
                    }
                    ,
                    i.K = function(t) {
                        return t.includes("href") ? t.replaceAll("href", 'target="_black" href') : t
                    }
                    ,
                    i.L = function(t, e, n, o) {
                        var i = document.createElement("script");
                        "undefined" !== Tt(e) && null !== e && ("undefined" !== Tt(e.id) && (i.id = e.id),
                        "undefined" !== Tt(e.async) && e.async && (i.async = "async"),
                        "undefined" !== Tt(e.defer) && e.defer && (i.defer = "defer"),
                        "undefined" !== Tt(e.crossorigin) && (i.crossorigin = e.crossorigin)),
                        i.type = i.type == o ? "module" : "text/javascript",
                        i.src = t,
                        n && (i.onload = i.onreadystatechange = function() {
                            try {
                                n()
                            } catch (t) {}
                            i.onload = i.onreadystatechange = null
                        }
                        ),
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                    }
                    ,
                    i.M = function(t, e) {
                        var n = e;
                        return n.prototype = Object.create(t.prototype),
                        n.prototype.constructor = n,
                        n.parent = t,
                        n
                    }
                    ,
                    i.N = function(t) {
                        return (t %= o.F) < 0 ? t + o.F : t
                    }
                    ,
                    i.O = function(t, e, n) {
                        return i.P(n, t, e)
                    }
                    ,
                    i.P = function(t, e, n) {
                        return t > n ? n : t < e ? e : Number.isFinite(t) ? t : .5 * (e + n)
                    }
                    ,
                    i.Q = function(t, e, n, o) {
                        return e > t ? Math.min(e, t + n * o) : Math.max(e, t - n * o)
                    }
                    ,
                    i.R = function(t, e, n, o, i) {
                        return e + (t - e) * Math.pow(1 - o, n / i)
                    }
                    ,
                    i.S = function(t, e, n) {
                        return t - (t - e) * n
                    }
                    ,
                    i.T = function(t, e, n, o) {
                        var i = n
                          , r = e
                          , s = e + o;
                        if (null == t)
                            throw new TypeError("this is null or not defined");
                        var a = t.length >>> 0
                          , c = i >> 0
                          , l = c < 0 ? Math.max(a + c, 0) : Math.min(c, a)
                          , d = r >> 0
                          , u = d < 0 ? Math.max(a + d, 0) : Math.min(d, a)
                          , h = void 0 === s ? a : s >> 0
                          , p = h < 0 ? Math.max(a + h, 0) : Math.min(h, a)
                          , f = Math.min(p - u, a - l)
                          , m = 1;
                        for (u < l && l < u + f && (m = -1,
                        u += f - 1,
                        l += f - 1); f > 0; )
                            u in t ? t[l] = t[u] : delete t[l],
                            u += m,
                            l += m,
                            f--;
                        return t
                    }
                    ,
                    i.U = function(t) {
                        null != t.parent && t.parent.removeChild(t)
                    }
                    ,
                    i.V = function(t, e) {
                        return t + (e - t) * Math.random()
                    }
                    ,
                    i.W = function(t) {
                        return t[parseInt(Math.random() * t.length)]
                    }
                    ,
                    i.X = function() {
                        return Math.random().toString(36).substring(2, 15)
                    }
                    ,
                    i.Y = function(t, e, n) {
                        var o = (1 - Math.abs(2 * n - 1)) * e
                          , i = o * (1 - Math.abs(t / 60 % 2 - 1))
                          , r = n - o / 2;
                        return t >= 0 && t < 60 ? [r + o, r + i, r + 0] : t >= 60 && t < 120 ? [r + i, r + o, r + 0] : t >= 120 && t < 180 ? [r + 0, r + o, r + i] : t >= 180 && t < 240 ? [r + 0, r + i, r + o] : t >= 240 && t < 300 ? [r + i, r + 0, r + o] : [r + o, r + 0, r + i]
                    }
                    ,
                    i.Z = function(t, e, n) {
                        $.get(t).fail(e).done(n)
                    }
                    ,
                    i.$ = function(t, e, n, o) {
                        $.ajax({
                            type: "GET",
                            url: t,
                            xhrFields: {
                                responseType: "arraybuffer",
                                onprogress: function(t) {
                                    t.lengthComputable && o(t.loaded / t.total * 100)
                                }
                            }
                        }).fail(e).done(n)
                    }
                    ,
                    i._ = function(t, e) {
                        for (var n in t)
                            t.hasOwnProperty(n) && e(n, t[n])
                    }
                    ,
                    i.aa = function(t) {
                        for (var e = t.length - 1; e > 0; e--) {
                            var n = Math.floor(Math.random() * (e + 1))
                              , o = t[e];
                            t[e] = t[n],
                            t[n] = o
                        }
                        return t
                    }
                    ,
                    function() {
                        var t = 0;
                        try {
                            DataView.prototype.ba = function(e) {
                                try {
                                    return t = e,
                                    this.getInt8(e)
                                } catch (e) {
                                    return console.log(t),
                                    kt.dh.mq.close(),
                                    0
                                }
                            }
                            ,
                            DataView.prototype.ca = function(e) {
                                try {
                                    return t = e,
                                    this.getInt16(e)
                                } catch (e) {
                                    return console.log(t),
                                    kt.dh.mq.close(),
                                    0
                                }
                            }
                            ,
                            DataView.prototype.da = function(e) {
                                try {
                                    return t = e,
                                    this.getInt32(e)
                                } catch (e) {
                                    return console.log(t),
                                    kt.dh.mq.close(),
                                    0
                                }
                            }
                            ,
                            DataView.prototype.ea = function(e) {
                                try {
                                    return t = e,
                                    this.getFloat32(e)
                                } catch (e) {
                                    return console.log(t),
                                    kt.dh.mq.close(),
                                    0
                                }
                            }
                            ,
                            DataView.prototype.fa = function(e) {
                                try {
                                    return t = e,
                                    this.getFloat64(e)
                                } catch (e) {
                                    return console.log(t),
                                    kt.dh.mq.close(),
                                    0
                                }
                            }
                        } catch (e) {
                            console.log(t),
                            console.error("Error adding methods to DataView prototype:", e)
                        }
                    }(),
                    i.ga = function() {
                        var t = !1
                          , e = function() {}
                          , n = {};
                        return $("#adbl-continue").click((function() {
                            $("#JDHnkHtYwyXyVgG9").fadeOut(500),
                            e(!1)
                        }
                        )),
                        n.ha = function(n) {
                            if (e = n,
                            !t)
                                try {
                                    aiptag.cmd.player.push((function() {
                                        aiptag.adplayer = new aipPlayer
                                    }
                                    )),
                                    t = !0
                                } catch (t) {}
                        }
                        ,
                        n.ia = function() {
                            try {
                                ga("send", "event", "antiadunblocker", window.runtimeHash + "_start")
                            } catch (t) {}
                            !function() {
                                if (URLSERV_WORMWORLD) {
                                    try {
                                        ga("send", "event", "antiadunblocker", window.runtimeHash + "_complete")
                                    } catch (t) {}
                                    e(!0)
                                }
                            }()
                        }
                        ,
                        n
                    }
                    ,
                    i.ja = function(t, e) {
                        var n = $("#" + t)
                          , o = e
                          , i = {}
                          , r = !1;
                        return i.ha = function() {
                            if (!r) {
                                n.empty(),
                                n.append("<div id='" + o + "'></div>");
                                try {
                                    try {
                                        ga("send", "event", "banner", window.runtimeHash + "_display")
                                    } catch (t) {}
                                    aiptag.cmd.display.push((function() {
                                        aipDisplayTag.display(o)
                                    }
                                    )),
                                    r = !0
                                } catch (t) {}
                            }
                        }
                        ,
                        i.ka = function() {
                            try {
                                try {
                                    ga("send", "event", "banner", window.runtimeHash + "_refresh")
                                } catch (t) {}
                                aiptag.cmd.display.push((function() {
                                    aipDisplayTag.display(o)
                                }
                                ))
                            } catch (t) {}
                        }
                        ,
                        i
                    }
                    ,
                    n.la = function() {
                        function t(t, e, n, o, i, r, s, a, c, l, d) {
                            this.ma = t,
                            this.na = e,
                            this.oa = null,
                            this.pa = !1,
                            this.qa = n,
                            this.ra = o,
                            this.sa = i,
                            this.ta = r,
                            this.ua = s || (c || i) / 2,
                            this.va = a || (l || r) / 2,
                            this.wa = c || i,
                            this.xa = l || r,
                            this.ya = .5 - (this.ua - .5 * this.wa) / this.sa,
                            this.za = .5 - (this.va - .5 * this.xa) / this.ta,
                            this.Aa = this.sa / this.wa,
                            d && (this.ev = d),
                            this.Ba = this.ta / this.xa
                        }
                        return t.Ca = function() {
                            return new t("",null,0,0,0,0,0,0,0,0)
                        }
                        ,
                        t.Da = function(e, n, o, i) {
                            return new t(e,n,o.x,o.y,o.w,o.h,o.px,o.py,o.pw,o.ph,i)
                        }
                        ,
                        t.prototype.Ea = function() {
                            return this.pa || (null != this.na && (this.oa = new _.Texture(this.na,new _.Rectangle(this.qa,this.ra,this.sa,this.ta))),
                            this.pa = !0),
                            this.oa
                        }
                        ,
                        t.prototype.Fa = function() {
                            null != this.oa && this.oa.destroy()
                        }
                        ,
                        t
                    }(),
                    n.Ga = function() {
                        function t(t, e, n, o, i, r, s, a, c, l, d, u, h, p, f, m, b, g) {
                            this.Ha = t,
                            this.Ia = e,
                            this.Ja = n,
                            this.Ka = o,
                            this.La = i,
                            this.Ma = r,
                            this.Na = s,
                            this.Oa = a,
                            this.Pa = c,
                            this.Qa = l,
                            this.Ra = d,
                            this.Sa = u,
                            this.Ta = h,
                            this.Ua = p,
                            this.Va = f,
                            this.Wa = m,
                            this.Xa = b,
                            this.Ya = g
                        }
                        return t.prototype.Fa = function() {
                            for (var t = 0; t < this.Ha.length; t++)
                                this.Ha[t].dispose(),
                                this.Ha[t].destroy();
                            this.Ha = [];
                            for (var e = 0; e < this.Ia.length; e++)
                                this.Ia[e].Fa();
                            this.Ia = []
                        }
                        ,
                        t.Ca = function() {
                            var e = new t.Za(n._a.$a,n._a.$a)
                              , o = new t.ab("#ffffff",[n._a.$a],[n._a.$a]);
                            return new t([],[],{},e,{},new t.bb(n._a.$a),{},o,{},new t.cb("",o,e),{},new t.db([n._a.$a]),{},new t.db([n._a.$a]),{},new t.db([n._a.$a]),{},new t.db([n._a.$a]))
                        }
                        ,
                        t.eb = function(e, o, i, r) {
                            var s = new t.Za(n._a.$a,n._a.$a)
                              , a = new t.ab("#ffffff",[e],[o]);
                            return new t([],[],{},s,{},new t.bb(n._a.$a),{},a,{},new t.cb("",a,s),{},new t.db([i]),{},new t.db([r]),{},new t.db([n._a.$a]),{},new t.db([n._a.$a]))
                        }
                        ,
                        t.fb = function(e, n, o, r) {
                            var s = {};
                            i._(e.colorDict, (function(t, e) {
                                s[t] = "#" + e
                            }
                            ));
                            for (var a = {}, c = 0; c < e.skinArrayDict.length; c++) {
                                var l = e.skinArrayDict[c];
                                a[l.id] = new t.ab(s[l.prime],l.base.map((function(t) {
                                    return n[t]
                                }
                                )),l.glow.map((function(t, e) {
                                    return n[t]
                                }
                                ))),
                                "a_trans" == l.glow[0] && (a[l.id].vbb = n.a_black)
                            }
                            var d = void 0
                              , u = e.skinUnknown;
                            try {
                                d = new t.ab(s[u.prime],u.base.map((function(t) {
                                    return n[t]
                                }
                                )),u.glow.map((function(t) {
                                    return n[t]
                                }
                                )))
                            } catch (t) {}
                            var h = {};
                            i._(e.eyesDict, (function(e, o) {
                                var i = parseInt(e);
                                h[i] = new t.db(o.base.map((function(t) {
                                    return n[t.region]
                                }
                                )))
                            }
                            ));
                            var p = new t.db(e.eyesUnknown.base.map((function(t) {
                                return n[t.region]
                            }
                            )))
                              , f = {};
                            i._(e.mouthDict, (function(e, o) {
                                var i = parseInt(e);
                                f[i] = new t.db(o.base.map((function(t) {
                                    return n[t.region]
                                }
                                )))
                            }
                            ));
                            var m = new t.db(e.mouthUnknown.base.map((function(t) {
                                return n[t.region]
                            }
                            )))
                              , b = {};
                            i._(e.hatDict, (function(e, o) {
                                var i = parseInt(e);
                                b[i] = new t.db(o.base.map((function(t) {
                                    return n[t.region]
                                }
                                )))
                            }
                            ));
                            var g = new t.db(e.hatUnknown.base.map((function(t) {
                                return n[t.region]
                            }
                            )))
                              , y = {};
                            i._(e.glassesDict, (function(e, o) {
                                var i = parseInt(e);
                                y[i] = new t.db(o.base.map((function(t) {
                                    return n[t.region]
                                }
                                )))
                            }
                            ));
                            var v = new t.db(e.glassesUnknown.base.map((function(t) {
                                return n[t.region]
                            }
                            )))
                              , w = {};
                            i._(e.portionDict, (function(e, o) {
                                e = parseInt(e),
                                w[e] = new t.Za(n[o.base],n[o.glow])
                            }
                            ));
                            var _, k = e.portionUnknown;
                            _ = new t.Za(n[k.base],n[k.glow]);
                            var x = {};
                            i._(e.abilityDict, (function(e, o) {
                                e = parseInt(e),
                                x[e] = new t.bb(n[o.base])
                            }
                            ));
                            var j, I = e.abilityUnknown;
                            j = new t.bb(n[I.base]);
                            var S = {};
                            i._(e.teamDict, (function(e, o) {
                                e = parseInt(e),
                                S[e] = new t.cb(o.title,new t.ab(s[o.skin.prime],null,o.skin.glow.map((function(t) {
                                    return n[t]
                                }
                                ))),new t.Za(null,n[o.portion.glow]))
                            }
                            ));
                            var C = new t.cb({},d,_);
                            return new t(o,r,w,_,x,j,a,d,S,C,h,p,f,m,b,g,y,v)
                        }
                        ,
                        t.prototype.gb = function(t) {
                            for (var e = i.aa(Object.keys(this.Na)).slice(0, t), o = i.aa(Object.keys(this.Ra)).slice(0, t), r = i.aa(Object.keys(this.Ta)).slice(0, t), s = i.aa(Object.keys(this.Va)).slice(0, t), a = i.aa(Object.keys(this.Xa)).slice(0, t), c = [], l = 0; l < t; l++) {
                                var d = e.length > 0 ? e[l % e.length] : 0
                                  , u = o.length > 0 ? o[l % o.length] : 0
                                  , h = r.length > 0 ? r[l % r.length] : 0
                                  , p = s.length > 0 ? s[l % s.length] : 0
                                  , f = a.length > 0 ? a[l % a.length] : 0;
                                c.push(new n.hb(d,u,h,p,f))
                            }
                            return c
                        }
                        ,
                        t.prototype.ib = function(t) {
                            return this.Na.hasOwnProperty(t) ? this.Na[t] : this.Oa
                        }
                        ,
                        t.prototype.jb = function(t) {
                            return this.Pa.hasOwnProperty(t) ? this.Pa[t] : this.Qa
                        }
                        ,
                        t.prototype.kb = function(t) {
                            return this.Ra.hasOwnProperty(t) ? this.Ra[t] : this.Sa
                        }
                        ,
                        t.prototype.lb = function(t) {
                            return this.Ta.hasOwnProperty(t) ? this.Ta[t] : this.Ua
                        }
                        ,
                        t.prototype.mb = function(t) {
                            return this.Xa.hasOwnProperty(t) ? this.Xa[t] : this.Ya
                        }
                        ,
                        t.prototype.nb = function(t) {
                            return this.Va.hasOwnProperty(t) ? this.Va[t] : this.Wa
                        }
                        ,
                        t.prototype.ob = function(t) {
                            return this.Ja.hasOwnProperty(t) ? this.Ja[t] : this.Ka
                        }
                        ,
                        t.prototype.pb = function(t) {
                            return this.La.hasOwnProperty(t) ? this.La[t] : this.Ma
                        }
                        ,
                        t.cb = function(t, e, n) {
                            this.qb = t,
                            this.rb = e,
                            this.sb = n
                        }
                        ,
                        t.ab = function(t, e, n) {
                            this.tb = t,
                            this.ub = e,
                            this.vb = n
                        }
                        ,
                        t.db = function(t) {
                            this.ub = t
                        }
                        ,
                        t.Za = function(t, e) {
                            this.ub = t,
                            this.vb = e
                        }
                        ,
                        t.bb = function(t) {
                            this.ub = t
                        }
                        ,
                        t
                    }(),
                    n._a = function() {
                        function t() {
                            for (var t = _.BaseTexture.from("/images/wear-ability.png"), e = 1; e < 10; e++)
                                this["vb" + e] = new n.la("emoji_" + e,t,4,4,146,146,63.5,63.5,128,128);
                            this.wb = new n.la("magnet_ability",t,158,86,67,124,148,63.5,128,128),
                            this.xb = new n.la("velocity_ability",t,158,4,87,74,203,63.5,128,128),
                            this.yb = new n.la("flex_ability",t,4,4,146,146,63.5,63.5,128,128);
                            var o = _.BaseTexture.from("https://i.imgur.com/LFiCido.png");
                            this.pwrFlex = new n.la("flex_ability",o,0x9c,0x8c,0x57,0x3c,0xaa,128.5,0x80,0x80),
                            e = _.BaseTexture.from("/images/def-look.png");
                            var i, r = new n.la("def_eyes",e,0,0,42,80,75,64,128,128), s = new n.la("def_mouth",e,46,0,20,48,109,63,128,128), a = new n.la("def_skin_glow",e,70,0,32,32,0,0,0,0), c = new n.la("def_skin_base",e,46,52,64,64,0,0,0,0), l = n.Ga.eb(c, a, r, s);
                            _wwc.mySkin = l,
                            this.zb = new n.Ab({},l),
                            this.Bb = -1e4,
                            this.Cb = -1e4,
                            this.Db = ((i = window.document.createElement("canvas")).width = 80,
                            i.height = 80,
                            {
                                Eb: i,
                                Fb: i.getContext("2d"),
                                oa: new _.Texture(_.BaseTexture.from(i))
                            }),
                            this.Gb = null,
                            this.Hb = []
                        }
                        return t.$a = n.la.Ca(),
                        t.prototype.ha = function() {}
                        ,
                        t.prototype.Ib = function(t, e, o) {
                            var i = this
                              , r = this.zb.Jb();
                            if (r > 0 && Date.now() - this.Bb < 12e5)
                                null != t && t();
                            else {
                                if (null != this.Gb && !this.Gb.Kb()) {
                                    if (Date.now() - this.Bb < 3e5)
                                        return void (null != t && t());
                                    this.Gb.Lb(),
                                    this.Gb = null
                                }
                                var s = new n.Mb(r);
                                s.Nb((function(t, e) {
                                    s === i.Gb && null != o && o(t, e)
                                }
                                )),
                                s.Ob((function(t) {
                                    s === i.Gb && null != e && e(t)
                                }
                                )),
                                s.Pb((function() {
                                    s === i.Gb && null != e && e(new Error)
                                }
                                )),
                                s.Qb((function() {
                                    s === i.Gb && null != t && t()
                                }
                                )),
                                s.Rb((function(e) {
                                    if (s === i.Gb)
                                        return i.Cb = Date.now(),
                                        i.Gb = null,
                                        i.Sb(),
                                        i.zb.Ub().Fa(),
                                        i.zb = e,
                                        null != t && t(),
                                        void i.Tb();
                                    try {
                                        e.Ub().Fa()
                                    } catch (t) {}
                                }
                                )),
                                s.Vb(),
                                this.Bb = Date.now(),
                                this.Gb = s
                            }
                        }
                        ,
                        t.prototype.Sb = function() {}
                        ,
                        t.prototype.Wb = function() {
                            return this.zb.Jb() > 0
                        }
                        ,
                        t.prototype.Xb = function() {
                            return this.zb.Yb()
                        }
                        ,
                        t.prototype.Zb = function() {
                            return this.Db
                        }
                        ,
                        t.prototype.$b = function(t) {
                            this.Hb.push(t)
                        }
                        ,
                        t.prototype.Tb = function() {
                            for (var t = 0; t < this.Hb.length; t++)
                                this.Hb[t]()
                        }
                        ,
                        t.prototype.Ub = function() {
                            return this.zb.Ub()
                        }
                        ,
                        t
                    }(),
                    n._b = function() {
                        function t(t) {
                            this.ac = t
                        }
                        return t.prototype.bc = function(t) {
                            return this.ac[t]
                        }
                        ,
                        t.cc = function() {
                            function e() {
                                this.dc = []
                            }
                            return e.prototype.ec = function(e, n) {
                                for (var o = 0; o < this.dc.length; o++)
                                    if (this.dc[o].fc === e)
                                        throw new Error;
                                return this.dc.push(new t.gc(e,n)),
                                this
                            }
                            ,
                            e.prototype.hc = function() {
                                for (var e = 0, n = 0; n < this.dc.length; n++)
                                    e += this.dc[n].ic;
                                for (var o = {}, i = 0, r = 0; r < this.dc.length; r++) {
                                    var s = this.dc[r];
                                    s.ic = s.ic / e,
                                    s.jc = i,
                                    s.kc = i + s.ic,
                                    i = s.kc,
                                    o[s.fc] = s
                                }
                                return new t(o)
                            }
                            ,
                            e
                        }(),
                        t.gc = function() {
                            function t(t, e) {
                                this.fc = t,
                                this.ic = e,
                                this.jc = 0,
                                this.kc = 0
                            }
                            return t.prototype.lc = function(t) {
                                return this.jc + (this.kc - this.jc) * t
                            }
                            ,
                            t
                        }(),
                        t
                    }(),
                    n.WormSpriteTree = function() {
                        function e() {
                            this.nc = new _.Container,
                            this.nc.sortableChildren = !0,
                            this.oc = new x,
                            this.oc.zIndex = o * (2 * (r + 1) + 1 + 3),
                            this.pc = 0,
                            this.qc = new Array(r),
                            this.qc[0] = this.rc(0, new n.sc, new n.sc);
                            for (var t = 1; t < r; t++)
                                this.qc[t] = this.rc(t, new n.sc, new n.sc);
                            this.tc = 0,
                            this.uc = 0,
                            this.vc = 0
                        }
                        var o = .001
                          , r = 797
                          , s = -.06640625
                          , a = .84375
                          , c = .2578125
                          , l = -.03515625
                          , d = -.0625
                          , u = .5625
                          , h = .64453125
                          , p = .45703125
                          , f = -.1015625
                          , m = .375
                          , b = .75
                          , g = -.125
                          , y = .15234375
                          , v = .94921875
                          , w = -.1015625;
                        e.wc = r,
                        e.prototype.rc = function(t, e, n) {
                            var i = new j(e,n);
                            return e.xc.zIndex = o * (2 * (r - t) + 1 + 3),
                            n.xc.zIndex = o * (2 * (r - t) - 2 + 3),
                            i
                        }
                        ,
                        e.prototype.yc = function(t, e, o, i, r, s, a, c) {
                            var l = o.ub
                              , d = t === n.Ac.zc ? e.rb.vb : o.vb;
                            if (l.length > 0 && d.length > 0)
                                for (var u = 0; u < this.qc.length; u++)
                                    this.qc[u].Cc.Bc(l[u % l.length], u % l.length, u),
                                    this.qc[u].Dc.Bc(0 == u && o.vbb ? o.vbb : d[u % d.length], u % l.length, u),
                                    this.qc[u].Cc.Ec(c),
                                    this.qc[u].Dc.Ec(c);
                            this.oc.yc(i, r, s, a)
                        }
                        ;
                        var k, x = ((k = i.M(_.Container, (function() {
                            _.Container.call(this),
                            this.sortableChildren = !0,
                            this.Fc = [],
                            this.Gc = [],
                            this.Hc = [],
                            this.Ic = [],
                            this.Jc = new _.Container,
                            this.Kc = [],
                            this.message = new _.Container;
                            for (var e = 0; e < 4; e++) {
                                var o = new n.sc;
                                o.Bc(t().Lc.wb),
                                this.Jc.addChild(o.xc),
                                this.Kc.push(o)
                            }
                            this.message.zIndex = .0012,
                            this.addChild(this.message),
                            this.VcUn(),
                            this.Jc.zIndex = .0011,
                            this.addChild(this.Jc),
                            this.Mc(),
                            this.Nc = new n.sc,
                            this.Nc.Bc(t().Lc.xb),
                            this.Nc.xc.zIndex = .001,
                            this.addChild(this.Nc.xc),
                            this.Oc(),
                            this.pwr_flex = new n.sc,
                            this.pwr_flex.Bc(t().Lc.pwrFlex),
                            this.pwr_flex.xc.zIndex = .001,
                            this.addChild(this.pwr_flex.xc),
                            this.disableFlex()
                        }
                        ))).prototype.yc = function(t, e, n, o) {
                            this.Pc(.002, this.Fc, t.ub),
                            this.Pc(.003, this.Gc, e.ub),
                            this.Pc(.004, this.Ic, o.ub),
                            this.Pc(.005, this.Hc, n.ub)
                        }
                        ,
                        k.prototype.Pc = function(t, e, o) {
                            for (; o.length > e.length; ) {
                                var i = new n.sc;
                                e.push(i),
                                this.addChild(i.Qc())
                            }
                            for (; o.length < e.length; )
                                e.pop().Rc();
                            for (var r = t, s = 0; s < o.length; s++) {
                                r += 1e-4;
                                var a = e[s];
                                a.Bc(o[s]),
                                a.xc.zIndex = r
                            }
                        }
                        ,
                        k.prototype.Sc = function(t, e, n, o) {
                            this.visible = !0,
                            this.position.set(t, e),
                            this.rotation = o;
                            for (var i = 0; i < this.Fc.length; i++)
                                this.Fc[i].Tc(n);
                            for (var r = 0; r < this.Gc.length; r++)
                                this.Gc[r].Tc(n);
                            for (var s = 0; s < this.Hc.length; s++)
                                this.Hc[s].Tc(n);
                            for (var a = 0; a < this.Ic.length; a++)
                                this.Ic[a].Tc(n)
                        }
                        ,
                        k.prototype.Uc = function() {
                            this.visible = !1
                        }
                        ,
                        k.prototype.VcAc = function(t, e, n, o, i) {
                            this.message.visible = !0,
                            this.Mc2.Tc(e)
                        }
                        ,
                        k.prototype.VcUn = function() {
                            this.message.visible = !1
                        }
                        ,
                        k.prototype.Vc = function(t, e, n, o) {
                            this.Jc.visible = !0;
                            for (var i = n / 1e3, r = 1 / this.Kc.length, s = 0; s < this.Kc.length; s++) {
                                var a = 1 - (i + r * s) % 1;
                                this.Kc[s].xc.alpha = 1 - a,
                                this.Kc[s].Tc(e * (.5 + 4.5 * a))
                            }
                        }
                        ,
                        k.prototype.Mc = function() {
                            this.Jc.visible = !1
                        }
                        ,
                        k.prototype.Wc = function(t, e, n, o) {
                            this.Nc.xc.visible = !0,
                            this.Nc.xc.alpha = i.Q(this.Nc.xc.alpha, t.Xc ? .9 : .2, o, .0025),
                            this.Nc.Tc(e)
                        }
                        ,
                        k.prototype.activeFlex = function(t, e, n, o) {
                            this.pwr_flex.xc.visible = !0,
                            this.pwr_flex.xc.alpha = i.Q(this.Nc.xc.alpha, t.Xc ? .9 : .2, o, .0025),
                            this.pwr_flex.Tc(e)
                        }
                        ,
                        k.prototype.disableFlex = function() {
                            this.pwr_flex.xc.visible = !1
                        }
                        ,
                        k.prototype.WXX = function(t, e, n, o) {
                            this.Nc.xc.visible = !0,
                            this.Nc.xc.alpha = i.Q(this.Nc.xc.alpha, t.Xc ? .9 : .2, o, .0025),
                            this.Nc.Tc(e)
                        }
                        ,
                        k.prototype.Oc = function() {
                            this.Nc.xc.visible = !1
                        }
                        ,
                        k);
                        e.prototype.Yc = function(t) {
                            return this.uc + this.vc * Math.sin(3.14159 * t - this.tc)
                        }
                        ,
                        e.prototype.Zc = function(t, e, o, r) {
                            var _, k, x, I, S, C, T, O, A = 2 * t.$c, E = t._c, R = t.ad, P = 4 * R - 3, M = P;
                            if (this.tc = e / 400 * Math.PI,
                            this.uc = 1.5 * A,
                            this.vc = .15 * A * t.bd,
                            r(k = E[0], C = E[1])) {
                                x = E[2],
                                T = E[3],
                                I = E[4],
                                O = E[5];
                                var L = Math.atan2(O + 2 * C - 3 * T, I + 2 * k - 3 * x);
                                this.oc.Sc(k, C, A, L),
                                this.qc[0].Sc(k, C, A, this.Yc(0), L),
                                this.qc[1].Sc(h * k + p * x + f * I, h * C + p * T + f * O, A, this.Yc(1), j.cd(this.qc[0], this.qc[2])),
                                this.qc[2].Sc(m * k + b * x + g * I, m * C + b * T + g * O, A, this.Yc(2), j.cd(this.qc[1], this.qc[3])),
                                this.qc[3].Sc(y * k + v * x + w * I, y * C + v * T + w * O, A, this.Yc(3), j.cd(this.qc[2], this.qc[4]))
                            } else
                                this.oc.Uc(),
                                this.qc[0].Uc(),
                                this.qc[1].Uc(),
                                this.qc[2].Uc(),
                                this.qc[3].Uc();
                            for (var B = 4, D = 2, N = 2 * R - 4; D < N; )
                                r(k = E[D], C = E[D + 1]) ? (_ = E[D - 2],
                                S = E[D - 1],
                                x = E[D + 2],
                                T = E[D + 3],
                                I = E[D + 4],
                                O = E[D + 5],
                                this.qc[B].Sc(k, C, A, this.Yc(B), j.cd(this.qc[B - 1], this.qc[B + 1])),
                                B++,
                                this.qc[B].Sc(s * _ + a * k + c * x + l * I, s * S + a * C + c * T + l * O, A, this.Yc(B), j.cd(this.qc[B - 1], this.qc[B + 1])),
                                B++,
                                this.qc[B].Sc(d * _ + u * k + u * x + d * I, d * S + u * C + u * T + d * O, A, this.Yc(B), j.cd(this.qc[B - 1], this.qc[B + 1])),
                                B++,
                                this.qc[B].Sc(l * _ + c * k + a * x + s * I, l * S + c * C + a * T + s * O, A, this.Yc(B), j.cd(this.qc[B - 1], this.qc[B + 1])),
                                B++) : (this.qc[B].Uc(),
                                B++,
                                this.qc[B].Uc(),
                                B++,
                                this.qc[B].Uc(),
                                B++,
                                this.qc[B].Uc(),
                                B++),
                                D += 2;
                            for (r(k = E[2 * R - 4], C = E[2 * R - 3]) ? (_ = E[2 * R - 6],
                            S = E[2 * R - 5],
                            x = E[2 * R - 2],
                            T = E[2 * R - 1],
                            this.qc[P - 5].Sc(k, C, A, this.Yc(P - 5), j.cd(this.qc[P - 6], this.qc[P - 4])),
                            this.qc[P - 4].Sc(w * _ + v * k + y * x, w * S + v * C + y * T, A, this.Yc(P - 4), j.cd(this.qc[P - 5], this.qc[P - 3])),
                            this.qc[P - 3].Sc(g * _ + b * k + m * x, g * S + b * C + m * T, A, this.Yc(P - 3), j.cd(this.qc[P - 4], this.qc[P - 2])),
                            this.qc[P - 2].Sc(f * _ + p * k + h * x, f * S + p * C + h * T, A, this.Yc(P - 2), j.cd(this.qc[P - 3], this.qc[P - 1])),
                            this.qc[P - 1].Sc(x, T, A, this.Yc(P - 1), j.cd(this.qc[P - 2], this.qc[P - 1]))) : (this.qc[P - 5].Uc(),
                            this.qc[P - 4].Uc(),
                            this.qc[P - 3].Uc(),
                            this.qc[P - 2].Uc(),
                            this.qc[P - 1].Uc()),
                            0 === this.pc && M > 0 && this.nc.addChild(this.oc),
                            this.pc > 0 && 0 === M && i.U(this.oc); this.pc < M; )
                                this.nc.addChild(this.qc[this.pc].Cc.Qc()),
                                this.nc.addChild(this.qc[this.pc].Dc.Qc()),
                                this.pc += 1;
                            for (; this.pc > M; )
                                this.pc -= 1,
                                this.qc[this.pc].Dc.Rc(),
                                this.qc[this.pc].Cc.Rc();
                            var $ = t.dd[n.fd.ed];
                            this.qc[0].gd() && $ && $.hd ? this.oc.Vc(t, A, e, o) : this.oc.Mc();
                            var q = t.dd[n.fd.jd];
                            this.qc[0].gd() && q && q.hd ? this.oc.Wc(t, A, e, o) : this.oc.Oc();
                            var F = t.dd[n.fd.pd];
                            this.qc[0].gd() && null != F && F.hd ? this.oc.activeFlex(t, A, e, o) : this.oc.disableFlex(),
                            movimentaLinha()
                        }
                        ;
                        var j = function() {
                            function t(t, e) {
                                this.Cc = t,
                                this.Cc.kd(!1),
                                this.Dc = e,
                                this.Dc.kd(!1),
                                this.ev = null
                            }
                            return t.prototype.Sc = function(t, e, n, o, i) {
                                this.Cc.kd(!0),
                                this.Cc.ld(t, e),
                                this.Cc.Tc(n),
                                this.Cc.md(i),
                                this.Dc.kd(!0),
                                this.Dc.ld(t, e),
                                this.Dc.Tc(o),
                                this.Dc.md(i)
                            }
                            ,
                            t.prototype.Uc = function() {
                                this.Cc.kd(!1),
                                this.Dc.kd(!1)
                            }
                            ,
                            t.prototype.gd = function() {
                                return this.Cc.gd()
                            }
                            ,
                            t.cd = function(t, e) {
                                return Math.atan2(t.Cc.xc.position.y - e.Cc.xc.position.y, t.Cc.xc.position.x - e.Cc.xc.position.x)
                            }
                            ,
                            t
                        }();
                        return e
                    }(),
                    n.fd = function() {
                        function t(t) {
                            this.nd = t,
                            this.hd = !1,
                            this.od = 1
                        }
                        return t.jd = 0,
                        t.pd = 1,
                        t.ed = 2,
                        t.qd = 6,
                        t.rd = 3,
                        t.sd = 4,
                        t.td = 5,
                        t
                    }(),
                    n.Ab = (m(r = c((function t(e, n) {
                        s(this, t),
                        this.ud = e,
                        this.vd = n
                    }
                    ), [{
                        key: "Jb",
                        value: function() {
                            return this.ud.revision
                        }
                    }, {
                        key: "Yb",
                        value: function() {
                            return xt.Jb(),
                            this.ud
                        }
                    }, {
                        key: "Ub",
                        value: function() {
                            return this.vd
                        }
                    }]), "wd", new r({},n.Ga.Ca())),
                    r),
                    n.Mb = function() {
                        function t(e) {
                            this.xd = (++t.yd,
                            function(t, e) {}
                            ),
                            this.zd = e,
                            this.Ad = null,
                            this.Bd = null,
                            this.Cd = null,
                            this.Dd = null,
                            this.Ed = null,
                            this.Fd = !1,
                            this.Gd = !1,
                            this.Hd = !1
                        }
                        return t.Id = {
                            Jd: "0x0",
                            Kd: "0x1",
                            Ld: "0x2",
                            Md: "0x3",
                            Nd: "0x4"
                        },
                        t.yd = 1e5,
                        t.Od = (new n._b.cc).ec(t.Id.Jd, 1).ec(t.Id.Kd, 10).ec(t.Id.Ld, 50).ec(t.Id.Md, 15).ec(t.Id.Nd, 5).hc(),
                        t.prototype.Rb = function(t) {
                            this.Ad = t
                        }
                        ,
                        t.prototype.Qb = function(t) {
                            this.Bd = t
                        }
                        ,
                        t.prototype.Ob = function(t) {
                            this.Cd = t
                        }
                        ,
                        t.prototype.Pb = function(t) {
                            this.Dd = t
                        }
                        ,
                        t.prototype.Nb = function(t) {
                            this.Ed = t
                        }
                        ,
                        t.prototype.Kb = function() {
                            return this.Hd
                        }
                        ,
                        t.prototype.Lb = function() {
                            this.Fd = !0
                        }
                        ,
                        t.prototype.Vb = function() {
                            if (!this.Gd) {
                                if (this.Gd = !0,
                                this.Fd)
                                    return void this.Pd();
                                this.Qd()
                            }
                        }
                        ,
                        t.prototype.Qd = function() {
                            var e = this;
                            this.Fd ? this.Pd() : $.ajax({
                                type: "GET",
                                url: i.a.c + "/dynamic/assets/revision.json",
                                xhrFields: {
                                    onprogress: function(n) {
                                        var o, i;
                                        n.lengthComputable && (o = n.loaded / n.total,
                                        i = t.Id.Jd,
                                        e.Rd(i, t.Od.bc(i).lc(o)))
                                    }
                                }
                            }).fail((function() {
                                e.Sd(new Error)
                            }
                            )).done((function(t) {
                                t <= e.zd ? e.Td() : e.Ud()
                            }
                            ))
                        }
                        ,
                        t.prototype.Ud = v(g().mark((function e() {
                            var n, o, r;
                            return g().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n = function(e) {
                                            var n = t.Id.Kd;
                                            o.Rd(n, t.Od.bc(n).lc(e))
                                        }
                                        ,
                                        o = this,
                                        !this.Fd) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", void this.Pd());
                                    case 4:
                                        return e.next = 6,
                                        fetch(URLSERV_WORMWORLD + "/version");
                                    case 6:
                                        return r = e.sent,
                                        e.next = 9,
                                        r.json();
                                    case 9:
                                        if (r = e.sent,
                                        localStorage.setItem("wwc_version", r),
                                        M != r)
                                            $.ajax({
                                                type: "GET",
                                                url: i.a.c + "/dynamic/assets/registry.json",
                                                xhrFields: {
                                                    onprogress: function(t) {
                                                        t.lengthComputable && n(t.loaded / t.total)
                                                    }
                                                }
                                            }).fail((function() {
                                                o.Sd(new Error)
                                            }
                                            )).done(function() {
                                                var e = v(g().mark((function e(n) {
                                                    return g().wrap((function(e) {
                                                        for (; ; )
                                                            switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2,
                                                                xt.registry(n);
                                                            case 2:
                                                                n = e.sent,
                                                                localStorage.setItem("wwc_config", JSON.stringify(n)),
                                                                o.Vd(n, t);
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                            }
                                                    }
                                                    ), e)
                                                }
                                                )));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        else
                                            try {
                                                B = JSON.parse(B),
                                                n(1),
                                                o.Vd(B, t)
                                            } catch (t) {
                                                console.log("ConfigError", t),
                                                localStorage.removeItem("wwc_version"),
                                                localStorage.removeItem("wwc_config")
                                            }
                                    case 12:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        ))),
                        t.prototype.Vd = xt.Vd || function(e) {
                            var n = this;
                            if (this.Fd)
                                this.Pd();
                            else {
                                var o, r = [], s = [], a = 0;
                                for (var c in e.textureDict)
                                    if (e.textureDict.hasOwnProperty(c)) {
                                        var l = e.textureDict[c]
                                          , d = i.a.c + l.relativePath
                                          , u = l.fileSize
                                          , h = l.sha256
                                          , p = new t.Wd(c,d,u,h);
                                        r.push(p),
                                        s.push(p),
                                        a += u
                                    }
                                var f = 0
                                  , m = function(t) {
                                    for (var e = 0; e < s.length; e++)
                                        try {
                                            window.URL.revokeObjectURL(s[e].Xd)
                                        } catch (t) {}
                                    n.Sd(t)
                                }
                                  , b = function(e) {
                                    var i, r, s = Math.floor(o.Yd * e);
                                    i = (f + s) / a,
                                    r = t.Id.Ld,
                                    n.Rd(r, t.Od.bc(r).lc(i))
                                }
                                  , g = function(t) {
                                    var e = new Blob([t]);
                                    o.Xd = window.URL.createObjectURL(e),
                                    f += o.Yd,
                                    y()
                                }
                                  , y = function() {
                                    if (v < s.length)
                                        return o = s[v++],
                                        void n.Zd(o, m, g, b);
                                    setTimeout((function() {
                                        return n.$d(e, r)
                                    }
                                    ), 0)
                                }
                                  , v = 0;
                                y()
                            }
                        }
                        ,
                        t.prototype.Zd = xt.Zd || function(t, e, n, o) {
                            $.ajax({
                                type: "GET",
                                url: t._d,
                                xhrFields: {
                                    responseType: "arraybuffer",
                                    onprogress: function(t) {
                                        t.lengthComputable && o(t.loaded / t.total)
                                    }
                                }
                            }).fail((function() {
                                e(new Error)
                            }
                            )).done((function(t) {
                                n(t)
                            }
                            ))
                        }
                        ,
                        t.prototype.$d = xt.$d || function(e, o) {
                            var i = this;
                            if (this.Fd)
                                this.Pd();
                            else {
                                var r, s, a = {}, c = function() {
                                    for (var t = 0; t < o.length; t++)
                                        try {
                                            window.URL.revokeObjectURL(o[t].Xd)
                                        } catch (t) {}
                                    i.Sd(new Error)
                                }, l = function() {
                                    var e, c;
                                    e = u / o.length,
                                    c = t.Id.Md,
                                    i.Rd(c, t.Od.bc(c).lc(e)),
                                    a[r.ae] = new n.be(r.Xd,s),
                                    d()
                                }, d = function() {
                                    if (u < o.length)
                                        return r = o[u++],
                                        (s = PIXI.BaseTexture.from(r.Xd)).on("error", c),
                                        void s.on("loaded", l);
                                    setTimeout((function() {
                                        return i.ce(e, a)
                                    }
                                    ), 0)
                                }, u = 0;
                                d()
                            }
                        }
                        ,
                        t.prototype.ce = function(e, o) {
                            var r = this
                              , s = {}
                              , a = 0
                              , c = Object.values(e.regionDict).length;
                            i._(e.regionDict, (function(e, i) {
                                var l, d, u = null;
                                try {
                                    var h = null;
                                    o[i.texture].ev && (h = o[i.texture].ev);
                                    var p = i.texture + ":" + e;
                                    u = n.la.Da(p, o[i.texture].oa, i, h),
                                    s[e] = u,
                                    ++a % 10 == 0 && (l = a / c,
                                    d = t.Id.Nd,
                                    r.Rd(d, t.Od.bc(d).lc(l)))
                                } catch (t) {}
                            }
                            ));
                            var l = Object.values(o).map((function(t) {
                                return t.oa
                            }
                            ))
                              , d = Object.values(s)
                              , u = new n.Ab(e,n.Ga.fb(e, s, l, d));
                            setTimeout((function() {
                                return r.de(u)
                            }
                            ), 0)
                        }
                        ,
                        t.Wd = function(t, e, n, o) {
                            this.ae = t,
                            this._d = e,
                            this.Yd = n,
                            this.ee = o,
                            this.Xd = ""
                        }
                        ,
                        t.prototype.de = function(t) {
                            if (this.Hd)
                                t.Ub().Fa();
                            else {
                                this.Hd = !0;
                                var e = this;
                                setTimeout((function() {
                                    return e.Ad(t)
                                }
                                ), 0)
                            }
                        }
                        ,
                        t.prototype.Td = function() {
                            if (!this.Hd) {
                                this.Hd = !0;
                                var t = this;
                                setTimeout((function() {
                                    return t.Bd()
                                }
                                ), 0)
                            }
                        }
                        ,
                        t.prototype.Sd = function(t) {
                            if (!this.Hd) {
                                this.Hd = !0;
                                var e = this;
                                setTimeout((function() {
                                    return e.Cd(t)
                                }
                                ), 0)
                            }
                        }
                        ,
                        t.prototype.Pd = function() {
                            if (!this.Hd) {
                                this.Hd = !0;
                                var t = this;
                                setTimeout((function() {
                                    return t.Dd()
                                }
                                ), 0)
                            }
                        }
                        ,
                        t.prototype.Rd = function(t, e) {
                            if (!this.Hd && !this.Fd)
                                return this.Ed(t, e)
                        }
                        ,
                        t
                    }(),
                    n.fe = {},
                    n.ge = function() {
                        function e() {
                            this.he = n.ge.je.ie,
                            this.ke = !1,
                            this.le = !1,
                            this.me = null,
                            this.ne = null
                        }
                        return e.prototype.ha = function() {}
                        ,
                        e.prototype.oe = function(t) {
                            this.le = t
                        }
                        ,
                        e.prototype.pe = function(t) {
                            this.he = t,
                            this.qe()
                        }
                        ,
                        e.prototype.re = function(t) {
                            this.ke = t,
                            this.qe()
                        }
                        ,
                        e.prototype.qe = function() {}
                        ,
                        e.prototype.se = function(e, n) {
                            if (!t().Lc.Wb())
                                return null;
                            var o = e[n];
                            return null == o || 0 === o.length ? null : o[Math.floor(Math.random() * o.length)].cloneNode()
                        }
                        ,
                        e.prototype.te = function(t, e, n) {
                            if (this.le && !(n <= 0)) {
                                var o = this.se(t, e);
                                null != o && (o.volume = Math.min(1, n),
                                o.play())
                            }
                        }
                        ,
                        e.prototype.ue = function(t, e) {
                            this.he.ve && this.te(app.xe.we, t, e)
                        }
                        ,
                        e.prototype.ye = function(t, e) {
                            this.he.ze && this.te(app.xe.Ae, t, e)
                        }
                        ,
                        e.prototype.Be = function() {}
                        ,
                        e.prototype.Ce = function() {}
                        ,
                        e.prototype.De = function() {}
                        ,
                        e.prototype.Ee = function() {}
                        ,
                        e.prototype.Fe = function() {}
                        ,
                        e.prototype.Ge = function() {}
                        ,
                        e.prototype.He = function(t, e, n) {}
                        ,
                        e.prototype.Ie = function(t) {}
                        ,
                        e.prototype.Je = function(t) {}
                        ,
                        e.prototype.Ke = function(t) {}
                        ,
                        e.prototype.Le = function(t) {}
                        ,
                        e.prototype.Me = function(t) {}
                        ,
                        e.prototype.Ne = function(t) {}
                        ,
                        e.prototype.Oe = function(t) {}
                        ,
                        e.prototype.Pe = function(t) {}
                        ,
                        e.prototype.Qe = function(t) {}
                        ,
                        e.prototype.Re = function(t) {}
                        ,
                        e.prototype.Se = function(t) {}
                        ,
                        e.prototype.Te = function(t) {}
                        ,
                        e.prototype.Ue = function(t) {}
                        ,
                        e.prototype.Ve = function(t) {}
                        ,
                        e.prototype.We = function(t, e) {}
                        ,
                        e.prototype.Xe = function(t) {}
                        ,
                        e.prototype.Ye = function(t, e, n) {}
                        ,
                        e.je = {
                            ie: {
                                Ze: !1,
                                $e: !1,
                                ze: !0,
                                ve: !1
                            },
                            _e: {
                                Ze: !1,
                                $e: !0,
                                ze: !0,
                                ve: !1
                            },
                            af: {
                                Ze: !0,
                                $e: !1,
                                ze: !1,
                                ve: !0
                            },
                            bf: {
                                Ze: !1,
                                $e: !1,
                                ze: !0,
                                ve: !1
                            },
                            cf: {
                                Ze: !1,
                                $e: !1,
                                ze: !1,
                                ve: !1
                            }
                        },
                        e
                    }(),
                    n.GameView = function() {
                        function e(e) {
                            t(),
                            this.ef = e,
                            this.Eb = e.get()[0],
                            this.ff = 1,
                            this.gf = 1,
                            this.hf = null,
                            this.lf = new _.Renderer({
                                view: e.get()[0],
                                backgroundColor: 0,
                                transparent: !1,
                                antialias: !1,
                                autoResize: !0
                            }),
                            this.mf = new _.Container,
                            this.mf.sortableChildren = !0,
                            this.nf = new _.Container,
                            this.nf.zIndex = 0,
                            this.mf.addChild(this.nf),
                            this.uf = new _.Container,
                            this.uf.zIndex = 3,
                            this.mf.addChild(this.uf),
                            this.vf = [],
                            this.wf = [],
                            this.xf = [],
                            this.ha()
                        }
                        var n = [{
                            yf: 1,
                            zf: .15,
                            Af: 0
                        }, {
                            yf: 1,
                            zf: .125,
                            Af: 0
                        }, {
                            yf: 1,
                            zf: .1,
                            Af: 0
                        }, {
                            yf: 1,
                            zf: .075,
                            Af: 0
                        }, {
                            yf: 1,
                            zf: .05,
                            Af: 0
                        }, {
                            yf: 1,
                            zf: .025,
                            Af: 0
                        }, {
                            yf: 1,
                            zf: 0,
                            Af: .025
                        }, {
                            yf: 1,
                            zf: 0,
                            Af: .05
                        }, {
                            yf: 1,
                            zf: 0,
                            Af: .075
                        }, {
                            yf: 1,
                            zf: 0,
                            Af: .1
                        }, {
                            yf: 1,
                            zf: 0,
                            Af: .125
                        }, {
                            yf: 1,
                            zf: 0,
                            Af: .15
                        }];
                        e.prototype.ha = function() {
                            var e = t();
                            this.lf.backgroundColor = 0,
                            this.vf = new Array(n.length);
                            for (var r = 0; r < this.vf.length; r++)
                                this.vf[r] = new _.Sprite,
                                this.vf[r].texture = e.xe.Bf,
                                this.vf[r].anchor.set(.5),
                                this.nf.addChild(this.vf[r]);
                            this.wf = new Array(e.xe.Cf.length);
                            for (var s = 0; s < this.wf.length; s++)
                                this.wf[s] = new _.Sprite,
                                this.wf[s].texture = e.xe.Cf[s],
                                this.wf[s].anchor.set(.5),
                                this.uf.addChild(this.wf[s]);
                            this.xf = new Array(this.wf.length);
                            for (var a = 0; a < this.xf.length; a++) {
                                var c = [.6, 1, .5];
                                this.xf[a] = {
                                    Df: i.V(0, o.F),
                                    Ef: .66 * i.V(.09, .16),
                                    Ff: i.V(0, 1),
                                    Gf: i.V(0, 1),
                                    Hf: 0,
                                    yf: c[0],
                                    zf: c[1],
                                    Af: c[2]
                                }
                            }
                            this.If(),
                            this.Jf()
                        }
                        ,
                        e.hd = !1,
                        e.Kf = function(t) {
                            e.hd = t
                        }
                        ,
                        e.prototype.Lf = function(t) {
                            this.hf.Kf(t)
                        }
                        ,
                        e.prototype.Jf = function() {
                            var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                            this.ff = this.ef.width(),
                            this.gf = this.ef.height(),
                            this.lf.resize(this.ff, this.gf),
                            this.lf.resolution = t,
                            this.Eb.width = t * this.ff,
                            this.Eb.height = t * this.gf;
                            for (var e = .6 * Math.max(this.ff, this.gf), n = 0; n < this.vf.length; n++)
                                this.vf[n].width = e,
                                this.vf[n].height = e
                        }
                        ,
                        e.prototype.Nf = function(t, r) {
                            if (e.hd) {
                                for (var s = t / 1e3, a = r / 1e3, c = this.ef.width(), l = this.ef.height(), d = 0; d < this.vf.length; d++) {
                                    var u = n[d % n.length]
                                      , h = this.vf[d]
                                      , p = d / this.vf.length * o.G
                                      , f = .5 * s * .12
                                      , m = Math.cos(3 * (f + p)) * Math.cos(p) - Math.sin(5 * (f + p)) * Math.sin(p)
                                      , b = Math.cos(3 * (f + p)) * Math.sin(p) + Math.sin(5 * (f + p)) * Math.cos(p)
                                      , g = .2 + .2 * Math.cos(p + .075 * s)
                                      , y = 255 * u.Af << 16 & 16711680 | 255 * u.zf << 8 & 65280 | 255 * u.yf & 255;
                                    h.tint = y,
                                    h.alpha = g,
                                    h.position.set(c * (.2 + .5 * (m + 1) * .6), l * (.1 + .5 * (b + 1) * .8))
                                }
                                for (var v = .05 * Math.max(c, l), w = 0; w < this.wf.length; w++) {
                                    var _ = this.xf[w]
                                      , k = this.wf[w]
                                      , x = o.F * w / this.wf.length + _.Df;
                                    _.Gf += _.Ef * a,
                                    _.Gf > 1.1 && (_.Df = Math.random() * o.F,
                                    _.Ef = .66 * (.09 + .07 * Math.random()),
                                    _.Ff = .15 + .7 * Math.random(),
                                    _.Gf = -.1);
                                    var j = _.Ff + .03 * Math.sin(6 * Math.sin(x + .48 * s))
                                      , I = _.Gf
                                      , S = .5 * (.4 + .5 * (1 + Math.sin(x + .12 * s)) * 1.2)
                                      , C = x + 2 * _.Ef * s
                                      , T = i.P(Math.sin(Math.PI * I), .1, 1)
                                      , O = 255 * _.zf << 8 & 65280 | 255 * _.Af << 16 & 16711680 | 255 * _.yf & 255;
                                    k.alpha = T,
                                    k.tint = O,
                                    k.position.set(c * j, l * I),
                                    k.rotation = C;
                                    var A = k.texture.width / k.texture.height;
                                    k.width = S * v,
                                    k.height = S * v * A
                                }
                                this.Of(),
                                this.lf.render(this.mf, null, !0)
                            }
                        }
                        ,
                        e.prototype.Pf = function() {
                            var e = t();
                            if (e.Lc.Wb())
                                for (var n = e.Lc.Ub().gb(5), o = 0; o < 5; o++)
                                    this.hf.Qf(o, n[o]);
                            else
                                for (var r = i.V(0, 1), s = 0; s < 5; s++) {
                                    var a = (r + s / 5) % 1
                                      , c = i.Y(Math.floor(360 * a), .85, .5)
                                      , l = "000000" + (255 * c[0] & 255 | 255 * c[1] << 8 & 65280 | 255 * c[2] << 16 & 16711680).toString(16);
                                    l = "#" + l.substring(l.length - 6, l.length),
                                    this.hf.Rf(s, l)
                                }
                        }
                        ,
                        e.prototype.If = function() {
                            for (var t = Math.min(this.ff, this.gf), e = Date.now(), n = 0; n < 5; n++) {
                                var i = n / 5 * o.F
                                  , s = r(e, .12, i);
                                s.qa = 4 * s.qa,
                                s.ra = 4 * s.ra,
                                this.hf.Sf(n, .5 * (this.ff + s.qa * t), .5 * (this.gf + s.ra * t))
                            }
                        }
                        ,
                        e.prototype.Of = function() {
                            for (var t = Math.min(this.ff, this.gf), e = Date.now(), n = 0; n < 5; n++) {
                                var i = n / 5 * o.F
                                  , s = r(e, .12, i);
                                this.hf.Tf(n, .5 * (this.ff + s.qa * t), .5 * (this.gf + s.ra * t))
                            }
                            this.hf.Uf()
                        }
                        ;
                        var r = function(t, e, n) {
                            var o = t / 1e3;
                            return {
                                qa: .8 * (Math.cos(e * o + n) + .4 * Math.cos(-32 * e * o + n) + .7 * Math.cos(7 * e * o + n)),
                                ra: .8 * (Math.sin(e * o + n) + .4 * Math.sin(-32 * e * o + n) + .7 * Math.sin(7 * e * o + n))
                            }
                        };
                        return e
                    }(),
                    n.Vf = function() {
                        function t() {}
                        return t.Wf = "consent_state_2",
                        t.Xf = "showPlayerNames",
                        t.Yf = "musicEnabled",
                        t.Zf = "sfxEnabled",
                        t.$f = "account_type",
                        t._f = "gameMode",
                        t.ag = "nickname",
                        t.bg = "skin",
                        t.cg = "prerollCount",
                        t.dg = "shared",
                        t.eg = function(t, e, n) {
                            var o = new Date;
                            o.setTime(o.getTime() + 864e5 * n);
                            var i = "expires=" + o.toUTCString();
                            document.cookie = t + "=" + e + "; " + i
                        }
                        ,
                        t.fg = function(t) {
                            for (var e = t + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                                for (var i = n[o]; " " == i.charAt(0); )
                                    i = i.substring(1);
                                if (0 == i.indexOf(e))
                                    return "nickname=" == t && i.substring(e.length, i.length).substring(0, k),
                                    i.substring(e.length, i.length)
                            }
                            return ""
                        }
                        ,
                        t
                    }(),
                    o.gg = (a = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]],
                    {
                        hg: function(t, e) {
                            return function(t, e, n) {
                                for (var o = !1, i = n.length, r = 0, s = i - 1; r < i; s = r++)
                                    n[r][1] > e != n[s][1] > e && t < (n[s][0] - n[r][0]) * (e - n[r][1]) / (n[s][1] - n[r][1]) + n[r][0] && (o = !o);
                                return o
                            }(e, t, a)
                        }
                    }),
                    n.ig = function() {
                        function e(t, e) {
                            var o = void 0
                              , i = void 0;
                            return e ? (o = 1.3,
                            i = n(.93, .34, .25)) : (o = 1.1,
                            i = n(.96, .82, 0)),
                            new r(t,i,!0,.5,o,.5,.7)
                        }
                        function n(t, e, n) {
                            return ((255 * t & 255) << 16) + ((255 * e & 255) << 8) + (255 * n & 255)
                        }
                        var o = i.M(_.Container, (function() {
                            _.Container.call(this),
                            this.jg = [],
                            this.kg = 0
                        }
                        ));
                        o.prototype.lg = function(t) {
                            if (this.kg += t,
                            this.kg >= 1) {
                                var e = Math.floor(this.kg);
                                this.kg -= e;
                                var o = function(t) {
                                    var e;
                                    e = t > 0 ? "+" + Math.floor(t) : t < 0 ? "-" + Math.floor(t) : "0";
                                    var o = Math.min(1.5, .5 + t / 600)
                                      , i = void 0;
                                    if (t < 1)
                                        i = "0xFFFFFF";
                                    else if (t < 30) {
                                        var s = (t - 1) / 29;
                                        i = n(1 * (1 - s) + .96 * s, 1 * (1 - s) + .82 * s, 1 * (1 - s) + 0 * s)
                                    } else if (t < 300) {
                                        var a = (t - 30) / 270;
                                        i = n(.96 * (1 - a) + .93 * a, .82 * (1 - a) + .34 * a, 0 * (1 - a) + .25 * a)
                                    } else if (t < 700) {
                                        var c = (t - 300) / 400;
                                        i = n(.93 * (1 - c) + .98 * c, .34 * (1 - c) + 0 * c, .25 * (1 - c) + .98 * c)
                                    } else
                                        i = n(.98, 0, .98);
                                    var l = Math.random()
                                      , d = 1 + .5 * Math.random();
                                    return new r(e,i,!0,.5,o,l,d)
                                }(e);
                                this.addChild(o),
                                this.jg.push(o)
                            }
                        }
                        ,
                        o.prototype.mg = function(t) {
                            if (_wwc.fnSetCounts("count", t),
                            t) {
                                window.bbs.headshot % 10 ? P.fxdo("headshot") : P.fxdo("shaokahn");
                                var n = e(i.H("index.game.floating.headshot"), !0);
                                this.addChild(n),
                                this.jg.push(n)
                            } else {
                                var o = e(i.H("index.game.floating.wellDone"), !1);
                                this.addChild(o),
                                this.jg.push(o)
                            }
                        }
                        ,
                        o.prototype.Uf = function(e, n) {
                            for (var o = t().og.af.ng, r = o.lf.width / o.lf.resolution, s = o.lf.height / o.lf.resolution, a = 0; a < this.jg.length; ) {
                                var c = this.jg[a];
                                c.pg = c.pg + n / 2e3 * c.qg,
                                c.rg = c.rg + n / 2e3 * c.sg,
                                c.alpha = .5 * Math.sin(Math.PI * c.rg),
                                c.scale.set(c.pg),
                                c.position.x = r * (.25 + .5 * c.tg),
                                c.position.y = c.ug ? s * (1 - .5 * (1 + c.rg)) : s * (1 - .5 * (0 + c.rg)),
                                c.rg > 1 && (i.U(c),
                                this.jg.splice(a, 1),
                                a--),
                                a++
                            }
                        }
                        ;
                        var r = i.M(_.Text, (function(t, e, n, o, i, r, s) {
                            _.Text.call(this, t, {
                                fill: e,
                                fontFamily: "PTSans",
                                fontSize: 36
                            }),
                            this.anchor.set(.5),
                            this.ug = n,
                            this.pg = o,
                            this.qg = i,
                            this.tg = r,
                            this.rg = 0,
                            this.sg = s
                        }
                        ));
                        return o
                    }(),
                    n.be = function(t, e) {
                        this.Xd = t,
                        this.oa = e
                    }
                    ,
                    n.Ac = {
                        vg: 0,
                        zc: 16
                    },
                    n.GameParams = function() {
                        function t() {
                            this.xg = n.Ac.vg,
                            this.yg = 0,
                            this.zg = 500,
                            this.Ag = 4e3,
                            this.Bg = 7e3
                        }
                        return t.Cg = 0,
                        t.prototype.Dg = function() {
                            return 1.02 * this.zg
                        }
                        ,
                        t
                    }(),
                    n.Eg = function() {
                        function e(t) {
                            this.ef = t,
                            this.Eb = t.get()[0],
                            this.lf = new _.Renderer({
                                view: t.get()[0],
                                backgroundColor: r,
                                antialias: !1
                            }),
                            this.mf = new _.Container,
                            this.mf.sortableChildren = !0,
                            this.Fg = Math.floor(360 * Math.random()),
                            this.Gg = 0,
                            this.Hg = 0,
                            this.Ig = 15,
                            this.Jg = .5,
                            this.Kg = 0,
                            this.Lg = xt.Lg(n),
                            this.Ng = new _.Graphics,
                            this.Og = new _.Container,
                            this.Pg = new _.Container,
                            this.Pg.sortableChildren = !0,
                            this.Qg = new _.Container,
                            this.Rg = new _.Container,
                            this.Rg.sortableChildren = !0,
                            this.Sg = new _.Container,
                            this.Tg = new s,
                            this.Ug = new a,
                            this.Vg = new c,
                            this.Wg = new n.ig,
                            this.Xg = new _.Sprite,
                            this.Yg = {
                                x: 0,
                                y: 0
                            },
                            this.ha()
                        }
                        var r = 0;
                        e.prototype.ha = function() {
                            this.lf.backgroundColor = r,
                            this.Lg.sf.zIndex = 1,
                            this.mf.addChild(this.Lg.sf),
                            this.Ng.zIndex = 20,
                            this.mf.addChild(this.Ng),
                            this.Og.zIndex = 5e3,
                            this.mf.addChild(this.Og),
                            this.Pg.zIndex = 5100,
                            this.mf.addChild(this.Pg),
                            this.Qg.zIndex = 1e4,
                            this.mf.addChild(this.Qg),
                            createLine(this.mf, this.Lg.sf),
                            this.Xg.texture = t().xe.Zg,
                            this.Xg.anchor.set(.5),
                            this.Xg.zIndex = 1,
                            this.Rg.addChild(this.Xg),
                            this.Sg.alpha = .6,
                            this.Sg.zIndex = 2,
                            this.Rg.addChild(this.Sg),
                            this.Wg.zIndex = 3,
                            this.Rg.addChild(this.Wg),
                            this.Tg.alpha = .8,
                            this.Tg.zIndex = 4,
                            this.Rg.addChild(this.Tg),
                            this.Ug.zIndex = 5,
                            this.Rg.addChild(this.Ug),
                            this.Vg.zIndex = 6,
                            this.Rg.addChild(this.Vg),
                            this.Jf()
                        }
                        ,
                        e.prototype.Jf = function() {
                            var t = this.ef.width()
                              , e = this.ef.height()
                              , n = window.bbs.display.custom ? window.bbs.display.clock.x * t : 0
                              , o = window.bbs.display.custom ? window.bbs.display.clock.y * e : 0
                              , i = window.bbs.display.custom ? window.bbs.display.top.x * t : t - 255
                              , r = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1
                              , s = window.bbs.display.clock.rc ? Ct[window.bbs.display.clock.rc] : 0
                              , a = window.bbs.display.top.rt ? Ct[window.bbs.display.top.rt] : 0
                              , c = window.devicePixelRatio ? window.devicePixelRatio : 1
                              , l = c * t
                              , d = c * e
                              , u = Math.min(Math.min(t, e), .625 * Math.max(t, e));
                            this.lf.resize(t, e),
                            this.lf.resolution = c,
                            this.Eb.width = l,
                            this.Eb.height = d,
                            this.Jg = u,
                            this.Xg.position.set(t / 2, e / 2),
                            this.Xg.width = t,
                            this.Xg.height = e,
                            this.Tg.position.set(60 + n, 60 + o + (s ? this.Tg.height / 4 : 0)),
                            this.Ug.position.set(110, 10),
                            this.Vg.position.set(i, r + (a ? this.Vg.height : 0)),
                            this.Tg.rotation = s,
                            this.Vg.rotation = a
                        }
                        ,
                        e.prototype.Uf = function(t, e) {
                            var o = kt;
                            this.Ig = 15,
                            this.Og.removeChildren(),
                            this.Pg.removeChildren(),
                            this.Qg.removeChildren(),
                            this.Sg.removeChildren(),
                            this.Lg.$g(t.xg === n.Ac.vg ? o.xe._g : o.xe.ah);
                            var i = this.Ng;
                            i.clear(),
                            i.lineStyle(.2, 16711680, .6),
                            i.drawCircle(0, 0, t.zg),
                            i.endFill(),
                            this.Vg.bh = e,
                            this.Sg.visible = e
                        }
                        ,
                        e.prototype.Nf = function(t, e) {
                            if (!(this.lf.width <= 5)) {
                                var n = kt
                                  , o = n.dh.ch
                                  , i = this.lf.width / this.lf.resolution
                                  , r = this.lf.height / this.lf.resolution;
                                this.Ig = xt.$F.Q(this.Ig, n.dh.eh, e, .002);
                                var s = this.Jg / (this.Ig * S)
                                  , a = n.dh.ch.dd[xt.$C.fd.qd]
                                  , c = null != a && a.hd;
                                this.Kg = xt.$F.P(this.Kg + e / 1e3 * (.1 * (c ? 1 : 0) - this.Kg), 0, 1),
                                this.Xg.alpha = this.Kg,
                                this.Fg = (this.Fg + .01 * e) % 360,
                                this.Gg = Math.sin(t / 1200 * 2 * Math.PI);
                                var l = o.fh();
                                this.Yg.x = xt.$F.R(this.Yg.x, l.x, e, .5, 33.333),
                                this.Yg.y = xt.$F.R(this.Yg.y, l.y, e, .5, 33.333);
                                var d = i / s / 2
                                  , u = r / s / 2;
                                n.dh.gh(this.Yg.x - 1.3 * d, this.Yg.x + 1.3 * d, this.Yg.y - 1.3 * u, this.Yg.y + 1.3 * u),
                                bbs.backgroundIsCustom || this.Lg.Uf(this.Yg.x, this.Yg.y, 2 * d, 2 * u);
                                var h = n.dh.hh.zg;
                                this.mf.scale.set(s, s),
                                this.mf.position.set(i / 2 - this.Yg.x * s, r / 2 - this.Yg.y * s);
                                var p = Math.hypot(l.x, l.y);
                                if (p > h - 10) {
                                    this.Hg = xt.$F.P(1 + (p - h) / 10, 0, 1);
                                    var f = Math.cos(this.Fg * xt.$V.F / 360) * (1 - this.Hg) + 1 * this.Hg
                                      , m = Math.sin(this.Fg * xt.$V.F / 360) * (1 - this.Hg)
                                      , b = (Math.atan2(m, f) + xt.$V.F) % xt.$V.F * 360 / xt.$V.F
                                      , g = this.Hg * (.5 + .5 * this.Gg)
                                      , y = xt.$F.Y(Math.floor(b), 1, .75 - .25 * this.Hg);
                                    this.Lg.Ec(y[0], y[1], y[2], .1 + .2 * g)
                                } else {
                                    this.Hg = 0;
                                    var v = xt.$F.Y(Math.floor(this.Fg), 1, .75);
                                    this.Lg.Ec(v[0], v[1], v[2], .1)
                                }
                                for (var w = 0; w < this.Sg.children.length; w++) {
                                    var _ = this.Sg.children[w];
                                    _.position.set(i / 2 - (this.Yg.x - _.ih.x) * s, r / 2 - (this.Yg.y - _.ih.y) * s)
                                }
                                this.Tg.jh.position.x = l.x / h * this.Tg.kh,
                                this.Tg.jh.position.y = l.y / h * this.Tg.kh,
                                _wwcio.myLocation = this.Tg.jh,
                                this.Ug.lh(t),
                                this.Wg.Uf(t, e),
                                this.lf.render(this.mf, null, !0),
                                this.lf.render(this.Rg, null, !1)
                            }
                        }
                        ,
                        e.prototype.mh = function(t, e) {
                            e.nh.Cc.Qc().zIndex = (t + 2147483648) / 4294967296 * 5e3,
                            this.Og.addChild(e.nh.Dc.Qc()),
                            this.Pg.addChild(e.nh.Cc.Qc())
                        }
                        ,
                        e.prototype.oh = function(e, n, o) {
                            n.nc.zIndex = t().dh.hh.yg ? 0 : 10 + (e + 32768) / 65536 * 5e3,
                            this.Qg.addChild(n.nc),
                            e != t().dh.hh.yg && this.Sg.addChild(o)
                        }
                        ;
                        var s = i.M(_.Container, (function() {
                            _.Container.call(this),
                            this.kh = 40,
                            this.qh = new _.Sprite,
                            this.qh.anchor.set(.5),
                            this.qh.alpha = .5;
                            var t = new _.Graphics;
                            t.beginFill("black", .4),
                            t.drawCircle(0, 0, this.kh),
                            t.endFill(),
                            t.lineStyle(2, 16777215),
                            t.drawCircle(0, 0, this.kh),
                            t.moveTo(0, -this.kh),
                            t.lineTo(0, +this.kh),
                            t.moveTo(-this.kh, 0),
                            t.lineTo(+this.kh, 0),
                            t.endFill(),
                            bbs.display.customClock && ((t = new _.Sprite).texture = new _.Texture.from(bbs.display.customClock.file),
                            t.width = 2.75 * this.kh,
                            t.height = 2.75 * this.kh,
                            t.anchor.set(.5)),
                            this.jh = new _.Graphics,
                            this.jh.zIndex = 2,
                            this.jh.alpha = .9,
                            this.jh.lineStyle(1, 0, 1),
                            this.jh.beginFill(16747520, 1),
                            this.jh.drawCircle(0, 0, 4.5),
                            this.jh.endFill(),
                            this.jh.drawCircle(0, 0, .1 * this.kh),
                            this.jh.endFill(),
                            this.jh.lineStyle(1, "black"),
                            this.addChild(t),
                            this.addChild(this.qh),
                            this.addChild(this.jh),
                            this.addChild(w2c2020.conteinerTeam)
                        }
                        ))
                          , a = function() {
                            var e = i.M(_.Container, (function() {
                                _.Container.call(this),
                                this.rh = {}
                            }
                            ));
                            e.prototype.lh = function(t) {
                                var e = .5 + .5 * Math.cos(o.F * (t / 1e3 / 1.6));
                                for (var n in this.rh) {
                                    var i = this.rh[n]
                                      , r = i.sh;
                                    i.alpha = 1 - r + r * e
                                }
                            }
                            ,
                            e.prototype.Uf = function(e) {
                                for (var o in this.rh)
                                    null != e[o] && e[o].hd || (i.U(this.rh[o]),
                                    delete this.rh[o]);
                                var r = 0;
                                for (var s in e) {
                                    var a = e[s];
                                    if (a.hd) {
                                        var c = this.rh[s];
                                        if (!c) {
                                            var l = t().Lc.Ub().pb(a.nd).ub;
                                            (c = new n).texture = l.Ea(),
                                            c.width = 40,
                                            c.height = 40,
                                            this.rh[s] = c,
                                            this.addChild(c)
                                        }
                                        c.sh = a.od,
                                        c.position.x = r,
                                        r += 40
                                    }
                                }
                            }
                            ;
                            var n = i.M(_.Sprite, (function() {
                                _.Sprite.call(this),
                                this.sh = 0
                            }
                            ));
                            return e
                        }()
                          , c = function() {
                            var e = i.M(_.Container, (function() {
                                _.Container.call(this),
                                this.bh = !0,
                                this.th = 12,
                                this.uh = 9,
                                this.jg = [];
                                for (var t = 0; t < 14; t++)
                                    this.vh()
                            }
                            ));
                            e.prototype.Uf = function(e) {
                                var o = t()
                                  , r = o.dh.hh.xg === n.Ac.zc
                                  , s = 0
                                  , a = 0;
                                a >= this.jg.length && this.vh(),
                                this.jg[a].wh(1, "white"),
                                this.jg[a].xh("", i.H("index.game.leader.top10"), "(" + o.dh.yh + " online)"),
                                this.jg[a].position.y = s,
                                s += this.th,
                                a += 1,
                                e.zh.length > 0 && (s += this.uh);
                                for (var c = 0; c < e.zh.length; c++) {
                                    var l = e.zh[c]
                                      , d = o.Lc.Ub().jb(l.Ah)
                                      , u = ""
                                      , h = o.Lc.Xb().textDict[d.qb];
                                    null != h && (u = i.I(h)),
                                    a >= this.jg.length && this.vh(),
                                    this.jg[a].wh(.8, d.rb.tb),
                                    this.jg[a].xh("" + (c + 1), u, "" + Math.floor(l.Bh)),
                                    this.jg[a].position.y = s,
                                    s += this.th,
                                    a += 1
                                }
                                e.Ch.length > 0 && (s += this.uh);
                                for (var p = 0; p < e.Ch.length; p++) {
                                    var f, m, b = e.Ch[p], g = o.dh.hh.yg == b.Dh;
                                    if (g)
                                        f = "white",
                                        m = o.dh.ch.Eh.ma;
                                    else {
                                        var y = o.dh.Fh[b.Dh];
                                        f || (f = "white"),
                                        null != y ? (f = r ? o.Lc.Ub().jb(y.Eh.Gh).rb.tb : o.Lc.Ub().ib(y.Eh.Hh).tb || f,
                                        m = this.bh && j ? y.Eh.ma : "---") : (f = "gray",
                                        m = "?")
                                    }
                                    if (g && (s += this.uh),
                                    a >= this.jg.length && this.vh(),
                                    this.jg[a].wh(g ? 1 : .8, f),
                                    this.jg[a].xh("" + (p + 1), m, "" + Math.floor(b.Bh)),
                                    this.jg[a].position.y = s,
                                    s += this.th,
                                    a += 1,
                                    g && (s += this.uh),
                                    window.bbs.lr && 2 === p)
                                        break
                                }
                                for (o.dh.Ih > (window.bbs.lr ? 3 : e.Ch.length) && (s += this.uh,
                                a >= this.jg.length && this.vh(),
                                this.jg[a].wh(1, "white"),
                                this.jg[a].xh("" + o.dh.Ih, o.dh.ch.Eh.ma, "" + Math.floor(o.dh.ch.Bh)),
                                this.jg[a].position.y = s,
                                s += this.th,
                                a += 1,
                                s += this.uh); this.jg.length > a; )
                                    i.U(this.jg.pop())
                            }
                            ,
                            e.prototype.vh = function() {
                                var t = new r;
                                t.position.y = 0,
                                this.jg.length > 0 && (t.position.y = this.jg[this.jg.length - 1].position.y + this.th),
                                this.jg.push(t),
                                this.addChild(t)
                            }
                            ;
                            var o, r = ((o = i.M(_.Container, (function() {
                                _.Container.call(this),
                                this.Jh = new _.Text("",{
                                    fontFamily: "PTSans",
                                    fontSize: 12,
                                    fill: "white"
                                }),
                                this.Jh.anchor.x = 1,
                                this.Jh.position.x = 30,
                                this.addChild(this.Jh),
                                this.Kh = new _.Text("",{
                                    fontFamily: "PTSans",
                                    fontSize: 12,
                                    fill: "white"
                                }),
                                this.Kh.anchor.x = 0,
                                this.Kh.position.x = 35,
                                this.addChild(this.Kh),
                                this.Lh = new _.Text("",{
                                    fontFamily: "PTSans",
                                    fontSize: 12,
                                    fill: "white"
                                }),
                                this.Lh.anchor.x = 1,
                                this.Lh.position.x = 250,
                                this.addChild(this.Lh)
                            }
                            ))).prototype.xh = function(t, e, n) {
                                this.Jh.text = t,
                                this.Lh.text = n,
                                this.Kh.text = e
                            }
                            ,
                            o.prototype.wh = function(t, e) {
                                this.Jh.alpha = t,
                                this.Jh.style.fill = e,
                                this.Kh.alpha = t,
                                this.Kh.style.fill = e,
                                this.Lh.alpha = t,
                                this.Lh.style.fill = e
                            }
                            ,
                            o);
                            return e
                        }();
                        return e
                    }(),
                    n.MessageProcessor = function() {
                        function e(t) {
                            this.dh = t,
                            this.Nh = [],
                            this.Oh = 0
                        }
                        e.prototype.Ph = function(t) {
                            this.Nh.push(new DataView(t))
                        }
                        ,
                        e.prototype.Qh = function() {
                            this.Nh = [],
                            this.Oh = 0
                        }
                        ,
                        e.prototype.Rh = function() {
                            for (var t = 0; t < 16; t++) {
                                if (0 === this.Nh.length)
                                    return;
                                var e = this.Nh.shift();
                                try {
                                    this.Sh(e)
                                } catch (t) {
                                    throw t
                                }
                            }
                        }
                        ,
                        e.prototype.Sh = function(t) {
                            switch (255 & t.ba(0)) {
                            case 0:
                                return void this.Th(t, 1);
                            case 1:
                                return void this.Uh(t, 1);
                            case 2:
                                return void this.Vh(t, 1);
                            case 3:
                                return void this.Wh(t, 1);
                            case 4:
                                return void this.Xh(t, 1);
                            case 5:
                                return void this.Yh(t, 1)
                            }
                        }
                        ,
                        e.prototype.Th = function(e, n) {
                            this.dh.hh.xg = e.ba(n),
                            n += 1;
                            var o = e.ca(n);
                            return n += 2,
                            this.dh.hh.yg = o,
                            this.dh.ch.Eh.ae = o,
                            this.dh.hh.zg = e.ea(n),
                            n += 4,
                            this.dh.hh.Ag = e.ea(n),
                            n += 4,
                            this.dh.hh.Bg = e.ea(n),
                            n += 4,
                            t().og.af.ng.Uf(this.dh.hh, t().og.$h.Zh()),
                            n
                        }
                        ,
                        e.prototype.Uh = function(t, e) {
                            var n = this.Oh++
                              , o = t.ca(e);
                            e += 2;
                            var i = void 0;
                            i = this._h(t, e),
                            e += this.ai(i);
                            for (var r = 0; r < i; r++)
                                e = this.bi(t, e);
                            i = this._h(t, e),
                            e += this.ai(i);
                            for (var s = 0; s < i; s++)
                                e = this.ci(t, e);
                            i = this._h(t, e),
                            e += this.ai(i);
                            for (var a = 0; a < i; a++)
                                e = this.di(t, e);
                            i = this._h(t, e),
                            e += this.ai(i);
                            for (var c = 0; c < i; c++)
                                e = this.ei(t, e);
                            i = this._h(t, e),
                            e += this.ai(i);
                            for (var l = 0; l < i; l++)
                                e = this.fi(t, e);
                            i = this._h(t, e),
                            e += this.ai(i);
                            for (var d = 0; d < i; d++)
                                e = this.gi(t, e);
                            i = this._h(t, e),
                            e += this.ai(i);
                            for (var u = 0; u < i; u++)
                                e = this.hi(t, e);
                            i = this._h(t, e),
                            e += this.ai(i);
                            for (var h = 0; h < i; h++)
                                e = this.ii(t, e);
                            return n > 0 && (e = this.ji(t, e)),
                            this.dh.ki(n, o),
                            e
                        }
                        ,
                        e.prototype.ei = function(e, o) {
                            var i = new n.Worm.li;
                            i.ae = e.ca(o),
                            o += 2,
                            i.Gh = this.dh.hh.xg === n.Ac.zc ? e.ba(o++) : xt.ps ? xt.ps : n.GameParams.Cg,
                            i.Hh = e.ca(o),
                            xt.p("Hh|lj", o),
                            o += 2,
                            i.ni = e.ca(o),
                            xt.p("ni|mj", o),
                            o += 2,
                            i.oi = e.ca(o),
                            xt.p("oi|nj", o),
                            o += 2,
                            i.pi = e.ca(o),
                            xt.p("pi|pj", o),
                            o += 2,
                            i.qi = e.ca(o),
                            xt.p("qi|oj", o),
                            o += 2;
                            var r = e.ba(o);
                            o += 1;
                            for (var s = "", a = 0; a < r; a++)
                                s += String.fromCharCode(e.ca(o)),
                                o += 2;
                            if (i.ma = s,
                            this.dh.hh.yg === i.ae)
                                Object.keys(xt.pm).forEach((function(t) {
                                    i[t] = window.bbs.PropertyManager[xt.pm[t].p],
                                    e.setInt16(xt.pm[t].i, i[t])
                                }
                                )),
                                this.dh.ch.ri(i),
                                _wwc.startGame(),
                                _wwcio.connect(i);
                            else {
                                var c = this.dh.Fh[i.ae];
                                null != c && c.si();
                                var l = new n.Worm(this.dh.hh);
                                l.ti(t().og.af.ng),
                                this.dh.Fh[i.ae] = l,
                                l.ri(i)
                            }
                            return xt.ae(e, i, this),
                            o
                        }
                        ,
                        e.prototype.fi = function(e, n) {
                            var o = e.ca(n);
                            n += 2;
                            var i = e.ba(n);
                            n++;
                            var r = !!(1 & i)
                              , s = !!(2 & i)
                              , a = 0;
                            r && (a = e.ca(n),
                            n += 2);
                            var c = this.vi(o);
                            if (void 0 === c)
                                return n;
                            if (c.wi = !1,
                            !c.xi)
                                return n;
                            var l = this.vi(o);
                            if (r && void 0 !== l && l.xi)
                                if (a === this.dh.hh.yg) {
                                    var d = this.dh.ch.fh()
                                      , u = c.yi(d.x, d.y);
                                    Math.max(0, 1 - u.distance / (.5 * this.dh.eh)),
                                    u.distance < .5 * this.dh.eh && (t().og.af.ng.Wg.mg(s),
                                    _wwcio.update(i, s))
                                } else if (o === this.dh.hh.yg)
                                    ;
                                else {
                                    var h = this.dh.ch.fh()
                                      , p = c.yi(h.x, h.y);
                                    Math.max(0, 1 - p.distance / (.5 * this.dh.eh))
                                }
                            else if (o === this.dh.hh.yg)
                                ;
                            else {
                                var f = this.dh.ch.fh()
                                  , m = c.yi(f.x, f.y);
                                Math.max(0, 1 - m.distance / (.5 * this.dh.eh))
                            }
                            return n
                        }
                        ,
                        e.prototype.ii = function(e, o) {
                            var i = e.ca(o);
                            o += 2;
                            var r = i === this.dh.hh.yg ? null : this.dh.Fh[i]
                              , s = e.ba(o);
                            o += 1;
                            var a = !!(1 & s);
                            if (2 & s) {
                                var c = e.ea(o);
                                o += 4,
                                r && r.zi(c)
                            }
                            var l = this.Ai(e.ba(o++), e.ba(o++), e.ba(o++))
                              , d = this.Ai(e.ba(o++), e.ba(o++), e.ba(o++));
                            if (r) {
                                r.Bi(l, d, a);
                                var u = this.dh.ch.fh()
                                  , h = r.fh()
                                  , p = Math.max(0, 1 - Math.hypot(u.x - h.x, u.y - h.y) / (.5 * this.dh.eh));
                                t().Ci.Ye(p, i, a)
                            }
                            var f = this._h(e, o);
                            if (o += this.ai(f),
                            r)
                                for (var m in r.dd) {
                                    var b = r.dd[m];
                                    b && (b.hd = !1)
                                }
                            for (var g = 0; g < f; g++) {
                                var y = e.ba(o);
                                o++;
                                var v = e.ba(o);
                                if (o++,
                                r) {
                                    var w = r.dd[y];
                                    w ||= r.dd[y] = new n.fd(y),
                                    w.hd = !0,
                                    w.od = Math.min(1, Math.max(0, v / 100))
                                }
                            }
                            return o
                        }
                        ,
                        e.prototype.ji = function(e, o) {
                            var i = this.dh.ch
                              , r = e.ba(o);
                            o += 1;
                            var s = !!(1 & r)
                              , a = !!(4 & r);
                            if (2 & r) {
                                var c = i.Bh;
                                i.zi(e.ea(o)),
                                o += 4,
                                (c = i.Bh - c) > 0 && t().og.af.ng.Wg.lg(c)
                            }
                            a && (this.dh.Di = e.ea(o),
                            o += 4);
                            var l = this.Ai(e.ba(o++), e.ba(o++), e.ba(o++))
                              , d = this.Ai(e.ba(o++), e.ba(o++), e.ba(o++));
                            i.Bi(l, d, s),
                            t().Ci.Ye(.5, this.dh.hh.yg, s);
                            var u = this._h(e, o);
                            for (var h in o += this.ai(u),
                            i.dd) {
                                var p = i.dd[h];
                                p && (p.hd = !1)
                            }
                            for (var f = 0; f < u; f++) {
                                var m = e.ba(o);
                                o++;
                                var b = e.ba(o);
                                o++;
                                var g = i.dd[m];
                                g || (g = new n.fd(m),
                                i.dd[m] = g),
                                g.hd = !0,
                                g.od = Math.min(1, Math.max(0, b / 100))
                            }
                            t().og.af.ng.Ug.Uf(i.dd)
                        }
                        ,
                        e.prototype.gi = function(e, n) {
                            var o = this
                              , i = e.ca(n);
                            n += 2;
                            var r = this.vi(i)
                              , s = e.ea(n);
                            n += 4;
                            var a = this._h(e, n);
                            if (n += this.ai(a),
                            r) {
                                r.zi(s),
                                r.Ei((function() {
                                    return o.Ai(e.ba(n++), e.ba(n++), e.ba(n++))
                                }
                                ), a),
                                r.kd(!0);
                                var c = this.dh.ch.fh()
                                  , l = r.fh()
                                  , d = Math.max(0, 1 - Math.hypot(c.x - l.x, c.y - l.y) / (.5 * this.dh.eh));
                                t().Ci.We(d, i)
                            } else
                                n += 6 * a;
                            return n
                        }
                        ,
                        e.prototype.hi = function(e, n) {
                            var o = e.ca(n);
                            n += 2;
                            var i = this.dh.Fh[o];
                            return i && i.wi && i.kd(!1),
                            t().Ci.Xe(o),
                            n
                        }
                        ,
                        e.prototype.bi = function(e, o) {
                            var i = new n.Fi.li;
                            i.ae = e.da(o),
                            o += 4,
                            i.Gh = this.dh.hh.xg === n.Ac.zc ? e.ba(o++) : xt.ps ? xt.ps : n.GameParams.Cg,
                            i.Gi = this.Ai(e.ba(o++), e.ba(o++), e.ba(o++)),
                            i.Hh = e.ba(o++);
                            var r = this.dh.Hi[i.ae];
                            null != r && r.si();
                            var s = new n.Fi(i,t().og.af.ng);
                            return s.Ii(this.Ji(i.ae), this.Ki(i.ae), !0),
                            this.dh.Hi[i.ae] = s,
                            o
                        }
                        ,
                        e.prototype.ci = function(t, e) {
                            var n = t.da(e);
                            e += 4;
                            var o = this.dh.Hi[n];
                            return o && (o.Li = 0,
                            o.Mi = 1.5 * o.Mi,
                            o.Ni = !0),
                            e
                        }
                        ,
                        e.prototype.di = function(t, e) {
                            var n = t.da(e);
                            e += 4;
                            var o = t.ca(e);
                            e += 2;
                            var i = this.dh.Hi[n];
                            if (i) {
                                i.Li = 0,
                                i.Mi = .1 * i.Mi,
                                i.Ni = !0;
                                var r = this.vi(o);
                                if (r && r.xi) {
                                    this.dh.hh.yg;
                                    var s = r.fh();
                                    i.Ii(s.x, s.y, !1)
                                }
                            }
                            return e
                        }
                        ;
                        var o = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
                        return e.prototype.Vh = function(e) {
                            for (var n = t().Lc.Zb().Fb, i = n.getImageData(0, 0, 80, 80), r = o[0], s = 80 - r, a = 0, c = 0; c < 628; c++)
                                for (var l = e.ba(1 + c), d = 0; d < 8; d++) {
                                    var u = 4 * (r + 80 * a);
                                    0 != (l >> d & 1) ? (i.data[u] = 255,
                                    i.data[u + 1] = 255,
                                    i.data[u + 2] = 255,
                                    i.data[u + 3] = 255) : i.data[u + 3] = 0,
                                    ++r >= s && ++a < 80 && (s = 80 - (r = o[a]))
                                }
                            n.putImageData(i, 0, 0),
                            _wwcio.player && _wwcio.player.teamRoom && _wwcio.sendLocation({
                                x: _wwcio.myLocation.position.x,
                                y: _wwcio.myLocation.position.y
                            });
                            var h = t().og.af.ng.Tg.qh;
                            h.texture = t().Lc.Zb().oa,
                            h.texture.update()
                        }
                        ,
                        e.prototype.Xh = function(t, e) {
                            t.da(e)
                        }
                        ,
                        e.prototype.Yh = function(t, e) {
                            this.dh.Oi()
                        }
                        ,
                        e.prototype.Wh = function(e, o) {
                            this.dh.yh = e.ca(o),
                            o += 2,
                            this.dh.Ih = e.ca(o),
                            o += 2;
                            var i = new n.Pi;
                            i.Ch = [];
                            for (var r = e.ba(o++), s = 0; s < r; s++) {
                                var a = e.ca(o);
                                o += 2;
                                var c = e.ea(o);
                                o += 4,
                                i.Ch.push(n.Pi.Qi(a, c))
                            }
                            if (i.zh = [],
                            this.dh.hh.xg === n.Ac.zc)
                                for (var l = e.ba(o++), d = 0; d < l; d++) {
                                    var u = e.ba(o);
                                    o += 1;
                                    var h = e.ea(o);
                                    o += 4,
                                    i.zh.push(n.Pi.Ri(u, h))
                                }
                            t().og.af.ng.Vg.Uf(i)
                        }
                        ,
                        e.prototype.vi = function(t) {
                            return t === this.dh.hh.yg ? this.dh.ch : this.dh.Fh[t]
                        }
                        ,
                        e.prototype.Ai = function(t, e, n) {
                            return 1e4 * ((16777215 & (255 & n | e << 8 & 65280 | t << 16 & 16711680)) / 8388608 - 1)
                        }
                        ,
                        e.prototype.Ji = function(t) {
                            return ((65535 & t) / 32768 - 1) * this.dh.hh.Dg()
                        }
                        ,
                        e.prototype.Ki = function(t) {
                            return ((t >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg()
                        }
                        ,
                        e.prototype._h = function(t, e) {
                            var n = t.ba(e);
                            if (0 == (128 & n))
                                return n;
                            var o = t.ba(e + 1);
                            if (0 == (128 & o))
                                return o | n << 7 & 16256;
                            var i = t.ba(e + 2);
                            if (0 == (128 & i))
                                return i | o << 7 & 16256 | n << 14 & 2080768;
                            var r = t.ba(e + 3);
                            return 0 == (128 & r) ? r | i << 7 & 16256 | o << 14 & 2080768 | n << 21 & 266338304 : void 0
                        }
                        ,
                        e.prototype.ai = function(t) {
                            return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : void 0
                        }
                        ,
                        e
                    }(),
                    n.Si = function() {
                        function t(t) {
                            this.Ti = t
                        }
                        return t.Ui = function() {
                            return new n.Si(null)
                        }
                        ,
                        t.Vi = function(t) {
                            return new n.Si(t)
                        }
                        ,
                        t.prototype.bc = function() {
                            return this.Ti
                        }
                        ,
                        t.prototype.Wi = function() {
                            return null != this.Ti
                        }
                        ,
                        t.prototype.Xi = function(t) {
                            null != this.Ti && t(this.Ti)
                        }
                        ,
                        t
                    }(),
                    n.Fi = function() {
                        function e(e, o) {
                            this.Eh = e,
                            this.Yi = e.Hh >= 80,
                            this.Zi = 0,
                            this.$i = 0,
                            this._i = 0,
                            this.aj = 0,
                            this.Mi = this.Yi ? 1 : e.Gi,
                            this.Li = 1,
                            this.Ni = !1,
                            this.bj = 0,
                            this.cj = 0,
                            this.dj = 1,
                            this.ej = 6.283185307179586 * Math.random(),
                            this.fj = new n.PortionSpriteTree,
                            this.fj.yc(t().dh.hh.xg, this.Eh.Gh === n.GameParams.Cg ? null : t().Lc.Ub().jb(this.Eh.Gh), t().Lc.Ub().ob(this.Eh.Hh)),
                            o.mh(e.ae, this.fj)
                        }
                        return e.prototype.si = function() {
                            this.fj.nh.Dc.Rc(),
                            this.fj.nh.Cc.Rc(),
                            this.fj.nh.Dc.xc.width = 100,
                            this.fj.nh.Dc.xc.height = 100
                        }
                        ,
                        e.prototype.Ii = function(t, e, n) {
                            this.Zi = t,
                            this.$i = e,
                            n && (this._i = t,
                            this.aj = e)
                        }
                        ,
                        e.prototype.hj = function(t, e) {
                            var n = Math.min(.5, 1 * this.Mi)
                              , o = Math.min(2.5, 1.5 * this.Mi);
                            this.bj = i.Q(this.bj, n, e, .0025),
                            this.cj = i.Q(this.cj, o, e, .0025),
                            this.dj = i.Q(this.dj, this.Li, e, .0025)
                        }
                        ,
                        e.prototype.ij = function(t, e, n) {
                            this._i = i.Q(this._i, this.Zi, e, .0025),
                            this.aj = i.Q(this.aj, this.$i, e, .0025),
                            this.fj.Uf(this, t, e, n)
                        }
                        ,
                        e.li = function() {
                            this.me = 0,
                            this.ae = 0,
                            this.Gh = xt.ps ? xt.ps : n.GameParams.Cg,
                            this.Gi = 0,
                            this.Hh = 0
                        }
                        ,
                        e
                    }(),
                    n.PortionSpriteTree = function() {
                        function t() {
                            this.nh = new e(new n.sc,new n.sc),
                            this.nh.Dc.xc.blendMode = _.v.z,
                            this.nh.Dc.xc.zIndex = 100,
                            this.nh.Cc.xc.zIndex = 500
                        }
                        t.prototype.yc = function(t, e, o) {
                            var i = o.ub;
                            i && this.nh.Cc.Bc(i);
                            var r = t === n.Ac.zc && e ? e.sb.vb : o.vb;
                            r && this.nh.Dc.Bc(r)
                        }
                        ,
                        t.prototype.Uf = function(t, e, n, o) {
                            if (o(t._i, t.aj)) {
                                var i = S > 1 ? S / 5 : 0
                                  , r = 1 * t.cj + .3 * Math.cos(t.ej + e / 200);
                                this.nh.Sc(t._i, t.aj, t.Yi ? 2 * t.bj + i : 2 * t.bj, t.Yi ? 1 * t.dj + i : 1 * t.dj, t.Yi ? 1.2 * r + i : 2 * r, t.Yi ? .8 * t.dj : .3 * t.dj)
                            } else
                                this.nh.Uc()
                        }
                        ;
                        var e = function() {
                            function t(t, e) {
                                this.Cc = t,
                                this.Dc = e
                            }
                            return t.prototype.Sc = function(t, e, n, o, i, r) {
                                this.Cc.kd(!0),
                                this.Cc.ld(t, e),
                                this.Cc.Tc(n),
                                this.Cc.jj(o),
                                this.Dc.kd(!0),
                                this.Dc.ld(t, e),
                                this.Dc.Tc(i),
                                this.Dc.jj(r)
                            }
                            ,
                            t.prototype.Uc = function() {}
                            ,
                            t
                        }();
                        return t
                    }(),
                    n.kj = function() {
                        function e() {
                            this.lj = 0,
                            this.mj = 0,
                            this.nj = 0,
                            this.oj = 0,
                            this.pj = 0,
                            this.qj = []
                        }
                        function o(t, e) {
                            for (var n = 0; n < t.length; n++)
                                if (t[n].id == e)
                                    return n;
                            return -1
                        }
                        return e.prototype.ha = function() {}
                        ,
                        e.prototype.rj = function(t) {
                            switch (window.bbs.loading || (window.bbs.PropertyManager = f({}, this),
                            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs))),
                            t) {
                            case n.tj.sj:
                                return this.lj;
                            case n.tj.uj:
                                return this.mj;
                            case n.tj.vj:
                                return this.nj;
                            case n.tj.wj:
                                return this.oj;
                            case n.tj.xj:
                                return this.pj
                            }
                            return 0
                        }
                        ,
                        e.prototype.yj = function() {
                            return new n.hb(this.lj,this.mj,this.nj,this.oj,this.pj)
                        }
                        ,
                        e.prototype.zj = function(t) {
                            this.qj.push(t),
                            this.Aj()
                        }
                        ,
                        e.prototype.Bj = function() {
                            if (!t().Lc.Wb())
                                return i.W([32, 33, 34, 35]);
                            for (var e = [], o = t().Lc.Xb().skinArrayDict, r = 0; r < o.length; r++) {
                                var s = o[r];
                                this.Cj(s.id, n.tj.sj) && e.push(s)
                            }
                            return 0 === e.length ? 0 : e[parseInt(e.length * Math.random())].id
                        }
                        ,
                        e.prototype.Dj = function() {
                            if (t().Lc.Wb()) {
                                var e = t().Lc.Xb().skinArrayDict
                                  , i = o(e, this.lj);
                                if (!(i < 0)) {
                                    for (var r = i + 1; r < e.length; r++)
                                        if (this.Cj(e[r].id, n.tj.sj))
                                            return this.lj = e[r].id,
                                            void this.Aj();
                                    for (var s = 0; s < i; s++)
                                        if (this.Cj(e[s].id, n.tj.sj))
                                            return this.lj = e[s].id,
                                            void this.Aj()
                                }
                            }
                        }
                        ,
                        e.prototype.Ej = function() {
                            var e = t();
                            if (e.Lc.Wb) {
                                var i = e.Lc.Xb().skinArrayDict
                                  , r = o(i, this.lj);
                                if (!(r < 0)) {
                                    for (var s = r - 1; s >= 0; s--)
                                        if (this.Cj(i[s].id, n.tj.sj))
                                            return this.lj = i[s].id,
                                            void this.Aj();
                                    for (var a = i.length - 1; a > r; a--)
                                        if (this.Cj(i[a].id, n.tj.sj))
                                            return this.lj = i[a].id,
                                            void this.Aj()
                                }
                            }
                        }
                        ,
                        e.prototype.Fj = function(e, o) {
                            if (!t().Lc.Wb() || this.Cj(e, o))
                                switch (o) {
                                case n.tj.sj:
                                    return void (this.lj !== e && (this.lj = e,
                                    this.Aj()));
                                case n.tj.uj:
                                    return void (this.mj !== e && (this.mj = e,
                                    this.Aj()));
                                case n.tj.vj:
                                    return void (this.nj !== e && (this.nj = e,
                                    this.Aj()));
                                case n.tj.wj:
                                    return void (this.oj !== e && (this.oj = e,
                                    this.Aj()));
                                case n.tj.xj:
                                    return void (this.pj !== e && (this.pj = e,
                                    this.Aj()))
                                }
                        }
                        ,
                        e.prototype.Cj = function(e, n) {
                            var o = this.Gj(e, n);
                            return null != o && (t().Ij.Hj() ? 0 === o.Jj() && !o.Kj() || t().Ij.Lj(e, n) : o.Mj())
                        }
                        ,
                        e.prototype.Gj = function(e, i) {
                            if (!t().Lc.Wb())
                                return null;
                            var r = t().Lc.Xb();
                            if (i === n.tj.sj) {
                                var s = o(r.skinArrayDict, e);
                                return s < 0 ? null : n.Oj.Nj(r.skinArrayDict[s])
                            }
                            var a = null;
                            switch (i) {
                            case n.tj.uj:
                                a = r.eyesDict[e];
                                break;
                            case n.tj.vj:
                                a = r.mouthDict[e];
                                break;
                            case n.tj.wj:
                                a = r.hatDict[e];
                                break;
                            case n.tj.xj:
                                a = r.glassesDict[e]
                            }
                            return null != a ? n.Oj.Pj(a) : null
                        }
                        ,
                        e.prototype.Aj = function() {
                            for (var t = 0; t < this.qj.length; t++)
                                this.qj[t]()
                        }
                        ,
                        e
                    }(),
                    n.tj = function() {
                        function t() {}
                        return t.sj = "SKIN",
                        t.uj = "EYES",
                        t.vj = "MOUTH",
                        t.xj = "GLASSES",
                        t.wj = "HAT",
                        t
                    }(),
                    n.Qj = function() {
                        function t() {
                            var t, e;
                            this.Bf = new _.Texture(_.BaseTexture.from("/images/bg-obstacle.png")),
                            this.Cf = new Array(36),
                            this._g = xt.bgg(),
                            this.ah = new _.Texture(((t = _.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = _.C.D,
                            t)),
                            this.Zg = new _.Texture(_.BaseTexture.from("/images/lens.png")),
                            this.rf = null,
                            this.Db = ((e = window.document.createElement("canvas")).width = 80,
                            e.height = 80,
                            {
                                Eb: e,
                                Fb: e.getContext("2d"),
                                oa: new _.Texture(_.BaseTexture.from(e))
                            }),
                            this.Ae = {},
                            this.we = {},
                            this.Rj = [],
                            this.Sj = null
                        }
                        return t.prototype.ha = function(t) {
                            function e() {
                                0 == --n && t()
                            }
                            var n = 4;
                            this.Ae = {},
                            e(),
                            this.we = {},
                            e(),
                            this.Rj = [],
                            e(),
                            this.Sj = null,
                            e()
                        }
                        ,
                        t
                    }(),
                    n.Tj = function() {
                        function t() {
                            this.Uj = null,
                            this.af = new n.Vj,
                            this._e = new n.Wj,
                            this.Xj = new n.Yj,
                            this.Zj = new n.$j,
                            this._j = new n.ak,
                            this.bk = new n.ck,
                            this.dk = new n.ek,
                            this.fk = new n.gk,
                            this.$h = new n.hk,
                            this.ik = new n.jk,
                            this.kk = new n.lk,
                            this.mk = new n.nk,
                            this.ok = new n.pk,
                            this.qk = new n.rk,
                            this.ie = new n.sk,
                            this.tk = new n.uk,
                            this.vk = new n.wk,
                            this.xk = new n.yk,
                            this.zk = []
                        }
                        function e(t, e) {
                            if (e !== t.length + 1) {
                                var n = t[e];
                                i.T(t, e + 1, e, t.length - e - 1),
                                t[t.length - 1] = n
                            }
                        }
                        return t.prototype.ha = function() {
                            this.Uj = null,
                            this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
                            for (var t = 0; t < this.zk.length; t++)
                                this.zk[t].ha()
                        }
                        ,
                        t.prototype.lh = function(t, e) {
                            for (var n = this.zk.length - 1; n >= 0; n--)
                                this.zk[n].Nf(t, e);
                            this.zk[0] !== this.af && this.zk[0] !== this.xk && null != this.Uj && this.Uj.Nf(t, e)
                        }
                        ,
                        t.prototype.Jf = function() {
                            for (var t = this.zk.length - 1; t >= 0; t--)
                                this.zk[t].Jf();
                            null != this.Uj && this.Uj.Jf()
                        }
                        ,
                        t.prototype.Ak = function(t) {
                            var e = function(t, e) {
                                for (var n = 0; n < t.length; n++)
                                    if (t[n] === e)
                                        return n;
                                return -1
                            }(this.zk, t);
                            e < 0 || (this.zk[0].Bk(),
                            function(t, e) {
                                if (0 !== e) {
                                    var n = t[e];
                                    i.T(t, 0, 1, e),
                                    t[0] = n
                                }
                            }(this.zk, e),
                            this.Ck())
                        }
                        ,
                        t.prototype.Dk = function() {
                            this.zk[0].Bk();
                            do {
                                e(this.zk, 0)
                            } while (this.zk[0].nd !== n.Fk.Ek);
                            this.Ck()
                        }
                        ,
                        t.prototype.Ck = function() {
                            var t = this.zk[0];
                            t.Gk(),
                            t.Hk(),
                            this.Ik()
                        }
                        ,
                        t.prototype.Jk = function() {
                            return 0 !== this.zk.length && this.zk[0].nd === n.Fk.Ek && this.qk.Kk()
                        }
                        ,
                        t.prototype.Lk = function() {
                            return 0 === this.zk.length ? null : this.zk[0]
                        }
                        ,
                        t.prototype.Ik = function() {
                            this.Jk() && this.Ak(this.qk)
                        }
                        ,
                        t
                    }(),
                    n.Pi = function() {
                        function t() {
                            this.Ch = [],
                            this.zh = []
                        }
                        return t.Qi = function(t, e) {
                            return {
                                Dh: t,
                                Bh: e
                            }
                        }
                        ,
                        t.Ri = function(t, e) {
                            return {
                                Ah: t,
                                Bh: e
                            }
                        }
                        ,
                        t
                    }(),
                    n.Mk = function() {
                        function e() {
                            this.setNk = new WeakSet,
                            this.Nk = [],
                            this.Ok = [],
                            this.Pk = !1,
                            this.Qk = o,
                            this.Rk = {}
                        }
                        var o = "guest";
                        return e.Sk = new (function() {
                            function t() {}
                            return t.Tk = function(t) {
                                this.Uk = t
                            }
                            ,
                            t.prototype.Vk = function() {
                                return "undefined" != typeof FB
                            }
                            ,
                            t.prototype.Wk = function(t, e, n) {
                                var o = "https://graph.facebook.com/me?access_token=" + t;
                                $.get(o).fail((function() {
                                    e()
                                }
                                )).done((function() {
                                    n()
                                }
                                ))
                            }
                            ,
                            t.prototype.Xk = function(e, n) {
                                this.Vk() ? this.Yk((function() {
                                    FB.login((function(o) {
                                        if ("connected" === o.status) {
                                            var i = o.authResponse.accessToken;
                                            n(new t.Tk(i))
                                        } else
                                            e()
                                    }
                                    ))
                                }
                                ), (function(t) {
                                    n(t)
                                }
                                )) : e()
                            }
                            ,
                            t.prototype.Yk = function(e, n) {
                                var o = this;
                                this.Vk() ? FB.getLoginStatus((function(i) {
                                    if ("connected" === i.status) {
                                        var r = i.authResponse.accessToken;
                                        o.Wk(r, (function() {
                                            e()
                                        }
                                        ), (function() {
                                            n(new t.Tk(r))
                                        }
                                        ))
                                    } else
                                        e()
                                }
                                )) : e()
                            }
                            ,
                            t.prototype.Zk = function() {
                                this.Vk() && FB.logout()
                            }
                            ,
                            t
                        }()),
                        e.$k = new (function() {
                            function t() {}
                            return t._k = function(t, e) {
                                this.Uk = t,
                                this.al = e
                            }
                            ,
                            t.prototype.Vk = function() {
                                return void 0 !== St
                            }
                            ,
                            t.prototype.Xk = function(e, n) {
                                void 0 !== St && void 0 !== St ? St.then((function() {
                                    if (St.isSignedIn.get()) {
                                        var o = St.currentUser.get()
                                          , i = o.getAuthResponse().id_token
                                          , r = (new Date).getTime() + 1e3 * o.getAuthResponse().expires_in;
                                        if ((new Date).getTime() < r)
                                            return void n(new t._k(i,r))
                                    }
                                    St.signIn().then((function(o) {
                                        if (void 0 === o.error)
                                            if (o.isSignedIn()) {
                                                var i = o.getAuthResponse().id_token
                                                  , r = (new Date).getTime() + 1e3 * o.getAuthResponse().expires_in;
                                                n(new t._k(i,r))
                                            } else
                                                e();
                                        else
                                            e()
                                    }
                                    ))
                                }
                                )) : e()
                            }
                            ,
                            t.prototype.Yk = function(e, n) {
                                void 0 !== St ? St.then((function() {
                                    if (St.isSignedIn.get()) {
                                        var o = St.currentUser.get()
                                          , i = o.getAuthResponse().id_token
                                          , r = (new Date).getTime() + 1e3 * o.getAuthResponse().expires_in;
                                        if ((new Date).getTime() < r)
                                            return void n(new t._k(i,r))
                                    }
                                    e()
                                }
                                )) : e()
                            }
                            ,
                            t.prototype.Zk = function() {
                                void 0 !== St && St.signOut()
                            }
                            ,
                            t
                        }()),
                        e.prototype.ha = function() {
                            this.bl()
                        }
                        ,
                        e.prototype.cl = function() {
                            return this.Pk ? this.Rk.userId : ""
                        }
                        ,
                        e.prototype.dl = function() {
                            return this.Pk ? this.Rk.username : ""
                        }
                        ,
                        e.prototype.el = function() {
                            return this.Pk ? this.Rk.nickname.substring(0, k) : ""
                        }
                        ,
                        e.prototype.fl = function() {
                            return this.Pk ? this.Rk.avatarUrl : GUEST_AVATAR_URL
                        }
                        ,
                        e.prototype.gl = function() {
                            return this.Pk && this.Rk.isBuyer
                        }
                        ,
                        e.prototype.hl = function() {
                            return this.Pk && this.Rk.isConsentGiven
                        }
                        ,
                        e.prototype.il = function() {
                            return this.Pk ? this.Rk.coins : 0
                        }
                        ,
                        e.prototype.jl = function() {
                            return this.Pk ? this.Rk.level : 1
                        }
                        ,
                        e.prototype.kl = function() {
                            return this.Pk ? this.Rk.expOnLevel : 0
                        }
                        ,
                        e.prototype.ll = function() {
                            return this.Pk ? this.Rk.expToNext : 50
                        }
                        ,
                        e.prototype.ml = function() {
                            return this.Pk ? this.Rk.skinId : 0
                        }
                        ,
                        e.prototype.nl = function() {
                            return this.Pk ? this.Rk.eyesId : 0
                        }
                        ,
                        e.prototype.ol = function() {
                            return this.Pk ? this.Rk.mouthId : 0
                        }
                        ,
                        e.prototype.pl = function() {
                            return this.Pk ? this.Rk.glassesId : 0
                        }
                        ,
                        e.prototype.ql = function() {
                            return this.Pk ? this.Rk.hatId : 0
                        }
                        ,
                        e.prototype.rl = function() {
                            return this.Pk ? this.Rk.highScore : 0
                        }
                        ,
                        e.prototype.sl = function() {
                            return this.Pk ? this.Rk.bestSurvivalTimeSec : 0
                        }
                        ,
                        e.prototype.tl = function() {
                            return this.Pk ? this.Rk.kills : 0
                        }
                        ,
                        e.prototype.ul = function() {
                            return this.Pk ? this.Rk.headShots : 0
                        }
                        ,
                        e.prototype.vl = function() {
                            return this.Pk ? this.Rk.sessionsPlayed : 0
                        }
                        ,
                        e.prototype.wl = function() {
                            return this.Pk ? this.Rk.totalPlayTimeSec : 0
                        }
                        ,
                        e.prototype.xl = function() {
                            return this.Pk ? this.Rk.regDate : {}
                        }
                        ,
                        e.prototype.yl = function(t) {
                            this.Nk.push(t),
                            t()
                        }
                        ,
                        e.prototype.zl = function(t) {
                            this.Ok.push(t),
                            t()
                        }
                        ,
                        e.prototype.Lj = function(t, e) {
                            var n = this.Rk.propertyList;
                            if (null == n)
                                return !1;
                            for (var o = t.toString(), i = 0; i < n.length; i++) {
                                var r = n[i];
                                if (r.id === o && r.type === e)
                                    return !0
                            }
                            return !1
                        }
                        ,
                        e.prototype.Hj = function() {
                            return this.Pk
                        }
                        ,
                        e.prototype.Al = function() {
                            return this.Qk
                        }
                        ,
                        e.prototype.Bl = function(e) {
                            var o = this
                              , i = this.cl()
                              , r = this.il()
                              , s = this.jl();
                            this.Cl((function() {
                                null != e && e()
                            }
                            ), (function(a) {
                                J(a.user_data),
                                o.Rk = a.user_data,
                                o.Dl(),
                                o.Rk.isConsentGiven = !0;
                                var c = o.cl()
                                  , l = o.il()
                                  , d = o.jl();
                                if (i === c) {
                                    d > 1 && d !== s && t().og.qk.El(new n.Fl(currLevel));
                                    var u = l - r;
                                    u >= 20 && t().og.qk.El(new n.Gl(u))
                                }
                                null != e && e()
                            }
                            ))
                        }
                        ,
                        e.prototype.Cl = function(t, e) {
                            var n = i.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
                            bbs.wuid = this.Qk,
                            i.Z(n, t, (function(n) {
                                1200 !== n.code ? t() : e(n)
                            }
                            ))
                        }
                        ,
                        e.prototype.Hl = function(t, e, n, o) {
                            var r = i.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + t + "&type=" + e;
                            i.Z(r, (function() {
                                n()
                            }
                            ), (function(t) {
                                1200 !== t.code ? n() : o(t)
                            }
                            ))
                        }
                        ,
                        e.prototype.Il = function(t, e) {
                            var n = i.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
                            i.Z(n, t, (function(n) {
                                1200 !== n.code ? t() : e(n)
                            }
                            ))
                        }
                        ,
                        e.prototype.Jl = function(t) {
                            var n = this;
                            this.Pk && this.Kl(),
                            e.Sk.Xk((function() {
                                t()
                            }
                            ), (function(e) {
                                n.Ll("fb", e.Uk, t)
                            }
                            ))
                        }
                        ,
                        e.prototype.Ml = function(t) {
                            var n = this;
                            this.Pk && this.Kl(),
                            e.$k.Xk((function() {
                                t()
                            }
                            ), (function(e) {
                                n.Ll("gg", e.Uk, t)
                            }
                            ))
                        }
                        ,
                        e.prototype.Ll = function(t, e, n, o) {
                            o = o || 0;
                            var i = $("#please-wait-view");
                            o < 1 && i.append(' AUTO CONNECTION <i id="auto_connection_text">' + o + "<i>...");
                            var r = this
                              , s = t + "_" + e
                              , a = "https://gateway.wormate.io/pub/wuid/" + s + "/login";
                            bbs.wuid = s,
                            o++,
                            i.fadeIn(500),
                            $("#auto_connection_text").html(o),
                            fetch(a, {
                                mode: "cors"
                            }).then((function(t) {
                                if (t.ok)
                                    return t.json();
                                throw new Error("Erro na solicitação")
                            }
                            )).then((function(s) {
                                1200 === s.code ? s.user_data && (i.html("..."),
                                i.fadeOut(500),
                                r.Ol(t, e, s.user_data),
                                null != n && n()) : r.Ll(t, e, n, o)
                            }
                            )).catch((function(t) {
                                r.Nl(),
                                i.html("..."),
                                i.fadeOut(500)
                            }
                            ))
                        }
                        ,
                        e.prototype.Kl = function() {
                            try {
                                this.Pl(),
                                this.Ql()
                            } catch (t) {}
                            this.Rl()
                        }
                        ,
                        e.prototype.Sl = function() {
                            this.Pk && this.Il((function() {}
                            ), (function(t) {}
                            ))
                        }
                        ,
                        e.prototype.Nl = function() {
                            t().og.Ak(t().og.tk)
                        }
                        ,
                        e.prototype.Ol = function(t, e, o) {
                            var i = this
                              , r = this.Pk ? this.Rk.userId : "guest";
                            Z(o, (function(o) {
                                J(o),
                                i.Pk = !0,
                                i.Qk = t + "_" + e,
                                i.Rk = o,
                                bbs.wuid = i.Qk,
                                n.Vf.eg(n.Vf.$f, t, 60),
                                r !== i.Rk.userId ? i.Tl() : i.Dl(),
                                window.bbs.loading = !1
                            }
                            ))
                        }
                        ,
                        e.prototype.Rl = function() {
                            var t = this.Pk ? this.Rk.userId : "guest";
                            this.Pk = !1,
                            this.Qk = o,
                            this.Rk = {},
                            n.Vf.eg(n.Vf.$f, "", 60),
                            t !== this.Rk.userId ? this.Tl() : this.Dl()
                        }
                        ,
                        e.prototype.bl = function() {
                            var t = n.Vf.fg(n.Vf.$f)
                              , o = this;
                            if ("fb" === t) {
                                var i = 1;
                                !function t() {
                                    !e.Sk.Vk() && i++ < 5 ? setTimeout(t, 1e3) : e.Sk.Yk((function() {}
                                    ), (function(t) {
                                        o.Ll("fb", t.Uk)
                                    }
                                    ))
                                }()
                            } else if ("gg" === t) {
                                var r = 1;
                                !function t() {
                                    !e.$k.Vk() && r++ < 5 ? setTimeout(t, 1e3) : e.$k.Yk((function() {}
                                    ), (function(t) {
                                        o.Ll("gg", t.Uk)
                                    }
                                    ))
                                }()
                            }
                        }
                        ,
                        e.prototype.Tl = function() {
                            for (var t = 0; t < this.Nk.length; t++)
                                this.Nk[t]();
                            this.Dl()
                        }
                        ,
                        e.prototype.Dl = function() {
                            for (var t = 0; t < this.Ok.length; t++)
                                this.Ok[t]()
                        }
                        ,
                        e.prototype.Pl = function() {
                            e.Sk.Zk()
                        }
                        ,
                        e.prototype.Ql = function() {
                            e.$k.Zk()
                        }
                        ,
                        e
                    }(),
                    n.if = function() {
                        function t(t, e, o) {
                            this.ef = o,
                            this.hd = !1,
                            this.nc = new _.Container,
                            this.nc.visible = !1,
                            this.Ul = new Array(t);
                            for (var i = 0; i < this.Ul.length; i++) {
                                var r = new n.Vl(new Float32Array(3 * e));
                                r.Wl(e),
                                this.Ul[i] = r,
                                this.nc.addChild(r.tf())
                            }
                            this.ff = 1,
                            this.gf = 1,
                            this.Jf()
                        }
                        return t.prototype.tf = function() {
                            return this.nc
                        }
                        ,
                        t.prototype.Kf = function(t) {
                            this.hd = t,
                            this.nc.visible = t
                        }
                        ,
                        t.prototype.Jf = function() {
                            this.ff = this.ef.width(),
                            this.gf = this.ef.height();
                            for (var t = this.gf / 30, e = 0; e < this.Ul.length; e++)
                                this.Ul[e].Xl(t)
                        }
                        ,
                        t.prototype.Uf = function() {
                            if (this.hd)
                                for (var t = 0; t < this.Ul.length; t++)
                                    this.Ul[t].Uf(this.lf)
                        }
                        ,
                        t.prototype.Yl = function() {
                            return this.ff
                        }
                        ,
                        t.prototype.Zl = function() {
                            return this.gf
                        }
                        ,
                        t.prototype.Qf = function(t, e) {
                            this.Ul[t].$l(e)
                        }
                        ,
                        t.prototype.Rf = function(t, e) {
                            this.Ul[t]._l(e)
                        }
                        ,
                        t.prototype.Sf = function(t, e, n) {
                            for (var o = this.Ul[t], i = o.am(), r = o.bm, s = 0; s < i; s++)
                                r[3 * s] = e,
                                r[3 * s + 1] = n,
                                r[3 * s + 2] = 0
                        }
                        ,
                        t.prototype.Tf = function(t, e, n) {
                            var o = this.Ul[t]
                              , i = o.am()
                              , r = o.bm
                              , s = o.cm()
                              , a = r[0]
                              , c = void 0
                              , l = r[1]
                              , d = void 0
                              , u = e - a
                              , h = n - l
                              , p = Math.hypot(u, h);
                            if (p > 0) {
                                r[0] = e,
                                r[1] = n,
                                r[2] = Math.atan2(h, u);
                                for (var f = .25 * s / (.25 * s + p), m = 1 - 2 * f, b = 1, g = i; b < g; b++)
                                    c = r[3 * b],
                                    r[3 * b] = r[3 * b - 3] * m + (c + a) * f,
                                    a = c,
                                    d = r[3 * b + 1],
                                    r[3 * b + 1] = r[3 * b - 2] * m + (d + l) * f,
                                    l = d,
                                    r[3 * b + 2] = Math.atan2(r[3 * b - 2] - r[3 * b + 1], r[3 * b - 3] - r[3 * b])
                            }
                        }
                        ,
                        t
                    }(),
                    n.dm = function() {
                        function e(e) {
                            var i = this;
                            this.ef = e,
                            this.Eb = e.get()[0],
                            this.lf = new _.Renderer({
                                view: e.get()[0],
                                transparent: !0,
                                antialias: !1
                            }),
                            this.hd = !1,
                            this.em = new n.Vl(new Float32Array(3 * o)),
                            this.ff = 1,
                            this.gf = 1,
                            this.fm = r.gm,
                            this.hm = r.gm,
                            this.im = r.gm,
                            this.jm = r.gm,
                            this.km = r.gm,
                            this.Jf(),
                            t().Lc.$b((function() {
                                i.em.lm()
                            }
                            ))
                        }
                        var o = Math.min(100, n.WormSpriteTree.wc)
                          , r = {
                            gm: "0lt0",
                            mm: "0lt1",
                            nm: "0lt2"
                        };
                        return e.prototype.Kf = function(t) {
                            this.hd = t
                        }
                        ,
                        e.prototype.Jf = function() {
                            var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                            this.ff = this.ef.width(),
                            this.gf = this.ef.height(),
                            this.lf.resize(this.ff, this.gf),
                            this.lf.resolution = t,
                            this.Eb.width = t * this.ff,
                            this.Eb.height = t * this.gf;
                            var e = this.gf / 4;
                            this.em.Xl(e);
                            var n = i.P(2 * Math.floor(this.ff / e) - 5, 1, o);
                            this.em.Wl(n)
                        }
                        ,
                        e.prototype.Nf = function() {
                            if (this.hd) {
                                var t = Date.now() / 200
                                  , e = Math.sin(t);
                                this.em.om(this.pm(this.fm, e), this.qm(this.fm, e)),
                                this.em.rm(this.sm(this.hm, e), this.sm(this.im, e), this.sm(this.jm, e), this.sm(this.km, e));
                                for (var n = this.em.cm(), o = this.em.am(), i = this.em.bm, r = this.ff - .5 * (this.ff - .5 * n * (o - 1)), s = .5 * this.gf, a = 0, c = 0, l = -1; l < o; l++) {
                                    var d = l
                                      , u = Math.cos(1 * d / 12 * Math.PI - t) * (1 - Math.pow(16, -1 * d / 12));
                                    l >= 0 && (i[3 * l] = r + -.5 * n * d,
                                    i[3 * l + 1] = s + .5 * n * u,
                                    i[3 * l + 2] = Math.atan2(c - u, d - a)),
                                    a = d,
                                    c = u
                                }
                                this.em.Uf(),
                                this.em.tm(this.lf)
                            }
                        }
                        ,
                        e.prototype.$l = function(t) {
                            this.em.$l(t)
                        }
                        ,
                        e.prototype.um = function(t) {
                            this.fm = t ? r.nm : r.mm,
                            this.hm = r.gm,
                            this.im = r.gm,
                            this.jm = r.gm,
                            this.km = r.gm
                        }
                        ,
                        e.prototype.vm = function(t) {
                            this.fm = r.gm,
                            this.hm = t ? r.nm : r.mm,
                            this.im = r.gm,
                            this.jm = r.gm,
                            this.km = r.gm
                        }
                        ,
                        e.prototype.wm = function(t) {
                            this.fm = r.gm,
                            this.hm = r.gm,
                            this.im = t ? r.nm : r.mm,
                            this.jm = r.gm,
                            this.km = r.gm
                        }
                        ,
                        e.prototype.xm = function(t) {
                            this.fm = r.gm,
                            this.hm = r.gm,
                            this.im = r.gm,
                            this.jm = t ? r.nm : r.mm,
                            this.km = r.gm
                        }
                        ,
                        e.prototype.ym = function(t) {
                            this.fm = r.gm,
                            this.hm = r.gm,
                            this.im = r.gm,
                            this.jm = r.gm,
                            this.km = t ? r.nm : r.mm
                        }
                        ,
                        e.prototype.pm = function(t, e) {
                            switch (t) {
                            case r.mm:
                                return .9 + .1 * e;
                            case r.nm:
                                return .4 + .3 * e
                            }
                            return 1
                        }
                        ,
                        e.prototype.qm = function(t, e) {
                            switch (t) {
                            case r.mm:
                                return .6 + .5 * e;
                            case r.nm:
                                return .3 + .3 * e
                            }
                            return 1
                        }
                        ,
                        e.prototype.sm = function(t, e) {
                            switch (t) {
                            case r.mm:
                                return .9 + .1 * e;
                            case r.nm:
                                return .6 + .4 * e
                            }
                            return 1
                        }
                        ,
                        e
                    }(),
                    n.Oj = function() {
                        function t(t, e, n, o, i) {
                            this.zm = t,
                            this.Am = e,
                            this.Bm = n,
                            this.Cm = o,
                            this.Dm = i
                        }
                        return t.Nj = function(e) {
                            return new t(e.price,e.guest,e.nonbuyable,e.nonbuyableCause,e.description || e.refer?.texture || "SKIN NATIVE " + e.id)
                        }
                        ,
                        t.Pj = function(e) {
                            return new t(e.price,e.guest,e.nonbuyable,e.nonbuyableCause,e.description)
                        }
                        ,
                        t.prototype.Jj = function() {
                            return this.zm
                        }
                        ,
                        t.prototype.Mj = function() {
                            return this.Am
                        }
                        ,
                        t.prototype.Kj = function() {
                            return this.Bm
                        }
                        ,
                        t.prototype.Em = function() {
                            return this.Cm
                        }
                        ,
                        t.prototype.Fm = function() {
                            return this.Dm
                        }
                        ,
                        t
                    }(),
                    n.qf = function() {
                        function t(t) {
                            this.Gm = {},
                            this.Gm[o] = t;
                            var e = _.Shader.from(c, l, this.Gm);
                            this.sf = new _.Mesh(a,e),
                            this.sf.blendMode = _.v.B
                        }
                        var e = "a1_" + i.X()
                          , n = "a2_" + i.X()
                          , o = "u3_" + i.X()
                          , r = "u4_" + i.X()
                          , s = "v1_" + i.X()
                          , a = (new _.Geometry).addAttribute(e, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(n, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2)
                          , c = "precision mediump float;attribute vec2 " + e + ";attribute vec2 " + n + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + r + ";varying vec2 " + s + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + e + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + r + ";vec2 uv=" + n + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + s + "=uv;}"
                          , l = "precision highp float;varying vec2 " + s + ";uniform sampler2D " + o + ";void main(){gl_FragColor=texture2D(" + o + "," + s + ");}";
                        return t.prototype.Mf = function(t, e) {
                            this.sf.scale.x = t,
                            this.sf.scale.y = e,
                            this.Gm[r] = [t, e, 1 / t + 1, 1 / e + 1]
                        }
                        ,
                        t
                    }(),
                    n.WMGBS1 = function() {
                        function t(t) {
                            var r = bbs.bgGameWidth || 1
                              , s = bbs.bgGameHeight || 1
                              , a = r > 512 ? r >= 1e3 ? 1 : .1 : .01;
                            this.Gm = {},
                            this.Gm[e] = [1, .5, .25, .5],
                            this.Gm[n] = _.Texture.WHITE,
                            this.Gm[o] = [0, 0],
                            this.Gm[i] = [0, 0],
                            this.sf = new PIXI.TilingSprite(t || kt.xe._g,1 == a ? 1100 : 12e4,1 == a ? 1100 : 12e4),
                            this.sf.scale.x = a,
                            this.sf.scale.y = a,
                            this.sf.position.x = -(1 == a ? r / 2 : 625),
                            this.sf.position.y = -(1 == a ? s / 2 : 625),
                            console.log("WMGBS1", r, s)
                        }
                        var e = "u3_"
                          , n = "u4_"
                          , o = "u5_"
                          , i = "u6_";
                        return t.prototype.Ec = function(t, n, o, i) {
                            var r = this.Gm[e];
                            r[0] = t,
                            r[1] = n,
                            r[2] = o,
                            r[3] = i
                        }
                        ,
                        t.prototype.$g = function(t) {
                            this.Gm[n] = t
                        }
                        ,
                        t.prototype.Uf = function(t, e, n, o) {}
                        ,
                        t
                    }(),
                    n.WMGBS2 = function() {
                        function t() {
                            this.Gm = {},
                            this.Gm[s] = [1, .5, .25, .5],
                            this.Gm[a] = _.Texture.WHITE,
                            this.Gm[c] = [0, 0],
                            this.Gm[l] = [0, 0];
                            var t = _.Shader.from(h, p, this.Gm);
                            this.sf = new _.Mesh(u,t)
                        }
                        console.log("WMGBS2");
                        var e = "a1_" + i.X()
                          , n = "a2_" + i.X()
                          , o = "translationMatrix"
                          , r = "projectionMatrix"
                          , s = "u3_" + i.X()
                          , a = "u4_" + i.X()
                          , c = "u5_" + i.X()
                          , l = "u6_" + i.X()
                          , d = "v1_" + i.X()
                          , u = (new _.Geometry).addAttribute(e, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2).addAttribute(n, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2)
                          , h = "precision mediump float;attribute vec2 " + e + ";attribute vec2 " + n + ";uniform mat3 " + o + ";uniform mat3 " + r + ";varying vec2 " + d + ";void main(){" + d + "=" + n + ";gl_Position=vec4((" + r + "*" + o + "*vec3(" + e + ",1.0)).xy,0.0,1.0);}"
                          , p = "precision highp float;varying vec2 " + d + ";uniform vec4 " + s + ";uniform sampler2D " + a + ";uniform vec2 " + c + ";uniform vec2 " + l + ";void main(){vec2 coord=" + d + "*" + c + "+" + l + ";vec4 v_color_mix=" + s + ";gl_FragColor=texture2D(" + a + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
                        return t.prototype.Ec = function(t, e, n, o) {
                            var i = this.Gm[s];
                            i[0] = t,
                            i[1] = e,
                            i[2] = n,
                            i[3] = o
                        }
                        ,
                        t.prototype.$g = function(t) {
                            this.Gm[a] = t
                        }
                        ,
                        t.prototype.Uf = function(t, e, n, o) {
                            this.sf.position.x = t,
                            this.sf.position.y = e,
                            this.sf.scale.x = n,
                            this.sf.scale.y = o;
                            var i = this.Gm[c];
                            i[0] = .2520615384615385 * n,
                            i[1] = .4357063736263738 * o;
                            var r = this.Gm[l];
                            r[0] = .2520615384615385 * t,
                            r[1] = .4357063736263738 * e
                        }
                        ,
                        t
                    }(),
                    n.sc = function() {
                        function t() {
                            this.xc = new PIXI.Sprite,
                            this.ev = null,
                            this.Hm = 0,
                            this.Im = 0,
                            this.si = null
                        }
                        return t.prototype.Bc = function(t, e, n) {
                            t && (this.xc.texture = t.Ea(),
                            this.xc.anchor.set(t.ya, t.za),
                            this.Hm = t.Aa,
                            this.Im = t.Ba)
                        }
                        ,
                        t.prototype.Ec = function(t) {
                            this.xc.tint = parseInt(t.substring(1), 16)
                        }
                        ,
                        t.prototype.Tc = function(t) {
                            try {
                                this.xc.width = t * this.Hm,
                                this.xc.height = t * this.Im
                            } catch (t) {}
                        }
                        ,
                        t.prototype.md = function(t) {
                            this.xc.rotation = t
                        }
                        ,
                        t.prototype.ld = function(t, e) {
                            this.xc.position.set(t, e)
                        }
                        ,
                        t.prototype.kd = function(t) {
                            this.xc.visible = t
                        }
                        ,
                        t.prototype.gd = function() {
                            return this.xc.visible
                        }
                        ,
                        t.prototype.jj = function(t) {
                            this.xc.alpha = t
                        }
                        ,
                        t.prototype.Qc = function() {
                            return this.xc
                        }
                        ,
                        t.prototype.Rc = function() {
                            i.U(this.xc)
                        }
                        ,
                        t
                    }(),
                    n.Worm = function() {
                        function e(t) {
                            this.hh = t,
                            this.Eh = new n.Worm.li,
                            this.xi = !1,
                            this.wi = !0,
                            this.Xc = !1,
                            this.$c = 0,
                            this.Jm = 0,
                            this.dj = 1,
                            this.bd = 0,
                            this.Bh = 0,
                            this.dd = {},
                            this.ad = 0,
                            this.Km = new Float32Array(2 * o),
                            this.Lm = new Float32Array(2 * o),
                            this._c = new Float32Array(2 * o),
                            this.Mm = null,
                            this.Nm = null,
                            this.Om = null,
                            this.Pm()
                        }
                        var o = 200;
                        return e.prototype.si = function() {
                            null != this.Nm && i.U(this.Nm.nc),
                            null != this.Om && i.U(this.Om)
                        }
                        ,
                        e.prototype.Pm = function() {
                            this.zi(.25),
                            this.Eh.ma = "",
                            this.wi = !0,
                            this.dd = {},
                            this.kd(!1)
                        }
                        ,
                        e.prototype.ri = function(t) {
                            this.Eh = t,
                            this.Qm(this.xi)
                        }
                        ,
                        e.prototype.kd = function(t) {
                            var e = this.xi;
                            this.xi = t,
                            this.Qm(e)
                        }
                        ,
                        e.prototype.zi = function(t) {
                            this.Bh = 50 * t;
                            var e = t;
                            t > this.hh.Ag && (e = Math.atan((t - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag);
                            var n = Math.sqrt(4 * Math.pow(5 * e, .707106781186548) + 25)
                              , i = Math.min(o, Math.max(3, 5 * (n - 5) + 1))
                              , r = this.ad;
                            if (this.$c = .025 * (5 + .9 * n),
                            this.ad = Math.floor(i),
                            this.Jm = i - this.ad,
                            r > 0 && r < this.ad)
                                for (var s = this.Km[2 * r - 2], a = this.Km[2 * r - 1], c = this.Lm[2 * r - 2], l = this.Lm[2 * r - 1], d = this._c[2 * r - 2], u = this._c[2 * r - 1], h = r; h < this.ad; h++)
                                    this.Km[2 * h] = s,
                                    this.Km[2 * h + 1] = a,
                                    this.Lm[2 * h] = c,
                                    this.Lm[2 * h + 1] = l,
                                    this._c[2 * h] = d,
                                    this._c[2 * h + 1] = u
                        }
                        ,
                        e.prototype.Ei = function(t, e) {
                            this.ad = e;
                            for (var n = 0; n < this.ad; n++)
                                this.Km[2 * n] = this.Lm[2 * n] = this._c[2 * n] = t(),
                                this.Km[2 * n + 1] = this.Lm[2 * n + 1] = this._c[2 * n + 1] = t()
                        }
                        ,
                        e.prototype.Bi = function(t, e, n) {
                            this.Xc = n;
                            for (var o = 0; o < this.ad; o++)
                                this.Km[2 * o] = this.Lm[2 * o],
                                this.Km[2 * o + 1] = this.Lm[2 * o + 1];
                            var i = t - this.Lm[0]
                              , r = e - this.Lm[1];
                            this.Rm(i, r, this.ad, this.Lm)
                        }
                        ,
                        e.prototype.Rm = function(t, e, n, o) {
                            var i = Math.hypot(t, e);
                            if (!(i <= 0)) {
                                var r = o[0]
                                  , s = void 0;
                                o[0] += t;
                                var a = o[1]
                                  , c = void 0;
                                o[1] += e;
                                for (var l = this.$c / (this.$c + i), d = 1 - 2 * l, u = 1, h = n - 1; u < h; u++)
                                    s = o[2 * u],
                                    o[2 * u] = o[2 * u - 2] * d + (s + r) * l,
                                    r = s,
                                    c = o[2 * u + 1],
                                    o[2 * u + 1] = o[2 * u - 1] * d + (c + a) * l,
                                    a = c;
                                d = 1 - 2 * (l = this.Jm * this.$c / (this.Jm * this.$c + i)),
                                o[2 * n - 2] = o[2 * n - 4] * d + (o[2 * n - 2] + r) * l,
                                o[2 * n - 1] = o[2 * n - 3] * d + (o[2 * n - 1] + a) * l
                            }
                        }
                        ,
                        e.prototype.fh = function() {
                            return {
                                x: this._c[0],
                                y: this._c[1]
                            }
                        }
                        ,
                        e.prototype.yi = function(t, e) {
                            for (var n = 1e6, o = t, i = e, r = 0; r < this.ad; r++) {
                                var s = this._c[2 * r]
                                  , a = this._c[2 * r + 1]
                                  , c = Math.hypot(t - s, e - a);
                                c < n && (n = c,
                                o = s,
                                i = a)
                            }
                            return {
                                x: o,
                                y: i,
                                distance: n
                            }
                        }
                        ,
                        e.prototype.ti = function(t) {
                            this.Mm = t
                        }
                        ,
                        e.prototype.hj = function(t, e) {
                            this.dj = i.Q(this.dj, this.wi ? this.Xc ? .9 + .1 * Math.cos(t / 400 * Math.PI) : 1 : 0, e, 1 / 800),
                            this.bd = i.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, e, .0025),
                            null != this.Nm && (this.Nm.nc.alpha = this.dj),
                            null != this.Om && (this.Om.alpha = this.dj)
                        }
                        ,
                        e.prototype.ij = function(t, e, n, o) {
                            if (this.xi && this.wi)
                                for (var r = Math.pow(.11112, e / 95), s = 0; s < this.ad; s++)
                                    this._c[2 * s] = i.S(i.S(this.Km[2 * s], this.Lm[2 * s], n), this._c[2 * s], r),
                                    this._c[2 * s + 1] = i.S(i.S(this.Km[2 * s + 1], this.Lm[2 * s + 1], n), this._c[2 * s + 1], r);
                            this.Nm && this.xi && this.Nm.Zc(this, t, e, o),
                            this.Om && (this.Om.ih.x = this._c[0],
                            this.Om.ih.y = this._c[1] - 3 * this.$c)
                        }
                        ,
                        e.prototype.Qm = function(t) {
                            this.xi ? t || this.Sm() : (null != this.Nm && i.U(this.Nm.nc),
                            null != this.Om && i.U(this.Om))
                        }
                        ,
                        e.prototype.Sm = function() {
                            var e = t();
                            this.Nm = this.Nm || new n.WormSpriteTree,
                            i.U(this.Nm.nc),
                            this.Nm.yc(e.dh.hh.xg, e.Lc.Ub().jb(this.Eh.Gh), e.Lc.Ub().ib(this.Eh.Hh), e.Lc.Ub().kb(this.Eh.ni), e.Lc.Ub().lb(this.Eh.oi), e.Lc.Ub().mb(this.Eh.pi), e.Lc.Ub().nb(this.Eh.qi), "#ffffff"),
                            this.Om = this.Om || new n.Tm(""),
                            i.U(this.Om),
                            this.Om.style.fontFamily = "PTSans",
                            this.Om.anchor.set(.5),
                            this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14),
                            this.Om.style.fill = bbs.enemyNameColor || e.Lc.Ub().ib(this.Eh.Hh).tb || "#fff",
                            this.Om.style.fontWeight = "bold",
                            this.Om.text = j ? this.Eh.ma : "-----",
                            this.Mm.oh(this.Eh.ae, this.Nm, this.Om)
                        }
                        ,
                        e.li = function() {
                            this.ae = 0,
                            this.Gh = xt.ps ? xt.ps : n.GameParams.Cg,
                            this.Hh = 0,
                            this.ni = 0,
                            this.oi = 0,
                            this.pi = 0,
                            this.qi = 0,
                            this.ma = 0
                        }
                        ,
                        e
                    }(),
                    n.Tm = i.M(_.Text, (function(t, e, n) {
                        _.Text.call(this, t, e, n),
                        this.ih = {
                            x: 0,
                            y: 0
                        }
                    }
                    )),
                    n.hb = function() {
                        function t(t, e, n, o, i) {
                            this.lj = t,
                            this.mj = e,
                            this.nj = n,
                            this.oj = o,
                            this.pj = i
                        }
                        return t.prototype.Um = function(e) {
                            return new t(e,this.mj,this.nj,this.oj,this.pj)
                        }
                        ,
                        t.prototype.Vm = function(e) {
                            return new t(this.lj,e,this.nj,this.oj,this.pj)
                        }
                        ,
                        t.prototype.Wm = function(e) {
                            return new t(this.lj,this.mj,e,this.oj,this.pj)
                        }
                        ,
                        t.prototype.Xm = function(e) {
                            return new t(this.lj,this.mj,this.nj,e,this.pj)
                        }
                        ,
                        t.prototype.Ym = function(e) {
                            return new t(this.lj,this.mj,this.nj,this.oj,e)
                        }
                        ,
                        t
                    }(),
                    n.Vl = function() {
                        function e(t) {
                            this.Zm = new n.WormSpriteTree,
                            this.Zm.nc.addChild(this.Zm.oc),
                            this.$m = null,
                            this._m = null,
                            this.bm = t,
                            this.pc = 0,
                            this.Gi = 1,
                            this.an = 1,
                            this.bn = 1,
                            this.cn = 1,
                            this.dn = 1,
                            this.gn = 1,
                            this.hn = 1,
                            this._l("#ffffff")
                        }
                        var o = new n.hb(0,0,0,0,0);
                        return e.prototype.tf = function() {
                            return this.Zm.nc
                        }
                        ,
                        e.prototype.Wl = function(t) {
                            if (this.pc = t,
                            this.Zm.pc !== t) {
                                for (var e = t; e < this.Zm.qc.length; e++)
                                    this.Zm.qc[e].Uc();
                                for (; this.Zm.pc > t; ) {
                                    this.Zm.pc -= 1;
                                    var n = this.Zm.qc[this.Zm.pc];
                                    n.Dc.Rc(),
                                    n.Cc.Rc()
                                }
                                for (; this.Zm.pc < t; ) {
                                    var o = this.Zm.qc[this.Zm.pc];
                                    this.Zm.pc += 1,
                                    this.Zm.nc.addChild(o.Cc.Qc()),
                                    this.Zm.nc.addChild(o.Dc.Qc()),
                                    o.Cc.jj(this.an),
                                    o.Dc.jj(this.bn)
                                }
                                for (var i = 0; i < this.Zm.oc.Fc.length; i++)
                                    this.Zm.oc.Fc[i].jj(this.cn);
                                for (var r = 0; r < this.Zm.oc.Gc.length; r++)
                                    this.Zm.oc.Gc[r].jj(this.dn);
                                for (var s = 0; s < this.Zm.oc.Ic.length; s++)
                                    this.Zm.oc.Ic[s].jj(this.gn);
                                for (var a = 0; a < this.Zm.oc.Hc.length; a++)
                                    this.Zm.oc.Hc[a].jj(this.hn)
                            }
                        }
                        ,
                        e.prototype.am = function() {
                            return this.pc
                        }
                        ,
                        e.prototype.$l = function(t) {
                            this.$m = t,
                            this._m = "#ffffff",
                            this.lm()
                        }
                        ,
                        e.prototype._l = function(t) {
                            this.$m = o,
                            this._m = t,
                            this.lm()
                        }
                        ,
                        e.prototype.lm = function() {
                            var e = t();
                            this.Zm.yc(n.Ac.vg, null, e.Lc.Ub().ib(this.$m.lj), e.Lc.Ub().kb(this.$m.mj), e.Lc.Ub().lb(this.$m.nj), e.Lc.Ub().mb(this.$m.pj), e.Lc.Ub().nb(this.$m.oj), this._m)
                        }
                        ,
                        e.prototype.Xl = function(t) {
                            this.Gi = t
                        }
                        ,
                        e.prototype.cm = function() {
                            return this.Gi
                        }
                        ,
                        e.prototype.om = function(t, e) {
                            this.an = t,
                            this.bn = e;
                            for (var n = 0; n < this.pc; n++) {
                                var o = this.Zm.qc[n];
                                o.Cc.jj(this.an),
                                o.Dc.jj(this.bn)
                            }
                        }
                        ,
                        e.prototype.rm = function(t, e, n, o) {
                            this.cn = t,
                            this.dn = e,
                            this.gn = n,
                            this.hn = o;
                            for (var i = 0; i < this.Zm.oc.Fc.length; i++)
                                this.Zm.oc.Fc[i].jj(this.cn);
                            for (var r = 0; r < this.Zm.oc.Gc.length; r++)
                                this.Zm.oc.Gc[r].jj(this.dn);
                            for (var s = 0; s < this.Zm.oc.Ic.length; s++)
                                this.Zm.oc.Ic[s].jj(this.gn);
                            for (var a = 0; a < this.Zm.oc.Hc.length; a++)
                                this.Zm.oc.Hc[a].jj(this.hn)
                        }
                        ,
                        e.prototype.Uf = function() {
                            var t = 2 * this.Gi
                              , e = 2 * this.Gi * 1.5;
                            if (this.pc > 0) {
                                var n = this.bm[0]
                                  , o = this.bm[1]
                                  , i = this.bm[2];
                                this.Zm.qc[0].Sc(n, o, t, e, i),
                                this.Zm.oc.Sc(n, o, t, i)
                            }
                            for (var r = 1; r < this.pc; r++) {
                                var s = this.bm[3 * r]
                                  , a = this.bm[3 * r + 1]
                                  , c = this.bm[3 * r + 2];
                                this.Zm.qc[r].Sc(s, a, t, e, c)
                            }
                        }
                        ,
                        e.prototype.tm = function(t) {
                            t.render(this.Zm.nc)
                        }
                        ,
                        e
                    }(),
                    n.kf = function() {
                        function t(t) {
                            this.nd = t
                        }
                        return t.bgcanvas = $("#background-canvas"),
                        t.socialButtons = $("#social-buttons"),
                        t.socialButtons.html(""),
                        t.jn = $("#game-view"),
                        t.gameCanvas = $("#game-canvas"),
                        t.ln = $("#results-view"),
                        t.mn = $("#stretch-box"),
                        t.nn = $("#main-menu-view"),
                        t.pn = $("#popup-view"),
                        t.qn = $("#loading-view"),
                        t.rn = $("#restricted-view"),
                        t.sn = $("#toaster-view"),
                        t.tn = $("#error-gateway-connection-view"),
                        t.un_error = $("#error-game-connection-view"),
                        t.vn = $("#markup-wrap"),
                        t.prototype.ha = function() {}
                        ,
                        t.prototype.Gk = function() {}
                        ,
                        t.prototype.Hk = function() {}
                        ,
                        t.prototype.Bk = function() {}
                        ,
                        t.prototype.Jf = function() {}
                        ,
                        t.prototype.Nf = function(t, e) {}
                        ,
                        t
                    }(),
                    n.Vj = function() {
                        var e = $("#final-caption")
                          , o = $("#final-continue")
                          , r = $("#congrats-bg")
                          , s = $("#unl6wj4czdl84o9b");
                        $("#congrats");
                        var a = $("#final-share-fb")
                          , c = $("#final-message")
                          , l = $("#final-score")
                          , d = $("#final-place")
                          , u = $("#final-board");
                        !function() {
                            try {
                                if (!document.getElementById("final-replay") && d && d.length) {
                                    d.after("<div id='final-replay'>Respawn</div>");
                                    var t = $("#final-replay");
                                    t.css({
                                        position: "absolute",
                                        top: "300px",
                                        left: "15px",
                                        right: "15px",
                                        background: "#f7941d",
                                        color: "#ffffff",
                                        lineHeight: "50px",
                                        borderRadius: "5px",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        border: "none",
                                        fontSize: "24px",
                                        zIndex: 9999,
                                        pointerEvents: "auto"
                                    }),
                                    t.hover((function() {
                                        $(this).css({
                                            background: "#fa9d32"
                                        })
                                    }
                                    ), (function() {
                                        $(this).css({
                                            background: "#f7941d"
                                        })
                                    }
                                    )),
                                    t.on("click", (function(t) {
                                        t.preventDefault(),
                                        t.stopPropagation(),
                                        function() {
                                            try {
                                                if (window._wwc && "function" == typeof window._wwc.respawn)
                                                    return void window._wwc.respawn()
                                            } catch (t) {}
                                            try {
                                                var t = new KeyboardEvent("keydown",{
                                                    key: "5",
                                                    code: "Digit5",
                                                    keyCode: 53,
                                                    which: 53,
                                                    bubbles: !0
                                                })
                                                  , e = new KeyboardEvent("keyup",{
                                                    key: "5",
                                                    code: "Digit5",
                                                    keyCode: 53,
                                                    which: 53,
                                                    bubbles: !0
                                                });
                                                document.dispatchEvent(t),
                                                document.dispatchEvent(e)
                                            } catch (t) {}
                                        }()
                                    }
                                    ))
                                }
                            } catch (t) {}
                        }();
                        var h = i.M(n.kf, (function() {
                            n.kf.call(this, n.Fk.wn);
                            var r = this
                              , s = t();
                            a.toggle(qt.xn),
                            e.text(i.H("index.game.result.title")),
                            o.text(i.H("index.game.result.continue")),
                            o.html("Continue (Home)"),
                            o.click((function() {
                                s.Ci.Be(),
                                s.zn.yn.ka(),
                                s.Ci.pe(n.ge.je._e),
                                s.og.Ak(s.og._e)
                            }
                            )),
                            $("html").keydown((function(t) {
                                32 === t.keyCode && (r.An = !0)
                            }
                            )).keyup((function(t) {
                                32 === t.keyCode && (r.An = !1)
                            }
                            )),
                            this.ng = new n.Eg(n.kf.gameCanvas),
                            this.Cn = 0,
                            this.Bn = 0,
                            this.An = !1
                        }
                        ));
                        return h.prototype.ha = function() {}
                        ,
                        h.prototype.Gk = function() {
                            0 === this.Cn ? (n.kf.jn.stop(),
                            n.kf.jn.fadeIn(500),
                            n.kf.ln.stop(),
                            n.kf.ln.fadeOut(1),
                            n.kf.nn.stop(),
                            n.kf.nn.fadeOut(50),
                            n.kf.pn.stop(),
                            n.kf.pn.fadeOut(50),
                            n.kf.sn.stop(),
                            n.kf.sn.fadeOut(50),
                            n.kf.qn.stop(),
                            n.kf.qn.fadeOut(50),
                            n.kf.rn.stop(),
                            n.kf.rn.fadeOut(50),
                            n.kf.tn.stop(),
                            n.kf.tn.fadeOut(50),
                            n.kf.un_error.stop(),
                            n.kf.un_error.fadeOut(50),
                            n.kf.mn.stop(),
                            n.kf.mn.fadeOut(1),
                            n.kf.bgcanvas.stop(),
                            n.kf.bgcanvas.fadeOut(50),
                            n.GameView.Kf(!1),
                            n.kf.socialButtons.stop(),
                            n.kf.socialButtons.fadeOut(50),
                            n.kf.vn.stop(),
                            n.kf.vn.fadeOut(50)) : (n.kf.jn.stop(),
                            n.kf.jn.fadeIn(500),
                            n.kf.ln.stop(),
                            n.kf.ln.fadeIn(500),
                            n.kf.nn.stop(),
                            n.kf.nn.fadeOut(50),
                            n.kf.pn.stop(),
                            n.kf.pn.fadeOut(50),
                            n.kf.sn.stop(),
                            n.kf.sn.fadeOut(50),
                            n.kf.qn.stop(),
                            n.kf.qn.fadeOut(50),
                            n.kf.rn.stop(),
                            n.kf.rn.fadeOut(50),
                            n.kf.tn.stop(),
                            n.kf.tn.fadeOut(50),
                            n.kf.un_error.stop(),
                            n.kf.un_error.fadeOut(50),
                            n.kf.mn.stop(),
                            n.kf.mn.fadeOut(1),
                            n.kf.bgcanvas.stop(),
                            n.kf.bgcanvas.fadeOut(50),
                            n.GameView.Kf(!1),
                            n.kf.socialButtons.stop(),
                            n.kf.socialButtons.fadeOut(50),
                            n.kf.vn.stop(),
                            n.kf.vn.fadeOut(50))
                        }
                        ,
                        h.prototype.Dn = function() {
                            return this.Cn = 0,
                            this
                        }
                        ,
                        h.prototype.En = function() {
                            return r.hide(),
                            setTimeout((function() {
                                r.fadeIn(500)
                            }
                            ), 3e3),
                            s.hide(),
                            setTimeout((function() {
                                s.fadeIn(500)
                            }
                            ), 500),
                            this.Cn = 1,
                            this
                        }
                        ,
                        h.prototype.Hk = function() {
                            this.An = !1,
                            this.ng.Jf(),
                            1 === this.Cn && t().Ci.Fe()
                        }
                        ,
                        h.prototype.Jf = function() {
                            this.ng.Jf()
                        }
                        ,
                        h.prototype.Nf = function(t, e) {
                            this.ng.Nf(t, e)
                        }
                        ,
                        h.prototype.Fn = function(t, e, n) {
                            var o, r, s, h = void 0, p = void 0, f = void 0;
                            e >= 1 && e <= 10 ? (h = i.H("index.game.result.place.i" + e),
                            p = i.H("index.game.result.placeInBoard"),
                            f = i.H("index.game.social.shareResult.messGood").replace("{0}", n).replace("{1}", t).replace("{2}", h)) : (h = "",
                            p = i.H("index.game.result.tryHit"),
                            f = i.H("index.game.social.shareResult.messNorm").replace("{0}", n).replace("{1}", t)),
                            c.html(i.H("index.game.result.your")),
                            l.html(t),
                            d.html(h),
                            u.html(p),
                            qt.xn && (i.H("index.game.result.share"),
                            i.H("index.game.social.shareResult.caption"),
                            a.empty().append((o = f,
                            r = f,
                            (s = $("OK")).click((function() {
                                "undefined" != typeof FB && void 0 !== FB.ui && FB.ui({
                                    method: "feed",
                                    display: "popup",
                                    link: "https://wormate.io",
                                    name: "wormate.io",
                                    caption: o,
                                    description: r,
                                    picture: "https://wormate.io/images/og-share-img-new.jpg"
                                }, (function() {}
                                ))
                            }
                            )),
                            s)))
                        }
                        ,
                        h.prototype.Gn = function() {
                            return this.Bn
                        }
                        ,
                        h.prototype.Hn = function() {
                            return this.An
                        }
                        ,
                        h
                    }(),
                    n.sk = (l = $("#loading-progress-cont"),
                    d = $("#loading-progress-bar"),
                    u = $("#loading-progress-text"),
                    (h = i.M(n.kf, (function() {
                        n.kf.call(this, n.Fk.wn),
                        this.In = -1,
                        this.Jn = ""
                    }
                    ))).prototype.ha = function() {}
                    ,
                    h.prototype.Gk = function() {
                        n.kf.jn.stop(),
                        n.kf.jn.fadeOut(50),
                        n.kf.ln.stop(),
                        n.kf.ln.fadeOut(50),
                        n.kf.nn.stop(),
                        n.kf.nn.fadeOut(50),
                        n.kf.pn.stop(),
                        n.kf.pn.fadeOut(50),
                        n.kf.sn.stop(),
                        n.kf.sn.fadeOut(50),
                        n.kf.qn.stop(),
                        n.kf.qn.fadeIn(500),
                        n.kf.rn.stop(),
                        n.kf.rn.fadeOut(50),
                        n.kf.tn.stop(),
                        n.kf.tn.fadeOut(50),
                        n.kf.un_error.stop(),
                        n.kf.un_error.fadeOut(50),
                        n.kf.mn.stop(),
                        n.kf.mn.fadeIn(1),
                        n.kf.bgcanvas.stop(),
                        n.kf.bgcanvas.fadeIn(500),
                        n.GameView.Kf(!0),
                        n.kf.socialButtons.stop(),
                        n.kf.socialButtons.fadeOut(50),
                        n.kf.vn.stop(),
                        n.kf.vn.fadeOut(50)
                    }
                    ,
                    h.prototype.Hk = function() {
                        t().Ci.pe(n.ge.je.ie)
                    }
                    ,
                    h.prototype.Bk = function() {}
                    ,
                    h.prototype.Kn = function() {
                        this.Ln("", 0),
                        l.stop(),
                        l.fadeIn(100)
                    }
                    ,
                    h.prototype.Mn = function() {
                        l.stop(),
                        l.fadeOut(100)
                    }
                    ,
                    h.prototype.Ln = function(t, e) {
                        this.Jn !== t && (this.Jn = t);
                        var n = i.P(Math.floor(100 * e), 0, 100);
                        this.In !== n && (d.css({
                            width: n + "%"
                        }),
                        u.html(n + " %"))
                    }
                    ,
                    h),
                    n.Wj = function() {
                        var e = $("#mm-line-top");
                        $("#mm-line-center"),
                        $("#mm-line-bottom");
                        try {
                            var o = function() {
                                var t, e = $("#mm-menu-cont").find('#server-list, .server-list, #servers, .servers, [id*="server-list"], [class*="server-list"], [id*="servers"], [class*="servers"], [id*="server"], [class*="server"]').filter(":visible").first();
                                if (e && e.length) {
                                    if (document.getElementById("div_map")) {
                                        var n = (t = $('img[title="Tìm map wormate"]')).length ? t.eq(0) : $('<img src="https://timmapwormate.com/images/check/linelogo_tmw.png"                  style="height: 42px; background-image: linear-gradient(#a9938c, #000000); font-weight: bold; color: white; border-radius: 5px; border: 1px solid black; display: inline-block; margin: 6px 0 8px 0;"                  title="Tìm map wormate">');
                                        try {
                                            n.detach()
                                        } catch (t) {}
                                        n.insertBefore(e),
                                        document.getElementById("tmw-cindynana-banner") || $('<img id="tmw-cindynana-banner" src="https://timmapwormate.com/images/check/Cindynana_banner.png" style="display:block; max-width:100%; height:auto; margin: 8px 0 6px 0;" alt="Cindynana banner">').insertBefore(e)
                                    } else {
                                        e.before('<img src="https://timmapwormate.com/images/check/linelogo_tmw.png" style="height: 42px; background-image: linear-gradient(#a9938c, #000000); font-weight: bold; color: white; border-radius: 5px; border: 1px solid black; position: absolute; z-index: 1;}" title="Tìm map wormate"><img id="tmw-cindynana-banner" src="https://timmapwormate.com/images/check/Cindynana_banner.png" style="display:block; max-width:100%; height:auto; margin: 8px 0 6px 0;" alt="Cindynana banner"><div id="div_map">                        <table class="flags">                          <tr>                            <td class="center"><a id="flag_sg"  class="area_show"><span class="flag sg"></span></a></td>                            <td class="center"><a id="flag_jp"><span class="flag jp"></span></a></td>                            <td class="center"><a id="flag_ca"><span class="flag ca"></span></a></td>                            <td class="center"><a id="flag_mx"><span class="flag mx"></span></a></td>                            <td class="center"><a id="flag_de"><span class="flag de"></span></a></td>                          </tr>                          <tr>                            <td class="center"><a id="flag_br"><span class="flag br"></span></a></td>                            <td class="center"><a id="flag_us"><span class="flag us"></span></a></td>                            <td class="center"><a id="flag_fr"><span class="flag fr"></span></a></td>                            <td class="center"><a id="flag_au"><span class="flag au"></span></a></td>                            <td class="center"><a id="flag_gb"><span class="flag gb"></span></a></td>                          </tr>                        </table>                        <hr style="margin: 0;">                        <div id="area_br" class="area_map div_hidden"><p style="text-align: center;font-size: 20px;">Updating.<br>Please wait, Thanks.</p></div>                        <div id="area_us" class="area_map div_hidden"></div>                        <div id="area_ca" class="area_map div_hidden"></div>                        <div id="area_mx" class="area_map div_hidden"><p style="text-align: center;font-size: 20px;">Updating.<br>Please wait, Thanks.</p></div>                        <div id="area_de" class="area_map div_hidden"></div>                        <div id="area_fr" class="area_map div_hidden"></div>                        <div id="area_sg" class="area_map div_show"></div>                        <div id="area_jp" class="area_map div_hidden"><p style="text-align: center;font-size: 20px;">Updating.<br>Please wait, Thanks.</p></div>                        <div id="area_au" class="area_map div_hidden"></div>                        <div id="area_gb" class="area_map div_hidden"><p style="text-align: center;font-size: 20px;">Updating.<br>Please wait, Thanks.</p></div>                      </div><p id="update_new_2" style="text-align: center;position: absolute;bottom: -15px;width: 100%;background-image: linear-gradient(#ffffff, #ffffff);font-weight: bold;color: black;border: 1px solid;border-radius: 10px;border-color: #ffffff;">Please, Clear browser history to update the extension. Thanks.</p>');
                                        try {
                                            $("#flag_br").off("click").on("click", (function() {
                                                $("#flag_br").addClass("area_show"),
                                                $("#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb").removeClass("area_show"),
                                                $("#area_br").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_us").off("click").on("click", (function() {
                                                $("#flag_us").addClass("area_show"),
                                                $("#flag_br,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb").removeClass("area_show"),
                                                $("#area_us").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_br,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_ca").off("click").on("click", (function() {
                                                $("#flag_ca").addClass("area_show"),
                                                $("#flag_us,#flag_br,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb").removeClass("area_show"),
                                                $("#area_ca").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_br,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_mx").off("click").on("click", (function() {
                                                $("#flag_mx").addClass("area_show"),
                                                $("#flag_us,#flag_ca,#flag_br,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb").removeClass("area_show"),
                                                $("#area_mx").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_ca,#area_br,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_de").off("click").on("click", (function() {
                                                $("#flag_de").addClass("area_show"),
                                                $("#flag_us,#flag_ca,#flag_mx,#flag_br,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_gb").removeClass("area_show"),
                                                $("#area_de").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_ca,#area_mx,#area_br,#area_fr,#area_sg,#area_jp,#area_au,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_fr").off("click").on("click", (function() {
                                                $("#flag_fr").addClass("area_show"),
                                                $("#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_br,#flag_sg,#flag_jp,#flag_au,#flag_gb").removeClass("area_show"),
                                                $("#area_fr").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_ca,#area_mx,#area_de,#area_br,#area_sg,#area_jp,#area_au,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_sg").off("click").on("click", (function() {
                                                $("#flag_sg").addClass("area_show"),
                                                $("#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_br,#flag_jp,#flag_au,#flag_gb").removeClass("area_show"),
                                                $("#area_sg").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_br,#area_jp,#area_au,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_jp").off("click").on("click", (function() {
                                                $("#flag_jp").addClass("area_show"),
                                                $("#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_br,#flag_au,#flag_gb").removeClass("area_show"),
                                                $("#area_jp").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_br,#area_au,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_au").off("click").on("click", (function() {
                                                $("#flag_au").addClass("area_show"),
                                                $("#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_br,#flag_gb").removeClass("area_show"),
                                                $("#area_au").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_br,#area_gb").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $("#flag_gb").off("click").on("click", (function() {
                                                $("#flag_gb").addClass("area_show"),
                                                $("#flag_us,#flag_ca,#flag_mx,#flag_de,#flag_fr,#flag_sg,#flag_jp,#flag_au,#flag_br").removeClass("area_show"),
                                                $("#area_gb").addClass("div_show").removeClass("div_hidden"),
                                                $("#area_us,#area_ca,#area_mx,#area_de,#area_fr,#area_sg,#area_jp,#area_au,#area_br").addClass("div_hidden").removeClass("div_show")
                                            }
                                            )),
                                            $(".select_item").off("click").on("click", (function(t) {
                                                t.preventDefault();
                                                var e = $(this).data("port");
                                                $("#port_id").val(e);
                                                var n = $(this).data("name");
                                                $("#port_name").val(n);
                                                var o = document.getElementById("mm-action-play");
                                                o && o.click()
                                            }
                                            ))
                                        } catch (t) {}
                                    }
                                    return !0
                                }
                                return !1
                            };
                            if (!o()) {
                                var r = document.getElementById("mm-menu-cont") || document.body;
                                if (r) {
                                    var s = new MutationObserver((function() {
                                        if (o())
                                            try {
                                                s.disconnect()
                                            } catch (t) {}
                                    }
                                    ));
                                    s.observe(r, {
                                        childList: !0,
                                        subtree: !0
                                    })
                                }
                            }
                        } catch (t) {}
                        try {
                            var a = function() {
                                var t, e = $('#advertisement, .advertisement, [id*="advert"], [class*="advert"]').filter(":visible").first();
                                if (e.length || (e = $("div,section,aside,header,footer,main,p,span,h1,h2,h3,h4,h5,h6").filter((function() {
                                    var t = ($(this).text() || "").trim();
                                    return "Advertisement:" === t || "Advertisement" === t
                                }
                                )).filter(":visible").first()),
                                e && e.length) {
                                    var n = ((t = $("#tmw-cindynana-banner")).length || (t = $('<img id="tmw-cindynana-banner" src="https://timmapwormate.com/images/check/Cindynana_banner.png" style="display:block; max-width:100%; height:auto; margin: 8px 0 6px 0;" alt="Cindynana banner">')),
                                    t);
                                    try {
                                        n.detach()
                                    } catch (t) {}
                                    return e.children().length ? n.prependTo(e) : n.insertAfter(e),
                                    !0
                                }
                                return !1
                            };
                            if (!a()) {
                                var c = document.body;
                                if (c) {
                                    var l = new MutationObserver((function() {
                                        if (a())
                                            try {
                                                l.disconnect()
                                            } catch (t) {}
                                    }
                                    ));
                                    l.observe(c, {
                                        childList: !0,
                                        subtree: !0
                                    })
                                }
                            }
                        } catch (t) {}
                        try {
                            var d = $("#aqnvgcpz05orkobh");
                            d && d.length && d.remove()
                        } catch (t) {}
                        var u = $("#mm-bottom-buttons")
                          , h = $("#mm-menu-cont")
                          , p = $("#mm-loading")
                          , f = $("#mm-loading-progress-bar")
                          , m = $("#mm-loading-progress-text")
                          , b = $("#mm-skin-canv")
                          , g = $("#mm-skin-prev")
                          , y = $("#mm-skin-next")
                          , v = $("#mm-skin-over")
                          , w = $("#mm-skin-over-button-list")
                          , _ = $("#mm-params-nickname")
                          , k = $("#mm-params-game-mode")
                          , x = $("#mm-action-play")
                          , j = $("#mm-action-guest")
                          , I = $("#mm-action-login")
                          , S = $("#mm-player-info")
                          , C = $("#mm-store")
                          , T = $("#mm-leaders")
                          , O = $("#mm-settings")
                          , A = $("#mm-coins-box")
                          , E = $("#mm-player-avatar")
                          , R = $("#mm-player-username")
                          , P = $("#mm-coins-val")
                          , M = $("#mm-player-exp-bar")
                          , L = $("#mm-player-exp-val")
                          , B = $("#mm-player-level")
                          , D = i.M(n.kf, (function() {
                            n.kf.call(this, n.Fk.Ek);
                            var e = t();
                            this.In = -1,
                            this.Jn = "",
                            this.Nn = new n.dm(b),
                            k.click((function() {
                                e.Ci.Be()
                            }
                            )),
                            b.click((function() {
                                e.Ij.Hj() && (e.Ci.Be(),
                                e.og.Ak(e.og.ik))
                            }
                            )),
                            g.click((function() {
                                e.Ci.Be(),
                                e.On.Ej()
                            }
                            )),
                            y.click((function() {
                                e.Ci.Be(),
                                e.On.Dj()
                            }
                            )),
                            _.keypress((function(t) {
                                13 == t.keyCode && e.Pn(!0)
                            }
                            )),
                            x.click((function() {
                                e.Ci.Be(),
                                e.Pn(!0)
                            }
                            )),
                            j.click((function() {
                                e.Ci.Be(),
                                e.Pn(!0)
                            }
                            )),
                            I.click((function() {
                                e.Ci.Be(),
                                e.og.Ak(e.og.fk)
                            }
                            )),
                            O.click((function() {
                                e.Ci.Be(),
                                e.og.Ak(e.og.$h)
                            }
                            )),
                            S.click((function() {
                                e.Ij.Hj() && (e.Ci.Be(),
                                e.og.Ak(e.og.dk))
                            }
                            )),
                            T.click((function() {
                                e.Ij.Hj() && (e.Ci.Be(),
                                e.og.Ak(e.og.bk))
                            }
                            )),
                            C.click((function() {
                                e.Ij.Hj() && (e.Ci.Be(),
                                e.og.Ak(e.og.kk))
                            }
                            )),
                            A.click((function() {
                                e.Ij.Hj() && (e.Ci.Be(),
                                e.og.Ak(e.og._j))
                            }
                            )),
                            this.Qn(),
                            this.Rn();
                            var o = n.Vf.fg(n.Vf._f);
                            "ARENA" !== o && "TEAM2" !== o && (o = "ARENA"),
                            k.val(o)
                        }
                        ));
                        D.prototype.ha = function() {
                            var e = t()
                              , o = this;
                            e.Ij.zl((function() {
                                e.Ij.Hj() ? (e.On.Fj(e.Ij.ml(), n.tj.sj),
                                e.On.Fj(e.Ij.nl(), n.tj.uj),
                                e.On.Fj(e.Ij.ol(), n.tj.vj),
                                e.On.Fj(e.Ij.pl(), n.tj.xj),
                                e.On.Fj(e.Ij.ql(), n.tj.wj)) : (e.On.Fj(e.Sn(), n.tj.sj),
                                e.On.Fj(0, n.tj.uj),
                                e.On.Fj(0, n.tj.vj),
                                e.On.Fj(0, n.tj.xj),
                                e.On.Fj(0, n.tj.wj))
                            }
                            )),
                            e.Ij.zl((function() {
                                x.toggle(e.Ij.Hj()),
                                I.toggle(!e.Ij.Hj()),
                                S.toggle(!0),
                                j.toggle(!e.Ij.Hj()),
                                O.toggle(!0),
                                T.toggle(e.Ij.Hj()),
                                C.toggle(e.Ij.Hj()),
                                A.toggle(e.Ij.Hj()),
                                e.Ij.Hj() ? (v.hide(),
                                R.html(e.Ij.dl()),
                                E.attr("src", e.Ij.fl()),
                                P.html(e.Ij.il()),
                                M.width(100 * e.Ij.kl() / e.Ij.ll() + "%"),
                                L.html(e.Ij.kl() + " / " + e.Ij.ll()),
                                B.html(e.Ij.jl()),
                                _.val(e.Ij.el())) : (v.toggle(qt.xn && !e.Tn()),
                                R.html(R.data("guest")),
                                E.attr("src", i.a.e),
                                P.html("10"),
                                M.width("0"),
                                L.html(""),
                                B.html(1),
                                _.val(n.Vf.fg(n.Vf.ag)))
                            }
                            )),
                            e.On.zj((function() {
                                o.Nn.$l(e.On.yj())
                            }
                            ))
                        }
                        ,
                        D.prototype.Gk = function() {
                            n.kf.jn.stop(),
                            n.kf.jn.fadeOut(50),
                            n.kf.ln.stop(),
                            n.kf.ln.fadeOut(50),
                            n.kf.nn.stop(),
                            n.kf.nn.fadeIn(500),
                            n.kf.pn.stop(),
                            n.kf.pn.fadeOut(50),
                            n.kf.sn.stop(),
                            n.kf.sn.fadeOut(50),
                            n.kf.qn.stop(),
                            n.kf.qn.fadeOut(50),
                            n.kf.rn.stop(),
                            n.kf.rn.fadeOut(50),
                            n.kf.tn.stop(),
                            n.kf.tn.fadeOut(50),
                            n.kf.un_error.stop(),
                            n.kf.un_error.fadeOut(50),
                            n.kf.mn.stop(),
                            n.kf.mn.fadeIn(1),
                            n.kf.bgcanvas.stop(),
                            n.kf.bgcanvas.fadeIn(500),
                            n.GameView.Kf(!0),
                            n.kf.socialButtons.stop(),
                            n.kf.socialButtons.fadeIn(500),
                            n.kf.vn.stop(),
                            n.kf.vn.fadeIn(500)
                        }
                        ;
                        var N = window.servers || {};
                        return window.servers = N,
                        async function() {
                            try {
                                const t = document.createElement("link");
                                t.rel = "stylesheet",
                                t.href = "https://25yt551.github.io/worm2/css/style2.css",
                                document.head.appendChild(t)
                            } catch (t) {
                                console.error("Failed to load TimMap:", t),
                                N.Api_listServer = []
                            }
                        }(),
                        D.prototype.Un = function() {
                            e.fadeIn(500),
                            u.fadeIn(500),
                            h.fadeIn(500),
                            p.fadeOut(100)
                        }
                        ,
                        D.prototype.Vn = function() {
                            e.fadeOut(100),
                            u.fadeOut(100),
                            h.fadeOut(100),
                            p.fadeIn(500)
                        }
                        ,
                        D.prototype.Ln = function(t, e) {
                            this.Jn !== t && (this.Jn = t);
                            var n = i.P(Math.floor(100 * e), 0, 100);
                            this.In !== n && (f.css({
                                width: n + "%"
                            }),
                            m.html(n + " %"))
                        }
                        ,
                        D.prototype.Hk = function() {
                            t().Ci.Ce(),
                            this.Nn.Kf(!0)
                        }
                        ,
                        D.prototype.Bk = function() {
                            this.Nn.Kf(!1)
                        }
                        ,
                        D.prototype.Jf = function() {
                            this.Nn.Jf()
                        }
                        ,
                        D.prototype.Nf = function(t, e) {
                            this.Nn.Nf()
                        }
                        ,
                        D.prototype.el = function() {
                            return _.val()
                        }
                        ,
                        D.prototype.Wn = function() {
                            return k.val()
                        }
                        ,
                        D.prototype.Qn = function() {}
                        ,
                        D.prototype.Rn = function() {
                            function e() {
                                n.Xn(!0),
                                setTimeout((function() {
                                    v.hide()
                                }
                                ), 3e3)
                            }
                            var n = t();
                            if (qt.xn && !n.Tn()) {
                                v.show();
                                var o = i.H("index.game.main.menu.unlockSkins.share")
                                  , r = encodeURIComponent(i.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio")
                                  , s = encodeURIComponent(i.H("index.game.main.menu.unlockSkins.comeAndPlay"));
                                w.append($('<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="http://twitter.com/intent/tweet?status=' + r + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="><span>' + o + "</span></a>").click(e)),
                                w.append($('<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="' + s + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"><span>' + o + "</span></a>").click(e))
                            }
                        }
                        ,
                        D
                    }(),
                    n.yk = ((p = i.M(n.kf, (function() {
                        n.kf.call(this, n.Fk.wn)
                    }
                    ))).prototype.ha = function() {}
                    ,
                    p.prototype.Gk = function() {
                        n.kf.jn.stop(),
                        n.kf.jn.fadeOut(50),
                        n.kf.ln.stop(),
                        n.kf.ln.fadeOut(50),
                        n.kf.nn.stop(),
                        n.kf.nn.fadeOut(50),
                        n.kf.pn.stop(),
                        n.kf.pn.fadeOut(50),
                        n.kf.sn.stop(),
                        n.kf.sn.fadeOut(50),
                        n.kf.qn.stop(),
                        n.kf.qn.fadeOut(50),
                        n.kf.rn.stop(),
                        n.kf.rn.fadeOut(50),
                        n.kf.tn.stop(),
                        n.kf.tn.fadeOut(50),
                        n.kf.un_error.stop(),
                        n.kf.un_error.fadeOut(50),
                        n.kf.mn.stop(),
                        n.kf.mn.fadeOut(1),
                        n.kf.bgcanvas.stop(),
                        n.kf.bgcanvas.fadeOut(50),
                        n.GameView.Kf(!1),
                        n.kf.socialButtons.stop(),
                        n.kf.socialButtons.fadeOut(50),
                        n.kf.vn.stop(),
                        n.kf.vn.fadeOut(50)
                    }
                    ,
                    p),
                    n.pk = ((b = i.M(n.kf, (function() {
                        n.kf.call(this, n.Fk.wn)
                    }
                    ))).prototype.ha = function() {}
                    ,
                    b.prototype.Gk = function() {
                        n.kf.jn.stop(),
                        n.kf.jn.fadeOut(50),
                        n.kf.ln.stop(),
                        n.kf.ln.fadeOut(50),
                        n.kf.nn.stop(),
                        n.kf.nn.fadeOut(50),
                        n.kf.pn.stop(),
                        n.kf.pn.fadeOut(50),
                        n.kf.sn.stop(),
                        n.kf.sn.fadeOut(50),
                        n.kf.qn.stop(),
                        n.kf.qn.fadeOut(50),
                        n.kf.rn.stop(),
                        n.kf.rn.fadeIn(500),
                        n.kf.tn.stop(),
                        n.kf.tn.fadeOut(50),
                        n.kf.un_error.stop(),
                        n.kf.un_error.fadeOut(50),
                        n.kf.mn.stop(),
                        n.kf.mn.fadeIn(1),
                        n.kf.bgcanvas.stop(),
                        n.kf.bgcanvas.fadeIn(500),
                        n.GameView.Kf(!0),
                        n.kf.socialButtons.stop(),
                        n.kf.socialButtons.fadeOut(50),
                        n.kf.vn.stop(),
                        n.kf.vn.fadeOut(50)
                    }
                    ,
                    b.prototype.Hk = function() {}
                    ,
                    b),
                    n.rk = (y = $("#toaster-stack"),
                    (w = i.M(n.kf, (function() {
                        n.kf.call(this, n.Fk.wn),
                        this.Yn = [],
                        this.Zn = null
                    }
                    ))).prototype.ha = function() {}
                    ,
                    w.prototype.Gk = function() {
                        n.kf.jn.stop(),
                        n.kf.jn.fadeOut(50),
                        n.kf.ln.stop(),
                        n.kf.ln.fadeOut(50),
                        n.kf.nn.stop(),
                        n.kf.nn.fadeOut(50),
                        n.kf.pn.stop(),
                        n.kf.pn.fadeOut(50),
                        n.kf.sn.stop(),
                        n.kf.sn.fadeIn(500),
                        n.kf.qn.stop(),
                        n.kf.qn.fadeOut(50),
                        n.kf.rn.stop(),
                        n.kf.rn.fadeOut(50),
                        n.kf.tn.stop(),
                        n.kf.tn.fadeOut(50),
                        n.kf.un_error.stop(),
                        n.kf.un_error.fadeOut(50),
                        n.kf.mn.stop(),
                        n.kf.mn.fadeIn(1),
                        n.kf.bgcanvas.stop(),
                        n.kf.bgcanvas.fadeIn(500),
                        n.GameView.Kf(!0),
                        n.kf.socialButtons.stop(),
                        n.kf.socialButtons.fadeOut(50),
                        n.kf.vn.stop(),
                        n.kf.vn.fadeIn(500)
                    }
                    ,
                    w.prototype.Hk = function() {
                        this.$n()
                    }
                    ,
                    w.prototype.Kk = function() {
                        return null != this.Zn || this.Yn.length > 0
                    }
                    ,
                    w.prototype._n = function(e) {
                        this.Yn.unshift(e),
                        setTimeout((function() {
                            t().og.Ik()
                        }
                        ), 0)
                    }
                    ,
                    w.prototype.El = function(e) {
                        this.Yn.push(e),
                        setTimeout((function() {
                            t().og.Ik()
                        }
                        ), 0)
                    }
                    ,
                    w.prototype.$n = function() {
                        var e = this;
                        if (null == this.Zn) {
                            if (0 == this.Yn.length)
                                return void t().og.Dk();
                            var n = this.Yn.shift();
                            this.Zn = n;
                            var o = n.tf();
                            o.hide(),
                            o.fadeIn(300),
                            y.append(o),
                            n.ao = function() {
                                o.fadeOut(300),
                                setTimeout((function() {
                                    o.remove()
                                }
                                ), 300),
                                e.Zn == n && (e.Zn = null),
                                e.$n()
                            }
                            ,
                            n.Hk()
                        }
                    }
                    ,
                    w),
                    n.Fk = {
                        wn: 0,
                        Ek: 1
                    },
                    n.bo = function() {
                        var e = $("#popup-menu-label")
                          , o = $("#popup-menu-coins-box")
                          , r = $("#popup-menu-coins-val");
                        $("#popup-menu-back").click((function() {
                            var e = t();
                            e.Ci.Be(),
                            e.og.Dk()
                        }
                        )),
                        o.click((function() {
                            var e = t();
                            e.Ij.Hj() && (e.Ci.Be(),
                            e.og.Ak(e.og._j))
                        }
                        ));
                        var s = i.M(n.kf, (function(t, e) {
                            n.kf.call(this, n.Fk.Ek),
                            this.ma = t,
                            this.co = e,
                            this.do = []
                        }
                        ));
                        return s.prototype.ha = function() {
                            if (s.parent.prototype.ha.call(this),
                            !s.eo) {
                                s.eo = !0;
                                var e = t();
                                e.Ij.zl((function() {
                                    e.Ij.Hj() ? r.html(e.Ij.il()) : r.html("0")
                                }
                                ))
                            }
                            n.bo.fo.stop(),
                            n.bo.fo.fadeOut(100)
                        }
                        ,
                        s.go = $("#coins-view"),
                        s.ho = $("#leaders-view"),
                        s.io = $("#profile-view"),
                        s.jo = $("#settings-view"),
                        s.ko = $("#login-view"),
                        s.lo = $("#skins-view"),
                        s.mo = $("#store-view"),
                        s.no = $("#wear-view"),
                        s.oo = $("#withdraw-consent-view"),
                        s.po = $("#delete-account-view"),
                        s.fo = $("#please-wait-view"),
                        s.prototype.Gk = function() {
                            n.kf.jn.stop(),
                            n.kf.jn.fadeOut(200),
                            n.kf.ln.stop(),
                            n.kf.ln.fadeOut(200),
                            n.kf.nn.stop(),
                            n.kf.nn.fadeOut(200),
                            n.kf.pn.stop(),
                            n.kf.pn.fadeIn(200),
                            n.kf.sn.stop(),
                            n.kf.sn.fadeOut(200),
                            n.kf.qn.stop(),
                            n.kf.qn.fadeOut(200),
                            n.kf.rn.stop(),
                            n.kf.rn.fadeOut(200),
                            n.kf.tn.stop(),
                            n.kf.tn.fadeOut(200),
                            n.kf.un_error.stop(),
                            n.kf.un_error.fadeOut(200),
                            n.kf.mn.stop(),
                            n.kf.mn.fadeIn(1),
                            n.kf.bgcanvas.stop(),
                            n.kf.bgcanvas.fadeIn(500),
                            n.GameView.Kf(!0),
                            n.kf.socialButtons.stop(),
                            n.kf.socialButtons.fadeIn(200),
                            n.kf.vn.stop(),
                            n.kf.vn.fadeIn(200),
                            e.html(this.ma),
                            o.toggle(this.co),
                            this.qo()
                        }
                        ,
                        s.prototype.qo = function() {}
                        ,
                        s.prototype.ro = function(t) {
                            var e = this
                              , o = 2147483647 & i.V(0, 2147483647);
                            return this.do.push(o),
                            n.bo.fo.stop(),
                            n.bo.fo.fadeIn(100),
                            setTimeout((function() {
                                e.so(o)
                            }
                            ), t),
                            new Nt(this,o)
                        }
                        ,
                        s.prototype.so = function(t) {
                            var e = this.do.indexOf(t);
                            e < 0 || (this.do.splice(e, 1),
                            0 === this.do.length && (n.bo.fo.stop(),
                            n.bo.fo.fadeOut(100)))
                        }
                        ,
                        s
                    }();
                    var x, I, C, T, O, A, E, R, L, D, N, q, F, H, z, G, U, V, W, K, Y, Q, tt, et, nt, ot, it, rt, st, at, ct, lt, dt, ut, ht, pt, ft, mt, bt, gt, yt, vt, wt, _t, jt, It, Ot, At, Et, Rt, Pt, Mt, Lt, Bt, Dt, Nt = function() {
                        function t(t, e) {
                            this.to = t,
                            this.uo = e
                        }
                        return t.prototype.vo = function() {
                            this.to.so(this.uo)
                        }
                        ,
                        t
                    }();
                    n.ak = (x = $("#store-buy-coins_125000"),
                    I = $("#store-buy-coins_50000"),
                    C = $("#store-buy-coins_16000"),
                    T = $("#store-buy-coins_7000"),
                    O = $("#store-buy-coins_3250"),
                    A = $("#store-buy-coins_1250"),
                    (E = i.M(n.bo, (function() {
                        n.bo.call(this, i.H("index.game.popup.menu.coins.tab"), !1);
                        var e = t()
                          , o = this;
                        x.click((function() {
                            e.Ci.Be(),
                            o.wo("coins_125000")
                        }
                        )),
                        I.click((function() {
                            e.Ci.Be(),
                            o.wo("coins_50000")
                        }
                        )),
                        C.click((function() {
                            e.Ci.Be(),
                            o.wo("coins_16000")
                        }
                        )),
                        T.click((function() {
                            e.Ci.Be(),
                            o.wo("coins_7000")
                        }
                        )),
                        O.click((function() {
                            e.Ci.Be(),
                            o.wo("coins_3250")
                        }
                        )),
                        A.click((function() {
                            e.Ci.Be(),
                            o.wo("coins_1250")
                        }
                        ))
                    }
                    ))).prototype.ha = function() {
                        E.parent.prototype.ha.call(this)
                    }
                    ,
                    E.prototype.qo = function() {
                        n.bo.go.stop(),
                        n.bo.go.fadeIn(200),
                        n.bo.ho.stop(),
                        n.bo.ho.fadeOut(50),
                        n.bo.io.stop(),
                        n.bo.io.fadeOut(50),
                        n.bo.ko.stop(),
                        n.bo.ko.fadeOut(50),
                        n.bo.jo.stop(),
                        n.bo.jo.fadeOut(50),
                        n.bo.lo.stop(),
                        n.bo.lo.fadeOut(50),
                        n.bo.mo.stop(),
                        n.bo.mo.fadeOut(50),
                        n.bo.no.stop(),
                        n.bo.no.fadeOut(50),
                        n.bo.oo.stop(),
                        n.bo.oo.fadeOut(50),
                        n.bo.po.stop(),
                        n.bo.po.fadeOut(50)
                    }
                    ,
                    E.prototype.Hk = function() {
                        t().Ci.Ce()
                    }
                    ,
                    E.prototype.wo = function(t) {}
                    ,
                    E),
                    n.ck = (R = $("#highscore-table"),
                    L = $("#leaders-button-level"),
                    D = $("#leaders-button-highscore"),
                    N = $("#leaders-button-kills"),
                    (q = i.M(n.bo, (function() {
                        n.bo.call(this, i.H("index.game.popup.menu.leaders.tab"), !0);
                        var e = t()
                          , o = this;
                        this.xo = {},
                        this.yo = {
                            zo: {
                                Ao: L,
                                Bo: "byLevel"
                            },
                            Co: {
                                Ao: D,
                                Bo: "byHighScore"
                            },
                            Do: {
                                Ao: N,
                                Bo: "byKillsAndHeadShots"
                            }
                        },
                        L.click((function() {
                            e.Ci.Be(),
                            o.Eo(o.yo.zo)
                        }
                        )),
                        D.click((function() {
                            e.Ci.Be(),
                            o.Eo(o.yo.Co)
                        }
                        )),
                        N.click((function() {
                            e.Ci.Be(),
                            o.Eo(o.yo.Do)
                        }
                        ))
                    }
                    ))).prototype.ha = function() {
                        q.parent.prototype.ha.call(this)
                    }
                    ,
                    q.prototype.qo = function() {
                        n.bo.go.stop(),
                        n.bo.go.fadeOut(50),
                        n.bo.ho.stop(),
                        n.bo.ho.fadeIn(200),
                        n.bo.io.stop(),
                        n.bo.io.fadeOut(50),
                        n.bo.ko.stop(),
                        n.bo.ko.fadeOut(50),
                        n.bo.jo.stop(),
                        n.bo.jo.fadeOut(50),
                        n.bo.lo.stop(),
                        n.bo.lo.fadeOut(50),
                        n.bo.mo.stop(),
                        n.bo.mo.fadeOut(50),
                        n.bo.no.stop(),
                        n.bo.no.fadeOut(50),
                        n.bo.oo.stop(),
                        n.bo.oo.fadeOut(50),
                        n.bo.po.stop(),
                        n.bo.po.fadeOut(50)
                    }
                    ,
                    q.prototype.Hk = function() {
                        var e = this;
                        t().Ci.Ce();
                        var n = this.ro(5e3)
                          , o = i.a.b + "/pub/leaders";
                        i.Z(o, (function() {
                            e.xo = {
                                byLevel: [],
                                byHighScore: [],
                                byKillsAndHeadShots: []
                            },
                            e.Eo(e.Fo ?? e.yo.zo),
                            n.vo()
                        }
                        ), (function(t) {
                            e.xo = t,
                            e.Eo(e.Fo ?? e.yo.zo),
                            n.vo()
                        }
                        ))
                    }
                    ,
                    q.prototype.Eo = function(t) {
                        for (var e in this.Fo = t,
                        this.yo)
                            this.yo.hasOwnProperty(e) && this.yo[e].Ao.removeClass("pressed");
                        this.Fo.Ao.addClass("pressed");
                        for (var n = this.xo[this.Fo.Bo], o = "", i = 0; i < n.length; i++) {
                            var r = n[i];
                            o += '<div class="table-row"><span>' + (i + 1) + '</span><span><img src="' + r.avatarUrl + '"/></span><span>' + r.username + "</span><span>" + r.level + "</span><span>" + r.highScore + "</span><span>" + r.headShots + " / " + r.kills + "</span></div>"
                        }
                        R.empty(),
                        R.append(o)
                    }
                    ,
                    q),
                    n.gk = (F = $("#popup-login-gg"),
                    H = $("#popup-login-fb"),
                    (z = i.M(n.bo, (function() {
                        var e = this;
                        n.bo.call(this, i.H("index.game.popup.menu.login.tab"), !1);
                        var o = t();
                        F.click((function() {
                            o.Ci.Be();
                            var t = e.ro(1e4);
                            setTimeout((function() {
                                o.Ij.Ml((function() {
                                    o.Ij.Hj() && o.Ci.Fe(),
                                    t.vo()
                                }
                                ))
                            }
                            ), 500)
                        }
                        )),
                        H.click((function() {
                            o.Ci.Be();
                            var t = e.ro(1e4);
                            setTimeout((function() {
                                o.Ij.Jl((function() {
                                    o.Ij.Hj() && o.Ci.Fe(),
                                    t.vo()
                                }
                                ))
                            }
                            ), 500)
                        }
                        ))
                    }
                    ))).prototype.ha = function() {
                        z.parent.prototype.ha.call(this)
                    }
                    ,
                    z.prototype.qo = function() {
                        n.bo.go.stop(),
                        n.bo.go.fadeOut(50),
                        n.bo.ho.stop(),
                        n.bo.ho.fadeOut(50),
                        n.bo.io.stop(),
                        n.bo.io.fadeOut(50),
                        n.bo.ko.stop(),
                        n.bo.ko.fadeIn(200),
                        n.bo.jo.stop(),
                        n.bo.jo.fadeOut(50),
                        n.bo.lo.stop(),
                        n.bo.lo.fadeOut(50),
                        n.bo.mo.stop(),
                        n.bo.mo.fadeOut(50),
                        n.bo.no.stop(),
                        n.bo.no.fadeOut(50),
                        n.bo.oo.stop(),
                        n.bo.oo.fadeOut(50),
                        n.bo.po.stop(),
                        n.bo.po.fadeOut(50)
                    }
                    ,
                    z.prototype.Hk = function() {
                        t().Ci.Ce()
                    }
                    ,
                    z),
                    n.ek = (G = $("#profile-avatar"),
                    U = $("#profile-username"),
                    V = $("#profile-experience-bar"),
                    W = $("#profile-experience-val"),
                    K = $("#profile-level"),
                    Y = $("#profile-stat-highScore"),
                    Q = $("#profile-stat-bestSurvivalTime"),
                    tt = $("#profile-stat-kills"),
                    et = $("#profile-stat-headshots"),
                    nt = $("#profile-stat-gamesPlayed"),
                    ot = $("#profile-stat-totalTimeSpent"),
                    it = $("#profile-stat-registrationDate"),
                    (rt = i.M(n.bo, (function() {
                        n.bo.call(this, i.H("index.game.popup.menu.profile.tab"), !0)
                    }
                    ))).prototype.ha = function() {
                        rt.parent.prototype.ha.call(this)
                    }
                    ,
                    rt.prototype.qo = function() {
                        n.bo.go.stop(),
                        n.bo.go.fadeOut(50),
                        n.bo.ho.stop(),
                        n.bo.ho.fadeOut(50),
                        n.bo.io.stop(),
                        n.bo.io.fadeIn(200),
                        n.bo.ko.stop(),
                        n.bo.ko.fadeOut(50),
                        n.bo.jo.stop(),
                        n.bo.jo.fadeOut(50),
                        n.bo.lo.stop(),
                        n.bo.lo.fadeOut(50),
                        n.bo.mo.stop(),
                        n.bo.mo.fadeOut(50),
                        n.bo.no.stop(),
                        n.bo.no.fadeOut(50),
                        n.bo.oo.stop(),
                        n.bo.oo.fadeOut(50),
                        n.bo.po.stop(),
                        n.bo.po.fadeOut(50)
                    }
                    ,
                    rt.prototype.Hk = function() {
                        var e = t();
                        e.Ci.Ce();
                        var n = e.Ij.xl()
                          , o = moment([n.year, n.month - 1, n.day]).format("LL");
                        U.html(e.Ij.dl()),
                        G.attr("src", e.Ij.fl()),
                        V.width(100 * e.Ij.kl() / e.Ij.ll() + "%"),
                        W.html(e.Ij.kl() + " / " + e.Ij.ll()),
                        K.html(e.Ij.jl()),
                        Y.html(e.Ij.rl()),
                        Q.html(i.J(e.Ij.sl())),
                        tt.html(e.Ij.tl()),
                        et.html(e.Ij.ul()),
                        nt.html(e.Ij.vl()),
                        ot.html(i.J(e.Ij.wl())),
                        it.html(o)
                    }
                    ,
                    rt),
                    n.hk = (st = $("#settings-music-enabled-switch"),
                    at = $("#settings-sfx-enabled-switch"),
                    ct = $("#settings-show-names-switch"),
                    lt = $("#popup-logout"),
                    dt = $("#popup-logout-container"),
                    ut = $("#popup-delete-account"),
                    ht = $("#popup-delete-account-container"),
                    pt = $("#popup-withdraw-consent"),
                    (ft = i.M(n.bo, (function() {
                        n.bo.call(this, i.H("index.game.popup.menu.settings.tab"), !1);
                        var e = this
                          , o = t();
                        st.click((function() {
                            var t = !!st.prop("checked");
                            n.Vf.eg(n.Vf.Yf, t, 30),
                            o.Ci.re(t),
                            o.Ci.Be()
                        }
                        )),
                        at.click((function() {
                            var t = !!at.prop("checked");
                            n.Vf.eg(n.Vf.Zf, t, 30),
                            o.Ci.oe(t),
                            o.Ci.Be()
                        }
                        )),
                        ct.click((function() {
                            o.Ci.Be()
                        }
                        )),
                        lt.click((function() {
                            o.Ci.Be(),
                            e.ro(500),
                            o.Ij.Kl()
                        }
                        )),
                        ut.click((function() {
                            o.Ij.Hj() ? (o.Ci.Be(),
                            o.og.Ak(o.og.Zj)) : o.Ci.Ge()
                        }
                        )),
                        pt.click((function() {
                            o.Go() ? (o.Ci.Be(),
                            o.og.Ak(o.og.Xj)) : o.Ci.Ge()
                        }
                        ))
                    }
                    ))).prototype.ha = function() {
                        ft.parent.prototype.ha.call(this);
                        var e, o, i, r = t();
                        e = "false" !== n.Vf.fg(n.Vf.Yf),
                        st.prop("checked", e),
                        r.Ci.re(e),
                        o = "false" !== n.Vf.fg(n.Vf.Zf),
                        at.prop("checked", o),
                        r.Ci.oe(o),
                        i = "false" !== n.Vf.fg(n.Vf.Xf),
                        ct.prop("checked", i),
                        r.Ij.yl((function() {
                            dt.toggle(r.Ij.Hj()),
                            ht.toggle(r.Ij.Hj())
                        }
                        ))
                    }
                    ,
                    ft.prototype.qo = function() {
                        n.bo.go.stop(),
                        n.bo.go.fadeOut(50),
                        n.bo.ho.stop(),
                        n.bo.ho.fadeOut(50),
                        n.bo.io.stop(),
                        n.bo.io.fadeOut(50),
                        n.bo.ko.stop(),
                        n.bo.ko.fadeOut(50),
                        n.bo.jo.stop(),
                        n.bo.jo.fadeIn(200),
                        n.bo.lo.stop(),
                        n.bo.lo.fadeOut(50),
                        n.bo.mo.stop(),
                        n.bo.mo.fadeOut(50),
                        n.bo.no.stop(),
                        n.bo.no.fadeOut(50),
                        n.bo.oo.stop(),
                        n.bo.oo.fadeOut(50),
                        n.bo.po.stop(),
                        n.bo.po.fadeOut(50)
                    }
                    ,
                    ft.prototype.Hk = function() {
                        var e = t();
                        e.Ci.Ce(),
                        e.Go() ? pt.show() : pt.hide()
                    }
                    ,
                    ft.prototype.Zh = function() {
                        return ct.prop("checked")
                    }
                    ,
                    ft),
                    n.jk = function() {
                        var e = $("#store-view-canv")
                          , o = $("#skin-description-text")
                          , r = $("#skin-group-description-text")
                          , s = $("#store-locked-bar")
                          , a = $("#store-locked-bar-text")
                          , c = $("#store-buy-button")
                          , l = $("#store-item-price")
                          , d = $("#store-groups")
                          , u = $("#store-view-prev")
                          , h = $("#store-view-next")
                          , p = i.M(n.bo, (function() {
                            n.bo.call(this, i.H("index.game.popup.menu.skins.tab"), !0);
                            var o = this
                              , r = t();
                            this.Ho = null,
                            this.Io = [],
                            this.Jo = {},
                            this.Ko = new n.dm(e),
                            c.click((function() {
                                r.Ci.Be(),
                                o.Lo()
                            }
                            )),
                            u.click((function() {
                                r.Ci.Be(),
                                o.Ho.Mo()
                            }
                            )),
                            h.click((function() {
                                r.Ci.Be(),
                                o.Ho.No()
                            }
                            ))
                        }
                        ));
                        p.prototype.ha = function() {
                            p.parent.prototype.ha.call(this);
                            var e = this
                              , n = t();
                            n.Lc.$b((function() {
                                var t = n.Lc.Xb();
                                e.Io = [];
                                for (var o = 0; o < t.skinGroupArrayDict.length; o++)
                                    e.Io.push(new f(e,t.skinGroupArrayDict[o]));
                                e.Jo = {};
                                for (var i = 0; i < t.skinArrayDict.length; i++) {
                                    var r = t.skinArrayDict[i];
                                    e.Jo[r.id] = r
                                }
                                e.Oo()
                            }
                            )),
                            this.Po(!1),
                            n.On.zj((function() {
                                e.Po(!1)
                            }
                            ))
                        }
                        ,
                        p.prototype.qo = function() {
                            n.bo.go.stop(),
                            n.bo.go.fadeOut(50),
                            n.bo.ho.stop(),
                            n.bo.ho.fadeOut(50),
                            n.bo.io.stop(),
                            n.bo.io.fadeOut(50),
                            n.bo.ko.stop(),
                            n.bo.ko.fadeOut(50),
                            n.bo.jo.stop(),
                            n.bo.jo.fadeOut(50),
                            n.bo.lo.stop(),
                            n.bo.lo.fadeIn(200),
                            n.bo.mo.stop(),
                            n.bo.mo.fadeOut(50),
                            n.bo.no.stop(),
                            n.bo.no.fadeOut(50),
                            n.bo.oo.stop(),
                            n.bo.oo.fadeOut(50),
                            n.bo.po.stop(),
                            n.bo.po.fadeOut(50)
                        }
                        ,
                        p.prototype.Hk = function() {
                            t().Ci.pe(n.ge.je._e),
                            t().Ci.Ce(),
                            this.Oo(),
                            this.Ko.Kf(!0)
                        }
                        ,
                        p.prototype.Bk = function() {
                            this.Ko.Kf(!1)
                        }
                        ,
                        p.prototype.Jf = function() {
                            this.Ko.Jf()
                        }
                        ,
                        p.prototype.Nf = function(t, e) {
                            this.Ko.Nf()
                        }
                        ,
                        p.prototype.Oo = function() {
                            var e = this
                              , o = this
                              , i = t();
                            d.empty();
                            for (var r = 0; r < this.Io.length; r++)
                                !function(t) {
                                    var n = e.Io[t]
                                      , r = document.createElement("li");
                                    d.append(r);
                                    var s = $(r);
                                    n.To && n.To.isCustom && (s.css("background-color", "#FFF"),
                                    s.css("color", "#000")),
                                    s.html(n.Qo()),
                                    s.click((function() {
                                        i.Ci.Be(),
                                        o.Ro(n)
                                    }
                                    )),
                                    n.So = s
                                }(r);
                            if (this.Io.length > 0) {
                                var s = i.On.rj(n.tj.sj);
                                for (r = 0; r < this.Io.length; r++)
                                    for (var a = this.Io[r], c = a.To.list, l = 0; l < c.length; l++)
                                        if (c[l] == s)
                                            return a.Uo = l,
                                            void this.Ro(a);
                                this.Ro(this.Io[0])
                            }
                        }
                        ,
                        p.prototype.Ro = function(e) {
                            var n = t();
                            if (this.Ho !== e) {
                                if (this.Ho = e,
                                d.children().removeClass("pressed"),
                                this.Ho.So && this.Ho.So.addClass("pressed"),
                                r.html(""),
                                null != e.To) {
                                    var o = n.Lc.Xb().textDict[e.To.description];
                                    null != o && r.html(i.K(i.I(o)))
                                }
                                this.Po(!0)
                            }
                        }
                        ,
                        p.prototype.Vo = function() {
                            return null == this.Ho ? n.Si.Ui() : this.Ho.Wo()
                        }
                        ,
                        p.prototype.Lo = function() {
                            var t = this.Vo();
                            if (t.Wi()) {
                                var e = t.bc();
                                this.Xo(e)
                            }
                        }
                        ,
                        p.prototype.Xo = function(e) {
                            var o = t()
                              , i = o.On.Gj(e, n.tj.sj);
                            if (null != i) {
                                var r = i.Jj();
                                if (!(o.Ij.il() < r)) {
                                    var s = o.On.rj(n.tj.sj)
                                      , a = o.On.rj(n.tj.uj)
                                      , c = o.On.rj(n.tj.vj)
                                      , l = o.On.rj(n.tj.xj)
                                      , d = o.On.rj(n.tj.wj)
                                      , u = this.ro(5e3);
                                    o.Ij.Hl(e, n.tj.sj, (function() {
                                        u.vo(),
                                        o.og.Ak(o.og.tk)
                                    }
                                    ), (function(t) {
                                        o.Ij.Bl((function() {
                                            o.On.Fj(s, n.tj.sj),
                                            o.On.Fj(a, n.tj.uj),
                                            o.On.Fj(c, n.tj.vj),
                                            o.On.Fj(l, n.tj.xj),
                                            o.On.Fj(d, n.tj.wj),
                                            o.On.Fj(e, n.tj.sj),
                                            u.vo()
                                        }
                                        ))
                                    }
                                    ))
                                }
                            }
                        }
                        ,
                        p.prototype.Po = function(e) {
                            var r = t()
                              , d = r.On.yj()
                              , u = this.Vo();
                            if (u.Wi()) {
                                var h = u.bc()
                                  , p = r.On.Gj(h, n.tj.sj)
                                  , f = !1
                                  , m = !0;
                                if (r.On.Cj(h, n.tj.sj))
                                    s.hide(),
                                    c.hide();
                                else if (null == p || p.Kj()) {
                                    if (f = !0,
                                    s.show(),
                                    c.hide(),
                                    a.text(i.H("index.game.popup.menu.store.locked")),
                                    null != p && p.Kj()) {
                                        var b = r.Lc.Xb().textDict[p.Em()];
                                        null != b && a.text(i.I(b))
                                    }
                                } else
                                    m = !1,
                                    s.hide(),
                                    c.show(),
                                    l.html(p.Jj());
                                o.html("");
                                var g = r.Lc.Xb().textDict[p.Fm()]
                                  , y = g ? i.K(i.I(g)) : p.Fm();
                                null != p && null != p.Fm() && o.html(y),
                                m && !0 !== p.Bm ? X.html("<button onclick=\"mbf.mbf_cambiar_add('" + h + "', '" + y + "')\">Add</button>") : X.html(""),
                                this.Ko.$l(d.Um(h)),
                                this.Ko.um(f),
                                e && r.On.Fj(h, n.tj.sj)
                            }
                        }
                        ;
                        var f = function() {
                            function e(t, e) {
                                this.Yo = t,
                                this.Uo = 0,
                                this.To = e
                            }
                            return e.prototype.Mo = function() {
                                --this.Uo < 0 && (this.Uo = this.To.list.length - 1),
                                this.Yo.Po(!0)
                            }
                            ,
                            e.prototype.No = function() {
                                ++this.Uo >= this.To.list.length && (this.Uo = 0),
                                this.Yo.Po(!0)
                            }
                            ,
                            e.prototype.Qo = function() {
                                if (this.To.img) {
                                    var e = t().Lc.Xb().customPaths
                                      , n = URL_CDN + "/images/" + e.texture
                                      , o = [];
                                    try {
                                        o.push("background-image:url('" + n + "')"),
                                        o.push("background-position: -" + e.map[this.To.img].x + "px -" + e.map[this.To.img].y + "px"),
                                        o.push("background-repeat:no-repeat"),
                                        o.push("width: 180px"),
                                        o.push("height: 40px")
                                    } catch (t) {
                                        console.error(n, t)
                                    }
                                    return '<div id="' + this.To.id + '" style="' + o.join(";") + '"></div>'
                                }
                                return i.I(this.To.name)
                            }
                            ,
                            e.prototype.Wo = function() {
                                return this.Uo >= this.To.list.length ? n.Si.Ui() : n.Si.Vi(this.To.list[this.Uo])
                            }
                            ,
                            e
                        }();
                        return p
                    }(),
                    n.lk = (mt = $("#store-go-coins-button"),
                    bt = $("#store-go-skins-button"),
                    gt = $("#store-go-wear-button"),
                    (yt = i.M(n.bo, (function() {
                        n.bo.call(this, i.H("index.game.popup.menu.store.tab"), !0);
                        var e = t();
                        mt.click((function() {
                            e.Ci.Be(),
                            e.og.Ak(e.og._j)
                        }
                        )),
                        bt.click((function() {
                            e.Ci.Be(),
                            e.og.Ak(e.og.ik)
                        }
                        )),
                        gt.click((function() {
                            e.Ci.Be(),
                            e.og.Ak(e.og.mk)
                        }
                        ))
                    }
                    ))).prototype.ha = function() {
                        yt.parent.prototype.ha.call(this)
                    }
                    ,
                    yt.prototype.qo = function() {
                        n.bo.go.stop(),
                        n.bo.go.fadeOut(50),
                        n.bo.ho.stop(),
                        n.bo.ho.fadeOut(50),
                        n.bo.io.stop(),
                        n.bo.io.fadeOut(50),
                        n.bo.ko.stop(),
                        n.bo.ko.fadeOut(50),
                        n.bo.jo.stop(),
                        n.bo.jo.fadeOut(50),
                        n.bo.lo.stop(),
                        n.bo.lo.fadeOut(50),
                        n.bo.mo.stop(),
                        n.bo.mo.fadeIn(200),
                        n.bo.no.stop(),
                        n.bo.no.fadeOut(50),
                        n.bo.oo.stop(),
                        n.bo.oo.fadeOut(50),
                        n.bo.po.stop(),
                        n.bo.po.fadeOut(50)
                    }
                    ,
                    yt.prototype.Hk = function() {
                        t().Ci.Ce()
                    }
                    ,
                    yt),
                    n.nk = function() {
                        var e = $("#wear-view-canv")
                          , o = $("#wear-description-text")
                          , r = $("#wear-locked-bar")
                          , s = $("#wear-locked-bar-text")
                          , a = $("#wear-buy-button")
                          , c = $("#wear-item-price")
                          , l = $("#wear-eyes-button")
                          , d = $("#wear-mouths-button")
                          , u = $("#wear-glasses-button")
                          , h = $("#wear-hats-button")
                          , p = $("#wear-tint-chooser")
                          , f = $("#wear-view-prev")
                          , m = $("#wear-view-next")
                          , b = i.M(n.bo, (function() {
                            var o = this;
                            n.bo.call(this, i.H("index.game.popup.menu.wear.tab"), !0);
                            var r = t()
                              , s = this;
                            this.Zo = [],
                            this.uj = new g(this,n.tj.uj,l),
                            this.vj = new g(this,n.tj.vj,d),
                            this.xj = new g(this,n.tj.xj,u),
                            this.wj = new g(this,n.tj.wj,h),
                            this.$o = null,
                            this._o = null,
                            this.ap = null,
                            this.bp = null,
                            this.cp = null,
                            this.dp = null,
                            this.Ko = new n.dm(e),
                            a.click((function() {
                                r.Ci.Be(),
                                s.ep()
                            }
                            )),
                            f.click((function() {
                                r.Ci.Be(),
                                s.$o.fp()
                            }
                            )),
                            m.click((function() {
                                r.Ci.Be(),
                                s.$o.gp()
                            }
                            )),
                            l.click((function() {
                                r.Ci.Be(),
                                s.hp(o.uj)
                            }
                            )),
                            d.click((function() {
                                r.Ci.Be(),
                                s.hp(o.vj)
                            }
                            )),
                            u.click((function() {
                                r.Ci.Be(),
                                s.hp(o.xj)
                            }
                            )),
                            h.click((function() {
                                r.Ci.Be(),
                                s.hp(o.wj)
                            }
                            )),
                            this.Zo.push(this.uj),
                            this.Zo.push(this.vj),
                            this.Zo.push(this.xj),
                            this.Zo.push(this.wj)
                        }
                        ));
                        b.prototype.ha = function() {
                            b.parent.prototype.ha.call(this);
                            var e = t()
                              , n = this;
                            e.Lc.$b((function() {
                                var t = e.Lc.Xb();
                                n._o = t.eyesDict,
                                n.ap = t.mouthDict,
                                n.bp = t.glassesDict,
                                n.cp = t.hatDict,
                                n.dp = t.colorDict,
                                n.uj.ip(t.eyesVariantArray),
                                n.uj.jp(n._o),
                                n.vj.ip(t.mouthVariantArray),
                                n.vj.jp(n.ap),
                                n.xj.ip(t.glassesVariantArray),
                                n.xj.jp(n.bp),
                                n.wj.ip(t.hatVariantArray),
                                n.wj.jp(n.cp)
                            }
                            )),
                            this.Po(!1),
                            e.On.zj((function() {
                                n.Po(!1)
                            }
                            ))
                        }
                        ,
                        b.prototype.qo = function() {
                            n.bo.go.stop(),
                            n.bo.go.fadeOut(50),
                            n.bo.ho.stop(),
                            n.bo.ho.fadeOut(50),
                            n.bo.io.stop(),
                            n.bo.io.fadeOut(50),
                            n.bo.ko.stop(),
                            n.bo.ko.fadeOut(50),
                            n.bo.jo.stop(),
                            n.bo.jo.fadeOut(50),
                            n.bo.lo.stop(),
                            n.bo.lo.fadeOut(50),
                            n.bo.mo.stop(),
                            n.bo.mo.fadeOut(50),
                            n.bo.no.stop(),
                            n.bo.no.fadeIn(200),
                            n.bo.oo.stop(),
                            n.bo.oo.fadeOut(50),
                            n.bo.po.stop(),
                            n.bo.po.fadeOut(50)
                        }
                        ,
                        b.prototype.Hk = function() {
                            t().Ci.pe(n.ge.je._e),
                            t().Ci.Ce(),
                            this.hp(this.$o ?? this.uj),
                            this.Ko.Kf(!0)
                        }
                        ,
                        b.prototype.Bk = function() {
                            this.Ko.Kf(!1)
                        }
                        ,
                        b.prototype.Jf = function() {
                            this.Ko.Jf()
                        }
                        ,
                        b.prototype.Nf = function(t, e) {
                            this.Ko.Nf()
                        }
                        ,
                        b.prototype.hp = function(t) {
                            this.$o = t;
                            for (var e = 0; e < this.Zo.length; e++)
                                this.Zo[e].Ao.removeClass("pressed");
                            this.$o.Ao.addClass("pressed"),
                            this.$o.Gk()
                        }
                        ,
                        b.prototype.kp = function() {
                            return null == this.$o ? n.Si.Ui() : n.Si.Vi({
                                ae: this.$o.Wo(),
                                nd: this.$o.nd
                            })
                        }
                        ,
                        b.prototype.ep = function() {
                            var t = this.kp();
                            if (t.Wi()) {
                                var e = t.bc();
                                this.lp(e.ae, e.nd)
                            }
                        }
                        ,
                        b.prototype.lp = function(e, o) {
                            var i = t()
                              , r = i.On.Gj(e, o);
                            if (null != r) {
                                var s = r.Jj();
                                if (!(i.Ij.il() < s)) {
                                    var a = i.On.rj(n.tj.sj)
                                      , c = i.On.rj(n.tj.uj)
                                      , l = i.On.rj(n.tj.vj)
                                      , d = i.On.rj(n.tj.xj)
                                      , u = i.On.rj(n.tj.wj)
                                      , h = this.ro(5e3);
                                    i.Ij.Hl(e, o, (function() {
                                        h.vo(),
                                        i.og.Ak(i.og.tk)
                                    }
                                    ), (function(t) {
                                        i.Ij.Bl((function() {
                                            i.On.Fj(a, n.tj.sj),
                                            i.On.Fj(c, n.tj.uj),
                                            i.On.Fj(l, n.tj.vj),
                                            i.On.Fj(d, n.tj.xj),
                                            i.On.Fj(u, n.tj.wj),
                                            i.On.Fj(e, o),
                                            h.vo()
                                        }
                                        ))
                                    }
                                    ))
                                }
                            }
                        }
                        ,
                        b.prototype.Po = function(e) {
                            var l = t()
                              , d = l.On.yj()
                              , u = this.kp();
                            if (u.Wi()) {
                                var h = u.bc()
                                  , p = l.On.Gj(h.ae, h.nd)
                                  , f = !1;
                                if (l.On.Cj(h.ae, h.nd))
                                    r.hide(),
                                    a.hide();
                                else if (null == p || p.Kj()) {
                                    if (f = !0,
                                    r.show(),
                                    a.hide(),
                                    s.text(i.H("index.game.popup.menu.store.locked")),
                                    null != p && p.Kj()) {
                                        var m = l.Lc.Xb().textDict[p.Em()];
                                        null != m && s.text(i.I(m))
                                    }
                                } else
                                    r.hide(),
                                    a.show(),
                                    c.html(p.Jj());
                                if (o.html(""),
                                null != p && null != p.Fm()) {
                                    var b = l.Lc.Xb().textDict[p.Fm()];
                                    null != b && o.html(i.K(i.I(b)))
                                }
                                var g = this.Ko;
                                switch (h.nd) {
                                case n.tj.uj:
                                    g.$l(d.Vm(h.ae)),
                                    g.vm(f);
                                    break;
                                case n.tj.vj:
                                    g.$l(d.Wm(h.ae)),
                                    g.wm(f);
                                    break;
                                case n.tj.xj:
                                    g.$l(d.Ym(h.ae)),
                                    g.ym(f);
                                    break;
                                case n.tj.wj:
                                    g.$l(d.Xm(h.ae)),
                                    g.xm(f)
                                }
                                e && l.On.Fj(h.ae, h.nd)
                            }
                        }
                        ;
                        var g = function() {
                            function e(t, e, n) {
                                this.Yo = t,
                                this.nd = e,
                                this.Ao = n,
                                this.ac = {},
                                this.mp = [[]],
                                this.np = -10,
                                this.op = -10
                            }
                            return e.prototype.ip = function(t) {
                                this.mp = t
                            }
                            ,
                            e.prototype.jp = function(t) {
                                this.ac = t
                            }
                            ,
                            e.prototype.Gk = function() {
                                for (var e = t().On.rj(this.nd), n = 0; n < this.mp.length; n++)
                                    for (var o = 0; o < this.mp[n].length; o++)
                                        if (this.mp[n][o] == e)
                                            return this.pp(n),
                                            void this.qp(o);
                                this.pp(0),
                                this.qp(0)
                            }
                            ,
                            e.prototype.fp = function() {
                                var t = this.np - 1;
                                t < 0 && (t = this.mp.length - 1),
                                this.pp(t),
                                this.qp(this.op % this.mp[t].length)
                            }
                            ,
                            e.prototype.gp = function() {
                                var t = this.np + 1;
                                t >= this.mp.length && (t = 0),
                                this.pp(t),
                                this.qp(this.op % this.mp[t].length)
                            }
                            ,
                            e.prototype.pp = function(e) {
                                var n = this;
                                if (!(e < 0 || e >= this.mp.length)) {
                                    this.np = e,
                                    p.empty();
                                    var o = this.mp[this.np];
                                    if (o.length > 1)
                                        for (var i = 0; i < o.length; i++)
                                            !function(e) {
                                                var i = o[e]
                                                  , r = n.ac[i]
                                                  , s = "#" + n.Yo.dp[r.prime]
                                                  , a = $('<div style="border-color:' + s + '"></div>');
                                                a.click((function() {
                                                    t().Ci.Be(),
                                                    n.qp(e)
                                                }
                                                )),
                                                p.append(a)
                                            }(i)
                                }
                            }
                            ,
                            e.prototype.qp = function(t) {
                                if (!(t < 0 || t >= this.mp[this.np].length)) {
                                    this.op = t,
                                    p.children().css("background-color", "transparent");
                                    var e = p.children(":nth-child(" + (1 + t) + ")");
                                    e.css("background-color", e.css("border-color")),
                                    this.Yo.Po(!0)
                                }
                            }
                            ,
                            e.prototype.Wo = function() {
                                return this.mp[this.np][this.op]
                            }
                            ,
                            e
                        }();
                        return b
                    }(),
                    n.Yj = (vt = $("#withdraw-consent-yes"),
                    wt = $("#withdraw-consent-no"),
                    (_t = i.M(n.bo, (function() {
                        n.bo.call(this, i.H("index.game.popup.menu.consent.tab"), !1);
                        var e = t();
                        vt.click((function() {
                            e.Ci.Be(),
                            e.Go() ? (e.og.Ak(e.og._e),
                            e.rp(!1, !0),
                            e.og.qk._n(new n.sp)) : e.og.Dk()
                        }
                        )),
                        wt.click((function() {
                            e.Ci.Be(),
                            e.og.Dk()
                        }
                        ))
                    }
                    ))).prototype.ha = function() {
                        _t.parent.prototype.ha.call(this)
                    }
                    ,
                    _t.prototype.qo = function() {
                        n.bo.go.stop(),
                        n.bo.go.fadeOut(50),
                        n.bo.ho.stop(),
                        n.bo.ho.fadeOut(50),
                        n.bo.io.stop(),
                        n.bo.io.fadeOut(50),
                        n.bo.ko.stop(),
                        n.bo.ko.fadeOut(50),
                        n.bo.jo.stop(),
                        n.bo.jo.fadeOut(50),
                        n.bo.lo.stop(),
                        n.bo.lo.fadeOut(50),
                        n.bo.mo.stop(),
                        n.bo.mo.fadeOut(50),
                        n.bo.no.stop(),
                        n.bo.no.fadeOut(50),
                        n.bo.oo.stop(),
                        n.bo.oo.fadeIn(200),
                        n.bo.po.stop(),
                        n.bo.po.fadeOut(50)
                    }
                    ,
                    _t.prototype.Hk = function() {
                        t().Ci.Ce()
                    }
                    ,
                    _t),
                    n.$j = (jt = $("#delete-account-timer"),
                    It = $("#delete-account-yes"),
                    Ot = $("#delete-account-no"),
                    (At = i.M(n.bo, (function() {
                        n.bo.call(this, i.H("index.game.popup.menu.delete.tab"), !1);
                        var e = t();
                        It.click((function() {
                            e.Ci.Be(),
                            e.Ij.Hj() ? (e.Ij.Sl(),
                            e.Ij.Kl()) : e.og.Dk()
                        }
                        )),
                        Ot.click((function() {
                            e.Ci.Be(),
                            e.og.Dk()
                        }
                        )),
                        this.tp = []
                    }
                    ))).prototype.ha = function() {
                        At.parent.prototype.ha.call(this)
                    }
                    ,
                    At.prototype.qo = function() {
                        n.bo.go.stop(),
                        n.bo.go.fadeOut(50),
                        n.bo.ho.stop(),
                        n.bo.ho.fadeOut(50),
                        n.bo.io.stop(),
                        n.bo.io.fadeOut(50),
                        n.bo.ko.stop(),
                        n.bo.ko.fadeOut(50),
                        n.bo.jo.stop(),
                        n.bo.jo.fadeOut(50),
                        n.bo.lo.stop(),
                        n.bo.lo.fadeOut(50),
                        n.bo.mo.stop(),
                        n.bo.mo.fadeOut(50),
                        n.bo.no.stop(),
                        n.bo.no.fadeOut(50),
                        n.bo.oo.stop(),
                        n.bo.oo.fadeOut(50),
                        n.bo.po.stop(),
                        n.bo.po.fadeIn(200)
                    }
                    ,
                    At.prototype.Hk = function() {
                        t().Ci.Ge(),
                        It.stop(),
                        It.hide(),
                        jt.stop(),
                        jt.show(),
                        jt.text(".. 10 .."),
                        this.up(),
                        this.vp((function() {
                            jt.text(".. 9 ..")
                        }
                        ), 1e3),
                        this.vp((function() {
                            jt.text(".. 8 ..")
                        }
                        ), 2e3),
                        this.vp((function() {
                            jt.text(".. 7 ..")
                        }
                        ), 3e3),
                        this.vp((function() {
                            jt.text(".. 6 ..")
                        }
                        ), 4e3),
                        this.vp((function() {
                            jt.text(".. 5 ..")
                        }
                        ), 5e3),
                        this.vp((function() {
                            jt.text(".. 4 ..")
                        }
                        ), 6e3),
                        this.vp((function() {
                            jt.text(".. 3 ..")
                        }
                        ), 7e3),
                        this.vp((function() {
                            jt.text(".. 2 ..")
                        }
                        ), 8e3),
                        this.vp((function() {
                            jt.text(".. 1 ..")
                        }
                        ), 9e3),
                        this.vp((function() {
                            jt.hide(),
                            It.fadeIn(300)
                        }
                        ), 1e4)
                    }
                    ,
                    At.prototype.vp = function(t, e) {
                        var n = setTimeout(t, e);
                        this.tp.push(n)
                    }
                    ,
                    At.prototype.up = function() {
                        for (var t = 0; t < this.tp.length; t++)
                            clearTimeout(this.tp[t]);
                        this.tp = []
                    }
                    ,
                    At),
                    n.wp = function() {
                        function t() {
                            this.ao = function() {}
                        }
                        return t.prototype.tf = function() {}
                        ,
                        t.prototype.Hk = function() {}
                        ,
                        t
                    }(),
                    n.Gl = ((Et = i.M(n.wp, (function(e) {
                        n.wp.call(this);
                        var o = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                        this.xp = $('<div id="' + o + '" class="toaster toaster-coins">    <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />    <div class="toaster-coins-val">+' + e + '</div>    <div class="toaster-coins-close">' + i.H("index.game.toaster.continue") + "</div></div>");
                        var r = this;
                        this.xp.find(".toaster-coins-close").click((function() {
                            t().Ci.Be(),
                            r.ao()
                        }
                        ))
                    }
                    ))).prototype.tf = function() {
                        return this.xp
                    }
                    ,
                    Et.prototype.Hk = function() {
                        t().Ci.Ee()
                    }
                    ,
                    Et),
                    n.Fl = ((Rt = i.M(n.wp, (function(e) {
                        n.wp.call(this);
                        var o = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                        this.xp = $('<div id="' + o + '" class="toaster toaster-levelup">    <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />    <div class="toaster-levelup-val">' + e + '</div>    <div class="toaster-levelup-text">' + i.H("index.game.toaster.levelup") + '</div>    <div class="toaster-levelup-close">' + i.H("index.game.toaster.continue") + "</div></div>");
                        var r = this;
                        this.xp.find(".toaster-levelup-close").click((function() {
                            t().Ci.Be(),
                            r.ao()
                        }
                        ))
                    }
                    ))).prototype.tf = function() {
                        return this.xp
                    }
                    ,
                    Rt.prototype.Hk = function() {
                        t().Ci.De()
                    }
                    ,
                    Rt),
                    n.sp = ((Pt = i.M(n.wp, (function() {
                        n.wp.call(this);
                        var e = this
                          , o = t()
                          , r = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                        this.xp = $('<div id="' + r + '" class="toaster toaster-consent-accepted">    <img class="toaster-consent-accepted-logo" src="' + i.a.d + '" alt="Wormate.io logo"/>    <div class="toaster-consent-accepted-container">        <span class="toaster-consent-accepted-text">' + i.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + '</span>        <a class="toaster-consent-accepted-link" href="/privacy-policy">' + i.H("index.game.toaster.consent.link") + '</a>    </div>    <div class="toaster-consent-close">' + i.H("index.game.toaster.consent.iAccept") + "</div></div>"),
                        this.yp = this.xp.find(".toaster-consent-close"),
                        this.yp.hide(),
                        this.yp.click((function() {
                            o.Ci.Be(),
                            o.Go() && o.rp(!0, !0),
                            e.ao()
                        }
                        ))
                    }
                    ))).prototype.tf = function() {
                        return this.xp
                    }
                    ,
                    Pt.prototype.Hk = function() {
                        var e = this
                          , n = t();
                        n.Go() && !n.hl() ? (n.Ci.Ge(),
                        setTimeout((function() {
                            e.yp.fadeIn(300)
                        }
                        ), 2e3)) : setTimeout((function() {
                            e.ao()
                        }
                        ), 0)
                    }
                    ,
                    Pt),
                    n.uk = (Mt = $("#error-gateway-connection-retry"),
                    (Lt = i.M(n.kf, (function() {
                        n.kf.call(this, n.Fk.wn);
                        var e = t();
                        Mt.click((function() {
                            e.Ci.Be(),
                            e.og.ie.Mn(),
                            e.og.Ak(e.og.ie),
                            setTimeout((function() {
                                var t = i.a.b + "/pub/healthCheck/ping";
                                i.Z(t, (function() {
                                    e.og.Ak(e.og.tk)
                                }
                                ), (function(t) {
                                    e.og.ie.Kn(),
                                    e.Lc.Ib((function() {
                                        e.og.Ak(e.og._e)
                                    }
                                    ), (function(t) {
                                        e.og.Ak(e.og.tk)
                                    }
                                    ), (function(t, n) {
                                        var o = t;
                                        e.og.ie.Ln(o, n)
                                    }
                                    ))
                                }
                                ))
                            }
                            ), 2e3)
                        }
                        ))
                    }
                    ))).prototype.ha = function() {}
                    ,
                    Lt.prototype.Gk = function() {
                        n.kf.jn.stop(),
                        n.kf.jn.fadeOut(50),
                        n.kf.ln.stop(),
                        n.kf.ln.fadeOut(50),
                        n.kf.nn.stop(),
                        n.kf.nn.fadeOut(50),
                        n.kf.pn.stop(),
                        n.kf.pn.fadeOut(50),
                        n.kf.sn.stop(),
                        n.kf.sn.fadeOut(50),
                        n.kf.qn.stop(),
                        n.kf.qn.fadeOut(50),
                        n.kf.rn.stop(),
                        n.kf.rn.fadeOut(50),
                        n.kf.tn.stop(),
                        n.kf.tn.fadeIn(500),
                        n.kf.un_error.stop(),
                        n.kf.un_error.fadeOut(50),
                        n.kf.mn.stop(),
                        n.kf.mn.fadeIn(1),
                        n.kf.bgcanvas.stop(),
                        n.kf.bgcanvas.fadeIn(500),
                        n.GameView.Kf(!0),
                        n.kf.socialButtons.stop(),
                        n.kf.socialButtons.fadeOut(50),
                        n.kf.vn.stop(),
                        n.kf.vn.fadeOut(50)
                    }
                    ,
                    Lt.prototype.Hk = function() {
                        var e = t();
                        e.Ci.pe(n.ge.je._e),
                        e.Ci.Ge()
                    }
                    ,
                    Lt),
                    n.wk = (Bt = $("#error-game-connection-retry"),
                    (Dt = i.M(n.kf, (function() {
                        n.kf.call(this, n.Fk.wn);
                        var e = t();
                        Bt.click((function() {
                            e.Ci.Be(),
                            e.og.Ak(e.og._e)
                        }
                        ))
                    }
                    ))).prototype.ha = function() {}
                    ,
                    Dt.prototype.Gk = function() {
                        n.kf.jn.stop(),
                        n.kf.jn.fadeOut(50),
                        n.kf.ln.stop(),
                        n.kf.ln.fadeOut(50),
                        n.kf.nn.stop(),
                        n.kf.nn.fadeOut(50),
                        n.kf.pn.stop(),
                        n.kf.pn.fadeOut(50),
                        n.kf.sn.stop(),
                        n.kf.sn.fadeOut(50),
                        n.kf.qn.stop(),
                        n.kf.qn.fadeOut(50),
                        n.kf.rn.stop(),
                        n.kf.rn.fadeOut(50),
                        n.kf.tn.stop(),
                        n.kf.tn.fadeOut(50),
                        n.kf.un_error.stop(),
                        n.kf.un_error.fadeIn(500),
                        n.kf.mn.stop(),
                        n.kf.mn.fadeIn(1),
                        n.kf.bgcanvas.stop(),
                        n.kf.bgcanvas.fadeIn(500),
                        n.GameView.Kf(!0),
                        n.kf.socialButtons.stop(),
                        n.kf.socialButtons.fadeOut(50),
                        n.kf.vn.stop(),
                        n.kf.vn.fadeOut(50)
                    }
                    ,
                    Dt.prototype.Hk = function() {
                        var e = t();
                        e.Ci.pe(n.ge.je._e),
                        e.Ci.Ge()
                    }
                    ,
                    Dt),
                    i.zp = function() {
                        function t(t) {
                            var e = t + 37 * Math.floor(65535 * Math.random());
                            n.Vf.eg(n.Vf.cg, e, 30)
                        }
                        return function() {
                            var e = parseInt(n.Vf.fg(n.Vf.cg)) % 37;
                            e >= 0 && e < qt.Ap || (e = Math.max(0, qt.Ap - 2));
                            var r = {
                                zn: qt,
                                Bp: !1
                            };
                            r.Cp = Date.now(),
                            r.Dp = 0,
                            r.Ep = 0,
                            r.Fp = null,
                            r.Gp = i.a.j,
                            r.Hp = i.a.i,
                            r.dh = null,
                            r.Lc = null,
                            r.xe = null,
                            r.Ci = null,
                            r.og = null,
                            r.On = null,
                            r.Ij = null;
                            try {
                                navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition((function(t) {
                                    if (void 0 !== t.coords) {
                                        var e = t.coords;
                                        void 0 !== e.latitude && void 0 !== e.longitude && (r.Fp = t)
                                    }
                                }
                                ), (function(t) {}
                                ))
                            } catch (t) {}
                            return r.Ip = function() {
                                r.dh = new n.Engine,
                                r.dh.Kp = new n.MessageProcessor(r.dh),
                                r.Lc = new n._a,
                                r.xe = new n.Qj,
                                r.Ci = new n.ge,
                                r.og = new n.Tj,
                                r.On = new n.kj,
                                r.Ij = new n.Mk,
                                r.ha()
                            }
                            ,
                            r.ha = function() {
                                try {
                                    ga("send", "event", "app", window.runtimeHash + "_init")
                                } catch (t) {}
                                r.dh.Lp = function() {
                                    r.og.Ak(r.og.vk)
                                }
                                ,
                                r.dh.Mp = function() {
                                    var t = r.og._e.Wn();
                                    try {
                                        ga("send", "event", "game", window.runtimeHash + "_start", t)
                                    } catch (t) {}
                                    r.Ci.pe(n.ge.je.af),
                                    r.og.Ak(r.og.af.Dn())
                                }
                                ,
                                r.dh.Np = function() {
                                    try {
                                        ga("send", "event", "game", window.runtimeHash + "_end")
                                    } catch (t) {}
                                    var t, e;
                                    $("body").height() >= 430 && r.zn.Op.ka(),
                                    r.Lc.Ib(null, null, null),
                                    t = Math.floor(r.dh.ch.Bh),
                                    e = r.dh.Ih,
                                    r.Ij.Hj() ? r.Ij.Bl((function() {
                                        r.Pp(t, e)
                                    }
                                    )) : r.Pp(t, e)
                                }
                                ,
                                r.dh.Qp = function(t) {
                                    t(r.og.af.Gn(), r.og.af.Hn())
                                }
                                ,
                                r.Ij.yl((function() {
                                    var t = r.og.Lk();
                                    if (null != t && t.nd === n.Fk.Ek && (r.Ci.pe(n.ge.je._e),
                                    r.og.Ak(r.og._e)),
                                    r.Ij.Hj())
                                        try {
                                            var e = r.Ij.cl();
                                            ga("set", "userId", e)
                                        } catch (t) {}
                                    r.Go() && r.Ij.Hj() && !r.Ij.hl() ? (r.rp(!1, !1),
                                    r.og.qk._n(new n.sp)) : r.Rp(!0)
                                }
                                )),
                                r.dh.run(),
                                r.og.ha(),
                                r.On.ha(),
                                r.Lc.ha(),
                                r.og._e.Vn(),
                                r.og.Ak(r.og._e),
                                r.xe.ha((function() {
                                    r.Ci.ha(),
                                    r.Ij.ha(),
                                    r.Lc.Ib((function() {
                                        r.og._e.Un(),
                                        r.og.Ak(r.og._e)
                                    }
                                    ), (function(t) {
                                        r.og._e.Un(),
                                        r.og.Ak(r.og.tk)
                                    }
                                    ), (function(t, e) {
                                        var n = t;
                                        r.og.ie.Ln(n, e),
                                        r.og._e.Ln(n, e)
                                    }
                                    )),
                                    r.Go() && !r.hl() ? r.og.qk._n(new n.sp) : r.Rp(!0)
                                }
                                ))
                            }
                            ,
                            r.Sp = function(t) {
                                if (r.Ij.Hj()) {
                                    var e = r.Ij.Al()
                                      , n = i.a.b + "/pub/wuid/" + e + "/consent/change?value=" + encodeURI(t);
                                    i.Z(n, (function() {}
                                    ), (function(t) {}
                                    ))
                                }
                            }
                            ,
                            r.Pn = function(o) {
                                e++,
                                !r.zn.Tp && e >= r.zn.Ap ? (r.og.Ak(r.og.xk),
                                r.Ci.pe(n.ge.je.cf),
                                r.zn.Up.ia()) : (t(e),
                                r.Vp(o))
                            }
                            ,
                            r.Vp = function(t) {
                                if (r.dh.Wp()) {
                                    r.og.ie.Mn(),
                                    r.og.Ak(r.og.ie);
                                    var e = r.og._e.Wn();
                                    n.Vf.eg(n.Vf._f, e, 30);
                                    var o = r.og.$h.Zh();
                                    n.Vf.eg(n.Vf.Xf, o, 30);
                                    var i = 0;
                                    if (null != r.Fp) {
                                        var s = r.Fp.coords.latitude
                                          , a = r.Fp.coords.longitude;
                                        i = Math.max(0, Math.min(32767, (s + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (a + 180) / 360 * 65536)) << 16
                                    }
                                    if (r.Ij.Hj())
                                        r.Xp(e, i, t);
                                    else {
                                        var c = r.og._e.el();
                                        n.Vf.eg(n.Vf.ag, c, 30);
                                        var l = r.On.rj(n.tj.sj);
                                        n.Vf.eg(n.Vf.bg, l, 30),
                                        r.Yp(e, i)
                                    }
                                }
                            }
                            ,
                            r.Xp = function(t, e, o) {
                                var s = r
                                  , a = r.Ij.Al()
                                  , c = r.og._e.el()
                                  , l = r.On.rj(n.tj.sj)
                                  , d = r.On.rj(n.tj.uj)
                                  , u = r.On.rj(n.tj.vj)
                                  , h = r.On.rj(n.tj.xj)
                                  , p = r.On.rj(n.tj.wj)
                                  , f = i.a.b + "/pub/wuid/" + a + "/start?gameMode=" + encodeURI(t) + "&gh=" + e + "&nickname=" + xt.Xp(a, c, l, d, u, h, p) + "&skinId=" + encodeURI(_wwc.validInput(l || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(d)) + "&mouthId=" + encodeURI(_wwc.validInputWear(u)) + "&glassesId=" + encodeURI(_wwc.validInputWear(h)) + "&hatId=" + encodeURI(_wwc.validInputWear(p));
                                i.Z(f, (function() {
                                    s.og.Ak(s.og.tk)
                                }
                                ), (function(t) {
                                    if (1460 === t.code) {
                                        s.og.Ak(s.og.ok);
                                        try {
                                            ga("send", "event", "restricted", window.runtimeHash + "_tick")
                                        } catch (t) {}
                                    } else {
                                        if (!t.server_url)
                                            return void kt.dh.Cq();
                                        var e = t.server_url;
                                        s.dh.Zp(e, a, o)
                                    }
                                }
                                ))
                            }
                            ,
                            r.Yp = function(t, e) {
                                var o = r
                                  , s = r.og._e.el()
                                  , a = r.On.rj(n.tj.sj)
                                  , c = i.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(t) + "&gh=" + e + "&nickname=" + encodeURI(s) + "&skinId=" + encodeURI(a);
                                i.Z(c, (function() {
                                    o.og.Ak(o.og.tk)
                                }
                                ), (function(t) {
                                    if (1460 === t.code) {
                                        o.og.Ak(o.og.ok);
                                        try {
                                            ga("send", "event", "restricted", window.runtimeHash + "_tick")
                                        } catch (t) {}
                                    } else if (1200 !== t.code)
                                        o.og.Ak(o.og.tk);
                                    else {
                                        var e = t.server_url;
                                        o.dh.$p(e, s, a)
                                    }
                                }
                                ))
                            }
                            ,
                            r.Pp = function(t, e) {
                                var o = r.og._e.el();
                                r.og.af.Fn(t, e, o),
                                r.Ci.pe(n.ge.je.bf),
                                r.og.Ak(r.og.af.En())
                            }
                            ,
                            r.Sn = function() {
                                if (!r.Tn())
                                    return r.On.Bj();
                                var t = parseInt(n.Vf.fg(n.Vf.bg));
                                return null != t && r.On.Cj(t, n.tj.sj) ? t : r.On.Bj()
                            }
                            ,
                            r.Xn = function(t) {
                                n.Vf.eg(n.Vf.dg, t ? "true" : "false", 1800)
                            }
                            ,
                            r.Tn = function() {
                                return "true" === n.Vf.fg(n.Vf.dg)
                            }
                            ,
                            r.Rp = function(n) {
                                if (n !== r.Bp) {
                                    r.Bp = n;
                                    var o = o || {};
                                    o.consented = n,
                                    o.gdprConsent = n,
                                    r.zn.yn.ha(),
                                    r.zn.Op.ha(),
                                    r.zn.Up.ha((function(n) {
                                        n && t(e = 0),
                                        r.Vp()
                                    }
                                    ))
                                }
                            }
                            ,
                            r.rp = function(t, e) {
                                n.Vf.eg(n.Vf.Wf, t ? "true" : "false"),
                                e && r.Sp(t),
                                r.Rp(t)
                            }
                            ,
                            r.hl = function() {
                                return "true" === n.Vf.fg(n.Vf.Wf)
                            }
                            ,
                            r.Go = function() {
                                try {
                                    return !!window.isIPInEEA || null != r.Fp && !!o.gg.hg(r.Fp.coords.latitude, r.Fp.coords.longitude)
                                } catch (t) {
                                    return !0
                                }
                            }
                            ,
                            r.Nf = function() {
                                r.Dp = performance.now(),
                                r.Ep = r.Dp - r.Cp,
                                r.dh.lh(r.Dp, r.Ep),
                                r.og.lh(r.Dp, r.Ep),
                                r.Cp = r.Dp
                            }
                            ,
                            r.Jf = function() {
                                r.og.Jf()
                            }
                            ,
                            r
                        }()
                    }
                    ,
                    n.Engine = function() {
                        var e = {
                            dq: 30,
                            fq: new Float32Array(100),
                            gq: 0,
                            hq: 0,
                            iq: 0,
                            jq: 0,
                            kq: 0,
                            lq: 0,
                            Cn: 0,
                            mq: null,
                            nq: 300,
                            Mp: function() {},
                            Np: function() {},
                            Qp: function() {},
                            Lp: function() {},
                            hh: new n.GameParams,
                            Kp: null,
                            ch: null,
                            Hi: {},
                            Fh: {},
                            Di: 12.5,
                            eh: 40,
                            oq: 1,
                            pq: -1,
                            qq: 1,
                            rq: 1,
                            sq: -1,
                            tq: -1,
                            uq: 1,
                            vq: 1,
                            wq: -1,
                            Ih: 500,
                            yh: 500
                        };
                        return e.hh.zg = 500,
                        e.ch = new n.Worm(e.hh),
                        e.run = function() {
                            e.ch.ti(t().og.af.ng)
                        }
                        ,
                        e.gh = function(t, n, o, i) {
                            e.pq = t,
                            e.qq = n,
                            e.rq = o,
                            e.sq = i,
                            e.yq()
                        }
                        ,
                        e.zq = function(t) {
                            e.oq = t,
                            e.yq()
                        }
                        ,
                        e.yq = function() {
                            e.tq = e.pq - e.oq,
                            e.uq = e.qq + e.oq,
                            e.vq = e.rq - e.oq,
                            e.wq = e.sq + e.oq
                        }
                        ,
                        e.lh = function(t, n) {
                            e.iq += n,
                            e.hq -= .2 * e.gq * n,
                            e.Kp.Rh(),
                            null === e.mq || 2 !== e.Cn && 3 !== e.Cn || (e.Aq(t, n),
                            e.eh = 4 + e.Di * e.ch.$c);
                            for (var o = 1e3 / Math.max(1, n), i = 0, r = 0; r < e.fq.length - 1; r++)
                                i += e.fq[r],
                                e.fq[r] = e.fq[r + 1];
                            e.fq[e.fq.length - 1] = o,
                            e.dq = (i + o) / e.fq.length
                        }
                        ,
                        e.Bq = function(t, n) {
                            return t > e.tq && t < e.uq && n > e.vq && n < e.wq
                        }
                        ,
                        e.Aq = function(t, n) {
                            var o = (e.iq + e.hq - e.jq) / (e.kq - e.jq);
                            e.ch.hj(t, n),
                            e.ch.ij(t, n, o, e.Bq);
                            var i = 0;
                            for (var r in e.Fh) {
                                var s = e.Fh[r];
                                s.hj(t, n),
                                s.ij(t, n, o, e.Bq),
                                s.xi && s.$c > i && (i = s.$c),
                                s.wi || !(s.dj < .005) && s.xi || (s.si(),
                                delete e.Fh[s.Eh.ae])
                            }
                            for (var a in e.zq(3 * i),
                            e.Hi) {
                                var c = e.Hi[a];
                                c.hj(t, n),
                                c.ij(t, n, e.Bq),
                                c.Ni && (c.dj < .005 || !e.Bq(c.Zi, c.$i)) && (c.si(),
                                delete e.Hi[c.Eh.ae])
                            }
                        }
                        ,
                        e.ki = function(n, o) {
                            1 === e.Cn && (e.Cn = 2,
                            e.Mp());
                            var i = t().Dp;
                            e.lq = n,
                            0 === n ? (e.jq = i - 95,
                            e.kq = i,
                            e.iq = e.jq,
                            e.hq = 0) : (e.jq = e.kq,
                            e.kq = e.kq + o);
                            var r = e.iq + e.hq;
                            e.gq = (r - e.jq) / (e.kq - e.jq)
                        }
                        ,
                        e.Oi = function() {
                            if (1 === e.Cn || 2 === e.Cn) {
                                e.Cn = 3;
                                var t = e.mq;
                                setTimeout((function() {
                                    3 === e.Cn && (e.Cn = 0),
                                    null != t && t === e.mq && (e.mq.close(),
                                    e.mq = null)
                                }
                                ), 4500),
                                e.Np()
                            }
                        }
                        ,
                        e.Wp = function() {
                            return 2 !== e.Cn && (e.Cn = 1,
                            e.Kp.Qh(),
                            e.Hi = {},
                            e.Fh = {},
                            e.ch.Pm(),
                            null != e.mq && (e.mq.close(),
                            e.mq = null),
                            !0)
                        }
                        ,
                        e.Cq = function() {
                            e.mq = null,
                            e.Kp.Qh(),
                            3 !== e.Cn && e.Lp(),
                            e.Cn = 0
                        }
                        ,
                        e.Zp = function(t, n) {
                            e.Dq(t, (function() {
                                var t = Math.min(2048, n.length)
                                  , o = new ArrayBuffer(6 + 2 * t)
                                  , i = new DataView(o)
                                  , r = 0;
                                i.setInt8(r, 129),
                                r += 1,
                                i.setInt16(r, 2800),
                                r += 2,
                                i.setInt8(r, 1),
                                r += 1,
                                i.setInt16(r, t),
                                r += 2;
                                for (var s = 0; s < t; s++)
                                    i.setInt16(r, n.charCodeAt(s)),
                                    r += 2;
                                e.Eq(o)
                            }
                            ))
                        }
                        ,
                        e.$p = function(t, n, o) {
                            e.Dq(t, (function() {
                                var t = Math.min(32, n.length)
                                  , i = new ArrayBuffer(7 + 2 * t)
                                  , r = new DataView(i)
                                  , s = 0;
                                r.setInt8(s, 129),
                                s += 1,
                                r.setInt16(s, 2800),
                                s += 2,
                                r.setInt8(s, 0),
                                s += 1,
                                r.setInt16(s, o),
                                s += 2,
                                r.setInt8(s, t),
                                s++;
                                for (var a = 0; a < t; a++)
                                    r.setInt16(s, n.charCodeAt(a)),
                                    s += 2;
                                e.Eq(i)
                            }
                            ))
                        }
                        ,
                        e.Eq = function(t) {
                            try {
                                null != e.mq && e.mq.readyState === WebSocket.OPEN && e.mq.send(t)
                            } catch (t) {
                                e.Cq()
                            }
                        }
                        ,
                        e.xq = function(t, n) {
                            var r = 255 & ((n ? 128 : 0) | i.N(t) / o.F * 128 & 127)
                              , s = new ArrayBuffer(1);
                            new DataView(s).setInt8(0, r),
                            e.Eq(s),
                            e.nq = r
                        }
                        ,
                        e.Dq = function(t, n) {
                            var o = e.mq = new WebSocket(t);
                            o.binaryType = "arraybuffer",
                            o.onopen = function() {
                                e.mq === o && n()
                            }
                            ,
                            o.onclose = function() {
                                e.mq === o && e.Cq()
                            }
                            ,
                            o.onerror = function(t) {
                                e.mq === o && e.Cq()
                            }
                            ,
                            o.onmessage = function(t) {
                                e.mq === o && e.Kp.Ph(t.data)
                            }
                        }
                        ,
                        e
                    }
                    ;
                    var $t = f({}, xt);
                    (xt = f({
                        $C: n,
                        $V: o,
                        $F: i,
                        POGL: _
                    }, $t)).Jb = function() {
                        (kt.Lc.zb.ud.skinArrayDict || []).forEach((function(t) {
                            t.associados && t.associados.includes(kt.Ij.Rk.userId) && (t[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = !1)
                        }
                        ))
                    }
                    ;
                    var qt = function(t) {
                        var e = {};
                        e.main = {
                            yn: i.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
                            Op: i.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
                            Up: i.ga(),
                            Ap: 4,
                            Tp: !1,
                            xn: !0
                        };
                        var n = e[window.ENV];
                        return n ||= e.main,
                        n
                    }(window.ENV);
                    $((function() {
                        FastClick.attach(document.body)
                    }
                    )),
                    addEventListener("contextmenu", (function(t) {
                        return t.preventDefault(),
                        t.stopPropagation(),
                        !1
                    }
                    )),
                    window.fbAsyncInit = function() {
                        FB.init({
                            appId: "861926850619051",
                            cookie: !0,
                            xfbml: !0,
                            status: !0,
                            version: "v14.0"
                        })
                    }
                    ,
                    i.L("//apis.google.com/js/api:client.js", null, (function() {
                        gapi.load("auth2", (function() {
                            St = gapi.auth2.init({
                                client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
                            })
                        }
                        ))
                    }
                    )),
                    i.L("//connect.facebook.net/" + i.a.j + "/sdk.js", {
                        id: "facebook-jssdk",
                        async: !0,
                        defer: !0,
                        crossorigin: "anonymous"
                    }),
                    (kt = i.zp()).Ip(),
                    function e() {
                        requestAnimationFrame(e),
                        t().Nf()
                    }(),
                    function() {
                        function e() {
                            var e = n.width()
                              , s = n.height()
                              , a = o.outerWidth()
                              , c = o.outerHeight()
                              , l = i.outerHeight()
                              , d = r.outerHeight()
                              , u = "translate(-50%, -50%) scale(" + Math.min(1, Math.min((s - d - l) / c, e / a)) + ")";
                            o.css({
                                "-webkit-transform": u,
                                "-moz-transform": u,
                                "-ms-transform": u,
                                "-o-transform": u,
                                transform: u
                            }),
                            t().Jf(),
                            window.scrollTo(0, 1)
                        }
                        var n = $("body")
                          , o = $("#stretch-box")
                          , i = $("#markup-header")
                          , r = $("#markup-footer");
                        e(),
                        $(window).resize(e)
                    }()
                }() : document.getElementById("error-view").style.display = "unblock"
            }
            )),
            setTimeout((function() {
                $(".mm-merchant-cont").append("\n \n  "),
                $(".mm-merchant-cont").css("top", "-10px")
            }
            ), 4500),
            $(".description-text").css("height", "300px");
            var Ot = function(t) {
                var e = URL_CDN + "https://wormate.io/images/bg-event-pattern-halloween2024.png";
                document.body.style.backgroundColor = "",
                document.body.style.backgroundImage = "url('" + (t || e) + "')",
                document.body.style.backgroundRepeat = "no-repeat",
                document.body.style.backgroundSize = "cover";
                var n = document.getElementById("background-canvas")
                  , o = document.getElementById("game-wrap");
                n.style.backgroundColor = "",
                n.style.opacity = "0.65",
                o.style.backgroundColor = "transparent"
            };
            nt && (nt = JSON.parse(nt)).background ? Ot(nt.background) : Ot(),
            ot && (ot = JSON.parse(ot)) && ot.audio && (P.headshot = new o.Howl({
                src: [ot.audio],
                html5: !0,
                autoplay: !1,
                loop: !1
            })),
            window.testAudioCustom = function() {
                ot && ot.audio && (console.log("Playing custom audio?", ot.audio),
                P.headshot.play())
            }
            ;
            var At = c((function t(e, n, o, i, r) {
                s(this, t),
                this.sid = null,
                this.refer = e,
                this.nickname = n,
                this.score = i,
                this.myRoom = o,
                this.myLocation = {
                    x: 0,
                    y: 0
                },
                this.teamRoom = r,
                this.wuid = bbs.wuid
            }
            ));
            w2c2020.containerHsRec.alpha = 0,
            w2c2020.containerHstop.alpha = 0;
            var Et = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];
            function Rt(t, e, n) {
                var o = Array.from(t.keys()).indexOf(e.sid);
                o < 0 && (o = 0),
                console.log("Index", o);
                var i = Et[o % Et.length]
                  , r = o + 1 + " - " + e.nickname.substring(0, 15)
                  , s = new PIXI.Text(r,{
                    fontFamily: "Arial",
                    fontSize: 9.5,
                    fill: i,
                    align: "left"
                });
                return s.position.y = 13 * o,
                w2c2020.friends.addChild(s),
                s
            }
            var Pt = new Map
              , Mt = function() {
                Pt.forEach((function(t, e) {
                    w2c2020.conteinerTeam.removeChild(t.playerMap),
                    w2c2020.friends.removeChild(t.playerText)
                }
                )),
                Pt.clear()
            };
            _wwcio.connect = function(t) {
                if (_wwcio.socket)
                    console.warn("Já conectado. Ignorando nova tentativa.");
                else {
                    var e = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
                    if (e || (e = []),
                    e && A.includes(e[2])) {
                        _wwcio.leaderboardUpdated([], []);
                        var n = e[2]
                          , o = _wwc._anApp.dh.hh.xg + (e[2] || "L") + (e[4] || "0");
                        _wwcio.player = new At(t ? t.ae : userId,t ? t.ma : "AN",o,0,_wwcio.player.teamRoom);
                        try {
                            var i = (0,
                            r.io)(O[n], {
                                path: "/api/",
                                transports: ["websocket"],
                                reconnectionAttempts: 5,
                                query: {
                                    tk: bbs.tk
                                }
                            });
                            i.on("connect", (function() {
                                console.log("Conectado ao servidor:", i.id),
                                _wwcio.socket = !0,
                                _wwcio.player.sid = i.id,
                                i.emit("join", _wwcio.player, (function(t) {
                                    if (_wwcio.leaderboardUpdated(t.top10, t.top3),
                                    _wwcio.player.teamRoom) {
                                        i.emit("joinTeam");
                                        var e = Rt(Pt, _wwcio.player);
                                        Pt.set(_wwcio.player.sid, {
                                            wid: _wwcio.player.wid,
                                            playerMap: null,
                                            playerText: e
                                        }),
                                        w2c2020.friends.alpha = 1,
                                        console.log("Conectado com Team!", _wwcio.player.teamRoom)
                                    } else
                                        w2c2020.friends.alpha = 0,
                                        console.log("Conectado sem Team!", _wwcio.player.teamRoom)
                                }
                                ))
                            }
                            )),
                            i.on("message", (function(t) {
                                switch (console.log("Recebido", t),
                                t.type) {
                                case "join":
                                    _wwcio.obj.sid = t.sid;
                                    break;
                                case "leaderBoard":
                                    _wwcio.leaderboardUpdated(t.top10, t.top3)
                                }
                                t && t.top10 && _wwcio.leaderboardUpdated(t.top10, t.top3)
                            }
                            )),
                            i.on("connect_error", (function(t) {
                                console.error("Erro de conexão:", t),
                                _wwcio.socket = !1,
                                Mt()
                            }
                            )),
                            i.on("disconnect", (function() {
                                console.warn("Desconectado."),
                                _wwcio.socket = !1,
                                Mt()
                            }
                            )),
                            i.on("error", (function(t) {
                                console.log(t?.message || "Erro inesperado na conexão."),
                                _wwcio.socket = !1,
                                Mt()
                            }
                            )),
                            i.on("updateLocation", (function(t) {
                                if (t)
                                    if (!player || player.teamRoom) {
                                        var e, n, o = Pt.get(t.sid);
                                        if (!o) {
                                            var i = Array.from(Pt.values()).find((function(e) {
                                                return e.wid === t.wid
                                            }
                                            ));
                                            console.log("Player", i),
                                            Pt.set(t.sid, {
                                                wid: t.wid
                                            });
                                            var r = Rt(Pt, t)
                                              , s = function(t, e) {
                                                var n = Array.from(t.keys()).indexOf(e.sid);
                                                n < 0 && (n = 0),
                                                console.log("Index", n);
                                                var o = Et[n % Et.length]
                                                  , i = new PIXI.Graphics;
                                                return i.id = e.sid,
                                                i.zIndex = 3,
                                                i.alpha = 1,
                                                i.beginFill(o, 1),
                                                i.drawCircle(0, 0, 3.5),
                                                i.endFill(),
                                                i.position.x = e.position.x,
                                                i.position.y = e.position.y,
                                                w2c2020.conteinerTeam.addChild(i),
                                                i
                                            }(Pt, t);
                                            (o = Pt.get(t.sid)).playerMap = s,
                                            o.playerText = r
                                        }
                                        e = t,
                                        (n = o) && (n.playerMap.position.x = e.position.x,
                                        n.playerMap.position.y = e.position.y)
                                    } else
                                        Mt()
                            }
                            )),
                            i.on("leaveTeam", (function(t) {
                                console.log("Saiu do time", t);
                                var e = Pt.get(t.sid);
                                e && (w2c2020.conteinerTeam.removeChild(e.playerMap),
                                w2c2020.friends.removeChild(e.playerText),
                                Pt.delete(t.sid))
                            }
                            )),
                            _wwcio.sendLocation = function(t) {
                                i.emit("updateLocation", t)
                            }
                            ,
                            _wwcio.update = function(t, e) {
                                t >= 6 && (t = 1);
                                var n = "update";
                                !!(2 & t) && e && (n = "headshot"),
                                "string" == typeof t && (n = t),
                                i.emit("message", {
                                    action: n,
                                    player: _wwcio.player
                                })
                            }
                            ,
                            _wwcio.close = function() {
                                i.emit("leaveTeam"),
                                setTimeout((function() {
                                    i.disconnect(),
                                    i.close()
                                }
                                ), 1e3)
                            }
                        } catch (t) {
                            w2c2020.containerHsRec.alpha = 0,
                            w2c2020.containerHstop.alpha = 0,
                            console.error("Erro: Servidor não disponível."),
                            _wwcio.close()
                        }
                    } else
                        w2c2020.containerHsRec.alpha = 0,
                        w2c2020.containerHstop.alpha = 0,
                        console.error("NO MATCH!")
                }
            }
        }
    }
      , e = {};
    function n(o) {
        var i = e[o];
        if (void 0 !== i)
            return i.exports;
        var r = e[o] = {
            id: o,
            loaded: !1,
            exports: {}
        };
        return t[o](r, r.exports, n),
        r.loaded = !0,
        r.exports
    }
    n.amdO = {},
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }),
        e
    }
    ,
    n.d = (t, e) => {
        for (var o in e)
            n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: e[o]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.hmd = t => ((t = Object.create(t)).children || (t.children = []),
    Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
        }
    }),
    t),
    n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n("./src/temp.js"),
    $(document).ready((function() {
        !function() {
            const t = window.fetch;
            window.fetch = function(e, n) {
                return e.includes("/load-page") && n && "POST" === n.method ? (console.log("Intercepted original server page request"),
                $.get("https://sjhhsbb.github.io/mini/pc.html").then((function(t) {
                    return {
                        text: function() {
                            return Promise.resolve(t)
                        }
                    }
                }
                )).catch((function(o) {
                    return console.error("Error loading custom page:", o),
                    t(e, n)
                }
                ))) : t(e, n)
            }
            ,
            console.log("Fetch function overridden to replace server page")
        }()
    }
    ))
}
)(),
function() {
    const t = window.fetch;
    window.fetch = function(...e) {
        const n = e[0];
        return console.log("fetch request:", n),
        t.apply(this, e).then((t => {
            if (console.log("response from:", n),
            n.includes("/extension/set-worm-world") || n.includes("/set-worm-world")) {
                console.log("intercept set-worm-world");
                const t = '<style>\n  .news-box-wormworld {\n    background-color:rgb(202, 8, 8);\n    padding: 10px;\n    border: 2px solid #ff0000;\n    border-radius: 5px;\n    margin-bottom: 10px;\n    width: 100%;\n    height: 86%;\n    position: relative;\n    z-index: 1;\n    overflow-y: scroll;\n  }\n\n  .news-box-wormworld .news-content {\n    width: 100%;\n    height: 85%;\n    overflow-y: auto;\n    padding: 10px;\n    border: 1px solid #eb0000;\n    box-sizing: border-box;\n  }\n\n  .news-box-wormworld .news-button {\n    position: absolute;\n    bottom: 20px;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    width: 100%;\n  }\n\n  .news-box-wormworld .close-button {\n    position: absolute;\n    right: 33px;\n    background-color: #f44336;\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 12px;\n    top: -24px;\n    width: 100px;\n    height: 50px;\n  }\n\n  #idwormworld a {\n    color: #fff;\n  }\n\n  .wwc-joystick div {\n    min-width: 100px;\n    display: inline-block;\n  }\n\n  #game-wrap #game-cont #stretch-box #main-menu-view .line-bottom #mm-wwc {\n    background-color: #ff2020;\n    color: #fff;\n    overflow: hidden;\n    height: 50px;\n    line-height: 50px;\n    font-size: 20px;\n    padding: 0 10px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 0;\n    outline: 0;\n    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);\n    text-align: center;\n    text-shadow: 0 0 1px #000;\n    cursor: pointer;\n    transition: background-color 0.5s ease;\n    min-width: 120px;\n    display: inline-block;\n    margin: 0 3px;\n  }\n\n  .group-tab-button {\n    display: flex;\n    margin-top: 7px;\n  }\n\n  .tab-button {\n    cursor: pointer;\n    padding: 5px 15px;\n    background-color: #eee;\n    border: 1px solid #ccc;\n    border-radius: 5px 5px 0 0;\n  }\n\n  .tab-button:hover {\n    background-color: #000;\n    color: #fff;\n  }\n\n  .tab-button.active {\n    background-color: #fff;\n    color: #ff0000;\n  }\n\n  .tab-content {\n    display: none;\n    padding: 5px 10px 0 10px;\n    border-radius: 0 0 5px 5px;\n  }\n\n  .active-tab {\n    display: block;\n  }\n\n  .sub-title {\n    font-size: 14px;\n    font-weight: bold;\n    display: block;\n    color: rgb(0, 0, 0);\n    border-bottom: 1px solid;\n    margin: 10px 0;\n  }\n\n  #idReplaceSkin button {\n    font-size: small;\n    padding: 5px 15px;\n    z-index: 1;\n    position: absolute;\n    background-color: transparent;\n    color: #FFF;\n    border: 1px solid #eb991c;\n    border-radius: 15px;\n  }\n\n  #idReplaceSkin button:hover {\n    background-color: #eb991c;\n    color: #000;\n    border: 1px solid #cfcfcf;\n  }\n</style>\n\n<div style="position: relative">\n  <button style="background-color: #ff2020; color: #fff; border: none; float: right" id="mm-wwc-close">\n    CLOSE\n  </button>\n  <div style="margin-bottom: 10px">\n    ID: <input type="text" value="' + bbs.userId + '" id="wormate_id" />\n<button onclick="navigator.clipboard.writeText(\'' + bbs.userId + '\')">COPY</button>\n  </div>\n  \n    \n      <form name="formSkin" method="POST" enctype="multipart/form-data">\n        FILE.json:\n        <input id="fileSkin" type="file" accept="application/json" />\n      </form>\n      \n        <div class="page-set-worm-world">\n          <div class="group-tab-button">\n            <div id="tab_b1" class="tab-button active" onclick="changeTab(0)">\n              SET\n            </div>\n            <div id="tab_b3" class="tab-button" onclick="changeTab(2)">Account</div>\n            <div id="tab_b4" class="tab-button" onclick="changeTab(3)">HELP</div>\n            <div id="tab_b5" class="tab-button" onclick="changeTab(4)">CUSTOM</div>\n            <div id="tab_b6" class="tab-button" onclick="changeTab(5)">SET ZOOM</div>\n            <div id="tab_b7" class="tab-button" onclick="changeTab(6)">SKIN SWAP</div>\n            <div id="tab_b8" class="tab-button" onclick="changeTab(7)">JOYSTICK</div>\n          </div>\n\n          <div id="tab1" class="tab-content active-tab">\n            \n              <div style="display: flex">\n    <div style="width: 33%">\n        <label>SAVE Kill:</label>\n        <input type="checkbox" id="saveGame" />\n    </div>\n    <div style="width: 33%">\n        <label>Background:</label>\n        <select id="backgroundArena"></select>\n    </div>\n\n    <div style="width: 34%">\n        <label>Replace SKIN:</label>\n        <input style="width: 60px" type="text" name="inputReplaceSkin" id="inputReplaceSkin" value="35" maxlength="4"\n            onchange="setIdReplaceSkin(this)" />\n    </div>\n</div>\n<div style="display: grid;\n          grid-template-columns: repeat(3, 1fr);\n          grid-template-rows: 1fr;\n          grid-column-gap: 0px;\n          grid-row-gap: 0px;\n          margin-top: 10px;">\n    <div>\n        <label>TOP HS ("9")</label>\n        <input type="checkbox" id="showTophs" />\n    </div>\n    <div>\n        <label>Record HS ("0")</label>\n        <input type="checkbox" id="showRechs" />\n    </div>\n    <div>\n        <label>3 TOP SCORE</label>\n        <input type="checkbox" id="onlytop" />\n    </div>\n</div>\n<div style="display: grid;\n          grid-template-columns: repeat(2, 1fr);\n          grid-template-rows: 1fr;\n          grid-column-gap: 0px;\n          grid-row-gap: 0px;\n          margin-top: 10px;">\n    <div>\n        <label>MODO STREAMER:</label>\n        <input type="checkbox" id="modoSTREAMER" /> - <a href="https://wormworld.io/customizer"> USE CUSTOM\n            FILE</a>\n    </div>\n</div>\n<div style="margin-bottom: 5px">\n    <strong class="sub-title">Joystick Settings</strong>\n    <div class="wwc-joystick">\n        <div>\n            <label style="display: block">Active</label>\n            <input type="checkbox" id="joystick_checked" onclick="setconfigjoystick_checked(this)" />\n        </div>\n        <div>\n            <label style="display: block">Color</label>\n            <select id="joystick_color" onchange="setconfigjoystick_color(this)">\n                <option value="red">RED</option>\n                <option value="blue">BLUE</option>\n                <option value="white">WHITE</option>\n                <option value="black">Black</option>\n            </select>\n        </div>\n        <div>\n            <label style="display: block">Mode</label>\n            <select id="joystick_mode" onchange="setconfigjoystick_mode(this)">\n                <option value="dynamic">Dynamic</option>\n                <option value="static">Static</option>\n            </select>\n        </div>\n        <div>\n            <label style="display: block">Position</label>\n            <select id="joystick_position" onchange="setconfigjoystick_position(this)">\n                <option value="R">Right</option>\n                <option value="L">Left</option>\n            </select>\n        </div>\n        <div>\n            <label style="display: block">Size</label>\n            <select id="joystick_size" onchange="setconfigjoystick_size(this)">\n                <option value="110">110</option>\n                <option value="100">100</option>\n                <option value="90">90</option>\n                <option value="80">80</option>\n                <option value="75">75</option>\n                <option value="70">70</option>\n            </select>\n        </div>\n    </div>\n</div>\n<strong class="sub-title">Plus</strong>\n<div style="\n          display: grid;\n          grid-template-columns: repeat(4, 1fr);\n          grid-template-rows: 1fr;\n          grid-column-gap: 0px;\n          grid-row-gap: 0px;\n          margin-top: 10px;\n        ">\n    <div>\n        <label>Bad Language</label>\n        <input type="checkbox" id="activeBadLang" />\n    </div>\n    <div>\n        <label>SOUNDS:</label>\n        <input type="checkbox" id="activeSounds" />\n    </div>\n</div>\n                \n          </div>\n          <div id="tab2" class="tab-content">\n            em construção\n          </div>\n          <div id="tab3" class="tab-content">\n            <style>\n  .tabLabel {\n    display: block;\n    font-size: 12px;\n  }\n</style>\n<div>\n  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">\n    <button id="toShareRank" onclick="toShareRank()">To Share in data e Rank</button>\n  </div>\n  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">\n    The data is updated manually only due to data sharing regulations.\n    <div style="margin: 10px 0;">\n      <button id="btnGenerateToken" type="button" onclick="onOpen()"\n        style="width: 100%;background-color: #54fd36;padding: 6px;font-size: 20px;">\n        Open Account\n      </button>\n    </div>\n  </div>\n  <br />\n  <div style="margin-top: 5px;">\n    <div style="display: flex;gap: 10px;justify-content: space-between;align-items: center;">\n      <div>\n        <label for="sharedLocation">CONNECT IN</label>\n        <input type="text" placeholder="ROOM CODE" id="roomCode" name="roomCode" />\n        <div style="display: flex;justify-content: space-between;gap: 5px;margin: 5px 0;">\n          <button style="width: 100%;" onclick="setRoomCode(true)">CONNECT</button>\n          <button style="width: 100%;" onclick="setRoomCode(false)">DISCONNECT</button>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>\n<script>\n  const serverGame = JSON.parse(localStorage.getItem("serverGame") || "{}");\n  const url_token = "https://wormworld.io/extension/";\n  \n  // ✅ استخدام التوكن المحفوظ\n  var token = localStorage.getItem("wormworld_token") || bbs.tk;\n  var idwormate = bbs.userId;\n\n  (async function () {\n    if (document.getElementById("code")) {\n      document.getElementById("code").value = serverGame.code || "";\n    }\n    document.getElementById("roomCode").value = serverGame.roomCode || "";\n    _wwcio.player.teamRoom = serverGame.roomCode || "";\n\n    console.log(_wwcio.player);\n  })();\n\n  function copyToken(e) {\n    const copyText = document.getElementById("code");\n    copyText.select();\n    copyText.setSelectionRange(0, 99999);\n    document.execCommand("copy");\n    alert("Copied the text: " + copyText.value);\n  }\n\n  function onOpen() {\n    var newWindow = window.open("", "_blank");\n    onGenerateToken(function () {\n      newWindow.location.href = "https://wormworld.io/admin?page=login&token=" + token;\n    });\n  }\n\n  function createRoom() {\n    const oldCode = document.getElementById("code").value;\n    serverGame.code = window.gerarCodigoUnico();\n    document.getElementById("code").value = serverGame.code;\n    serverGame.roomCode = serverGame.code;\n    localStorage.setItem("serverGame", JSON.stringify(serverGame));\n    alert("Room created successfully!");\n  }\n\n  function setRoomCode(connect) {\n    try {\n\n      serverGame.roomCode = connect ? document.getElementById("roomCode").value : "";\n      _wwcio.player.teamRoom = serverGame.roomCode;\n      localStorage.setItem("serverGame", JSON.stringify(serverGame));\n      alert("Room " + (connect ? "connected" : "disconnected") + " successfully!");\n\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  function onChangeCode() {\n    serverGame.code = document.getElementById("code").value;\n    localStorage.setItem("serverGame", JSON.stringify(serverGame));\n  }\n\n  function onGenerateToken(fn) {\n    fetch(url_token + "/account/gen", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n      },\n      body: JSON.stringify({\n        tk: token, // ✅ استخدام التوكن المحفوظ\n        wuid: bbs.wuid,\n      }),\n    }).then(async function (response) {\n      const json = await response.json();\n      token = json.tk;\n      // ✅ حفظ التوكن الجديد\n      localStorage.setItem("wormworld_token", token);\n      if (fn) {\n        fn();\n      }\n    });\n  }\n\n  function toShareRank() {\n    if (!confirm("Are you sure you want to share your rank?")) {\n      return;\n    }\n    const url_token = "https://gateway.wormate.io/pub/wuid/" + bbs.wuid + "/consent/change?value=true";\n\n    fetch(url_token).then(async function (response) {\n      alert("To Share Rank Success!");\n      window.location.reload();\n    });\n  }\n<\/script>\n          </div>\n          <div id="tab4" class="tab-content">\n            \n              <strong class="sub-title">KEYBOARD</strong>\n<div style="padding: 5px; margin-top: 5px; border: #eb991c 1px solid; display: flex;">\n  <ul>\n    <li>0 - SHOW/HIDE RECORD HS</li>\n    <li>1 - SKIN REPLACE</li>\n    <li>9 - SHOW/HIDE TOP HS</li>\n    <li>8 - AUTOMATIC LOOP</li>\n    <li>7 - AUTOMATIC SPIRAL</li>\n    <li>6 - SHOW/HIDE NAMES TOP(1 SEG RUN)</li>\n  </ul>\n  <ul>\n    <li>5 - RESPAWN</li>\n    <li>4 - LASER</li>\n    <li>3 - BACKGROUND</li>\n    <li>&lt;|, - ZOOM(+ 0.25)</li>\n    <li>&gt;|. - ZOOM(- 0.25)</li>\n    <li>Z = ZOOM(1)</li>\n    <li>C = CLOSE-UP(0.5)</li>\n  </ul>\n</div>\n                \n          </div>\n          <div id="tab5" class="tab-content">\n            \n              <div style="display:flex; gap: 15px;">\n  <div>\n    <strong class="sub-title">LASER</strong>\n    <input type="checkbox" id="laser" name="laser" value="laser" checked>\n    <input type="color" id="color" name="color" value="#ff0000">\n    <input type="range" id="range" name="range" min="0.1" max="1" step="0.1" value="0.1">\n    <span id="range-value">0.1</span>\n  </div>\n  <div>\n    <strong class="sub-title">ENEMY NAME COLOR</strong>\n    <input type="color" id="enemyNameColor" name="enemyNameColor" value="#ff0000">\n    <input type="number" id="enemyNameFontSize" name="enemyNameFontSize" min="14" max="28" step="1" value="14">\n  </div>\n</div>\n<strong class="sub-title">CUSTOMIZE</strong>\n<button id="TestAUDIO" onclick="testAudio()">Test AUDIO</button>\n<button id="clearBackground" onclick="clearBackground()">Clear WALLPAPERS</button>\n<button id="clearPosition" onclick="clearMapPosition()">Clear Map Position</button>\n<button id="clearClock" onclick="clearClock()">Clear Map Clock</button>\n<button id="clearJoyStick" onclick="clearJoyStick()">Clear Joy Stick</button>\n<button id="clearBgGame" onclick="clearBgGame()">Clear Bg GAME</button>\n\n<script>\n\n  const range = document.getElementById(\'range\');\n  const rangeValue = document.getElementById(\'range-value\');\n  const color = document.getElementById(\'color\');\n  const laserActive = document.getElementById(\'laser\');\n  const enemyNameColor = document.getElementById(\'enemyNameColor\');\n  const enemyNameFontSize = document.getElementById(\'enemyNameFontSize\');\n\n  range.value = bbs.laser || 0.1;\n  rangeValue.textContent = bbs.laser || 0.1;\n  color.value = bbs.laserColor || 0xff0000;\n  laserActive.checked = bbs.laserActive || false;\n  enemyNameColor.value = bbs.enemyNameColor;\n  enemyNameFontSize.value = bbs.enemyNameFontSize || 14;\n\n  range.addEventListener(\'input\', (e) => {\n    const value = parseFloat(e.target.value).toFixed(1);\n    rangeValue.textContent = value;\n    bbs.laser = value;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  });\n\n  color.addEventListener(\'input\', (e) => {\n    const colorValue = e.target.value;\n    bbs.laserColor = colorValue;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    console.log("Selected color: " + colorValue);\n  });\n\n  laserActive.addEventListener(\'change\', (e) => {\n    bbs.laserActive = e.target.checked;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  });\n\n  enemyNameColor.addEventListener(\'input\', (e) => {\n    const colorValue = e.target.value;\n    bbs.enemyNameColor = colorValue;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    console.log("Selected color: " + colorValue);\n  });\n\n  enemyNameFontSize.addEventListener(\'input\', (e) => {\n    const fontSizeValue = e.target.value;\n    bbs.enemyNameFontSize = parseInt(fontSizeValue, 10);\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    console.log("Selected font size: " + fontSizeValue);\n  });\n\n  function testAudio() {\n    testAudioCustom();\n  }\n\n  function clearBackground() {\n    bbs.backgroundUri = null;\n    bbs.background = 0;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    alert("Clear Background");\n  }\n\n\n  function clearMapPosition() {\n    bbs.display.clock = { x: 60, y: 60, Tg: null };\n    bbs.display.top = { x: 225, y: 1 };\n    bbs.display.custom = false;\n    bbs.displayFriends = {\n      x: -10,\n      y: 315,\n      rotation: 0,\n    }\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    alert("Clear Map Position");\n    window.location.reload();\n  }\n\n  function clearClock() {\n    bbs.display.customClock = null;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    alert("CLOCK MAP UPDATE OK!");\n    window.location.reload();\n  }\n\n  function clearJoyStick() {\n    bbs.customJoystick = null;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    alert("JOYSTICK MAP UPDATE OK!");\n    window.location.reload();\n  }\n\n  function clearBgGame() {\n    bbs.background = null;\n    bbs.backgroundIsCustom = false;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    alert("BG GAME CLEAR OK!");\n    window.location.reload();\n  }\n\n\n<\/script>\n                \n          </div>\n          <div id="tab6" class="tab-content">\n\n            <style>\n  .set-zoom-wwc {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n    margin-top: 10px;\n  }\n\n  .szwwc-item {\n    grid-column: 1 / 3;\n  }\n\n  .szwwc-item label {\n    display: block;\n  }\n\n  .szwwc-item div {\n    display: flex;\n    align-items: center;\n  }\n\n  .szwwc-item input[type="range"] {\n    flex: 1;\n    width: 90%;\n  }\n</style>\n<div class="set-zoom-wwc">\n  <div>\n    <label>Zoom PC</label>\n    <input type="checkbox" id="activeZoom" />\n  </div>\n  <div>\n    <label>Zoom Mobile</label>\n    <input type="checkbox" id="activeZoomMobile" />\n  </div>\n  <div class="szwwc-item">\n    <label>Zoom Limit Down</label>\n    <div>\n      <input type="range" id="limitDown" min="0.25" max="2" step="0.25" />\n      <span id="limitDownValue"></span>\n    </div>\n  </div>\n  <div class="szwwc-item">\n    <label>Zoom +|- step (CAUTION)</label>\n    <div>\n      <input type="range" id="step" min="0.25" max="2" step="0.25" />\n      <span id="stepValue"></span>\n    </div>\n  </div>\n  <div class="szwwc-item">\n    <label>Zoom Keyboard (c or C)</label>\n    <div>\n      <input type="range" id="closeUp" min="0.25" max="2" step="0.25" />\n      <span id="closeUpValue"></span>\n    </div>\n  </div>\n  <div class="szwwc-item">\n    <label>Zoom Keyboard (z or Z)</label>\n    <div>\n      <input type="range" id="closeDown" min="0.25" max="2" step="0.25" />\n      <span id="closeDownValue"></span>\n    </div>\n  </div>\n</div>\n\n<script>\n  const configZoom = bbs.configZoom || {\n    limitDown: 0.25,\n    step: 0.25,\n    closeUp: 0.5,\n    closeDown: 1,\n  };\n\n  document.getElementById("limitDown").value = configZoom.limitDown;\n  document.getElementById("step").value = configZoom.step;\n  document.getElementById("closeUp").value = configZoom.closeUp;\n  document.getElementById("closeDown").value = configZoom.closeDown;\n\n  document.getElementById("limitDownValue").textContent = configZoom.limitDown;\n  document.getElementById("stepValue").textContent = configZoom.step;\n  document.getElementById("closeUpValue").textContent = configZoom.closeUp;\n  document.getElementById("closeDownValue").textContent = configZoom.closeDown;\n\n  function updateConfigZoom() {\n    bbs.configZoom = {\n      limitDown: parseFloat(document.getElementById("limitDown").value),\n      step: parseFloat(document.getElementById("step").value),\n      closeUp: parseFloat(document.getElementById("closeUp").value),\n      closeDown: parseFloat(document.getElementById("closeDown").value),\n    };\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  }\n\n  document.getElementById("limitDown").addEventListener("input", function () {\n    document.getElementById("limitDownValue").textContent = this.value;\n    updateConfigZoom();\n  });\n\n  document.getElementById("step").addEventListener("input", function () {\n    document.getElementById("stepValue").textContent = this.value;\n    updateConfigZoom();\n  });\n\n  document.getElementById("closeUp").addEventListener("input", function () {\n    document.getElementById("closeUpValue").textContent = this.value;\n    updateConfigZoom();\n  });\n\n  document.getElementById("closeDown").addEventListener("input", function () {\n    document.getElementById("closeDownValue").textContent = this.value;\n    updateConfigZoom();\n  });\n\n  document.getElementById("activeZoom").checked = bbs.activeZoom;\n\n  if (false) {\n    bbs.activeZoom = false;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  }\n\n  document.getElementById("activeZoom").addEventListener("change", function () {\n    if (false) {\n      bbs.activeZoom = false;\n    } else {\n      bbs.activeZoom = this.checked;\n    }\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    window.location.reload();\n  });\n\n  document.getElementById("activeZoomMobile").checked = bbs.activeZoomMobile;\n  document.getElementById("activeZoomMobile").addEventListener("change", function () {\n    bbs.activeZoomMobile = this.checked;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    window.location.reload();\n  });\n\n<\/script>\n\n          </div>\n          <div id="tab7" class="tab-content">\n            \n              <style>\n  .container-tab7 {}\n</style>\n<div class="container-tab7">\n  <h3>SKINS SELECTEDS</h3>\n  <ul id="myListSkin"></ul>\n  <hr />\n  <button id="cleanTheSkinShed" onclick="initTab7()">Reload LIST</button>\n  <button id="cleanTheSkinShed" onclick="cleanTheSkinShed()">Clean LIST</button>\n</div>\n<script>\n  const initTab7 = () => {\n    const myListSkin = document.getElementById("myListSkin");\n    bbs.cambiar = bbs.cambiar || {};\n    if(Object.keys(bbs.cambiar).length === 0){\n      myListSkin.innerHTML = "<li>Empty</li>";\n      return;\n    }\n    myListSkin.innerHTML = "";\n    for (const key in bbs.cambiar) {\n      const li = document.createElement("li");\n      li.innerHTML = bbs.cambiar[key];\n      myListSkin.appendChild(li);\n    }\n  }\n\n  function cleanTheSkinShed() {\n    bbs.cambiar = {};\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    alert("Clean the skin shed.");\n    initTab7();\n  }\n\n  initTab7();\n<\/script>\n                \n          </div>\n          <div id="tab8" class="tab-content">\n            \n              <style>\n    .game-area {\n        border: 1px solid #CCC;\n    }\n\n    .menu-bar {\n        width: 100%;\n        display: flex;\n        gap: 10px;\n        justify-content: center;\n        align-content: flex-start;\n        align-items: flex-start;\n    }\n\n    .slider-container-01 {\n        width: 95%;\n        height: 110px;\n        background: #eee;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .slider-container-02 {\n        width: 5%;\n        display: flex;\n        justify-content: center;\n    }\n\n    .slider-container-02 input[type="range"] {\n        transform: rotate(270deg);\n    }\n</style>\n<div style="padding: 0 0 5px 0;border-bottom: 1px solid #CCC;margin: 0 0 5px 0;">\n    <div style="display: flex;">\n        <div>\n            <label>Type Button Zoom</label>\n            <select id="joystickSelectTypeCurrent" name="joystickSelectTypeCurrent">\n                <option value="btn">BUTTON</option>\n                <option value="range">RANGE</option>\n            </select>\n        </div> &nbsp; | &nbsp;\n        <div>\n            <label>Type Name</label>\n            <select id="joystickSelectTypeName" name="joystickSelectTypeCurrentName">\n                <option value="all">all</option>\n                <option value="abb">abbreviated</option>\n            </select>\n        </div>\n    </div>\n    <div id="joystickButtons" style="display: flex;margin: 5px 0;justify-content: space-between;">\n    </div>\n</div>\nPREVIEW\n<div class="game-area">\n    <div class="menu-bar"></div>\n    <div style="display: flex;">\n        <div class="slider-container-01">\n            TOUCH DIRECTIONAL\n        </div>\n        <div class="slider-container-02">\n            <input id="sliderZoom" type="range" min="0.25" max="2" step="0.25" value="1" style="width: 90px;">\n        </div>\n    </div>\n</div>\n<hr>\n<div>\n    <button id="joystickCleanConfig">CLEAN CONFIG</button>\n</div>\n<script>\n    const btn = "btn_";\n\n    document.getElementById("joystickCleanConfig").addEventListener("click", () => {\n        if(!confirm("Do you want to clean the configuration?")) return;\n        bbs.configJoystick = null\n        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n        location.reload();\n    });\n\n    const initTab8 = () => {\n\n        document.querySelector(".menu-bar").innerHTML = "";\n        document.getElementById("joystickButtons").innerHTML = "";\n\n        Object.keys(bbs.configJoystick.buttons).forEach((key) => {\n\n            const button = bbs.configJoystick.buttons[key];\n            const buttonElement = document.createElement("button");\n            buttonElement.innerHTML = bbs.configJoystick.typeCurrentName === \'all\' ? button.label : button.labelAbbreviation;\n            buttonElement.id = btn + key;\n            buttonElement.disabled = !button.active;\n            document.querySelector(".menu-bar").appendChild(buttonElement);\n\n            const checkebox = document.createElement("input");\n            checkebox.type = "checkbox";\n            checkebox.id = btn + key + "check";\n            checkebox.checked = button.active;\n            checkebox.addEventListener("change", (event) => {\n                bbs.configJoystick.buttons[key].active = event.target.checked;\n                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n                document.getElementById(btn + key).disabled = !event.target.checked;\n            });\n\n            const label = document.createElement("label");\n            label.htmlFor = checkebox.id;\n            label.textContent = button.label;\n\n            const container = document.getElementById("joystickButtons");\n            label.prepend(checkebox);\n            container.appendChild(label);\n        });\n\n        const joystickSelect = document.getElementById("joystickSelectTypeCurrent");\n        joystickSelect.value = bbs.configJoystick.typeCurrent;\n\n        joystickSelect.addEventListener("change", (event) => {\n            bbs.configJoystick.typeCurrent = event.target.value;\n            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n            initTab8();\n        });\n\n        const joystickSelectName = document.getElementById("joystickSelectTypeName");\n        joystickSelectName.value = bbs.configJoystick.typeCurrentName;\n\n        joystickSelectName.addEventListener("change", (event) => {\n            bbs.configJoystick.typeCurrentName = event.target.value;\n            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n            initTab8();\n        });\n\n        const sliderZoom = document.getElementById("sliderZoom");\n        if (joystickSelect.value === "btn") {\n            sliderZoom.disabled = true;\n            document.getElementById(btn + "zoomplus").disabled = false;\n            document.getElementById(btn + "zoomminus").disabled = false;\n        } else {\n            sliderZoom.disabled = false;\n            document.getElementById(btn + "zoomplus").disabled = true;\n            document.getElementById(btn + "zoomminus").disabled = true;\n        }\n\n\n    }\n    initTab8();\n<\/script>\n                \n          </div>\n        </div>\n        \n          \n</div>\n<script>\n  function changeTab(tabIndex) {\n    const tabButtons = document.querySelectorAll(".tab-button");\n    for (let i = 0; i < tabButtons.length; i++) {\n      tabButtons[i].classList.remove("active");\n    }\n    const selectedButton = document.getElementById("tab_b" + (tabIndex + 1));\n    selectedButton.classList.add("active");\n\n    const tabContents = document.querySelectorAll(".tab-content");\n    for (let i = 0; i < tabContents.length; i++) {\n      tabContents[i].classList.remove("active-tab");\n    }\n    const selectedTab = document.getElementById("tab" + (tabIndex + 1));\n    selectedTab.classList.add("active-tab");\n  }\n<\/script>\n<script>\n  if (false) {\n    function _0x5d83(){const _0x206afa=[\'prototype\',\'key\',\'77ZtDLrZ\',\'click\',\'includes\',\'return\\x20(function()\\x20\',\'__proto__\',\'9iCzcDS\',\'3174892TttXOR\',\'console\',\'{}.constructor(\\x22return\\x20this\\x22)(\\x20)\',\'1261272KMMZqr\',\'opacity\',\'warn\',\'style\',\'1318701xpEzMU\',\'constructor\',\'5bzjkOa\',\'bind\',\'2554388YgJKyP\',\'log\',\'5574462mflStJ\',\'2182920EZdGNs\',\'(((.+)+)+)+$\',\'getElementById\',\'search\',\'apply\',\'error\',\'stopPropagation\',\'1202714pzPFzR\',\'pointerEvents\',\'length\',\'2hiYRgI\',\'trace\',\'toString\',\'0.5\'];_0x5d83=function(){return _0x206afa;};return _0x5d83();}const _0x1fe8a1=_0x100d;(function(_0x543c18,_0x1395cb){const _0x59b7d8=_0x100d,_0x2f54e7=_0x543c18();while(!![]){try{const _0x549729=-parseInt(_0x59b7d8(0x130))/0x1*(parseInt(_0x59b7d8(0x133))/0x2)+-parseInt(_0x59b7d8(0x146))/0x3+-parseInt(_0x59b7d8(0x14a))/0x4+parseInt(_0x59b7d8(0x148))/0x5*(parseInt(_0x59b7d8(0x14c))/0x6)+parseInt(_0x59b7d8(0x13f))/0x7+-parseInt(_0x59b7d8(0x142))/0x8*(-parseInt(_0x59b7d8(0x13e))/0x9)+parseInt(_0x59b7d8(0x14d))/0xa*(parseInt(_0x59b7d8(0x139))/0xb);if(_0x549729===_0x1395cb)break;else _0x2f54e7[\'push\'](_0x2f54e7[\'shift\']());}catch(_0x4d846a){_0x2f54e7[\'push\'](_0x2f54e7[\'shift\']());}}}(_0x5d83,0xc0402));const _0x267f96=(function(){let _0x323eb7=!![];return function(_0x5bd17a,_0x523ed9){const _0x1910a2=_0x323eb7?function(){const _0x2d0df1=_0x100d;if(_0x523ed9){const _0x701c6c=_0x523ed9[_0x2d0df1(0x12d)](_0x5bd17a,arguments);return _0x523ed9=null,_0x701c6c;}}:function(){};return _0x323eb7=![],_0x1910a2;};}()),_0x544ecf=_0x267f96(this,function(){const _0x540910=_0x100d;return _0x544ecf[_0x540910(0x135)]()[_0x540910(0x12c)](_0x540910(0x12a))[\'toString\']()[_0x540910(0x147)](_0x544ecf)[_0x540910(0x12c)](_0x540910(0x12a));});function _0x100d(_0x3ce5b8,_0x168500){const _0x41f287=_0x5d83();return _0x100d=function(_0x5f257c,_0xaf3251){_0x5f257c=_0x5f257c-0x12a;let _0x57c0ce=_0x41f287[_0x5f257c];return _0x57c0ce;},_0x100d(_0x3ce5b8,_0x168500);}_0x544ecf();const _0xaf3251=(function(){let _0xc75621=!![];return function(_0x1a75f7,_0x13e69d){const _0x289d37=_0xc75621?function(){if(_0x13e69d){const _0x4fea53=_0x13e69d[\'apply\'](_0x1a75f7,arguments);return _0x13e69d=null,_0x4fea53;}}:function(){};return _0xc75621=![],_0x289d37;};}()),_0x5f257c=_0xaf3251(this,function(){const _0x1a93d5=_0x100d,_0xca38f9=function(){const _0x3bb04d=_0x100d;let _0x2eed00;try{_0x2eed00=Function(_0x3bb04d(0x13c)+_0x3bb04d(0x141)+\');\')();}catch(_0x1cec9c){_0x2eed00=window;}return _0x2eed00;},_0x5468ef=_0xca38f9(),_0x27b0a5=_0x5468ef[_0x1a93d5(0x140)]=_0x5468ef[\'console\']||{},_0x3ef65f=[_0x1a93d5(0x14b),_0x1a93d5(0x144),\'info\',_0x1a93d5(0x12e),\'exception\',\'table\',_0x1a93d5(0x134)];for(let _0x232895=0x0;_0x232895<_0x3ef65f[_0x1a93d5(0x132)];_0x232895++){const _0x468347=_0xaf3251[_0x1a93d5(0x147)][_0x1a93d5(0x137)][_0x1a93d5(0x149)](_0xaf3251),_0x23f84f=_0x3ef65f[_0x232895],_0xa80bb4=_0x27b0a5[_0x23f84f]||_0x468347;_0x468347[_0x1a93d5(0x13d)]=_0xaf3251[_0x1a93d5(0x149)](_0xaf3251),_0x468347[_0x1a93d5(0x135)]=_0xa80bb4[_0x1a93d5(0x135)][\'bind\'](_0xa80bb4),_0x27b0a5[_0x23f84f]=_0x468347;}});_0x5f257c(),window[\'onwheel\']=_0x12b532=>{const _0x140b92=_0x100d;luaDeCristal=0x1,e[\'preventDefault\'](),e[_0x140b92(0x12f)]();},window[\'addEventListener\'](\'keydown\',function(_0x3a5d5d){const _0x599c55=_0x100d;[\'<\',\',\',\'>\',\'.\',\'z\',\'c\'][_0x599c55(0x13b)](_0x3a5d5d[_0x599c55(0x138)])&&(luaDeCristal=0x1,_0x3a5d5d[\'preventDefault\'](),_0x3a5d5d[_0x599c55(0x12f)]());},![]);const el=document[_0x1fe8a1(0x12b)](\'mm-action-play\');el&&(el[\'disabled\']=!![],el[_0x1fe8a1(0x145)][_0x1fe8a1(0x131)]=\'none\',el[_0x1fe8a1(0x145)][_0x1fe8a1(0x143)]=_0x1fe8a1(0x136),el[\'addEventListener\'](_0x1fe8a1(0x13a),_0xcf1853=>{_0xcf1853[\'preventDefault\'](),_0xcf1853[\'stopPropagation\']();},!![]));setInterval(()=>{luaDeCristal=0x1;},0xbb8);\n  }\n  var setWormworld = document.getElementById("set_wormworld");\n  if (setWormworld) {\n    setWormworld.addEventListener("click", function() {\n      document.getElementById("mm-settings").click();\n    });\n  }\n\n  var select = document.getElementById("backgroundArena");\n  var inputFile = document.getElementById("fileSkin");\n\n  const setconfigjoystick_checked = function (e) {\n    if (!bbs.joystick) {\n      bbs.joystick = window._wwc.joystick();\n    }\n    bbs.joystick.checked = e.checked;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  };\n  const setconfigjoystick_color = function (e) {\n    if (!bbs.joystick) {\n      bbs.joystick = window._wwc.joystick();\n    }\n    bbs.joystick.color = e.value;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  };\n  const setconfigjoystick_mode = function (e) {\n    if (!bbs.joystick) {\n      bbs.joystick = window._wwc.joystick();\n    }\n    bbs.joystick.mode = e.value;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    console.log(bbs.joystick);\n  };\n  const setconfigjoystick_position = function (e) {\n    if (!bbs.joystick) {\n      bbs.joystick = window._wwc.joystick();\n    }\n    bbs.joystick.position = {\n      left: "75px",\n      bottom: "75px",\n    };\n    if (e.value === "R") {\n      bbs.joystick.position = {\n        right: "75px",\n        bottom: "75px",\n      };\n    }\n    bbs.joystick.positionMode = e.value;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  };\n  const setconfigjoystick_pxy = function (e) {\n    if (!bbs.joystick) {\n      bbs.joystick = window._wwc.joystick();\n    }\n    bbs.joystick.position = {\n      left: (parseInt(e.value) + 10).toString() + "px",\n      bottom: e.value + "px",\n    };\n    if (bbs.joystick.positionMode === "R") {\n      bbs.joystick.position = {\n        right: (parseInt(e.value) + 10).toString() + "px",\n        bottom: e.value + "px",\n      };\n    }\n    bbs.joystick.pxy = e.value;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  };\n  const setconfigjoystick_size = function (e) {\n    if (!bbs.joystick) {\n      bbs.joystick = window._wwc.joystick();\n    }\n    bbs.joystick.size = e.value;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  };\n  const setIdReplaceSkin = function (e) {\n    bbs.idReplaceSkin = window._wwc.isNumberValid(e.value) ? e.value : 32;\n    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n  };\n\n  if (document.getElementById("setArrawInd")) {\n    document.getElementById("setArrawInd").checked = bbs.arrow;\n    document.getElementById("setArrawInd").addEventListener("change", function () {\n      bbs.arrow = this.checked;\n      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n      window.location.reload();\n    });\n  }\n\n  if (document.getElementById("onlytop")) {\n    document.getElementById("onlytop").checked = bbs.lr;\n    document.getElementById("onlytop").addEventListener("change", function () {\n      bbs.lr = this.checked;\n      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    });\n  }\n\n  if (document.getElementById("showTophs")) {\n    document.getElementById("showTophs").checked = bbs.showTophs;\n    document.getElementById("showTophs").addEventListener("change", function () {\n      bbs.showTophs = this.checked;\n      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    });\n  }\n\n  if (document.getElementById("showRechs")) {\n    document.getElementById("showRechs").checked = bbs.showRechs;\n    document.getElementById("showRechs").addEventListener("change", function () {\n      bbs.showRechs = this.checked;\n      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    });\n  }\n\n  if (document.getElementById("activeBadLang")) {\n    document.getElementById("activeBadLang").checked = bbs.activeBadLang;\n    document.getElementById("activeBadLang").addEventListener("change", function () {\n      bbs.activeBadLang = this.checked;\n      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n      window.location.reload();\n    });\n  }\n\n  if (document.getElementById("activeSounds")) {\n    document.getElementById("activeSounds").checked = bbs.activeSounds2;\n    document.getElementById("activeSounds").addEventListener("change", function () {\n      bbs.activeSounds2 = this.checked;\n      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n      window.location.reload();\n    });\n  }\n\n  if (document.getElementById("modoSTREAMER")) {\n    document.getElementById("modoSTREAMER").checked = bbs.display.custom;\n    document.getElementById("modoSTREAMER").addEventListener("change", function () {\n      bbs.display.clock.x = this.checked ? 250 : 60;\n      bbs.display.clock.y = 60;\n      bbs.display.top.x = this.checked ? 475 : 225;\n      bbs.display.top.y = 1;\n      bbs.display.custom = this.checked;\n      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n      window.location.reload();\n    });\n  }\n\n  if (select && typeof backgroundArena !== \'undefined\') {\n    for (var i = 0; i < backgroundArena.length; i++) {\n      let opt = document.createElement("option");\n      opt.value = i;\n      opt.innerHTML = backgroundArena[i].nome;\n      select.appendChild(opt);\n    }\n    select.value = isNaN(bbs.background) ? 0 : bbs.background || 0;\n  }\n\n  function onChange(event) {\n    var reader = new FileReader();\n    reader.onload = onReaderLoad;\n    reader.readAsText(event.target.files[0]);\n  }\n\n  var region = function (a, d, t, e) {\n    return {\n      texture: d,\n      h: t - 5,\n      w: t - 5,\n      x: t * (e ? 0 : a || 0),\n      y: 0,\n    };\n  };\n\n  function onReaderLoad(event) {\n    try {\n      let hasBrowserCompatible = "55524c534552565f574f524d574f524c44";\n      var hex = hasBrowserCompatible.toString();\n      var name_browser = "";\n\n      for (var n = 0; n < hex.length; n += 2) {\n        name_browser += String.fromCharCode(parseInt(hex.substr(n, 2), 16));\n      }\n\n      if (!window[name_browser]) {\n        document.location.reload(true);\n        return;\n      }\n\n      hasBrowserCompatible =\n        /w.*wo.*rl.*h.*ap/gim.test(window[name_browser]) ||\n        /l.*host/gim.test(window[name_browser]);\n\n      let t = JSON.parse(event.target.result);\n\n      if (t && t.wear) {\n        localStorage.setItem("custom_wormworld_wear", event.target.result);\n        alert("LOAD WEAR OK!");\n        window.location.reload();\n        return;\n      }\n\n      if (t && t.skin) {\n        localStorage.setItem("custom_wormworld_skin", event.target.result);\n        alert("LOAD SKIN OK!");\n        window.location.reload();\n        return;\n      }\n      \n        if (t.typeCustom && t.typeCustom === "background") {\n          alert("Free MODE!");\n        }\n      \n      \n        if (t.typeCustom && t.typeCustom === "bgGame") {\n          alert("Free MODE!");\n        }\n      \n\n      \n        if (t.typeCustom && t.typeCustom === "audio") {\n          alert("Free MODE!");\n        }\n      \n      if (t.typeCustom && t.typeCustom === "customJoyStick") {\n        bbs.customJoystick = t;\n        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n        alert("BACKGROUND JOYSTICK OK!");\n        window.location.reload();\n        return;\n      }\n      \n        if (t.typeCustom && t.typeCustom === "clockMap") {\n          alert("Free MODE!");\n        }\n      \n      if (t.typeCustom && t.typeCustom === "demoSetLayout") {\n        bbs.display.clock.x = t.data.wc || 60;\n        bbs.display.clock.y = t.data.hc || 60;\n        bbs.display.clock.rc = t.data.rc || 0;\n        bbs.display.top.x = t.data.wt || 225;\n        bbs.display.top.y = t.data.ht || 1;\n        bbs.display.top.rt = t.data.rt || 0;\n        bbs.display.custom = true;\n\n        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n        alert("LAYOUT UPDATE OK!");\n        return;\n      }\n\n      if (Array.isArray(t) && t.length > 0) {\n        localStorage.setItem("custom_wormworld_badLang", JSON.stringify(t));\n        let regex = [];\n        (t || []).forEach((x) => {\n          regex.push(x + " | " + x + " | " + x);\n        });\n        if (typeof badLanguageRegEx !== \'undefined\') {\n          badLanguageRegEx = badLanguageRegEx + "|" + regex.join("|");\n        }\n        alert("LIST UPDATE OK!");\n        window.location.reload();\n      }\n\n      if (t.version_skin === 2) {\n        let id_item = "SKIN_" + t.id + "___Z"\n        const obj = {\n          id: t.id,\n          regionDict: {},\n          textureDict: {},\n          skinArrayDict: [],\n          skinGroupArrayDict: [{\n            id: t.id,\n            name: { en: "Custom V2" },\n            list: [],\n          }],\n          version_skin: 3\n        }\n        const skin = {\n          id: id_item,\n          guest: false,\n          price: 0,\n          priceBefore: 0,\n          nonbuyable: false,\n          prime: "c_white",\n          glow: t.glow,\n          base: [],\n        };\n        for (let c = t.len - 1; 0 <= c; c--) {\n          obj.regionDict[id_item + "_" + c] = region(c, id_item, t.cos, 0);\n          skin.base.push(id_item + "_" + c);\n        }\n        obj.textureDict[id_item] = {\n          custom: true,\n          re1ativePath: t.file || t.td.file,\n          h1: true,\n        };\n        obj.skinArrayDict.push(skin);\n        obj.skinGroupArrayDict[0].list.push(id_item);\n\n        alert("SKIN OK!");\n        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));\n        window.location.reload();\n      }\n\n      if (t.version_skin === 3) {\n        let id_wormate = document.getElementById("wormate_id").value;\n        const obj = {\n          id: t.id,\n          regionDict: {},\n          textureDict: {},\n          skinArrayDict: [],\n          skinGroupArrayDict: [{\n            id: t.id,\n            name: { en: "CUSTON PACK:" + (t.skins.length) },\n            list: [],\n          }],\n          version_skin: 3\n        }\n        for (let item of t.skins) {\n          const skin = {\n            id: item.id,\n            guest: false,\n            price: 0,\n            priceBefore: 0,\n            nonbuyable: item.associados.includes(id_wormate),\n            prime: "c_white",\n            associados: item.associados,\n            glow: item.glow,\n            base: [],\n          };\n          for (let c = t.len - 1; 0 <= c; c--) {\n            obj.regionDict[item.id + "_" + c] = region(c, item.id, t.cos, 0);\n            skin.base.push(item.id + "_" + c);\n          }\n          obj.textureDict[item.id] = {\n            custom: true,\n            re1ativePath: item.file,\n            h1: true,\n            h4: true,\n          };\n          obj.skinArrayDict.push(skin);\n          obj.skinGroupArrayDict[0].list.push(item.id);\n        }\n        alert("PACKAGE SKIN OK!");\n        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));\n        window.location.reload();\n      }\n\n    } catch (error) {\n      console.error(error);\n      alert("file not valid!");\n    }\n  }\n\n  if (inputFile) {\n    document.getElementById("fileSkin").addEventListener("change", onChange);\n  }\n\n  function closeWwcSetView() {\n    const element = document.getElementById("wwc-set-view");\n    if (element) element.style.display = "none";\n  }\n\n  if (document.getElementById("mm-wwc-close")) {\n    document.getElementById("mm-wwc-close").addEventListener("click", closeWwcSetView);\n  }\n\n  const newsBox = document.querySelector(".news-box-wormworld");\n  const newsBoxClose = document.getElementById("close-news-button");\n  const newsCheckbox = document.getElementById("news-checkbox");\n\n  var novidadewormworld = 1;\n\n  if (newsCheckbox) {\n    newsCheckbox.addEventListener("change", function () {\n      if (this.checked) {\n        bbs.novidadewormworld = novidadewormworld;\n      } else {\n        bbs.novidadewormworld = 0;\n      }\n      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));\n    });\n  }\n\n  if (newsBoxClose) {\n    newsBoxClose.addEventListener("click", function () {\n      newsBox.style.display = "none";\n    });\n  }\n\n\n  if (newsBox && novidadewormworld != bbs.novidadewormworld) {\n    newsBox.style.display = "block";\n    fetch("https://wormworld.io/news/index.html")\n      .then((response) => {\n        if (!response.ok) {\n          throw new Error("Network response was not ok");\n        }\n        return response.text();\n      })\n      .then((html) => {\n        document.querySelector(".news-content").innerHTML = html;\n      })\n      .catch((error) => {\n        console.error("Error loading HTML:", error);\n      });\n  }\n<\/script>';
                return Promise.resolve(new Response(t,{
                    status: 200,
                    statusText: "OK",
                    headers: {
                        "Content-Type": "text/html"
                    }
                }))
            }
            return t
        }
        )).catch((t => {
            throw console.error("❌ fetch error:", t),
            t
        }
        ))
    }
    ,
    console.log("updated fetch interceptor installed")
}(),
function() {
    const t = XMLHttpRequest.prototype.open
      , e = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(e, n, ...o) {
        return this._url = n,
        console.log("XHR request:", e, n),
        t.apply(this, [e, n, ...o])
    }
    ,
    XMLHttpRequest.prototype.send = function(...t) {
        const n = this;
        return this._url && (this._url.includes("/extension/set-worm-world") || this._url.includes("/set-worm-world")) ? (console.log("intercept XHR set-worm-world"),
        void setTimeout(( () => {
            const t = "<h3>✅ CUSTOMER MODE ACTIVATED VIA XHR ✅</h3>";
            Object.defineProperty(n, "status", {
                value: 200
            }),
            Object.defineProperty(n, "statusText", {
                value: "OK"
            }),
            Object.defineProperty(n, "responseText", {
                value: t
            }),
            Object.defineProperty(n, "response", {
                value: t
            }),
            Object.defineProperty(n, "readyState", {
                value: 4
            }),
            n.onreadystatechange && n.onreadystatechange(),
            n.onload && n.onload()
        }
        ), 100)) : e.apply(this, t)
    }
    ,
    console.log("XHR interceptor installed")
}(),
console.log("Request interceptors ready - with token fix!"),
document.querySelector(".mm-event-cont")?.style.setProperty("display", "none", "important"),
document.querySelector(".mm-logo")?.style.setProperty("display", "none", "important"),
document.querySelector(".mm-event-cont + span")?.style.setProperty("display", "none", "important"),
function() {
    try {
        if (document.getElementById("respawn-btn-overlay"))
            return;
        var t = document.createElement("button");
        t.id = "respawn-btn-overlay",
        t.textContent = "Respawn",
        t.setAttribute("aria-label", "Respawn"),
        t.style.zIndex = "99999",
        t.style.padding = "10px 14px",
        t.style.borderRadius = "8px",
        t.style.border = "0",
        t.style.background = "#ff2020",
        t.style.color = "#fff",
        t.style.boxShadow = "0 2px 8px rgba(0,0,0,0.25)",
        t.style.cursor = "pointer",
        t.style.fontFamily = "inherit",
        t.style.fontSize = "14px",
        t.addEventListener("click", (function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            function() {
                try {
                    if (window._wwc && "function" == typeof window._wwc.respawn)
                        return void window._wwc.respawn()
                } catch (t) {}
                try {
                    var t = new KeyboardEvent("keydown",{
                        key: "5",
                        code: "Digit5",
                        keyCode: 53,
                        which: 53,
                        bubbles: !0
                    })
                      , e = new KeyboardEvent("keyup",{
                        key: "5",
                        code: "Digit5",
                        keyCode: 53,
                        which: 53,
                        bubbles: !0
                    });
                    document.dispatchEvent(t),
                    document.dispatchEvent(e)
                } catch (t) {}
            }()
        }
        ), !0);
        var e = document.createElement("button");
        e.id = "fullscreen-btn-overlay",
        e.textContent = "Full Screen",
        e.setAttribute("aria-label", "Full Screen"),
        [e.style.zIndex,e.style.padding,e.style.borderRadius,e.style.border,e.style.background,e.style.color,e.style.boxShadow,e.style.cursor,e.style.fontFamily,e.style.fontSize] = ["99999", "10px 14px", "8px", "0", "#333", "#fff", "0 2px 8px rgba(0,0,0,0.25)", "pointer", "inherit", "14px"],
        e.addEventListener("click", (function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            function() {
                try {
                    var t = document.getElementById("game-wrap") || document.documentElement;
                    if (document.fullscreenElement)
                        return void (document.exitFullscreen && document.exitFullscreen());
                    t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                } catch (t) {}
            }()
        }
        ), !0);
        var n = function(n) {
            t.style.position = "static",
            t.style.display = "block",
            t.style.width = "100%",
            t.style.marginTop = "48px",
            n.parentNode.insertBefore(t, n.nextSibling),
            e.style.position = "static",
            e.style.display = "block",
            e.style.width = "100%",
            e.style.marginTop = "12px",
            t.parentNode && t.parentNode.insertBefore(e, t.nextSibling)
        }
          , o = document.getElementById("mm-action-play");
        if (o && o.parentNode)
            n(o);
        else {
            t.style.position = "fixed",
            t.style.right = "16px",
            t.style.bottom = "56px",
            document.body.appendChild(t),
            e.style.position = "fixed",
            e.style.right = "16px",
            e.style.bottom = "16px",
            document.body.appendChild(e);
            var i = new MutationObserver((function() {
                var t = document.getElementById("mm-action-play");
                if (t && t.parentNode && document.getElementById("respawn-btn-overlay"))
                    try {
                        n(t),
                        i.disconnect()
                    } catch (t) {}
            }
            ));
            try {
                i.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            } catch (t) {}
        }
    } catch (t) {}
}(),
function() {
    try {
        if (document.getElementById("fps-overlay"))
            return;
        var t = document.createElement("div");
        t.id = "fps-overlay",
        t.textContent = "FPS: --",
        t.style.position = "fixed",
        t.style.left = "8px",
        t.style.top = "8px",
        t.style.zIndex = "99999",
        t.style.padding = "4px 6px",
        t.style.borderRadius = "4px",
        t.style.background = "rgba(0,0,0,0.55)",
        t.style.color = "#7CFC00",
        t.style.fontFamily = "monospace",
        t.style.fontSize = "12px",
        t.style.pointerEvents = "none",
        document.body.appendChild(t);
        var e = 0
          , n = performance.now();
        requestAnimationFrame((function o(i) {
            if (e += 1,
            i - n >= 1e3) {
                var r = Math.round(1e3 * e / (i - n));
                t.textContent = "FPS: " + r,
                e = 0,
                n = i
            }
            requestAnimationFrame(o)
        }
        ))
    } catch (t) {}
}();
