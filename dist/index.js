var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node:stream
var exports_stream = {};
__export(exports_stream, {
  default: () => Uc
});
var al, tt, cl, dl, hl, pl, yl = (e, t) => () => (e && (t = e(e = 0)), t), E = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Qr = (e, t) => {
  for (var r in t)
    tt(e, r, { get: t[r], enumerable: true });
}, et = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of dl(t))
      !pl.call(e, i) && i !== r && tt(e, i, { get: () => t[i], enumerable: !(n = cl(t, i)) || n.enumerable });
  return e;
}, ue = (e, t, r) => (et(e, t, "default"), r && et(r, t, "default")), rt = (e, t, r) => (r = e != null ? al(hl(e)) : {}, et(t || !e || !e.__esModule ? tt(r, "default", { value: e, enumerable: true }) : r, e)), pe = (e) => et(tt({}, "__esModule", { value: true }), e), tn, rn, te, I, V, ut, C, He, ir, k, Gu, se, ae, ce, di, Se, Et, xt, At, Pi, Tt, Wi, Gi, Er, Ke, Cr, Mo, J, qr, $r, Ut, Jo, Kr, fl, Jr, Ze, Uc;
var init_stream = __esm(() => {
  al = Object.create;
  tt = Object.defineProperty;
  cl = Object.getOwnPropertyDescriptor;
  dl = Object.getOwnPropertyNames;
  hl = Object.getPrototypeOf;
  pl = Object.prototype.hasOwnProperty;
  tn = E((nt) => {
    nt.byteLength = bl;
    nt.toByteArray = _l;
    nt.fromByteArray = ml;
    var G = [], P = [], wl = typeof Uint8Array < "u" ? Uint8Array : Array, Wt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (ye = 0, Zr = Wt.length;ye < Zr; ++ye)
      G[ye] = Wt[ye], P[Wt.charCodeAt(ye)] = ye;
    var ye, Zr;
    P[45] = 62;
    P[95] = 63;
    function en(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      r === -1 && (r = t);
      var n = r === t ? 0 : 4 - r % 4;
      return [r, n];
    }
    function bl(e) {
      var t = en(e), r = t[0], n = t[1];
      return (r + n) * 3 / 4 - n;
    }
    function gl(e, t, r) {
      return (t + r) * 3 / 4 - r;
    }
    function _l(e) {
      var t, r = en(e), n = r[0], i = r[1], o = new wl(gl(e, n, i)), l = 0, u = i > 0 ? n - 4 : n, f;
      for (f = 0;f < u; f += 4)
        t = P[e.charCodeAt(f)] << 18 | P[e.charCodeAt(f + 1)] << 12 | P[e.charCodeAt(f + 2)] << 6 | P[e.charCodeAt(f + 3)], o[l++] = t >> 16 & 255, o[l++] = t >> 8 & 255, o[l++] = t & 255;
      return i === 2 && (t = P[e.charCodeAt(f)] << 2 | P[e.charCodeAt(f + 1)] >> 4, o[l++] = t & 255), i === 1 && (t = P[e.charCodeAt(f)] << 10 | P[e.charCodeAt(f + 1)] << 4 | P[e.charCodeAt(f + 2)] >> 2, o[l++] = t >> 8 & 255, o[l++] = t & 255), o;
    }
    function El(e) {
      return G[e >> 18 & 63] + G[e >> 12 & 63] + G[e >> 6 & 63] + G[e & 63];
    }
    function Sl(e, t, r) {
      for (var n, i = [], o = t;o < r; o += 3)
        n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(El(n));
      return i.join("");
    }
    function ml(e) {
      for (var t, r = e.length, n = r % 3, i = [], o = 16383, l = 0, u = r - n;l < u; l += o)
        i.push(Sl(e, l, l + o > u ? u : l + o));
      return n === 1 ? (t = e[r - 1], i.push(G[t >> 2] + G[t << 4 & 63] + "==")) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(G[t >> 10] + G[t >> 4 & 63] + G[t << 2 & 63] + "=")), i.join("");
    }
  });
  rn = E(($t) => {
    $t.read = function(e, t, r, n, i) {
      var o, l, u = i * 8 - n - 1, f = (1 << u) - 1, s = f >> 1, d = -7, c = r ? i - 1 : 0, y = r ? -1 : 1, h = e[t + c];
      for (c += y, o = h & (1 << -d) - 1, h >>= -d, d += u;d > 0; o = o * 256 + e[t + c], c += y, d -= 8)
        ;
      for (l = o & (1 << -d) - 1, o >>= -d, d += n;d > 0; l = l * 256 + e[t + c], c += y, d -= 8)
        ;
      if (o === 0)
        o = 1 - s;
      else {
        if (o === f)
          return l ? NaN : (h ? -1 : 1) * (1 / 0);
        l = l + Math.pow(2, n), o = o - s;
      }
      return (h ? -1 : 1) * l * Math.pow(2, o - n);
    };
    $t.write = function(e, t, r, n, i, o) {
      var l, u, f, s = o * 8 - i - 1, d = (1 << s) - 1, c = d >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : o - 1, p = n ? 1 : -1, B = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, l = d) : (l = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -l)) < 1 && (l--, f *= 2), l + c >= 1 ? t += y / f : t += y * Math.pow(2, 1 - c), t * f >= 2 && (l++, f /= 2), l + c >= d ? (u = 0, l = d) : l + c >= 1 ? (u = (t * f - 1) * Math.pow(2, i), l = l + c) : (u = t * Math.pow(2, c - 1) * Math.pow(2, i), l = 0));i >= 8; e[r + h] = u & 255, h += p, u /= 256, i -= 8)
        ;
      for (l = l << i | u, s += i;s > 0; e[r + h] = l & 255, h += p, l /= 256, s -= 8)
        ;
      e[r + h - p] |= B * 128;
    };
  });
  te = E((Fe) => {
    var jt = tn(), Le = rn(), nn = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Fe.Buffer = a;
    Fe.SlowBuffer = Bl;
    Fe.INSPECT_MAX_BYTES = 50;
    var it = 2147483647;
    Fe.kMaxLength = it;
    a.TYPED_ARRAY_SUPPORT = xl();
    !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function xl() {
      try {
        let e = new Uint8Array(1), t = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(a.prototype, "parent", { enumerable: true, get: function() {
      if (!!a.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(a.prototype, "offset", { enumerable: true, get: function() {
      if (!!a.isBuffer(this))
        return this.byteOffset;
    } });
    function ee(e) {
      if (e > it)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, a.prototype), t;
    }
    function a(e, t, r) {
      if (typeof e == "number") {
        if (typeof t == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return Yt(e);
      }
      return fn(e, t, r);
    }
    a.poolSize = 8192;
    function fn(e, t, r) {
      if (typeof e == "string")
        return Al(e, t);
      if (ArrayBuffer.isView(e))
        return Il(e);
      if (e == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (H(e, ArrayBuffer) || e && H(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (H(e, SharedArrayBuffer) || e && H(e.buffer, SharedArrayBuffer)))
        return Ht(e, t, r);
      if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let n = e.valueOf && e.valueOf();
      if (n != null && n !== e)
        return a.from(n, t, r);
      let i = Tl(e);
      if (i)
        return i;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return a.from(e[Symbol.toPrimitive]("string"), t, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    a.from = function(e, t, r) {
      return fn(e, t, r);
    };
    Object.setPrototypeOf(a.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(a, Uint8Array);
    function sn(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Rl(e, t, r) {
      return sn(e), e <= 0 ? ee(e) : t !== undefined ? typeof r == "string" ? ee(e).fill(t, r) : ee(e).fill(t) : ee(e);
    }
    a.alloc = function(e, t, r) {
      return Rl(e, t, r);
    };
    function Yt(e) {
      return sn(e), ee(e < 0 ? 0 : Kt(e) | 0);
    }
    a.allocUnsafe = function(e) {
      return Yt(e);
    };
    a.allocUnsafeSlow = function(e) {
      return Yt(e);
    };
    function Al(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !a.isEncoding(t))
        throw new TypeError("Unknown encoding: " + t);
      let r = an(e, t) | 0, n = ee(r), i = n.write(e, t);
      return i !== r && (n = n.slice(0, i)), n;
    }
    function Gt(e) {
      let t = e.length < 0 ? 0 : Kt(e.length) | 0, r = ee(t);
      for (let n = 0;n < t; n += 1)
        r[n] = e[n] & 255;
      return r;
    }
    function Il(e) {
      if (H(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return Ht(t.buffer, t.byteOffset, t.byteLength);
      }
      return Gt(e);
    }
    function Ht(e, t, r) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return t === undefined && r === undefined ? n = new Uint8Array(e) : r === undefined ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, a.prototype), n;
    }
    function Tl(e) {
      if (a.isBuffer(e)) {
        let t = Kt(e.length) | 0, r = ee(t);
        return r.length === 0 || e.copy(r, 0, 0, t), r;
      }
      if (e.length !== undefined)
        return typeof e.length != "number" || Xt(e.length) ? ee(0) : Gt(e);
      if (e.type === "Buffer" && Array.isArray(e.data))
        return Gt(e.data);
    }
    function Kt(e) {
      if (e >= it)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + it.toString(16) + " bytes");
      return e | 0;
    }
    function Bl(e) {
      return +e != e && (e = 0), a.alloc(+e);
    }
    a.isBuffer = function(t) {
      return t != null && t._isBuffer === true && t !== a.prototype;
    };
    a.compare = function(t, r) {
      if (H(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), H(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), !a.isBuffer(t) || !a.isBuffer(r))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === r)
        return 0;
      let n = t.length, i = r.length;
      for (let o = 0, l = Math.min(n, i);o < l; ++o)
        if (t[o] !== r[o]) {
          n = t[o], i = r[o];
          break;
        }
      return n < i ? -1 : i < n ? 1 : 0;
    };
    a.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    a.concat = function(t, r) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0)
        return a.alloc(0);
      let n;
      if (r === undefined)
        for (r = 0, n = 0;n < t.length; ++n)
          r += t[n].length;
      let i = a.allocUnsafe(r), o = 0;
      for (n = 0;n < t.length; ++n) {
        let l = t[n];
        if (H(l, Uint8Array))
          o + l.length > i.length ? (a.isBuffer(l) || (l = a.from(l)), l.copy(i, o)) : Uint8Array.prototype.set.call(i, l, o);
        else if (a.isBuffer(l))
          l.copy(i, o);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        o += l.length;
      }
      return i;
    };
    function an(e, t) {
      if (a.isBuffer(e))
        return e.length;
      if (ArrayBuffer.isView(e) || H(e, ArrayBuffer))
        return e.byteLength;
      if (typeof e != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
      let r = e.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && r === 0)
        return 0;
      let i = false;
      for (;; )
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return Vt(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return _n(e).length;
          default:
            if (i)
              return n ? -1 : Vt(e).length;
            t = ("" + t).toLowerCase(), i = true;
        }
    }
    a.byteLength = an;
    function Ll(e, t, r) {
      let n = false;
      if ((t === undefined || t < 0) && (t = 0), t > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
        return "";
      for (e || (e = "utf8");; )
        switch (e) {
          case "hex":
            return vl(this, t, r);
          case "utf8":
          case "utf-8":
            return dn(this, t, r);
          case "ascii":
            return kl(this, t, r);
          case "latin1":
          case "binary":
            return Ul(this, t, r);
          case "base64":
            return Dl(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ql(this, t, r);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = true;
        }
    }
    a.prototype._isBuffer = true;
    function we(e, t, r) {
      let n = e[t];
      e[t] = e[r], e[r] = n;
    }
    a.prototype.swap16 = function() {
      let t = this.length;
      if (t % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let r = 0;r < t; r += 2)
        we(this, r, r + 1);
      return this;
    };
    a.prototype.swap32 = function() {
      let t = this.length;
      if (t % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let r = 0;r < t; r += 4)
        we(this, r, r + 3), we(this, r + 1, r + 2);
      return this;
    };
    a.prototype.swap64 = function() {
      let t = this.length;
      if (t % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let r = 0;r < t; r += 8)
        we(this, r, r + 7), we(this, r + 1, r + 6), we(this, r + 2, r + 5), we(this, r + 3, r + 4);
      return this;
    };
    a.prototype.toString = function() {
      let t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? dn(this, 0, t) : Ll.apply(this, arguments);
    };
    a.prototype.toLocaleString = a.prototype.toString;
    a.prototype.equals = function(t) {
      if (!a.isBuffer(t))
        throw new TypeError("Argument must be a Buffer");
      return this === t ? true : a.compare(this, t) === 0;
    };
    a.prototype.inspect = function() {
      let t = "", r = Fe.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
    };
    nn && (a.prototype[nn] = a.prototype.inspect);
    a.prototype.compare = function(t, r, n, i, o) {
      if (H(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
      if (r === undefined && (r = 0), n === undefined && (n = t ? t.length : 0), i === undefined && (i = 0), o === undefined && (o = this.length), r < 0 || n > t.length || i < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (i >= o && r >= n)
        return 0;
      if (i >= o)
        return -1;
      if (r >= n)
        return 1;
      if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t)
        return 0;
      let l = o - i, u = n - r, f = Math.min(l, u), s = this.slice(i, o), d = t.slice(r, n);
      for (let c = 0;c < f; ++c)
        if (s[c] !== d[c]) {
          l = s[c], u = d[c];
          break;
        }
      return l < u ? -1 : u < l ? 1 : 0;
    };
    function cn(e, t, r, n, i) {
      if (e.length === 0)
        return -1;
      if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, Xt(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (i)
          return -1;
        r = e.length - 1;
      } else if (r < 0)
        if (i)
          r = 0;
        else
          return -1;
      if (typeof t == "string" && (t = a.from(t, n)), a.isBuffer(t))
        return t.length === 0 ? -1 : on(e, t, r, n, i);
      if (typeof t == "number")
        return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : on(e, [t], r, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    function on(e, t, r, n, i) {
      let o = 1, l = e.length, u = t.length;
      if (n !== undefined && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
          return -1;
        o = 2, l /= 2, u /= 2, r /= 2;
      }
      function f(d, c) {
        return o === 1 ? d[c] : d.readUInt16BE(c * o);
      }
      let s;
      if (i) {
        let d = -1;
        for (s = r;s < l; s++)
          if (f(e, s) === f(t, d === -1 ? 0 : s - d)) {
            if (d === -1 && (d = s), s - d + 1 === u)
              return d * o;
          } else
            d !== -1 && (s -= s - d), d = -1;
      } else
        for (r + u > l && (r = l - u), s = r;s >= 0; s--) {
          let d = true;
          for (let c = 0;c < u; c++)
            if (f(e, s + c) !== f(t, c)) {
              d = false;
              break;
            }
          if (d)
            return s;
        }
      return -1;
    }
    a.prototype.includes = function(t, r, n) {
      return this.indexOf(t, r, n) !== -1;
    };
    a.prototype.indexOf = function(t, r, n) {
      return cn(this, t, r, n, true);
    };
    a.prototype.lastIndexOf = function(t, r, n) {
      return cn(this, t, r, n, false);
    };
    function Nl(e, t, r, n) {
      r = Number(r) || 0;
      let i = e.length - r;
      n ? (n = Number(n), n > i && (n = i)) : n = i;
      let o = t.length;
      n > o / 2 && (n = o / 2);
      let l;
      for (l = 0;l < n; ++l) {
        let u = parseInt(t.substr(l * 2, 2), 16);
        if (Xt(u))
          return l;
        e[r + l] = u;
      }
      return l;
    }
    function Fl(e, t, r, n) {
      return ot(Vt(t, e.length - r), e, r, n);
    }
    function Ml(e, t, r, n) {
      return ot(Gl(t), e, r, n);
    }
    function Cl(e, t, r, n) {
      return ot(_n(t), e, r, n);
    }
    function Ol(e, t, r, n) {
      return ot(Hl(t, e.length - r), e, r, n);
    }
    a.prototype.write = function(t, r, n, i) {
      if (r === undefined)
        i = "utf8", n = this.length, r = 0;
      else if (n === undefined && typeof r == "string")
        i = r, n = this.length, r = 0;
      else if (isFinite(r))
        r = r >>> 0, isFinite(n) ? (n = n >>> 0, i === undefined && (i = "utf8")) : (i = n, n = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let o = this.length - r;
      if ((n === undefined || n > o) && (n = o), t.length > 0 && (n < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      let l = false;
      for (;; )
        switch (i) {
          case "hex":
            return Nl(this, t, r, n);
          case "utf8":
          case "utf-8":
            return Fl(this, t, r, n);
          case "ascii":
          case "latin1":
          case "binary":
            return Ml(this, t, r, n);
          case "base64":
            return Cl(this, t, r, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Ol(this, t, r, n);
          default:
            if (l)
              throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), l = true;
        }
    };
    a.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function Dl(e, t, r) {
      return t === 0 && r === e.length ? jt.fromByteArray(e) : jt.fromByteArray(e.slice(t, r));
    }
    function dn(e, t, r) {
      r = Math.min(e.length, r);
      let n = [], i = t;
      for (;i < r; ) {
        let o = e[i], l = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (i + u <= r) {
          let f, s, d, c;
          switch (u) {
            case 1:
              o < 128 && (l = o);
              break;
            case 2:
              f = e[i + 1], (f & 192) === 128 && (c = (o & 31) << 6 | f & 63, c > 127 && (l = c));
              break;
            case 3:
              f = e[i + 1], s = e[i + 2], (f & 192) === 128 && (s & 192) === 128 && (c = (o & 15) << 12 | (f & 63) << 6 | s & 63, c > 2047 && (c < 55296 || c > 57343) && (l = c));
              break;
            case 4:
              f = e[i + 1], s = e[i + 2], d = e[i + 3], (f & 192) === 128 && (s & 192) === 128 && (d & 192) === 128 && (c = (o & 15) << 18 | (f & 63) << 12 | (s & 63) << 6 | d & 63, c > 65535 && c < 1114112 && (l = c));
          }
        }
        l === null ? (l = 65533, u = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | l & 1023), n.push(l), i += u;
      }
      return Pl(n);
    }
    var ln = 4096;
    function Pl(e) {
      let t = e.length;
      if (t <= ln)
        return String.fromCharCode.apply(String, e);
      let r = "", n = 0;
      for (;n < t; )
        r += String.fromCharCode.apply(String, e.slice(n, n += ln));
      return r;
    }
    function kl(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i] & 127);
      return n;
    }
    function Ul(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i]);
      return n;
    }
    function vl(e, t, r) {
      let n = e.length;
      (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
      let i = "";
      for (let o = t;o < r; ++o)
        i += Vl[e[o]];
      return i;
    }
    function ql(e, t, r) {
      let n = e.slice(t, r), i = "";
      for (let o = 0;o < n.length - 1; o += 2)
        i += String.fromCharCode(n[o] + n[o + 1] * 256);
      return i;
    }
    a.prototype.slice = function(t, r) {
      let n = this.length;
      t = ~~t, r = r === undefined ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t);
      let i = this.subarray(t, r);
      return Object.setPrototypeOf(i, a.prototype), i;
    };
    function F(e, t, r) {
      if (e % 1 !== 0 || e < 0)
        throw new RangeError("offset is not uint");
      if (e + t > r)
        throw new RangeError("Trying to access beyond buffer length");
    }
    a.prototype.readUintLE = a.prototype.readUIntLE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t], o = 1, l = 0;
      for (;++l < r && (o *= 256); )
        i += this[t + l] * o;
      return i;
    };
    a.prototype.readUintBE = a.prototype.readUIntBE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t + --r], o = 1;
      for (;r > 0 && (o *= 256); )
        i += this[t + --r] * o;
      return i;
    };
    a.prototype.readUint8 = a.prototype.readUInt8 = function(t, r) {
      return t = t >>> 0, r || F(t, 1, this.length), this[t];
    };
    a.prototype.readUint16LE = a.prototype.readUInt16LE = function(t, r) {
      return t = t >>> 0, r || F(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    a.prototype.readUint16BE = a.prototype.readUInt16BE = function(t, r) {
      return t = t >>> 0, r || F(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    a.prototype.readUint32LE = a.prototype.readUInt32LE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    a.prototype.readUint32BE = a.prototype.readUInt32BE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    a.prototype.readBigUInt64LE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
      return BigInt(i) + (BigInt(o) << BigInt(32));
    });
    a.prototype.readBigUInt64BE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
      return (BigInt(i) << BigInt(32)) + BigInt(o);
    });
    a.prototype.readIntLE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t], o = 1, l = 0;
      for (;++l < r && (o *= 256); )
        i += this[t + l] * o;
      return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i;
    };
    a.prototype.readIntBE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = r, o = 1, l = this[t + --i];
      for (;i > 0 && (o *= 256); )
        l += this[t + --i] * o;
      return o *= 128, l >= o && (l -= Math.pow(2, 8 * r)), l;
    };
    a.prototype.readInt8 = function(t, r) {
      return t = t >>> 0, r || F(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    a.prototype.readInt16LE = function(t, r) {
      t = t >>> 0, r || F(t, 2, this.length);
      let n = this[t] | this[t + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    a.prototype.readInt16BE = function(t, r) {
      t = t >>> 0, r || F(t, 2, this.length);
      let n = this[t + 1] | this[t] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    a.prototype.readInt32LE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    a.prototype.readInt32BE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    a.prototype.readBigInt64LE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
      return (BigInt(i) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
    });
    a.prototype.readBigInt64BE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
      return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n);
    });
    a.prototype.readFloatLE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), Le.read(this, t, true, 23, 4);
    };
    a.prototype.readFloatBE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), Le.read(this, t, false, 23, 4);
    };
    a.prototype.readDoubleLE = function(t, r) {
      return t = t >>> 0, r || F(t, 8, this.length), Le.read(this, t, true, 52, 8);
    };
    a.prototype.readDoubleBE = function(t, r) {
      return t = t >>> 0, r || F(t, 8, this.length), Le.read(this, t, false, 52, 8);
    };
    function O(e, t, r, n, i, o) {
      if (!a.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < o)
        throw new RangeError('"value" argument is out of bounds');
      if (r + n > e.length)
        throw new RangeError("Index out of range");
    }
    a.prototype.writeUintLE = a.prototype.writeUIntLE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, n = n >>> 0, !i) {
        let u = Math.pow(2, 8 * n) - 1;
        O(this, t, r, n, u, 0);
      }
      let o = 1, l = 0;
      for (this[r] = t & 255;++l < n && (o *= 256); )
        this[r + l] = t / o & 255;
      return r + n;
    };
    a.prototype.writeUintBE = a.prototype.writeUIntBE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, n = n >>> 0, !i) {
        let u = Math.pow(2, 8 * n) - 1;
        O(this, t, r, n, u, 0);
      }
      let o = n - 1, l = 1;
      for (this[r + o] = t & 255;--o >= 0 && (l *= 256); )
        this[r + o] = t / l & 255;
      return r + n;
    };
    a.prototype.writeUint8 = a.prototype.writeUInt8 = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 1, 255, 0), this[r] = t & 255, r + 1;
    };
    a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 65535, 0), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255, r + 4;
    };
    a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    function hn(e, t, r, n, i) {
      gn(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
      let l = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r++] = l, l = l >> 8, e[r++] = l, l = l >> 8, e[r++] = l, l = l >> 8, e[r++] = l, r;
    }
    function pn(e, t, r, n, i) {
      gn(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
      let l = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r + 3] = l, l = l >> 8, e[r + 2] = l, l = l >> 8, e[r + 1] = l, l = l >> 8, e[r] = l, r + 8;
    }
    a.prototype.writeBigUInt64LE = fe(function(t, r = 0) {
      return hn(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    a.prototype.writeBigUInt64BE = fe(function(t, r = 0) {
      return pn(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    a.prototype.writeIntLE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, !i) {
        let f = Math.pow(2, 8 * n - 1);
        O(this, t, r, n, f - 1, -f);
      }
      let o = 0, l = 1, u = 0;
      for (this[r] = t & 255;++o < n && (l *= 256); )
        t < 0 && u === 0 && this[r + o - 1] !== 0 && (u = 1), this[r + o] = (t / l >> 0) - u & 255;
      return r + n;
    };
    a.prototype.writeIntBE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, !i) {
        let f = Math.pow(2, 8 * n - 1);
        O(this, t, r, n, f - 1, -f);
      }
      let o = n - 1, l = 1, u = 0;
      for (this[r + o] = t & 255;--o >= 0 && (l *= 256); )
        t < 0 && u === 0 && this[r + o + 1] !== 0 && (u = 1), this[r + o] = (t / l >> 0) - u & 255;
      return r + n;
    };
    a.prototype.writeInt8 = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1;
    };
    a.prototype.writeInt16LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 32767, -32768), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    a.prototype.writeInt16BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    a.prototype.writeInt32LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 2147483647, -2147483648), this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
    };
    a.prototype.writeInt32BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    a.prototype.writeBigInt64LE = fe(function(t, r = 0) {
      return hn(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    a.prototype.writeBigInt64BE = fe(function(t, r = 0) {
      return pn(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function yn(e, t, r, n, i, o) {
      if (r + n > e.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("Index out of range");
    }
    function wn(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || yn(e, t, r, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), Le.write(e, t, r, n, 23, 4), r + 4;
    }
    a.prototype.writeFloatLE = function(t, r, n) {
      return wn(this, t, r, true, n);
    };
    a.prototype.writeFloatBE = function(t, r, n) {
      return wn(this, t, r, false, n);
    };
    function bn(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || yn(e, t, r, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), Le.write(e, t, r, n, 52, 8), r + 8;
    }
    a.prototype.writeDoubleLE = function(t, r, n) {
      return bn(this, t, r, true, n);
    };
    a.prototype.writeDoubleBE = function(t, r, n) {
      return bn(this, t, r, false, n);
    };
    a.prototype.copy = function(t, r, n, i) {
      if (!a.isBuffer(t))
        throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !i && i !== 0 && (i = this.length), r >= t.length && (r = t.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range");
      if (i < 0)
        throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), t.length - r < i - n && (i = t.length - r + n);
      let o = i - n;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), r), o;
    };
    a.prototype.fill = function(t, r, n, i) {
      if (typeof t == "string") {
        if (typeof r == "string" ? (i = r, r = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== undefined && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !a.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
        if (t.length === 1) {
          let l = t.charCodeAt(0);
          (i === "utf8" && l < 128 || i === "latin1") && (t = l);
        }
      } else
        typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (r < 0 || this.length < r || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= r)
        return this;
      r = r >>> 0, n = n === undefined ? this.length : n >>> 0, t || (t = 0);
      let o;
      if (typeof t == "number")
        for (o = r;o < n; ++o)
          this[o] = t;
      else {
        let l = a.isBuffer(t) ? t : a.from(t, i), u = l.length;
        if (u === 0)
          throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0;o < n - r; ++o)
          this[o + r] = l[o % u];
      }
      return this;
    };
    var Be = {};
    function zt(e, t, r) {
      Be[e] = class extends r {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
        }
        get code() {
          return e;
        }
        set code(i) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: i, writable: true });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    zt("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    zt("ERR_INVALID_ARG_TYPE", function(e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError);
    zt("ERR_OUT_OF_RANGE", function(e, t, r) {
      let n = `The value of "${e}" is out of range.`, i = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = un(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = un(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
    }, RangeError);
    function un(e) {
      let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
      for (;r >= n + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function Wl(e, t, r) {
      Ne(t, "offset"), (e[t] === undefined || e[t + r] === undefined) && Ge(t, e.length - (r + 1));
    }
    function gn(e, t, r, n, i, o) {
      if (e > r || e < t) {
        let l = typeof t == "bigint" ? "n" : "", u;
        throw o > 3 ? t === 0 || t === BigInt(0) ? u = `>= 0${l} and < 2${l} ** ${(o + 1) * 8}${l}` : u = `>= -(2${l} ** ${(o + 1) * 8 - 1}${l}) and < 2 ** ${(o + 1) * 8 - 1}${l}` : u = `>= ${t}${l} and <= ${r}${l}`, new Be.ERR_OUT_OF_RANGE("value", u, e);
      }
      Wl(n, i, o);
    }
    function Ne(e, t) {
      if (typeof e != "number")
        throw new Be.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function Ge(e, t, r) {
      throw Math.floor(e) !== e ? (Ne(e, r), new Be.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Be.ERR_BUFFER_OUT_OF_BOUNDS : new Be.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
    }
    var $l = /[^+/0-9A-Za-z-_]/g;
    function jl(e) {
      if (e = e.split("=")[0], e = e.trim().replace($l, ""), e.length < 2)
        return "";
      for (;e.length % 4 !== 0; )
        e = e + "=";
      return e;
    }
    function Vt(e, t) {
      t = t || 1 / 0;
      let r, n = e.length, i = null, o = [];
      for (let l = 0;l < n; ++l) {
        if (r = e.charCodeAt(l), r > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (l + 1 === n) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue;
          }
          r = (i - 55296 << 10 | r - 56320) + 65536;
        } else
          i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((t -= 1) < 0)
            break;
          o.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0)
            break;
          o.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0)
            break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0)
            break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function Gl(e) {
      let t = [];
      for (let r = 0;r < e.length; ++r)
        t.push(e.charCodeAt(r) & 255);
      return t;
    }
    function Hl(e, t) {
      let r, n, i, o = [];
      for (let l = 0;l < e.length && !((t -= 2) < 0); ++l)
        r = e.charCodeAt(l), n = r >> 8, i = r % 256, o.push(i), o.push(n);
      return o;
    }
    function _n(e) {
      return jt.toByteArray(jl(e));
    }
    function ot(e, t, r, n) {
      let i;
      for (i = 0;i < n && !(i + r >= t.length || i >= e.length); ++i)
        t[i + r] = e[i];
      return i;
    }
    function H(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function Xt(e) {
      return e !== e;
    }
    var Vl = function() {
      let e = "0123456789abcdef", t = new Array(256);
      for (let r = 0;r < 16; ++r) {
        let n = r * 16;
        for (let i = 0;i < 16; ++i)
          t[n + i] = e[r] + e[i];
      }
      return t;
    }();
    function fe(e) {
      return typeof BigInt > "u" ? Yl : e;
    }
    function Yl() {
      throw new Error("BigInt not supported");
    }
  });
  I = E((Gc, En) => {
    En.exports = { ArrayIsArray(e) {
      return Array.isArray(e);
    }, ArrayPrototypeIncludes(e, t) {
      return e.includes(t);
    }, ArrayPrototypeIndexOf(e, t) {
      return e.indexOf(t);
    }, ArrayPrototypeJoin(e, t) {
      return e.join(t);
    }, ArrayPrototypeMap(e, t) {
      return e.map(t);
    }, ArrayPrototypePop(e, t) {
      return e.pop(t);
    }, ArrayPrototypePush(e, t) {
      return e.push(t);
    }, ArrayPrototypeSlice(e, t, r) {
      return e.slice(t, r);
    }, Error, FunctionPrototypeCall(e, t, ...r) {
      return e.call(t, ...r);
    }, FunctionPrototypeSymbolHasInstance(e, t) {
      return Function.prototype[Symbol.hasInstance].call(e, t);
    }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(e, t) {
      return Object.defineProperties(e, t);
    }, ObjectDefineProperty(e, t, r) {
      return Object.defineProperty(e, t, r);
    }, ObjectGetOwnPropertyDescriptor(e, t) {
      return Object.getOwnPropertyDescriptor(e, t);
    }, ObjectKeys(e) {
      return Object.keys(e);
    }, ObjectSetPrototypeOf(e, t) {
      return Object.setPrototypeOf(e, t);
    }, Promise, PromisePrototypeCatch(e, t) {
      return e.catch(t);
    }, PromisePrototypeThen(e, t, r) {
      return e.then(t, r);
    }, PromiseReject(e) {
      return Promise.reject(e);
    }, ReflectApply: Reflect.apply, RegExpPrototypeTest(e, t) {
      return e.test(t);
    }, SafeSet: Set, String, StringPrototypeSlice(e, t, r) {
      return e.slice(t, r);
    }, StringPrototypeToLowerCase(e) {
      return e.toLowerCase();
    }, StringPrototypeToUpperCase(e) {
      return e.toUpperCase();
    }, StringPrototypeTrim(e) {
      return e.trim();
    }, Symbol, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, TypedArrayPrototypeSet(e, t, r) {
      return e.set(t, r);
    }, Uint8Array };
  });
  V = E((Hc, Qt) => {
    var Kl = te(), zl = Object.getPrototypeOf(async function() {
    }).constructor, Sn = globalThis.Blob || Kl.Blob, Xl = typeof Sn < "u" ? function(t) {
      return t instanceof Sn;
    } : function(t) {
      return false;
    }, Jt = class extends Error {
      constructor(t) {
        if (!Array.isArray(t))
          throw new TypeError(`Expected input to be an Array, got ${typeof t}`);
        let r = "";
        for (let n = 0;n < t.length; n++)
          r += `    ${t[n].stack}
`;
        super(r), this.name = "AggregateError", this.errors = t;
      }
    };
    Qt.exports = { AggregateError: Jt, kEmptyObject: Object.freeze({}), once(e) {
      let t = false;
      return function(...r) {
        t || (t = true, e.apply(this, r));
      };
    }, createDeferredPromise: function() {
      let e, t;
      return { promise: new Promise((n, i) => {
        e = n, t = i;
      }), resolve: e, reject: t };
    }, promisify(e) {
      return new Promise((t, r) => {
        e((n, ...i) => n ? r(n) : t(...i));
      });
    }, debuglog() {
      return function() {
      };
    }, format(e, ...t) {
      return e.replace(/%([sdifj])/g, function(...[r, n]) {
        let i = t.shift();
        return n === "f" ? i.toFixed(6) : n === "j" ? JSON.stringify(i) : n === "s" && typeof i == "object" ? `${i.constructor !== Object ? i.constructor.name : ""} {}`.trim() : i.toString();
      });
    }, inspect(e) {
      switch (typeof e) {
        case "string":
          if (e.includes("'"))
            if (e.includes('"')) {
              if (!e.includes("`") && !e.includes("${"))
                return `\`${e}\``;
            } else
              return `"${e}"`;
          return `'${e}'`;
        case "number":
          return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e;
        case "bigint":
          return `${String(e)}n`;
        case "boolean":
        case "undefined":
          return String(e);
        case "object":
          return "{}";
      }
    }, types: { isAsyncFunction(e) {
      return e instanceof zl;
    }, isArrayBufferView(e) {
      return ArrayBuffer.isView(e);
    } }, isBlob: Xl };
    Qt.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  });
  ut = E((Vc, lt) => {
    var { AbortController: mn, AbortSignal: Jl } = typeof self < "u" ? self : typeof window < "u" ? window : undefined;
    lt.exports = mn;
    lt.exports.AbortSignal = Jl;
    lt.exports.default = mn;
  });
  C = E((Yc, An) => {
    var { format: Ql, inspect: ft, AggregateError: Zl } = V(), eu = globalThis.AggregateError || Zl, tu = Symbol("kIsNodeError"), ru = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], nu = /^([A-Z][a-z0-9]*)+$/, iu = "__node_internal_", st = {};
    function be(e, t) {
      if (!e)
        throw new st.ERR_INTERNAL_ASSERTION(t);
    }
    function xn(e) {
      let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
      for (;r >= n + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function ou(e, t, r) {
      if (typeof t == "function")
        return be(t.length <= r.length, `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`), t(...r);
      let n = (t.match(/%[dfijoOs]/g) || []).length;
      return be(n === r.length, `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${n}).`), r.length === 0 ? t : Ql(t, ...r);
    }
    function M(e, t, r) {
      r || (r = Error);

      class n extends r {
        constructor(...o) {
          super(ou(e, t, o));
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      }
      Object.defineProperties(n.prototype, { name: { value: r.name, writable: true, enumerable: false, configurable: true }, toString: { value() {
        return `${this.name} [${e}]: ${this.message}`;
      }, writable: true, enumerable: false, configurable: true } }), n.prototype.code = e, n.prototype[tu] = true, st[e] = n;
    }
    function Rn(e) {
      let t = iu + e.name;
      return Object.defineProperty(e, "name", { value: t }), e;
    }
    function lu(e, t) {
      if (e && t && e !== t) {
        if (Array.isArray(t.errors))
          return t.errors.push(e), t;
        let r = new eu([t, e], t.message);
        return r.code = t.code, r;
      }
      return e || t;
    }
    var Zt = class extends Error {
      constructor(t = "The operation was aborted", r = undefined) {
        if (r !== undefined && typeof r != "object")
          throw new st.ERR_INVALID_ARG_TYPE("options", "Object", r);
        super(t, r), this.code = "ABORT_ERR", this.name = "AbortError";
      }
    };
    M("ERR_ASSERTION", "%s", Error);
    M("ERR_INVALID_ARG_TYPE", (e, t, r) => {
      be(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
      let n = "The ";
      e.endsWith(" argument") ? n += `${e} ` : n += `"${e}" ${e.includes(".") ? "property" : "argument"} `, n += "must be ";
      let i = [], o = [], l = [];
      for (let f of t)
        be(typeof f == "string", "All expected entries have to be of type string"), ru.includes(f) ? i.push(f.toLowerCase()) : nu.test(f) ? o.push(f) : (be(f !== "object", 'The value "object" should be written as "Object"'), l.push(f));
      if (o.length > 0) {
        let f = i.indexOf("object");
        f !== -1 && (i.splice(i, f, 1), o.push("Object"));
      }
      if (i.length > 0) {
        switch (i.length) {
          case 1:
            n += `of type ${i[0]}`;
            break;
          case 2:
            n += `one of type ${i[0]} or ${i[1]}`;
            break;
          default: {
            let f = i.pop();
            n += `one of type ${i.join(", ")}, or ${f}`;
          }
        }
        (o.length > 0 || l.length > 0) && (n += " or ");
      }
      if (o.length > 0) {
        switch (o.length) {
          case 1:
            n += `an instance of ${o[0]}`;
            break;
          case 2:
            n += `an instance of ${o[0]} or ${o[1]}`;
            break;
          default: {
            let f = o.pop();
            n += `an instance of ${o.join(", ")}, or ${f}`;
          }
        }
        l.length > 0 && (n += " or ");
      }
      switch (l.length) {
        case 0:
          break;
        case 1:
          l[0].toLowerCase() !== l[0] && (n += "an "), n += `${l[0]}`;
          break;
        case 2:
          n += `one of ${l[0]} or ${l[1]}`;
          break;
        default: {
          let f = l.pop();
          n += `one of ${l.join(", ")}, or ${f}`;
        }
      }
      if (r == null)
        n += `. Received ${r}`;
      else if (typeof r == "function" && r.name)
        n += `. Received function ${r.name}`;
      else if (typeof r == "object") {
        var u;
        (u = r.constructor) !== null && u !== undefined && u.name ? n += `. Received an instance of ${r.constructor.name}` : n += `. Received ${ft(r, { depth: -1 })}`;
      } else {
        let f = ft(r, { colors: false });
        f.length > 25 && (f = `${f.slice(0, 25)}...`), n += `. Received type ${typeof r} (${f})`;
      }
      return n;
    }, TypeError);
    M("ERR_INVALID_ARG_VALUE", (e, t, r = "is invalid") => {
      let n = ft(t);
      return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${n}`;
    }, TypeError);
    M("ERR_INVALID_RETURN_VALUE", (e, t, r) => {
      var n;
      let i = r != null && (n = r.constructor) !== null && n !== undefined && n.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
      return `Expected ${e} to be returned from the "${t}" function but got ${i}.`;
    }, TypeError);
    M("ERR_MISSING_ARGS", (...e) => {
      be(e.length > 0, "At least one arg needs to be specified");
      let t, r = e.length;
      switch (e = (Array.isArray(e) ? e : [e]).map((n) => `"${n}"`).join(" or "), r) {
        case 1:
          t += `The ${e[0]} argument`;
          break;
        case 2:
          t += `The ${e[0]} and ${e[1]} arguments`;
          break;
        default:
          {
            let n = e.pop();
            t += `The ${e.join(", ")}, and ${n} arguments`;
          }
          break;
      }
      return `${t} must be specified`;
    }, TypeError);
    M("ERR_OUT_OF_RANGE", (e, t, r) => {
      be(t, 'Missing "range" argument');
      let n;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = xn(String(r)) : typeof r == "bigint" ? (n = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (n = xn(n)), n += "n") : n = ft(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`;
    }, RangeError);
    M("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
    M("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
    M("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
    M("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
    M("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
    M("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    M("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
    M("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
    M("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
    M("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
    M("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
    An.exports = { AbortError: Zt, aggregateTwoErrors: Rn(lu), hideStackFrames: Rn, codes: st };
  });
  He = E((Kc, Cn) => {
    var { ArrayIsArray: Bn, ArrayPrototypeIncludes: Ln, ArrayPrototypeJoin: Nn, ArrayPrototypeMap: uu, NumberIsInteger: tr, NumberIsNaN: fu, NumberMAX_SAFE_INTEGER: su, NumberMIN_SAFE_INTEGER: au, NumberParseInt: cu, ObjectPrototypeHasOwnProperty: du, RegExpPrototypeExec: hu, String: pu, StringPrototypeToUpperCase: yu, StringPrototypeTrim: wu } = I(), { hideStackFrames: W, codes: { ERR_SOCKET_BAD_PORT: bu, ERR_INVALID_ARG_TYPE: D, ERR_INVALID_ARG_VALUE: at, ERR_OUT_OF_RANGE: ge, ERR_UNKNOWN_SIGNAL: In } } = C(), { normalizeEncoding: gu } = V(), { isAsyncFunction: _u, isArrayBufferView: Eu } = V().types, Tn = {};
    function Su(e) {
      return e === (e | 0);
    }
    function mu(e) {
      return e === e >>> 0;
    }
    var xu = /^[0-7]+$/, Ru = "must be a 32-bit unsigned integer or an octal string";
    function Au(e, t, r) {
      if (typeof e > "u" && (e = r), typeof e == "string") {
        if (hu(xu, e) === null)
          throw new at(t, e, Ru);
        e = cu(e, 8);
      }
      return Fn(e, t), e;
    }
    var Iu = W((e, t, r = au, n = su) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      if (e < r || e > n)
        throw new ge(t, `>= ${r} && <= ${n}`, e);
    }), Tu = W((e, t, r = -2147483648, n = 2147483647) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      if (e < r || e > n)
        throw new ge(t, `>= ${r} && <= ${n}`, e);
    }), Fn = W((e, t, r = false) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      let n = r ? 1 : 0, i = 4294967295;
      if (e < n || e > i)
        throw new ge(t, `>= ${n} && <= ${i}`, e);
    });
    function Mn(e, t) {
      if (typeof e != "string")
        throw new D(t, "string", e);
    }
    function Bu(e, t, r = undefined, n) {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (r != null && e < r || n != null && e > n || (r != null || n != null) && fu(e))
        throw new ge(t, `${r != null ? `>= ${r}` : ""}${r != null && n != null ? " && " : ""}${n != null ? `<= ${n}` : ""}`, e);
    }
    var Lu = W((e, t, r) => {
      if (!Ln(r, e)) {
        let n = Nn(uu(r, (o) => typeof o == "string" ? `'${o}'` : pu(o)), ", "), i = "must be one of: " + n;
        throw new at(t, e, i);
      }
    });
    function Nu(e, t) {
      if (typeof e != "boolean")
        throw new D(t, "boolean", e);
    }
    function er(e, t, r) {
      return e == null || !du(e, t) ? r : e[t];
    }
    var Fu = W((e, t, r = null) => {
      let n = er(r, "allowArray", false), i = er(r, "allowFunction", false);
      if (!er(r, "nullable", false) && e === null || !n && Bn(e) || typeof e != "object" && (!i || typeof e != "function"))
        throw new D(t, "Object", e);
    }), Mu = W((e, t, r = 0) => {
      if (!Bn(e))
        throw new D(t, "Array", e);
      if (e.length < r) {
        let n = `must be longer than ${r}`;
        throw new at(t, e, n);
      }
    });
    function Cu(e, t = "signal") {
      if (Mn(e, t), Tn[e] === undefined)
        throw Tn[yu(e)] !== undefined ? new In(e + " (signals must use all capital letters)") : new In(e);
    }
    var Ou = W((e, t = "buffer") => {
      if (!Eu(e))
        throw new D(t, ["Buffer", "TypedArray", "DataView"], e);
    });
    function Du(e, t) {
      let r = gu(t), n = e.length;
      if (r === "hex" && n % 2 !== 0)
        throw new at("encoding", t, `is invalid for data of length ${n}`);
    }
    function Pu(e, t = "Port", r = true) {
      if (typeof e != "number" && typeof e != "string" || typeof e == "string" && wu(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !r)
        throw new bu(t, e, r);
      return e | 0;
    }
    var ku = W((e, t) => {
      if (e !== undefined && (e === null || typeof e != "object" || !("aborted" in e)))
        throw new D(t, "AbortSignal", e);
    }), Uu = W((e, t) => {
      if (typeof e != "function")
        throw new D(t, "Function", e);
    }), vu = W((e, t) => {
      if (typeof e != "function" || _u(e))
        throw new D(t, "Function", e);
    }), qu = W((e, t) => {
      if (e !== undefined)
        throw new D(t, "undefined", e);
    });
    function Wu(e, t, r) {
      if (!Ln(r, e))
        throw new D(t, `('${Nn(r, "|")}')`, e);
    }
    Cn.exports = { isInt32: Su, isUint32: mu, parseFileMode: Au, validateArray: Mu, validateBoolean: Nu, validateBuffer: Ou, validateEncoding: Du, validateFunction: Uu, validateInt32: Tu, validateInteger: Iu, validateNumber: Bu, validateObject: Fu, validateOneOf: Lu, validatePlainFunction: vu, validatePort: Pu, validateSignalName: Cu, validateString: Mn, validateUint32: Fn, validateUndefined: qu, validateUnion: Wu, validateAbortSignal: ku };
  });
  ir = E((zc, kn) => {
    var x = kn.exports = {}, Y, K;
    function rr() {
      throw new Error("setTimeout has not been defined");
    }
    function nr() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        typeof setTimeout == "function" ? Y = setTimeout : Y = rr;
      } catch {
        Y = rr;
      }
      try {
        typeof clearTimeout == "function" ? K = clearTimeout : K = nr;
      } catch {
        K = nr;
      }
    })();
    function On(e) {
      if (Y === setTimeout)
        return setTimeout(e, 0);
      if ((Y === rr || !Y) && setTimeout)
        return Y = setTimeout, setTimeout(e, 0);
      try {
        return Y(e, 0);
      } catch {
        try {
          return Y.call(null, e, 0);
        } catch {
          return Y.call(this, e, 0);
        }
      }
    }
    function $u(e) {
      if (K === clearTimeout)
        return clearTimeout(e);
      if ((K === nr || !K) && clearTimeout)
        return K = clearTimeout, clearTimeout(e);
      try {
        return K(e);
      } catch {
        try {
          return K.call(null, e);
        } catch {
          return K.call(this, e);
        }
      }
    }
    var re = [], Me = false, _e, ct = -1;
    function ju() {
      !Me || !_e || (Me = false, _e.length ? re = _e.concat(re) : ct = -1, re.length && Dn());
    }
    function Dn() {
      if (!Me) {
        var e = On(ju);
        Me = true;
        for (var t = re.length;t; ) {
          for (_e = re, re = [];++ct < t; )
            _e && _e[ct].run();
          ct = -1, t = re.length;
        }
        _e = null, Me = false, $u(e);
      }
    }
    x.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1;r < arguments.length; r++)
          t[r - 1] = arguments[r];
      re.push(new Pn(e, t)), re.length === 1 && !Me && On(Dn);
    };
    function Pn(e, t) {
      this.fun = e, this.array = t;
    }
    Pn.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    x.title = "browser";
    x.browser = true;
    x.env = {};
    x.argv = [];
    x.version = "";
    x.versions = {};
    function ne() {
    }
    x.on = ne;
    x.addListener = ne;
    x.once = ne;
    x.off = ne;
    x.removeListener = ne;
    x.removeAllListeners = ne;
    x.emit = ne;
    x.prependListener = ne;
    x.prependOnceListener = ne;
    x.listeners = function(e) {
      return [];
    };
    x.binding = function(e) {
      throw new Error("process.binding is not supported");
    };
    x.cwd = function() {
      return "/";
    };
    x.chdir = function(e) {
      throw new Error("process.chdir is not supported");
    };
    x.umask = function() {
      return 0;
    };
  });
  k = {};
  Qr(k, { default: () => Gu });
  se = yl(() => {
    ue(k, rt(ir()));
    Gu = rt(ir());
  });
  ae = E((Jc, zn) => {
    var { Symbol: dt, SymbolAsyncIterator: Un, SymbolIterator: vn } = I(), qn = dt("kDestroyed"), Wn = dt("kIsErrored"), or = dt("kIsReadable"), $n = dt("kIsDisturbed");
    function ht(e, t = false) {
      var r;
      return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((r = e._readableState) === null || r === undefined ? undefined : r.readable) !== false) && (!e._writableState || e._readableState));
    }
    function pt(e) {
      var t;
      return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === undefined ? undefined : t.writable) !== false));
    }
    function Hu(e) {
      return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
    }
    function Ee(e) {
      return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
    }
    function Vu(e, t) {
      return e == null ? false : t === true ? typeof e[Un] == "function" : t === false ? typeof e[vn] == "function" : typeof e[Un] == "function" || typeof e[vn] == "function";
    }
    function yt(e) {
      if (!Ee(e))
        return null;
      let { _writableState: t, _readableState: r } = e, n = t || r;
      return !!(e.destroyed || e[qn] || n != null && n.destroyed);
    }
    function jn(e) {
      if (!pt(e))
        return null;
      if (e.writableEnded === true)
        return true;
      let t = e._writableState;
      return t != null && t.errored ? false : typeof t?.ended != "boolean" ? null : t.ended;
    }
    function Yu(e, t) {
      if (!pt(e))
        return null;
      if (e.writableFinished === true)
        return true;
      let r = e._writableState;
      return r != null && r.errored ? false : typeof r?.finished != "boolean" ? null : !!(r.finished || t === false && r.ended === true && r.length === 0);
    }
    function Ku(e) {
      if (!ht(e))
        return null;
      if (e.readableEnded === true)
        return true;
      let t = e._readableState;
      return !t || t.errored ? false : typeof t?.ended != "boolean" ? null : t.ended;
    }
    function Gn(e, t) {
      if (!ht(e))
        return null;
      let r = e._readableState;
      return r != null && r.errored ? false : typeof r?.endEmitted != "boolean" ? null : !!(r.endEmitted || t === false && r.ended === true && r.length === 0);
    }
    function Hn(e) {
      return e && e[or] != null ? e[or] : typeof e?.readable != "boolean" ? null : yt(e) ? false : ht(e) && e.readable && !Gn(e);
    }
    function Vn(e) {
      return typeof e?.writable != "boolean" ? null : yt(e) ? false : pt(e) && e.writable && !jn(e);
    }
    function zu(e, t) {
      return Ee(e) ? yt(e) ? true : !(t?.readable !== false && Hn(e) || t?.writable !== false && Vn(e)) : null;
    }
    function Xu(e) {
      var t, r;
      return Ee(e) ? e.writableErrored ? e.writableErrored : (t = (r = e._writableState) === null || r === undefined ? undefined : r.errored) !== null && t !== undefined ? t : null : null;
    }
    function Ju(e) {
      var t, r;
      return Ee(e) ? e.readableErrored ? e.readableErrored : (t = (r = e._readableState) === null || r === undefined ? undefined : r.errored) !== null && t !== undefined ? t : null : null;
    }
    function Qu(e) {
      if (!Ee(e))
        return null;
      if (typeof e.closed == "boolean")
        return e.closed;
      let { _writableState: t, _readableState: r } = e;
      return typeof t?.closed == "boolean" || typeof r?.closed == "boolean" ? t?.closed || r?.closed : typeof e._closed == "boolean" && Yn(e) ? e._closed : null;
    }
    function Yn(e) {
      return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
    }
    function Kn(e) {
      return typeof e._sent100 == "boolean" && Yn(e);
    }
    function Zu(e) {
      var t;
      return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === undefined ? undefined : t.upgradeOrConnect) === undefined;
    }
    function ef(e) {
      if (!Ee(e))
        return null;
      let { _writableState: t, _readableState: r } = e, n = t || r;
      return !n && Kn(e) || !!(n && n.autoDestroy && n.emitClose && n.closed === false);
    }
    function tf(e) {
      var t;
      return !!(e && ((t = e[$n]) !== null && t !== undefined ? t : e.readableDidRead || e.readableAborted));
    }
    function rf(e) {
      var t, r, n, i, o, l, u, f, s, d;
      return !!(e && ((t = (r = (n = (i = (o = (l = e[Wn]) !== null && l !== undefined ? l : e.readableErrored) !== null && o !== undefined ? o : e.writableErrored) !== null && i !== undefined ? i : (u = e._readableState) === null || u === undefined ? undefined : u.errorEmitted) !== null && n !== undefined ? n : (f = e._writableState) === null || f === undefined ? undefined : f.errorEmitted) !== null && r !== undefined ? r : (s = e._readableState) === null || s === undefined ? undefined : s.errored) !== null && t !== undefined ? t : (d = e._writableState) === null || d === undefined ? undefined : d.errored));
    }
    zn.exports = { kDestroyed: qn, isDisturbed: tf, kIsDisturbed: $n, isErrored: rf, kIsErrored: Wn, isReadable: Hn, kIsReadable: or, isClosed: Qu, isDestroyed: yt, isDuplexNodeStream: Hu, isFinished: zu, isIterable: Vu, isReadableNodeStream: ht, isReadableEnded: Ku, isReadableFinished: Gn, isReadableErrored: Ju, isNodeStream: Ee, isWritable: Vn, isWritableNodeStream: pt, isWritableEnded: jn, isWritableFinished: Yu, isWritableErrored: Xu, isServerRequest: Zu, isServerResponse: Kn, willEmitClose: ef };
  });
  ce = E((Qc, ur) => {
    var Ce = (se(), pe(k)), { AbortError: nf, codes: of } = C(), { ERR_INVALID_ARG_TYPE: lf, ERR_STREAM_PREMATURE_CLOSE: Xn } = of, { kEmptyObject: Jn, once: Qn } = V(), { validateAbortSignal: uf, validateFunction: ff, validateObject: sf } = He(), { Promise: af } = I(), { isClosed: cf, isReadable: Zn, isReadableNodeStream: lr, isReadableFinished: ei, isReadableErrored: df, isWritable: ti, isWritableNodeStream: ri, isWritableFinished: ni, isWritableErrored: hf, isNodeStream: pf, willEmitClose: yf } = ae();
    function wf(e) {
      return e.setHeader && typeof e.abort == "function";
    }
    var bf = () => {
    };
    function ii(e, t, r) {
      var n, i;
      arguments.length === 2 ? (r = t, t = Jn) : t == null ? t = Jn : sf(t, "options"), ff(r, "callback"), uf(t.signal, "options.signal"), r = Qn(r);
      let o = (n = t.readable) !== null && n !== undefined ? n : lr(e), l = (i = t.writable) !== null && i !== undefined ? i : ri(e);
      if (!pf(e))
        throw new lf("stream", "Stream", e);
      let { _writableState: u, _readableState: f } = e, s = () => {
        e.writable || y();
      }, d = yf(e) && lr(e) === o && ri(e) === l, c = ni(e, false), y = () => {
        c = true, e.destroyed && (d = false), !(d && (!e.readable || o)) && (!o || h) && r.call(e);
      }, h = ei(e, false), p = () => {
        h = true, e.destroyed && (d = false), !(d && (!e.writable || l)) && (!l || c) && r.call(e);
      }, B = (N) => {
        r.call(e, N);
      }, v = cf(e), w = () => {
        v = true;
        let N = hf(e) || df(e);
        if (N && typeof N != "boolean")
          return r.call(e, N);
        if (o && !h && lr(e, true) && !ei(e, false))
          return r.call(e, new Xn);
        if (l && !c && !ni(e, false))
          return r.call(e, new Xn);
        r.call(e);
      }, b = () => {
        e.req.on("finish", y);
      };
      wf(e) ? (e.on("complete", y), d || e.on("abort", w), e.req ? b() : e.on("request", b)) : l && !u && (e.on("end", s), e.on("close", s)), !d && typeof e.aborted == "boolean" && e.on("aborted", w), e.on("end", p), e.on("finish", y), t.error !== false && e.on("error", B), e.on("close", w), v ? Ce.nextTick(w) : u != null && u.errorEmitted || f != null && f.errorEmitted ? d || Ce.nextTick(w) : (!o && (!d || Zn(e)) && (c || ti(e) === false) || !l && (!d || ti(e)) && (h || Zn(e) === false) || f && e.req && e.aborted) && Ce.nextTick(w);
      let L = () => {
        r = bf, e.removeListener("aborted", w), e.removeListener("complete", y), e.removeListener("abort", w), e.removeListener("request", b), e.req && e.req.removeListener("finish", y), e.removeListener("end", s), e.removeListener("close", s), e.removeListener("finish", y), e.removeListener("end", p), e.removeListener("error", B), e.removeListener("close", w);
      };
      if (t.signal && !v) {
        let N = () => {
          let Q = r;
          L(), Q.call(e, new nf(undefined, { cause: t.signal.reason }));
        };
        if (t.signal.aborted)
          Ce.nextTick(N);
        else {
          let Q = r;
          r = Qn((...Ie) => {
            t.signal.removeEventListener("abort", N), Q.apply(e, Ie);
          }), t.signal.addEventListener("abort", N);
        }
      }
      return L;
    }
    function gf(e, t) {
      return new af((r, n) => {
        ii(e, t, (i) => {
          i ? n(i) : r();
        });
      });
    }
    ur.exports = ii;
    ur.exports.finished = gf;
  });
  di = E((Zc, ar) => {
    var fi = globalThis.AbortController || ut().AbortController, { codes: { ERR_INVALID_ARG_TYPE: Ve, ERR_MISSING_ARGS: _f, ERR_OUT_OF_RANGE: Ef }, AbortError: z } = C(), { validateAbortSignal: Oe, validateInteger: Sf, validateObject: De } = He(), mf = I().Symbol("kWeak"), { finished: xf } = ce(), { ArrayPrototypePush: Rf, MathFloor: Af, Number: If, NumberIsNaN: Tf, Promise: oi, PromiseReject: li, PromisePrototypeThen: Bf, Symbol: si } = I(), wt = si("kEmpty"), ui = si("kEof");
    function bt(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal");
      let r = 1;
      return t?.concurrency != null && (r = Af(t.concurrency)), Sf(r, "concurrency", 1), async function* () {
        var i, o;
        let l = new fi, u = this, f = [], s = l.signal, d = { signal: s }, c = () => l.abort();
        t != null && (i = t.signal) !== null && i !== undefined && i.aborted && c(), t == null || (o = t.signal) === null || o === undefined || o.addEventListener("abort", c);
        let y, h, p = false;
        function B() {
          p = true;
        }
        async function v() {
          try {
            for await (let L of u) {
              var w;
              if (p)
                return;
              if (s.aborted)
                throw new z;
              try {
                L = e(L, d);
              } catch (N) {
                L = li(N);
              }
              L !== wt && (typeof ((w = L) === null || w === undefined ? undefined : w.catch) == "function" && L.catch(B), f.push(L), y && (y(), y = null), !p && f.length && f.length >= r && await new oi((N) => {
                h = N;
              }));
            }
            f.push(ui);
          } catch (L) {
            let N = li(L);
            Bf(N, undefined, B), f.push(N);
          } finally {
            var b;
            p = true, y && (y(), y = null), t == null || (b = t.signal) === null || b === undefined || b.removeEventListener("abort", c);
          }
        }
        v();
        try {
          for (;; ) {
            for (;f.length > 0; ) {
              let w = await f[0];
              if (w === ui)
                return;
              if (s.aborted)
                throw new z;
              w !== wt && (yield w), f.shift(), h && (h(), h = null);
            }
            await new oi((w) => {
              y = w;
            });
          }
        } finally {
          l.abort(), p = true, h && (h(), h = null);
        }
      }.call(this);
    }
    function Lf(e = undefined) {
      return e != null && De(e, "options"), e?.signal != null && Oe(e.signal, "options.signal"), async function* () {
        let r = 0;
        for await (let i of this) {
          var n;
          if (e != null && (n = e.signal) !== null && n !== undefined && n.aborted)
            throw new z({ cause: e.signal.reason });
          yield [r++, i];
        }
      }.call(this);
    }
    async function ai(e, t = undefined) {
      for await (let r of sr.call(this, e, t))
        return true;
      return false;
    }
    async function Nf(e, t = undefined) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      return !await ai.call(this, async (...r) => !await e(...r), t);
    }
    async function Ff(e, t) {
      for await (let r of sr.call(this, e, t))
        return r;
    }
    async function Mf(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      async function r(n, i) {
        return await e(n, i), wt;
      }
      for await (let n of bt.call(this, r, t))
        ;
    }
    function sr(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      async function r(n, i) {
        return await e(n, i) ? n : wt;
      }
      return bt.call(this, r, t);
    }
    var fr = class extends _f {
      constructor() {
        super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
      }
    };
    async function Cf(e, t, r) {
      var n;
      if (typeof e != "function")
        throw new Ve("reducer", ["Function", "AsyncFunction"], e);
      r != null && De(r, "options"), r?.signal != null && Oe(r.signal, "options.signal");
      let i = arguments.length > 1;
      if (r != null && (n = r.signal) !== null && n !== undefined && n.aborted) {
        let s = new z(undefined, { cause: r.signal.reason });
        throw this.once("error", () => {
        }), await xf(this.destroy(s)), s;
      }
      let o = new fi, l = o.signal;
      if (r != null && r.signal) {
        let s = { once: true, [mf]: this };
        r.signal.addEventListener("abort", () => o.abort(), s);
      }
      let u = false;
      try {
        for await (let s of this) {
          var f;
          if (u = true, r != null && (f = r.signal) !== null && f !== undefined && f.aborted)
            throw new z;
          i ? t = await e(t, s, { signal: l }) : (t = s, i = true);
        }
        if (!u && !i)
          throw new fr;
      } finally {
        o.abort();
      }
      return t;
    }
    async function Of(e) {
      e != null && De(e, "options"), e?.signal != null && Oe(e.signal, "options.signal");
      let t = [];
      for await (let n of this) {
        var r;
        if (e != null && (r = e.signal) !== null && r !== undefined && r.aborted)
          throw new z(undefined, { cause: e.signal.reason });
        Rf(t, n);
      }
      return t;
    }
    function Df(e, t) {
      let r = bt.call(this, e, t);
      return async function* () {
        for await (let i of r)
          yield* i;
      }.call(this);
    }
    function ci(e) {
      if (e = If(e), Tf(e))
        return 0;
      if (e < 0)
        throw new Ef("number", ">= 0", e);
      return e;
    }
    function Pf(e, t = undefined) {
      return t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal"), e = ci(e), async function* () {
        var n;
        if (t != null && (n = t.signal) !== null && n !== undefined && n.aborted)
          throw new z;
        for await (let o of this) {
          var i;
          if (t != null && (i = t.signal) !== null && i !== undefined && i.aborted)
            throw new z;
          e-- <= 0 && (yield o);
        }
      }.call(this);
    }
    function kf(e, t = undefined) {
      return t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal"), e = ci(e), async function* () {
        var n;
        if (t != null && (n = t.signal) !== null && n !== undefined && n.aborted)
          throw new z;
        for await (let o of this) {
          var i;
          if (t != null && (i = t.signal) !== null && i !== undefined && i.aborted)
            throw new z;
          if (e-- > 0)
            yield o;
          else
            return;
        }
      }.call(this);
    }
    ar.exports.streamReturningOperators = { asIndexedPairs: Lf, drop: Pf, filter: sr, flatMap: Df, map: bt, take: kf };
    ar.exports.promiseReturningOperators = { every: Nf, forEach: Mf, reduce: Cf, toArray: Of, some: ai, find: Ff };
  });
  Se = E((ed, Ei) => {
    var de = (se(), pe(k)), { aggregateTwoErrors: Uf, codes: { ERR_MULTIPLE_CALLBACK: vf }, AbortError: qf } = C(), { Symbol: yi } = I(), { kDestroyed: Wf, isDestroyed: $f, isFinished: jf, isServerRequest: Gf } = ae(), wi = yi("kDestroy"), cr = yi("kConstruct");
    function bi(e, t, r) {
      e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e));
    }
    function Hf(e, t) {
      let r = this._readableState, n = this._writableState, i = n || r;
      return n && n.destroyed || r && r.destroyed ? (typeof t == "function" && t(), this) : (bi(e, n, r), n && (n.destroyed = true), r && (r.destroyed = true), i.constructed ? hi(this, e, t) : this.once(wi, function(o) {
        hi(this, Uf(o, e), t);
      }), this);
    }
    function hi(e, t, r) {
      let n = false;
      function i(o) {
        if (n)
          return;
        n = true;
        let { _readableState: l, _writableState: u } = e;
        bi(o, u, l), u && (u.closed = true), l && (l.closed = true), typeof r == "function" && r(o), o ? de.nextTick(Vf, e, o) : de.nextTick(gi, e);
      }
      try {
        e._destroy(t || null, i);
      } catch (o) {
        i(o);
      }
    }
    function Vf(e, t) {
      dr(e, t), gi(e);
    }
    function gi(e) {
      let { _readableState: t, _writableState: r } = e;
      r && (r.closeEmitted = true), t && (t.closeEmitted = true), (r && r.emitClose || t && t.emitClose) && e.emit("close");
    }
    function dr(e, t) {
      let { _readableState: r, _writableState: n } = e;
      n && n.errorEmitted || r && r.errorEmitted || (n && (n.errorEmitted = true), r && (r.errorEmitted = true), e.emit("error", t));
    }
    function Yf() {
      let e = this._readableState, t = this._writableState;
      e && (e.constructed = true, e.closed = false, e.closeEmitted = false, e.destroyed = false, e.errored = null, e.errorEmitted = false, e.reading = false, e.ended = e.readable === false, e.endEmitted = e.readable === false), t && (t.constructed = true, t.destroyed = false, t.closed = false, t.closeEmitted = false, t.errored = null, t.errorEmitted = false, t.finalCalled = false, t.prefinished = false, t.ended = t.writable === false, t.ending = t.writable === false, t.finished = t.writable === false);
    }
    function hr(e, t, r) {
      let { _readableState: n, _writableState: i } = e;
      if (i && i.destroyed || n && n.destroyed)
        return this;
      n && n.autoDestroy || i && i.autoDestroy ? e.destroy(t) : t && (t.stack, i && !i.errored && (i.errored = t), n && !n.errored && (n.errored = t), r ? de.nextTick(dr, e, t) : dr(e, t));
    }
    function Kf(e, t) {
      if (typeof e._construct != "function")
        return;
      let { _readableState: r, _writableState: n } = e;
      r && (r.constructed = false), n && (n.constructed = false), e.once(cr, t), !(e.listenerCount(cr) > 1) && de.nextTick(zf, e);
    }
    function zf(e) {
      let t = false;
      function r(n) {
        if (t) {
          hr(e, n ?? new vf);
          return;
        }
        t = true;
        let { _readableState: i, _writableState: o } = e, l = o || i;
        i && (i.constructed = true), o && (o.constructed = true), l.destroyed ? e.emit(wi, n) : n ? hr(e, n, true) : de.nextTick(Xf, e);
      }
      try {
        e._construct(r);
      } catch (n) {
        r(n);
      }
    }
    function Xf(e) {
      e.emit(cr);
    }
    function pi(e) {
      return e && e.setHeader && typeof e.abort == "function";
    }
    function _i(e) {
      e.emit("close");
    }
    function Jf(e, t) {
      e.emit("error", t), de.nextTick(_i, e);
    }
    function Qf(e, t) {
      !e || $f(e) || (!t && !jf(e) && (t = new qf), Gf(e) ? (e.socket = null, e.destroy(t)) : pi(e) ? e.abort() : pi(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? de.nextTick(Jf, e, t) : de.nextTick(_i, e), e.destroyed || (e[Wf] = true));
    }
    Ei.exports = { construct: Kf, destroyer: Qf, destroy: Hf, undestroy: Yf, errorOrDestroy: hr };
  });
  Et = E((td, pr) => {
    var Pe = typeof Reflect == "object" ? Reflect : null, Si = Pe && typeof Pe.apply == "function" ? Pe.apply : function(t, r, n) {
      return Function.prototype.apply.call(t, r, n);
    }, gt;
    Pe && typeof Pe.ownKeys == "function" ? gt = Pe.ownKeys : Object.getOwnPropertySymbols ? gt = function(t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : gt = function(t) {
      return Object.getOwnPropertyNames(t);
    };
    function Zf(e) {
      console && console.warn && console.warn(e);
    }
    var xi = Number.isNaN || function(t) {
      return t !== t;
    };
    function S() {
      S.init.call(this);
    }
    pr.exports = S;
    pr.exports.once = ns;
    S.EventEmitter = S;
    S.prototype._events = undefined;
    S.prototype._eventsCount = 0;
    S.prototype._maxListeners = undefined;
    var mi = 10;
    function _t(e) {
      if (typeof e != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    Object.defineProperty(S, "defaultMaxListeners", { enumerable: true, get: function() {
      return mi;
    }, set: function(e) {
      if (typeof e != "number" || e < 0 || xi(e))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
      mi = e;
    } });
    S.init = function() {
      (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    };
    S.prototype.setMaxListeners = function(t) {
      if (typeof t != "number" || t < 0 || xi(t))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this;
    };
    function Ri(e) {
      return e._maxListeners === undefined ? S.defaultMaxListeners : e._maxListeners;
    }
    S.prototype.getMaxListeners = function() {
      return Ri(this);
    };
    S.prototype.emit = function(t) {
      for (var r = [], n = 1;n < arguments.length; n++)
        r.push(arguments[n]);
      var i = t === "error", o = this._events;
      if (o !== undefined)
        i = i && o.error === undefined;
      else if (!i)
        return false;
      if (i) {
        var l;
        if (r.length > 0 && (l = r[0]), l instanceof Error)
          throw l;
        var u = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
        throw u.context = l, u;
      }
      var f = o[t];
      if (f === undefined)
        return false;
      if (typeof f == "function")
        Si(f, this, r);
      else
        for (var s = f.length, d = Li(f, s), n = 0;n < s; ++n)
          Si(d[n], this, r);
      return true;
    };
    function Ai(e, t, r, n) {
      var i, o, l;
      if (_t(r), o = e._events, o === undefined ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== undefined && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === undefined)
        l = o[t] = r, ++e._eventsCount;
      else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), i = Ri(e), i > 0 && l.length > i && !l.warned) {
        l.warned = true;
        var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, Zf(u);
      }
      return e;
    }
    S.prototype.addListener = function(t, r) {
      return Ai(this, t, r, false);
    };
    S.prototype.on = S.prototype.addListener;
    S.prototype.prependListener = function(t, r) {
      return Ai(this, t, r, true);
    };
    function es() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Ii(e, t, r) {
      var n = { fired: false, wrapFn: undefined, target: e, type: t, listener: r }, i = es.bind(n);
      return i.listener = r, n.wrapFn = i, i;
    }
    S.prototype.once = function(t, r) {
      return _t(r), this.on(t, Ii(this, t, r)), this;
    };
    S.prototype.prependOnceListener = function(t, r) {
      return _t(r), this.prependListener(t, Ii(this, t, r)), this;
    };
    S.prototype.removeListener = function(t, r) {
      var n, i, o, l, u;
      if (_t(r), i = this._events, i === undefined)
        return this;
      if (n = i[t], n === undefined)
        return this;
      if (n === r || n.listener === r)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || r));
      else if (typeof n != "function") {
        for (o = -1, l = n.length - 1;l >= 0; l--)
          if (n[l] === r || n[l].listener === r) {
            u = n[l].listener, o = l;
            break;
          }
        if (o < 0)
          return this;
        o === 0 ? n.shift() : ts(n, o), n.length === 1 && (i[t] = n[0]), i.removeListener !== undefined && this.emit("removeListener", t, u || r);
      }
      return this;
    };
    S.prototype.off = S.prototype.removeListener;
    S.prototype.removeAllListeners = function(t) {
      var r, n, i;
      if (n = this._events, n === undefined)
        return this;
      if (n.removeListener === undefined)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
      if (arguments.length === 0) {
        var o = Object.keys(n), l;
        for (i = 0;i < o.length; ++i)
          l = o[i], l !== "removeListener" && this.removeAllListeners(l);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if (r = n[t], typeof r == "function")
        this.removeListener(t, r);
      else if (r !== undefined)
        for (i = r.length - 1;i >= 0; i--)
          this.removeListener(t, r[i]);
      return this;
    };
    function Ti(e, t, r) {
      var n = e._events;
      if (n === undefined)
        return [];
      var i = n[t];
      return i === undefined ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? rs(i) : Li(i, i.length);
    }
    S.prototype.listeners = function(t) {
      return Ti(this, t, true);
    };
    S.prototype.rawListeners = function(t) {
      return Ti(this, t, false);
    };
    S.listenerCount = function(e, t) {
      return typeof e.listenerCount == "function" ? e.listenerCount(t) : Bi.call(e, t);
    };
    S.prototype.listenerCount = Bi;
    function Bi(e) {
      var t = this._events;
      if (t !== undefined) {
        var r = t[e];
        if (typeof r == "function")
          return 1;
        if (r !== undefined)
          return r.length;
      }
      return 0;
    }
    S.prototype.eventNames = function() {
      return this._eventsCount > 0 ? gt(this._events) : [];
    };
    function Li(e, t) {
      for (var r = new Array(t), n = 0;n < t; ++n)
        r[n] = e[n];
      return r;
    }
    function ts(e, t) {
      for (;t + 1 < e.length; t++)
        e[t] = e[t + 1];
      e.pop();
    }
    function rs(e) {
      for (var t = new Array(e.length), r = 0;r < t.length; ++r)
        t[r] = e[r].listener || e[r];
      return t;
    }
    function ns(e, t) {
      return new Promise(function(r, n) {
        function i(l) {
          e.removeListener(t, o), n(l);
        }
        function o() {
          typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments));
        }
        Ni(e, t, o, { once: true }), t !== "error" && is(e, i, { once: true });
      });
    }
    function is(e, t, r) {
      typeof e.on == "function" && Ni(e, "error", t, r);
    }
    function Ni(e, t, r, n) {
      if (typeof e.on == "function")
        n.once ? e.once(t, r) : e.on(t, r);
      else if (typeof e.addEventListener == "function")
        e.addEventListener(t, function i(o) {
          n.once && e.removeEventListener(t, i), r(o);
        });
      else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    }
  });
  xt = E((rd, Mi) => {
    var { ArrayIsArray: os, ObjectSetPrototypeOf: Fi } = I(), { EventEmitter: St } = Et();
    function mt(e) {
      St.call(this, e);
    }
    Fi(mt.prototype, St.prototype);
    Fi(mt, St);
    mt.prototype.pipe = function(e, t) {
      let r = this;
      function n(d) {
        e.writable && e.write(d) === false && r.pause && r.pause();
      }
      r.on("data", n);
      function i() {
        r.readable && r.resume && r.resume();
      }
      e.on("drain", i), !e._isStdio && (!t || t.end !== false) && (r.on("end", l), r.on("close", u));
      let o = false;
      function l() {
        o || (o = true, e.end());
      }
      function u() {
        o || (o = true, typeof e.destroy == "function" && e.destroy());
      }
      function f(d) {
        s(), St.listenerCount(this, "error") === 0 && this.emit("error", d);
      }
      yr(r, "error", f), yr(e, "error", f);
      function s() {
        r.removeListener("data", n), e.removeListener("drain", i), r.removeListener("end", l), r.removeListener("close", u), r.removeListener("error", f), e.removeListener("error", f), r.removeListener("end", s), r.removeListener("close", s), e.removeListener("close", s);
      }
      return r.on("end", s), r.on("close", s), e.on("close", s), e.emit("pipe", r), e;
    };
    function yr(e, t, r) {
      if (typeof e.prependListener == "function")
        return e.prependListener(t, r);
      !e._events || !e._events[t] ? e.on(t, r) : os(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
    }
    Mi.exports = { Stream: mt, prependListener: yr };
  });
  At = E((nd, Rt) => {
    var { AbortError: ls, codes: us } = C(), fs = ce(), { ERR_INVALID_ARG_TYPE: Ci } = us, ss = (e, t) => {
      if (typeof e != "object" || !("aborted" in e))
        throw new Ci(t, "AbortSignal", e);
    };
    function as(e) {
      return !!(e && typeof e.pipe == "function");
    }
    Rt.exports.addAbortSignal = function(t, r) {
      if (ss(t, "signal"), !as(r))
        throw new Ci("stream", "stream.Stream", r);
      return Rt.exports.addAbortSignalNoValidate(t, r);
    };
    Rt.exports.addAbortSignalNoValidate = function(e, t) {
      if (typeof e != "object" || !("aborted" in e))
        return t;
      let r = () => {
        t.destroy(new ls(undefined, { cause: e.reason }));
      };
      return e.aborted ? r() : (e.addEventListener("abort", r), fs(t, () => e.removeEventListener("abort", r))), t;
    };
  });
  Pi = E((od, Di) => {
    var { StringPrototypeSlice: Oi, SymbolIterator: cs, TypedArrayPrototypeSet: It, Uint8Array: ds } = I(), { Buffer: wr } = te(), { inspect: hs } = V();
    Di.exports = class {
      constructor() {
        this.head = null, this.tail = null, this.length = 0;
      }
      push(t) {
        let r = { data: t, next: null };
        this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
      }
      unshift(t) {
        let r = { data: t, next: this.head };
        this.length === 0 && (this.tail = r), this.head = r, ++this.length;
      }
      shift() {
        if (this.length === 0)
          return;
        let t = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
      }
      clear() {
        this.head = this.tail = null, this.length = 0;
      }
      join(t) {
        if (this.length === 0)
          return "";
        let r = this.head, n = "" + r.data;
        for (;(r = r.next) !== null; )
          n += t + r.data;
        return n;
      }
      concat(t) {
        if (this.length === 0)
          return wr.alloc(0);
        let r = wr.allocUnsafe(t >>> 0), n = this.head, i = 0;
        for (;n; )
          It(r, n.data, i), i += n.data.length, n = n.next;
        return r;
      }
      consume(t, r) {
        let n = this.head.data;
        if (t < n.length) {
          let i = n.slice(0, t);
          return this.head.data = n.slice(t), i;
        }
        return t === n.length ? this.shift() : r ? this._getString(t) : this._getBuffer(t);
      }
      first() {
        return this.head.data;
      }
      *[cs]() {
        for (let t = this.head;t; t = t.next)
          yield t.data;
      }
      _getString(t) {
        let r = "", n = this.head, i = 0;
        do {
          let o = n.data;
          if (t > o.length)
            r += o, t -= o.length;
          else {
            t === o.length ? (r += o, ++i, n.next ? this.head = n.next : this.head = this.tail = null) : (r += Oi(o, 0, t), this.head = n, n.data = Oi(o, t));
            break;
          }
          ++i;
        } while ((n = n.next) !== null);
        return this.length -= i, r;
      }
      _getBuffer(t) {
        let r = wr.allocUnsafe(t), n = t, i = this.head, o = 0;
        do {
          let l = i.data;
          if (t > l.length)
            It(r, l, n - t), t -= l.length;
          else {
            t === l.length ? (It(r, l, n - t), ++o, i.next ? this.head = i.next : this.head = this.tail = null) : (It(r, new ds(l.buffer, l.byteOffset, t), n - t), this.head = i, i.data = l.slice(t));
            break;
          }
          ++o;
        } while ((i = i.next) !== null);
        return this.length -= o, r;
      }
      [Symbol.for("nodejs.util.inspect.custom")](t, r) {
        return hs(this, { ...r, depth: 0, customInspect: false });
      }
    };
  });
  Tt = E((ld, Ui) => {
    var { MathFloor: ps, NumberIsInteger: ys } = I(), { ERR_INVALID_ARG_VALUE: ws } = C().codes;
    function bs(e, t, r) {
      return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
    }
    function ki(e) {
      return e ? 16 : 16 * 1024;
    }
    function gs(e, t, r, n) {
      let i = bs(t, n, r);
      if (i != null) {
        if (!ys(i) || i < 0) {
          let o = n ? `options.${r}` : "options.highWaterMark";
          throw new ws(o, i);
        }
        return ps(i);
      }
      return ki(e.objectMode);
    }
    Ui.exports = { getHighWaterMark: gs, getDefaultHighWaterMark: ki };
  });
  Wi = E((br, qi) => {
    var Bt = te(), X = Bt.Buffer;
    function vi(e, t) {
      for (var r in e)
        t[r] = e[r];
    }
    X.from && X.alloc && X.allocUnsafe && X.allocUnsafeSlow ? qi.exports = Bt : (vi(Bt, br), br.Buffer = me);
    function me(e, t, r) {
      return X(e, t, r);
    }
    me.prototype = Object.create(X.prototype);
    vi(X, me);
    me.from = function(e, t, r) {
      if (typeof e == "number")
        throw new TypeError("Argument must not be a number");
      return X(e, t, r);
    };
    me.alloc = function(e, t, r) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      var n = X(e);
      return t !== undefined ? typeof r == "string" ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
    };
    me.allocUnsafe = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return X(e);
    };
    me.allocUnsafeSlow = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return Bt.SlowBuffer(e);
    };
  });
  Gi = E((ji) => {
    var _r = Wi().Buffer, $i = _r.isEncoding || function(e) {
      switch (e = "" + e, e && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _s(e) {
      if (!e)
        return "utf8";
      for (var t;; )
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t)
              return;
            e = ("" + e).toLowerCase(), t = true;
        }
    }
    function Es(e) {
      var t = _s(e);
      if (typeof t != "string" && (_r.isEncoding === $i || !$i(e)))
        throw new Error("Unknown encoding: " + e);
      return t || e;
    }
    ji.StringDecoder = Ye;
    function Ye(e) {
      this.encoding = Es(e);
      var t;
      switch (this.encoding) {
        case "utf16le":
          this.text = Is, this.end = Ts, t = 4;
          break;
        case "utf8":
          this.fillLast = xs, t = 4;
          break;
        case "base64":
          this.text = Bs, this.end = Ls, t = 3;
          break;
        default:
          this.write = Ns, this.end = Fs;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = _r.allocUnsafe(t);
    }
    Ye.prototype.write = function(e) {
      if (e.length === 0)
        return "";
      var t, r;
      if (this.lastNeed) {
        if (t = this.fillLast(e), t === undefined)
          return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else
        r = 0;
      return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
    };
    Ye.prototype.end = As;
    Ye.prototype.text = Rs;
    Ye.prototype.fillLast = function(e) {
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
    function gr(e) {
      return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
    }
    function Ss(e, t, r) {
      var n = t.length - 1;
      if (n < r)
        return 0;
      var i = gr(t[n]);
      return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = gr(t[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = gr(t[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0));
    }
    function ms(e, t, r) {
      if ((t[0] & 192) !== 128)
        return e.lastNeed = 0, "�";
      if (e.lastNeed > 1 && t.length > 1) {
        if ((t[1] & 192) !== 128)
          return e.lastNeed = 1, "�";
        if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
          return e.lastNeed = 2, "�";
      }
    }
    function xs(e) {
      var t = this.lastTotal - this.lastNeed, r = ms(this, e, t);
      if (r !== undefined)
        return r;
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
    }
    function Rs(e, t) {
      var r = Ss(this, e, t);
      if (!this.lastNeed)
        return e.toString("utf8", t);
      this.lastTotal = r;
      var n = e.length - (r - this.lastNeed);
      return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
    }
    function As(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "�" : t;
    }
    function Is(e, t) {
      if ((e.length - t) % 2 === 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
        }
        return r;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
    }
    function Ts(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function Bs(e, t) {
      var r = (e.length - t) % 3;
      return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
    }
    function Ls(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
    }
    function Ns(e) {
      return e.toString(this.encoding);
    }
    function Fs(e) {
      return e && e.length ? this.write(e) : "";
    }
  });
  Er = E((fd, Ki) => {
    var Hi = (se(), pe(k)), { PromisePrototypeThen: Ms, SymbolAsyncIterator: Vi, SymbolIterator: Yi } = I(), { Buffer: Cs } = te(), { ERR_INVALID_ARG_TYPE: Os, ERR_STREAM_NULL_VALUES: Ds } = C().codes;
    function Ps(e, t, r) {
      let n;
      if (typeof t == "string" || t instanceof Cs)
        return new e({ objectMode: true, ...r, read() {
          this.push(t), this.push(null);
        } });
      let i;
      if (t && t[Vi])
        i = true, n = t[Vi]();
      else if (t && t[Yi])
        i = false, n = t[Yi]();
      else
        throw new Os("iterable", ["Iterable"], t);
      let o = new e({ objectMode: true, highWaterMark: 1, ...r }), l = false;
      o._read = function() {
        l || (l = true, f());
      }, o._destroy = function(s, d) {
        Ms(u(s), () => Hi.nextTick(d, s), (c) => Hi.nextTick(d, c || s));
      };
      async function u(s) {
        let d = s != null, c = typeof n.throw == "function";
        if (d && c) {
          let { value: y, done: h } = await n.throw(s);
          if (await y, h)
            return;
        }
        if (typeof n.return == "function") {
          let { value: y } = await n.return();
          await y;
        }
      }
      async function f() {
        for (;; ) {
          try {
            let { value: s, done: d } = i ? await n.next() : n.next();
            if (d)
              o.push(null);
            else {
              let c = s && typeof s.then == "function" ? await s : s;
              if (c === null)
                throw l = false, new Ds;
              if (o.push(c))
                continue;
              l = false;
            }
          } catch (s) {
            o.destroy(s);
          }
          break;
        }
      }
      return o;
    }
    Ki.exports = Ps;
  });
  Ke = E((sd, uo) => {
    var $ = (se(), pe(k)), { ArrayPrototypeIndexOf: ks, NumberIsInteger: Us, NumberIsNaN: vs, NumberParseInt: qs, ObjectDefineProperties: Ji, ObjectKeys: Ws, ObjectSetPrototypeOf: Qi, Promise: $s, SafeSet: js, SymbolAsyncIterator: Gs, Symbol: Hs } = I();
    uo.exports = g;
    g.ReadableState = Ir;
    var { EventEmitter: Vs } = Et(), { Stream: he, prependListener: Ys } = xt(), { Buffer: Sr } = te(), { addAbortSignal: Ks } = At(), zs = ce(), _ = V().debuglog("stream", (e) => {
      _ = e;
    }), Xs = Pi(), Ue = Se(), { getHighWaterMark: Js, getDefaultHighWaterMark: Qs } = Tt(), { aggregateTwoErrors: zi, codes: { ERR_INVALID_ARG_TYPE: Zs, ERR_METHOD_NOT_IMPLEMENTED: ea, ERR_OUT_OF_RANGE: ta, ERR_STREAM_PUSH_AFTER_EOF: ra, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: na } } = C(), { validateObject: ia } = He(), xe = Hs("kPaused"), { StringDecoder: Zi } = Gi(), oa = Er();
    Qi(g.prototype, he.prototype);
    Qi(g, he);
    var mr = () => {
    }, { errorOrDestroy: ke } = Ue;
    function Ir(e, t, r) {
      typeof r != "boolean" && (r = t instanceof J()), this.objectMode = !!(e && e.objectMode), r && (this.objectMode = this.objectMode || !!(e && e.readableObjectMode)), this.highWaterMark = e ? Js(this, e, "readableHighWaterMark", r) : Qs(false), this.buffer = new Xs, this.length = 0, this.pipes = [], this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.constructed = true, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this[xe] = null, this.errorEmitted = false, this.emitClose = !e || e.emitClose !== false, this.autoDestroy = !e || e.autoDestroy !== false, this.destroyed = false, this.errored = null, this.closed = false, this.closeEmitted = false, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = false, this.readingMore = false, this.dataEmitted = false, this.decoder = null, this.encoding = null, e && e.encoding && (this.decoder = new Zi(e.encoding), this.encoding = e.encoding);
    }
    function g(e) {
      if (!(this instanceof g))
        return new g(e);
      let t = this instanceof J();
      this._readableState = new Ir(e, this, t), e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.construct == "function" && (this._construct = e.construct), e.signal && !t && Ks(e.signal, this)), he.call(this, e), Ue.construct(this, () => {
        this._readableState.needReadable && Lt(this, this._readableState);
      });
    }
    g.prototype.destroy = Ue.destroy;
    g.prototype._undestroy = Ue.undestroy;
    g.prototype._destroy = function(e, t) {
      t(e);
    };
    g.prototype[Vs.captureRejectionSymbol] = function(e) {
      this.destroy(e);
    };
    g.prototype.push = function(e, t) {
      return eo(this, e, t, false);
    };
    g.prototype.unshift = function(e, t) {
      return eo(this, e, t, true);
    };
    function eo(e, t, r, n) {
      _("readableAddChunk", t);
      let i = e._readableState, o;
      if (i.objectMode || (typeof t == "string" ? (r = r || i.defaultEncoding, i.encoding !== r && (n && i.encoding ? t = Sr.from(t, r).toString(i.encoding) : (t = Sr.from(t, r), r = ""))) : t instanceof Sr ? r = "" : he._isUint8Array(t) ? (t = he._uint8ArrayToBuffer(t), r = "") : t != null && (o = new Zs("chunk", ["string", "Buffer", "Uint8Array"], t))), o)
        ke(e, o);
      else if (t === null)
        i.reading = false, fa(e, i);
      else if (i.objectMode || t && t.length > 0)
        if (n)
          if (i.endEmitted)
            ke(e, new na);
          else {
            if (i.destroyed || i.errored)
              return false;
            xr(e, i, t, true);
          }
        else if (i.ended)
          ke(e, new ra);
        else {
          if (i.destroyed || i.errored)
            return false;
          i.reading = false, i.decoder && !r ? (t = i.decoder.write(t), i.objectMode || t.length !== 0 ? xr(e, i, t, false) : Lt(e, i)) : xr(e, i, t, false);
        }
      else
        n || (i.reading = false, Lt(e, i));
      return !i.ended && (i.length < i.highWaterMark || i.length === 0);
    }
    function xr(e, t, r, n) {
      t.flowing && t.length === 0 && !t.sync && e.listenerCount("data") > 0 ? (t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null, t.dataEmitted = true, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && Nt(e)), Lt(e, t);
    }
    g.prototype.isPaused = function() {
      let e = this._readableState;
      return e[xe] === true || e.flowing === false;
    };
    g.prototype.setEncoding = function(e) {
      let t = new Zi(e);
      this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
      let r = this._readableState.buffer, n = "";
      for (let i of r)
        n += t.write(i);
      return r.clear(), n !== "" && r.push(n), this._readableState.length = n.length, this;
    };
    var la = 1073741824;
    function ua(e) {
      if (e > la)
        throw new ta("size", "<= 1GiB", e);
      return e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++, e;
    }
    function Xi(e, t) {
      return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : vs(e) ? t.flowing && t.length ? t.buffer.first().length : t.length : e <= t.length ? e : t.ended ? t.length : 0;
    }
    g.prototype.read = function(e) {
      _("read", e), e === undefined ? e = NaN : Us(e) || (e = qs(e, 10));
      let t = this._readableState, r = e;
      if (e > t.highWaterMark && (t.highWaterMark = ua(e)), e !== 0 && (t.emittedReadable = false), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
        return _("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? Rr(this) : Nt(this), null;
      if (e = Xi(e, t), e === 0 && t.ended)
        return t.length === 0 && Rr(this), null;
      let n = t.needReadable;
      if (_("need readable", n), (t.length === 0 || t.length - e < t.highWaterMark) && (n = true, _("length less than watermark", n)), t.ended || t.reading || t.destroyed || t.errored || !t.constructed)
        n = false, _("reading, ended or constructing", n);
      else if (n) {
        _("do read"), t.reading = true, t.sync = true, t.length === 0 && (t.needReadable = true);
        try {
          this._read(t.highWaterMark);
        } catch (o) {
          ke(this, o);
        }
        t.sync = false, t.reading || (e = Xi(r, t));
      }
      let i;
      return e > 0 ? i = oo(e, t) : i = null, i === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null), t.length === 0 && (t.ended || (t.needReadable = true), r !== e && t.ended && Rr(this)), i !== null && !t.errorEmitted && !t.closeEmitted && (t.dataEmitted = true, this.emit("data", i)), i;
    };
    function fa(e, t) {
      if (_("onEofChunk"), !t.ended) {
        if (t.decoder) {
          let r = t.decoder.end();
          r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
        }
        t.ended = true, t.sync ? Nt(e) : (t.needReadable = false, t.emittedReadable = true, to(e));
      }
    }
    function Nt(e) {
      let t = e._readableState;
      _("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = false, t.emittedReadable || (_("emitReadable", t.flowing), t.emittedReadable = true, $.nextTick(to, e));
    }
    function to(e) {
      let t = e._readableState;
      _("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && !t.errored && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = false), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, no(e);
    }
    function Lt(e, t) {
      !t.readingMore && t.constructed && (t.readingMore = true, $.nextTick(sa, e, t));
    }
    function sa(e, t) {
      for (;!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0); ) {
        let r = t.length;
        if (_("maybeReadMore read 0"), e.read(0), r === t.length)
          break;
      }
      t.readingMore = false;
    }
    g.prototype._read = function(e) {
      throw new ea("_read()");
    };
    g.prototype.pipe = function(e, t) {
      let r = this, n = this._readableState;
      n.pipes.length === 1 && (n.multiAwaitDrain || (n.multiAwaitDrain = true, n.awaitDrainWriters = new js(n.awaitDrainWriters ? [n.awaitDrainWriters] : []))), n.pipes.push(e), _("pipe count=%d opts=%j", n.pipes.length, t);
      let o = (!t || t.end !== false) && e !== $.stdout && e !== $.stderr ? u : v;
      n.endEmitted ? $.nextTick(o) : r.once("end", o), e.on("unpipe", l);
      function l(w, b) {
        _("onunpipe"), w === r && b && b.hasUnpiped === false && (b.hasUnpiped = true, d());
      }
      function u() {
        _("onend"), e.end();
      }
      let f, s = false;
      function d() {
        _("cleanup"), e.removeListener("close", p), e.removeListener("finish", B), f && e.removeListener("drain", f), e.removeListener("error", h), e.removeListener("unpipe", l), r.removeListener("end", u), r.removeListener("end", v), r.removeListener("data", y), s = true, f && n.awaitDrainWriters && (!e._writableState || e._writableState.needDrain) && f();
      }
      function c() {
        s || (n.pipes.length === 1 && n.pipes[0] === e ? (_("false write response, pause", 0), n.awaitDrainWriters = e, n.multiAwaitDrain = false) : n.pipes.length > 1 && n.pipes.includes(e) && (_("false write response, pause", n.awaitDrainWriters.size), n.awaitDrainWriters.add(e)), r.pause()), f || (f = aa(r, e), e.on("drain", f));
      }
      r.on("data", y);
      function y(w) {
        _("ondata");
        let b = e.write(w);
        _("dest.write", b), b === false && c();
      }
      function h(w) {
        if (_("onerror", w), v(), e.removeListener("error", h), e.listenerCount("error") === 0) {
          let b = e._writableState || e._readableState;
          b && !b.errorEmitted ? ke(e, w) : e.emit("error", w);
        }
      }
      Ys(e, "error", h);
      function p() {
        e.removeListener("finish", B), v();
      }
      e.once("close", p);
      function B() {
        _("onfinish"), e.removeListener("close", p), v();
      }
      e.once("finish", B);
      function v() {
        _("unpipe"), r.unpipe(e);
      }
      return e.emit("pipe", r), e.writableNeedDrain === true ? n.flowing && c() : n.flowing || (_("pipe resume"), r.resume()), e;
    };
    function aa(e, t) {
      return function() {
        let n = e._readableState;
        n.awaitDrainWriters === t ? (_("pipeOnDrain", 1), n.awaitDrainWriters = null) : n.multiAwaitDrain && (_("pipeOnDrain", n.awaitDrainWriters.size), n.awaitDrainWriters.delete(t)), (!n.awaitDrainWriters || n.awaitDrainWriters.size === 0) && e.listenerCount("data") && e.resume();
      };
    }
    g.prototype.unpipe = function(e) {
      let t = this._readableState, r = { hasUnpiped: false };
      if (t.pipes.length === 0)
        return this;
      if (!e) {
        let i = t.pipes;
        t.pipes = [], this.pause();
        for (let o = 0;o < i.length; o++)
          i[o].emit("unpipe", this, { hasUnpiped: false });
        return this;
      }
      let n = ks(t.pipes, e);
      return n === -1 ? this : (t.pipes.splice(n, 1), t.pipes.length === 0 && this.pause(), e.emit("unpipe", this, r), this);
    };
    g.prototype.on = function(e, t) {
      let r = he.prototype.on.call(this, e, t), n = this._readableState;
      return e === "data" ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== false && this.resume()) : e === "readable" && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = true, n.flowing = false, n.emittedReadable = false, _("on readable", n.length, n.reading), n.length ? Nt(this) : n.reading || $.nextTick(ca, this)), r;
    };
    g.prototype.addListener = g.prototype.on;
    g.prototype.removeListener = function(e, t) {
      let r = he.prototype.removeListener.call(this, e, t);
      return e === "readable" && $.nextTick(ro, this), r;
    };
    g.prototype.off = g.prototype.removeListener;
    g.prototype.removeAllListeners = function(e) {
      let t = he.prototype.removeAllListeners.apply(this, arguments);
      return (e === "readable" || e === undefined) && $.nextTick(ro, this), t;
    };
    function ro(e) {
      let t = e._readableState;
      t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && t[xe] === false ? t.flowing = true : e.listenerCount("data") > 0 ? e.resume() : t.readableListening || (t.flowing = null);
    }
    function ca(e) {
      _("readable nexttick read 0"), e.read(0);
    }
    g.prototype.resume = function() {
      let e = this._readableState;
      return e.flowing || (_("resume"), e.flowing = !e.readableListening, da(this, e)), e[xe] = false, this;
    };
    function da(e, t) {
      t.resumeScheduled || (t.resumeScheduled = true, $.nextTick(ha, e, t));
    }
    function ha(e, t) {
      _("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = false, e.emit("resume"), no(e), t.flowing && !t.reading && e.read(0);
    }
    g.prototype.pause = function() {
      return _("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (_("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[xe] = true, this;
    };
    function no(e) {
      let t = e._readableState;
      for (_("flow", t.flowing);t.flowing && e.read() !== null; )
        ;
    }
    g.prototype.wrap = function(e) {
      let t = false;
      e.on("data", (n) => {
        !this.push(n) && e.pause && (t = true, e.pause());
      }), e.on("end", () => {
        this.push(null);
      }), e.on("error", (n) => {
        ke(this, n);
      }), e.on("close", () => {
        this.destroy();
      }), e.on("destroy", () => {
        this.destroy();
      }), this._read = () => {
        t && e.resume && (t = false, e.resume());
      };
      let r = Ws(e);
      for (let n = 1;n < r.length; n++) {
        let i = r[n];
        this[i] === undefined && typeof e[i] == "function" && (this[i] = e[i].bind(e));
      }
      return this;
    };
    g.prototype[Gs] = function() {
      return io(this);
    };
    g.prototype.iterator = function(e) {
      return e !== undefined && ia(e, "options"), io(this, e);
    };
    function io(e, t) {
      typeof e.read != "function" && (e = g.wrap(e, { objectMode: true }));
      let r = pa(e, t);
      return r.stream = e, r;
    }
    async function* pa(e, t) {
      let r = mr;
      function n(l) {
        this === e ? (r(), r = mr) : r = l;
      }
      e.on("readable", n);
      let i, o = zs(e, { writable: false }, (l) => {
        i = l ? zi(i, l) : null, r(), r = mr;
      });
      try {
        for (;; ) {
          let l = e.destroyed ? null : e.read();
          if (l !== null)
            yield l;
          else {
            if (i)
              throw i;
            if (i === null)
              return;
            await new $s(n);
          }
        }
      } catch (l) {
        throw i = zi(i, l), i;
      } finally {
        (i || t?.destroyOnReturn !== false) && (i === undefined || e._readableState.autoDestroy) ? Ue.destroyer(e, null) : (e.off("readable", n), o());
      }
    }
    Ji(g.prototype, { readable: { __proto__: null, get() {
      let e = this._readableState;
      return !!e && e.readable !== false && !e.destroyed && !e.errorEmitted && !e.endEmitted;
    }, set(e) {
      this._readableState && (this._readableState.readable = !!e);
    } }, readableDidRead: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.dataEmitted;
    } }, readableAborted: { __proto__: null, enumerable: false, get: function() {
      return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
    } }, readableHighWaterMark: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } }, readableBuffer: { __proto__: null, enumerable: false, get: function() {
      return this._readableState && this._readableState.buffer;
    } }, readableFlowing: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.flowing;
    }, set: function(e) {
      this._readableState && (this._readableState.flowing = e);
    } }, readableLength: { __proto__: null, enumerable: false, get() {
      return this._readableState.length;
    } }, readableObjectMode: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.objectMode : false;
    } }, readableEncoding: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.encoding : null;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.errored : null;
    } }, closed: { __proto__: null, get() {
      return this._readableState ? this._readableState.closed : false;
    } }, destroyed: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.destroyed : false;
    }, set(e) {
      !this._readableState || (this._readableState.destroyed = e);
    } }, readableEnded: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.endEmitted : false;
    } } });
    Ji(Ir.prototype, { pipesCount: { __proto__: null, get() {
      return this.pipes.length;
    } }, paused: { __proto__: null, get() {
      return this[xe] !== false;
    }, set(e) {
      this[xe] = !!e;
    } } });
    g._fromList = oo;
    function oo(e, t) {
      if (t.length === 0)
        return null;
      let r;
      return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.first() : r = t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r;
    }
    function Rr(e) {
      let t = e._readableState;
      _("endReadable", t.endEmitted), t.endEmitted || (t.ended = true, $.nextTick(ya, t, e));
    }
    function ya(e, t) {
      if (_("endReadableNT", e.endEmitted, e.length), !e.errored && !e.closeEmitted && !e.endEmitted && e.length === 0) {
        if (e.endEmitted = true, t.emit("end"), t.writable && t.allowHalfOpen === false)
          $.nextTick(wa, t);
        else if (e.autoDestroy) {
          let r = t._writableState;
          (!r || r.autoDestroy && (r.finished || r.writable === false)) && t.destroy();
        }
      }
    }
    function wa(e) {
      e.writable && !e.writableEnded && !e.destroyed && e.end();
    }
    g.from = function(e, t) {
      return oa(g, e, t);
    };
    var Ar;
    function lo() {
      return Ar === undefined && (Ar = {}), Ar;
    }
    g.fromWeb = function(e, t) {
      return lo().newStreamReadableFromReadableStream(e, t);
    };
    g.toWeb = function(e, t) {
      return lo().newReadableStreamFromStreamReadable(e, t);
    };
    g.wrap = function(e, t) {
      var r, n;
      return new g({ objectMode: (r = (n = e.readableObjectMode) !== null && n !== undefined ? n : e.objectMode) !== null && r !== undefined ? r : true, ...t, destroy(i, o) {
        Ue.destroyer(e, i), o(i);
      } }).wrap(e);
    };
  });
  Cr = E((ad, Eo) => {
    var Re = (se(), pe(k)), { ArrayPrototypeSlice: ao, Error: ba, FunctionPrototypeSymbolHasInstance: co, ObjectDefineProperty: ho, ObjectDefineProperties: ga, ObjectSetPrototypeOf: po, StringPrototypeToLowerCase: _a, Symbol: Ea, SymbolHasInstance: Sa } = I();
    Eo.exports = m;
    m.WritableState = Je;
    var { EventEmitter: ma } = Et(), ze = xt().Stream, { Buffer: Ft } = te(), Ot = Se(), { addAbortSignal: xa } = At(), { getHighWaterMark: Ra, getDefaultHighWaterMark: Aa } = Tt(), { ERR_INVALID_ARG_TYPE: Ia, ERR_METHOD_NOT_IMPLEMENTED: Ta, ERR_MULTIPLE_CALLBACK: yo, ERR_STREAM_CANNOT_PIPE: Ba, ERR_STREAM_DESTROYED: Xe, ERR_STREAM_ALREADY_FINISHED: La, ERR_STREAM_NULL_VALUES: Na, ERR_STREAM_WRITE_AFTER_END: Fa, ERR_UNKNOWN_ENCODING: wo } = C().codes, { errorOrDestroy: ve } = Ot;
    po(m.prototype, ze.prototype);
    po(m, ze);
    function Lr() {
    }
    var qe = Ea("kOnFinished");
    function Je(e, t, r) {
      typeof r != "boolean" && (r = t instanceof J()), this.objectMode = !!(e && e.objectMode), r && (this.objectMode = this.objectMode || !!(e && e.writableObjectMode)), this.highWaterMark = e ? Ra(this, e, "writableHighWaterMark", r) : Aa(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      let n = !!(e && e.decodeStrings === false);
      this.decodeStrings = !n, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = Ca.bind(undefined, t), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, Ct(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !e || e.emitClose !== false, this.autoDestroy = !e || e.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[qe] = [];
    }
    function Ct(e) {
      e.buffered = [], e.bufferedIndex = 0, e.allBuffers = true, e.allNoop = true;
    }
    Je.prototype.getBuffer = function() {
      return ao(this.buffered, this.bufferedIndex);
    };
    ho(Je.prototype, "bufferedRequestCount", { __proto__: null, get() {
      return this.buffered.length - this.bufferedIndex;
    } });
    function m(e) {
      let t = this instanceof J();
      if (!t && !co(m, this))
        return new m(e);
      this._writableState = new Je(e, this, t), e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev == "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this._final = e.final), typeof e.construct == "function" && (this._construct = e.construct), e.signal && xa(e.signal, this)), ze.call(this, e), Ot.construct(this, () => {
        let r = this._writableState;
        r.writing || Fr(this, r), Mr(this, r);
      });
    }
    ho(m, Sa, { __proto__: null, value: function(e) {
      return co(this, e) ? true : this !== m ? false : e && e._writableState instanceof Je;
    } });
    m.prototype.pipe = function() {
      ve(this, new Ba);
    };
    function bo(e, t, r, n) {
      let i = e._writableState;
      if (typeof r == "function")
        n = r, r = i.defaultEncoding;
      else {
        if (!r)
          r = i.defaultEncoding;
        else if (r !== "buffer" && !Ft.isEncoding(r))
          throw new wo(r);
        typeof n != "function" && (n = Lr);
      }
      if (t === null)
        throw new Na;
      if (!i.objectMode)
        if (typeof t == "string")
          i.decodeStrings !== false && (t = Ft.from(t, r), r = "buffer");
        else if (t instanceof Ft)
          r = "buffer";
        else if (ze._isUint8Array(t))
          t = ze._uint8ArrayToBuffer(t), r = "buffer";
        else
          throw new Ia("chunk", ["string", "Buffer", "Uint8Array"], t);
      let o;
      return i.ending ? o = new Fa : i.destroyed && (o = new Xe("write")), o ? (Re.nextTick(n, o), ve(e, o, true), o) : (i.pendingcb++, Ma(e, i, t, r, n));
    }
    m.prototype.write = function(e, t, r) {
      return bo(this, e, t, r) === true;
    };
    m.prototype.cork = function() {
      this._writableState.corked++;
    };
    m.prototype.uncork = function() {
      let e = this._writableState;
      e.corked && (e.corked--, e.writing || Fr(this, e));
    };
    m.prototype.setDefaultEncoding = function(t) {
      if (typeof t == "string" && (t = _a(t)), !Ft.isEncoding(t))
        throw new wo(t);
      return this._writableState.defaultEncoding = t, this;
    };
    function Ma(e, t, r, n, i) {
      let o = t.objectMode ? 1 : r.length;
      t.length += o;
      let l = t.length < t.highWaterMark;
      return l || (t.needDrain = true), t.writing || t.corked || t.errored || !t.constructed ? (t.buffered.push({ chunk: r, encoding: n, callback: i }), t.allBuffers && n !== "buffer" && (t.allBuffers = false), t.allNoop && i !== Lr && (t.allNoop = false)) : (t.writelen = o, t.writecb = i, t.writing = true, t.sync = true, e._write(r, n, t.onwrite), t.sync = false), l && !t.errored && !t.destroyed;
    }
    function fo(e, t, r, n, i, o, l) {
      t.writelen = n, t.writecb = l, t.writing = true, t.sync = true, t.destroyed ? t.onwrite(new Xe("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = false;
    }
    function so(e, t, r, n) {
      --t.pendingcb, n(r), Nr(t), ve(e, r);
    }
    function Ca(e, t) {
      let r = e._writableState, n = r.sync, i = r.writecb;
      if (typeof i != "function") {
        ve(e, new yo);
        return;
      }
      r.writing = false, r.writecb = null, r.length -= r.writelen, r.writelen = 0, t ? (t.stack, r.errored || (r.errored = t), e._readableState && !e._readableState.errored && (e._readableState.errored = t), n ? Re.nextTick(so, e, r, t, i) : so(e, r, t, i)) : (r.buffered.length > r.bufferedIndex && Fr(e, r), n ? r.afterWriteTickInfo !== null && r.afterWriteTickInfo.cb === i ? r.afterWriteTickInfo.count++ : (r.afterWriteTickInfo = { count: 1, cb: i, stream: e, state: r }, Re.nextTick(Oa, r.afterWriteTickInfo)) : go(e, r, 1, i));
    }
    function Oa({ stream: e, state: t, count: r, cb: n }) {
      return t.afterWriteTickInfo = null, go(e, t, r, n);
    }
    function go(e, t, r, n) {
      for (!t.ending && !e.destroyed && t.length === 0 && t.needDrain && (t.needDrain = false, e.emit("drain"));r-- > 0; )
        t.pendingcb--, n();
      t.destroyed && Nr(t), Mr(e, t);
    }
    function Nr(e) {
      if (e.writing)
        return;
      for (let i = e.bufferedIndex;i < e.buffered.length; ++i) {
        var t;
        let { chunk: o, callback: l } = e.buffered[i], u = e.objectMode ? 1 : o.length;
        e.length -= u, l((t = e.errored) !== null && t !== undefined ? t : new Xe("write"));
      }
      let r = e[qe].splice(0);
      for (let i = 0;i < r.length; i++) {
        var n;
        r[i]((n = e.errored) !== null && n !== undefined ? n : new Xe("end"));
      }
      Ct(e);
    }
    function Fr(e, t) {
      if (t.corked || t.bufferProcessing || t.destroyed || !t.constructed)
        return;
      let { buffered: r, bufferedIndex: n, objectMode: i } = t, o = r.length - n;
      if (!o)
        return;
      let l = n;
      if (t.bufferProcessing = true, o > 1 && e._writev) {
        t.pendingcb -= o - 1;
        let u = t.allNoop ? Lr : (s) => {
          for (let d = l;d < r.length; ++d)
            r[d].callback(s);
        }, f = t.allNoop && l === 0 ? r : ao(r, l);
        f.allBuffers = t.allBuffers, fo(e, t, true, t.length, f, "", u), Ct(t);
      } else {
        do {
          let { chunk: u, encoding: f, callback: s } = r[l];
          r[l++] = null;
          let d = i ? 1 : u.length;
          fo(e, t, false, d, u, f, s);
        } while (l < r.length && !t.writing);
        l === r.length ? Ct(t) : l > 256 ? (r.splice(0, l), t.bufferedIndex = 0) : t.bufferedIndex = l;
      }
      t.bufferProcessing = false;
    }
    m.prototype._write = function(e, t, r) {
      if (this._writev)
        this._writev([{ chunk: e, encoding: t }], r);
      else
        throw new Ta("_write()");
    };
    m.prototype._writev = null;
    m.prototype.end = function(e, t, r) {
      let n = this._writableState;
      typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null);
      let i;
      if (e != null) {
        let o = bo(this, e, t);
        o instanceof ba && (i = o);
      }
      return n.corked && (n.corked = 1, this.uncork()), i || (!n.errored && !n.ending ? (n.ending = true, Mr(this, n, true), n.ended = true) : n.finished ? i = new La("end") : n.destroyed && (i = new Xe("end"))), typeof r == "function" && (i || n.finished ? Re.nextTick(r, i) : n[qe].push(r)), this;
    };
    function Mt(e) {
      return e.ending && !e.destroyed && e.constructed && e.length === 0 && !e.errored && e.buffered.length === 0 && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted;
    }
    function Da(e, t) {
      let r = false;
      function n(i) {
        if (r) {
          ve(e, i ?? yo());
          return;
        }
        if (r = true, t.pendingcb--, i) {
          let o = t[qe].splice(0);
          for (let l = 0;l < o.length; l++)
            o[l](i);
          ve(e, i, t.sync);
        } else
          Mt(t) && (t.prefinished = true, e.emit("prefinish"), t.pendingcb++, Re.nextTick(Br, e, t));
      }
      t.sync = true, t.pendingcb++;
      try {
        e._final(n);
      } catch (i) {
        n(i);
      }
      t.sync = false;
    }
    function Pa(e, t) {
      !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? (t.finalCalled = true, Da(e, t)) : (t.prefinished = true, e.emit("prefinish")));
    }
    function Mr(e, t, r) {
      Mt(t) && (Pa(e, t), t.pendingcb === 0 && (r ? (t.pendingcb++, Re.nextTick((n, i) => {
        Mt(i) ? Br(n, i) : i.pendingcb--;
      }, e, t)) : Mt(t) && (t.pendingcb++, Br(e, t))));
    }
    function Br(e, t) {
      t.pendingcb--, t.finished = true;
      let r = t[qe].splice(0);
      for (let n = 0;n < r.length; n++)
        r[n]();
      if (e.emit("finish"), t.autoDestroy) {
        let n = e._readableState;
        (!n || n.autoDestroy && (n.endEmitted || n.readable === false)) && e.destroy();
      }
    }
    ga(m.prototype, { closed: { __proto__: null, get() {
      return this._writableState ? this._writableState.closed : false;
    } }, destroyed: { __proto__: null, get() {
      return this._writableState ? this._writableState.destroyed : false;
    }, set(e) {
      this._writableState && (this._writableState.destroyed = e);
    } }, writable: { __proto__: null, get() {
      let e = this._writableState;
      return !!e && e.writable !== false && !e.destroyed && !e.errored && !e.ending && !e.ended;
    }, set(e) {
      this._writableState && (this._writableState.writable = !!e);
    } }, writableFinished: { __proto__: null, get() {
      return this._writableState ? this._writableState.finished : false;
    } }, writableObjectMode: { __proto__: null, get() {
      return this._writableState ? this._writableState.objectMode : false;
    } }, writableBuffer: { __proto__: null, get() {
      return this._writableState && this._writableState.getBuffer();
    } }, writableEnded: { __proto__: null, get() {
      return this._writableState ? this._writableState.ending : false;
    } }, writableNeedDrain: { __proto__: null, get() {
      let e = this._writableState;
      return e ? !e.destroyed && !e.ending && e.needDrain : false;
    } }, writableHighWaterMark: { __proto__: null, get() {
      return this._writableState && this._writableState.highWaterMark;
    } }, writableCorked: { __proto__: null, get() {
      return this._writableState ? this._writableState.corked : 0;
    } }, writableLength: { __proto__: null, get() {
      return this._writableState && this._writableState.length;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._writableState ? this._writableState.errored : null;
    } }, writableAborted: { __proto__: null, enumerable: false, get: function() {
      return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
    } } });
    var ka = Ot.destroy;
    m.prototype.destroy = function(e, t) {
      let r = this._writableState;
      return !r.destroyed && (r.bufferedIndex < r.buffered.length || r[qe].length) && Re.nextTick(Nr, r), ka.call(this, e, t), this;
    };
    m.prototype._undestroy = Ot.undestroy;
    m.prototype._destroy = function(e, t) {
      t(e);
    };
    m.prototype[ma.captureRejectionSymbol] = function(e) {
      this.destroy(e);
    };
    var Tr;
    function _o() {
      return Tr === undefined && (Tr = {}), Tr;
    }
    m.fromWeb = function(e, t) {
      return _o().newStreamWritableFromWritableStream(e, t);
    };
    m.toWeb = function(e) {
      return _o().newWritableStreamFromStreamWritable(e);
    };
  });
  Mo = E((cd, Fo) => {
    var Or = (se(), pe(k)), Ua = te(), { isReadable: va, isWritable: qa, isIterable: So, isNodeStream: Wa, isReadableNodeStream: mo, isWritableNodeStream: xo, isDuplexNodeStream: $a } = ae(), Ro = ce(), { AbortError: No, codes: { ERR_INVALID_ARG_TYPE: ja, ERR_INVALID_RETURN_VALUE: Ao } } = C(), { destroyer: We } = Se(), Ga = J(), Ha = Ke(), { createDeferredPromise: Io } = V(), To = Er(), Bo = globalThis.Blob || Ua.Blob, Va = typeof Bo < "u" ? function(t) {
      return t instanceof Bo;
    } : function(t) {
      return false;
    }, Ya = globalThis.AbortController || ut().AbortController, { FunctionPrototypeCall: Lo } = I(), Ae = class extends Ga {
      constructor(t) {
        super(t), t?.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), t?.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
      }
    };
    Fo.exports = function e(t, r) {
      if ($a(t))
        return t;
      if (mo(t))
        return Dt({ readable: t });
      if (xo(t))
        return Dt({ writable: t });
      if (Wa(t))
        return Dt({ writable: false, readable: false });
      if (typeof t == "function") {
        let { value: i, write: o, final: l, destroy: u } = Ka(t);
        if (So(i))
          return To(Ae, i, { objectMode: true, write: o, final: l, destroy: u });
        let f = i?.then;
        if (typeof f == "function") {
          let s, d = Lo(f, i, (c) => {
            if (c != null)
              throw new Ao("nully", "body", c);
          }, (c) => {
            We(s, c);
          });
          return s = new Ae({ objectMode: true, readable: false, write: o, final(c) {
            l(async () => {
              try {
                await d, Or.nextTick(c, null);
              } catch (y) {
                Or.nextTick(c, y);
              }
            });
          }, destroy: u });
        }
        throw new Ao("Iterable, AsyncIterable or AsyncFunction", r, i);
      }
      if (Va(t))
        return e(t.arrayBuffer());
      if (So(t))
        return To(Ae, t, { objectMode: true, writable: false });
      if (typeof t?.writable == "object" || typeof t?.readable == "object") {
        let i = t != null && t.readable ? mo(t?.readable) ? t?.readable : e(t.readable) : undefined, o = t != null && t.writable ? xo(t?.writable) ? t?.writable : e(t.writable) : undefined;
        return Dt({ readable: i, writable: o });
      }
      let n = t?.then;
      if (typeof n == "function") {
        let i;
        return Lo(n, t, (o) => {
          o != null && i.push(o), i.push(null);
        }, (o) => {
          We(i, o);
        }), i = new Ae({ objectMode: true, writable: false, read() {
        } });
      }
      throw new ja(r, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], t);
    };
    function Ka(e) {
      let { promise: t, resolve: r } = Io(), n = new Ya, i = n.signal;
      return { value: e(async function* () {
        for (;; ) {
          let l = t;
          t = null;
          let { chunk: u, done: f, cb: s } = await l;
          if (Or.nextTick(s), f)
            return;
          if (i.aborted)
            throw new No(undefined, { cause: i.reason });
          ({ promise: t, resolve: r } = Io()), yield u;
        }
      }(), { signal: i }), write(l, u, f) {
        let s = r;
        r = null, s({ chunk: l, done: false, cb: f });
      }, final(l) {
        let u = r;
        r = null, u({ done: true, cb: l });
      }, destroy(l, u) {
        n.abort(), u(l);
      } };
    }
    function Dt(e) {
      let t = e.readable && typeof e.readable.read != "function" ? Ha.wrap(e.readable) : e.readable, r = e.writable, n = !!va(t), i = !!qa(r), o, l, u, f, s;
      function d(c) {
        let y = f;
        f = null, y ? y(c) : c ? s.destroy(c) : !n && !i && s.destroy();
      }
      return s = new Ae({ readableObjectMode: !!(t != null && t.readableObjectMode), writableObjectMode: !!(r != null && r.writableObjectMode), readable: n, writable: i }), i && (Ro(r, (c) => {
        i = false, c && We(t, c), d(c);
      }), s._write = function(c, y, h) {
        r.write(c, y) ? h() : o = h;
      }, s._final = function(c) {
        r.end(), l = c;
      }, r.on("drain", function() {
        if (o) {
          let c = o;
          o = null, c();
        }
      }), r.on("finish", function() {
        if (l) {
          let c = l;
          l = null, c();
        }
      })), n && (Ro(t, (c) => {
        n = false, c && We(t, c), d(c);
      }), t.on("readable", function() {
        if (u) {
          let c = u;
          u = null, c();
        }
      }), t.on("end", function() {
        s.push(null);
      }), s._read = function() {
        for (;; ) {
          let c = t.read();
          if (c === null) {
            u = s._read;
            return;
          }
          if (!s.push(c))
            return;
        }
      }), s._destroy = function(c, y) {
        !c && f !== null && (c = new No), u = null, o = null, l = null, f === null ? y(c) : (f = y, We(r, c), We(t, c));
      }, s;
    }
  });
  J = E((dd, Do) => {
    var { ObjectDefineProperties: za, ObjectGetOwnPropertyDescriptor: ie, ObjectKeys: Xa, ObjectSetPrototypeOf: Co } = I();
    Do.exports = j;
    var kr = Ke(), U = Cr();
    Co(j.prototype, kr.prototype);
    Co(j, kr);
    {
      let e = Xa(U.prototype);
      for (let t = 0;t < e.length; t++) {
        let r = e[t];
        j.prototype[r] || (j.prototype[r] = U.prototype[r]);
      }
    }
    function j(e) {
      if (!(this instanceof j))
        return new j(e);
      kr.call(this, e), U.call(this, e), e ? (this.allowHalfOpen = e.allowHalfOpen !== false, e.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), e.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
    }
    za(j.prototype, { writable: { __proto__: null, ...ie(U.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...ie(U.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...ie(U.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...ie(U.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...ie(U.prototype, "writableLength") }, writableFinished: { __proto__: null, ...ie(U.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...ie(U.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...ie(U.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...ie(U.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
      return this._readableState === undefined || this._writableState === undefined ? false : this._readableState.destroyed && this._writableState.destroyed;
    }, set(e) {
      this._readableState && this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
    } } });
    var Dr;
    function Oo() {
      return Dr === undefined && (Dr = {}), Dr;
    }
    j.fromWeb = function(e, t) {
      return Oo().newStreamDuplexFromReadableWritablePair(e, t);
    };
    j.toWeb = function(e) {
      return Oo().newReadableWritablePairFromDuplex(e);
    };
    var Pr;
    j.from = function(e) {
      return Pr || (Pr = Mo()), Pr(e, "body");
    };
  });
  qr = E((hd, ko) => {
    var { ObjectSetPrototypeOf: Po, Symbol: Ja } = I();
    ko.exports = oe;
    var { ERR_METHOD_NOT_IMPLEMENTED: Qa } = C().codes, vr = J(), { getHighWaterMark: Za } = Tt();
    Po(oe.prototype, vr.prototype);
    Po(oe, vr);
    var Qe = Ja("kCallback");
    function oe(e) {
      if (!(this instanceof oe))
        return new oe(e);
      let t = e ? Za(this, e, "readableHighWaterMark", true) : null;
      t === 0 && (e = { ...e, highWaterMark: null, readableHighWaterMark: t, writableHighWaterMark: e.writableHighWaterMark || 0 }), vr.call(this, e), this._readableState.sync = false, this[Qe] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", ec);
    }
    function Ur(e) {
      typeof this._flush == "function" && !this.destroyed ? this._flush((t, r) => {
        if (t) {
          e ? e(t) : this.destroy(t);
          return;
        }
        r != null && this.push(r), this.push(null), e && e();
      }) : (this.push(null), e && e());
    }
    function ec() {
      this._final !== Ur && Ur.call(this);
    }
    oe.prototype._final = Ur;
    oe.prototype._transform = function(e, t, r) {
      throw new Qa("_transform()");
    };
    oe.prototype._write = function(e, t, r) {
      let n = this._readableState, i = this._writableState, o = n.length;
      this._transform(e, t, (l, u) => {
        if (l) {
          r(l);
          return;
        }
        u != null && this.push(u), i.ended || o === n.length || n.length < n.highWaterMark ? r() : this[Qe] = r;
      });
    };
    oe.prototype._read = function() {
      if (this[Qe]) {
        let e = this[Qe];
        this[Qe] = null, e();
      }
    };
  });
  $r = E((pd, vo) => {
    var { ObjectSetPrototypeOf: Uo } = I();
    vo.exports = $e;
    var Wr = qr();
    Uo($e.prototype, Wr.prototype);
    Uo($e, Wr);
    function $e(e) {
      if (!(this instanceof $e))
        return new $e(e);
      Wr.call(this, e);
    }
    $e.prototype._transform = function(e, t, r) {
      r(null, e);
    };
  });
  Ut = E((yd, Vo) => {
    var Pt = (se(), pe(k)), { ArrayIsArray: tc, Promise: rc, SymbolAsyncIterator: nc } = I(), kt = ce(), { once: ic } = V(), oc = Se(), qo = J(), { aggregateTwoErrors: lc, codes: { ERR_INVALID_ARG_TYPE: Go, ERR_INVALID_RETURN_VALUE: jr, ERR_MISSING_ARGS: uc, ERR_STREAM_DESTROYED: fc, ERR_STREAM_PREMATURE_CLOSE: sc }, AbortError: ac } = C(), { validateFunction: cc, validateAbortSignal: dc } = He(), { isIterable: je, isReadable: Gr, isReadableNodeStream: Yr, isNodeStream: Wo } = ae(), hc = globalThis.AbortController || ut().AbortController, Hr, Vr;
    function $o(e, t, r) {
      let n = false;
      e.on("close", () => {
        n = true;
      });
      let i = kt(e, { readable: t, writable: r }, (o) => {
        n = !o;
      });
      return { destroy: (o) => {
        n || (n = true, oc.destroyer(e, o || new fc("pipe")));
      }, cleanup: i };
    }
    function pc(e) {
      return cc(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
    }
    function yc(e) {
      if (je(e))
        return e;
      if (Yr(e))
        return wc(e);
      throw new Go("val", ["Readable", "Iterable", "AsyncIterable"], e);
    }
    async function* wc(e) {
      Vr || (Vr = Ke()), yield* Vr.prototype[nc].call(e);
    }
    async function jo(e, t, r, { end: n }) {
      let i, o = null, l = (s) => {
        if (s && (i = s), o) {
          let d = o;
          o = null, d();
        }
      }, u = () => new rc((s, d) => {
        i ? d(i) : o = () => {
          i ? d(i) : s();
        };
      });
      t.on("drain", l);
      let f = kt(t, { readable: false }, l);
      try {
        t.writableNeedDrain && await u();
        for await (let s of e)
          t.write(s) || await u();
        n && t.end(), await u(), r();
      } catch (s) {
        r(i !== s ? lc(i, s) : s);
      } finally {
        f(), t.off("drain", l);
      }
    }
    function bc(...e) {
      return Ho(e, ic(pc(e)));
    }
    function Ho(e, t, r) {
      if (e.length === 1 && tc(e[0]) && (e = e[0]), e.length < 2)
        throw new uc("streams");
      let n = new hc, i = n.signal, o = r?.signal, l = [];
      dc(o, "options.signal");
      function u() {
        h(new ac);
      }
      o?.addEventListener("abort", u);
      let f, s, d = [], c = 0;
      function y(w) {
        h(w, --c === 0);
      }
      function h(w, b) {
        if (w && (!f || f.code === "ERR_STREAM_PREMATURE_CLOSE") && (f = w), !(!f && !b)) {
          for (;d.length; )
            d.shift()(f);
          o?.removeEventListener("abort", u), n.abort(), b && (f || l.forEach((L) => L()), Pt.nextTick(t, f, s));
        }
      }
      let p;
      for (let w = 0;w < e.length; w++) {
        let b = e[w], L = w < e.length - 1, N = w > 0, Q = L || r?.end !== false, Ie = w === e.length - 1;
        if (Wo(b)) {
          let q = function(Z) {
            Z && Z.name !== "AbortError" && Z.code !== "ERR_STREAM_PREMATURE_CLOSE" && y(Z);
          };
          var v = q;
          if (Q) {
            let { destroy: Z, cleanup: qt } = $o(b, L, N);
            d.push(Z), Gr(b) && Ie && l.push(qt);
          }
          b.on("error", q), Gr(b) && Ie && l.push(() => {
            b.removeListener("error", q);
          });
        }
        if (w === 0)
          if (typeof b == "function") {
            if (p = b({ signal: i }), !je(p))
              throw new jr("Iterable, AsyncIterable or Stream", "source", p);
          } else
            je(b) || Yr(b) ? p = b : p = qo.from(b);
        else if (typeof b == "function")
          if (p = yc(p), p = b(p, { signal: i }), L) {
            if (!je(p, true))
              throw new jr("AsyncIterable", `transform[${w - 1}]`, p);
          } else {
            var B;
            Hr || (Hr = $r());
            let q = new Hr({ objectMode: true }), Z = (B = p) === null || B === undefined ? undefined : B.then;
            if (typeof Z == "function")
              c++, Z.call(p, (Te) => {
                s = Te, Te != null && q.write(Te), Q && q.end(), Pt.nextTick(y);
              }, (Te) => {
                q.destroy(Te), Pt.nextTick(y, Te);
              });
            else if (je(p, true))
              c++, jo(p, q, y, { end: Q });
            else
              throw new jr("AsyncIterable or Promise", "destination", p);
            p = q;
            let { destroy: qt, cleanup: sl } = $o(p, false, true);
            d.push(qt), Ie && l.push(sl);
          }
        else if (Wo(b)) {
          if (Yr(p)) {
            c += 2;
            let q = gc(p, b, y, { end: Q });
            Gr(b) && Ie && l.push(q);
          } else if (je(p))
            c++, jo(p, b, y, { end: Q });
          else
            throw new Go("val", ["Readable", "Iterable", "AsyncIterable"], p);
          p = b;
        } else
          p = qo.from(b);
      }
      return (i != null && i.aborted || o != null && o.aborted) && Pt.nextTick(u), p;
    }
    function gc(e, t, r, { end: n }) {
      let i = false;
      return t.on("close", () => {
        i || r(new sc);
      }), e.pipe(t, { end: n }), n ? e.once("end", () => {
        i = true, t.end();
      }) : r(), kt(e, { readable: true, writable: false }, (o) => {
        let l = e._readableState;
        o && o.code === "ERR_STREAM_PREMATURE_CLOSE" && l && l.ended && !l.errored && !l.errorEmitted ? e.once("end", r).once("error", r) : r(o);
      }), kt(t, { readable: false, writable: true }, r);
    }
    Vo.exports = { pipelineImpl: Ho, pipeline: bc };
  });
  Jo = E((wd, Xo) => {
    var { pipeline: _c } = Ut(), vt = J(), { destroyer: Ec } = Se(), { isNodeStream: Sc, isReadable: Yo, isWritable: Ko } = ae(), { AbortError: mc, codes: { ERR_INVALID_ARG_VALUE: zo, ERR_MISSING_ARGS: xc } } = C();
    Xo.exports = function(...t) {
      if (t.length === 0)
        throw new xc("streams");
      if (t.length === 1)
        return vt.from(t[0]);
      let r = [...t];
      if (typeof t[0] == "function" && (t[0] = vt.from(t[0])), typeof t[t.length - 1] == "function") {
        let h = t.length - 1;
        t[h] = vt.from(t[h]);
      }
      for (let h = 0;h < t.length; ++h)
        if (!!Sc(t[h])) {
          if (h < t.length - 1 && !Yo(t[h]))
            throw new zo(`streams[${h}]`, r[h], "must be readable");
          if (h > 0 && !Ko(t[h]))
            throw new zo(`streams[${h}]`, r[h], "must be writable");
        }
      let n, i, o, l, u;
      function f(h) {
        let p = l;
        l = null, p ? p(h) : h ? u.destroy(h) : !y && !c && u.destroy();
      }
      let s = t[0], d = _c(t, f), c = !!Ko(s), y = !!Yo(d);
      return u = new vt({ writableObjectMode: !!(s != null && s.writableObjectMode), readableObjectMode: !!(d != null && d.writableObjectMode), writable: c, readable: y }), c && (u._write = function(h, p, B) {
        s.write(h, p) ? B() : n = B;
      }, u._final = function(h) {
        s.end(), i = h;
      }, s.on("drain", function() {
        if (n) {
          let h = n;
          n = null, h();
        }
      }), d.on("finish", function() {
        if (i) {
          let h = i;
          i = null, h();
        }
      })), y && (d.on("readable", function() {
        if (o) {
          let h = o;
          o = null, h();
        }
      }), d.on("end", function() {
        u.push(null);
      }), u._read = function() {
        for (;; ) {
          let h = d.read();
          if (h === null) {
            o = u._read;
            return;
          }
          if (!u.push(h))
            return;
        }
      }), u._destroy = function(h, p) {
        !h && l !== null && (h = new mc), o = null, n = null, i = null, l === null ? p(h) : (l = p, Ec(d, h));
      }, u;
    };
  });
  Kr = E((bd, Qo) => {
    var { ArrayPrototypePop: Rc, Promise: Ac } = I(), { isIterable: Ic, isNodeStream: Tc } = ae(), { pipelineImpl: Bc } = Ut(), { finished: Lc } = ce();
    function Nc(...e) {
      return new Ac((t, r) => {
        let n, i, o = e[e.length - 1];
        if (o && typeof o == "object" && !Tc(o) && !Ic(o)) {
          let l = Rc(e);
          n = l.signal, i = l.end;
        }
        Bc(e, (l, u) => {
          l ? r(l) : t(u);
        }, { signal: n, end: i });
      });
    }
    Qo.exports = { finished: Lc, pipeline: Nc };
  });
  fl = E((gd, ul) => {
    var { Buffer: Fc } = te(), { ObjectDefineProperty: le, ObjectKeys: tl, ReflectApply: rl } = I(), { promisify: { custom: nl } } = V(), { streamReturningOperators: Zo, promiseReturningOperators: el } = di(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: il } } = C(), Mc = Jo(), { pipeline: ol } = Ut(), { destroyer: Cc } = Se(), ll = ce(), zr = Kr(), Xr = ae(), R = ul.exports = xt().Stream;
    R.isDisturbed = Xr.isDisturbed;
    R.isErrored = Xr.isErrored;
    R.isReadable = Xr.isReadable;
    R.Readable = Ke();
    for (let e of tl(Zo)) {
      let r = function(...n) {
        if (new.target)
          throw il();
        return R.Readable.from(rl(t, this, n));
      };
      Dc = r;
      let t = Zo[e];
      le(r, "name", { __proto__: null, value: t.name }), le(r, "length", { __proto__: null, value: t.length }), le(R.Readable.prototype, e, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
    }
    var Dc;
    for (let e of tl(el)) {
      let r = function(...i) {
        if (new.target)
          throw il();
        return rl(t, this, i);
      };
      Dc = r;
      let t = el[e];
      le(r, "name", { __proto__: null, value: t.name }), le(r, "length", { __proto__: null, value: t.length }), le(R.Readable.prototype, e, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
    }
    var Dc;
    R.Writable = Cr();
    R.Duplex = J();
    R.Transform = qr();
    R.PassThrough = $r();
    R.pipeline = ol;
    var { addAbortSignal: Oc } = At();
    R.addAbortSignal = Oc;
    R.finished = ll;
    R.destroy = Cc;
    R.compose = Mc;
    le(R, "promises", { __proto__: null, configurable: true, enumerable: true, get() {
      return zr;
    } });
    le(ol, nl, { __proto__: null, enumerable: true, get() {
      return zr.pipeline;
    } });
    le(ll, nl, { __proto__: null, enumerable: true, get() {
      return zr.finished;
    } });
    R.Stream = R;
    R._isUint8Array = function(t) {
      return t instanceof Uint8Array;
    };
    R._uint8ArrayToBuffer = function(t) {
      return Fc.from(t.buffer, t.byteOffset, t.byteLength);
    };
  });
  Jr = E((_d, A) => {
    var T = fl(), Pc = Kr(), kc = T.Readable.destroy;
    A.exports = T.Readable;
    A.exports._uint8ArrayToBuffer = T._uint8ArrayToBuffer;
    A.exports._isUint8Array = T._isUint8Array;
    A.exports.isDisturbed = T.isDisturbed;
    A.exports.isErrored = T.isErrored;
    A.exports.isReadable = T.isReadable;
    A.exports.Readable = T.Readable;
    A.exports.Writable = T.Writable;
    A.exports.Duplex = T.Duplex;
    A.exports.Transform = T.Transform;
    A.exports.PassThrough = T.PassThrough;
    A.exports.addAbortSignal = T.addAbortSignal;
    A.exports.finished = T.finished;
    A.exports.destroy = T.destroy;
    A.exports.destroy = kc;
    A.exports.pipeline = T.pipeline;
    A.exports.compose = T.compose;
    Object.defineProperty(T, "promises", { configurable: true, enumerable: true, get() {
      return Pc;
    } });
    A.exports.Stream = T.Stream;
    A.exports.default = A.exports;
  });
  Ze = {};
  Qr(Ze, { default: () => Uc });
  ue(Ze, rt(Jr()));
  Uc = rt(Jr());
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// node:string_decoder
var exports_string_decoder = {};
__export(exports_string_decoder, {
  default: () => export_default,
  StringDecoder: () => export_StringDecoder
});
var Tt2, Z, Nt, St, Rt, _t, R = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Lt = (e, t, r, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of St(t))
      !_t.call(e, n) && n !== r && Z(e, n, { get: () => t[n], enumerable: !(i = Nt(t, n)) || i.enumerable });
  return e;
}, kt = (e, t, r) => (r = e != null ? Tt2(Rt(e)) : {}, Lt(t || !e || !e.__esModule ? Z(r, "default", { value: e, enumerable: true }) : r, e)), tt2, rt2, Bt, mt, At2, Ut2, export_StringDecoder, export_default;
var init_string_decoder = __esm(() => {
  Tt2 = Object.create;
  Z = Object.defineProperty;
  Nt = Object.getOwnPropertyDescriptor;
  St = Object.getOwnPropertyNames;
  Rt = Object.getPrototypeOf;
  _t = Object.prototype.hasOwnProperty;
  tt2 = R((k2) => {
    k2.byteLength = Mt;
    k2.toByteArray = Pt;
    k2.fromByteArray = Gt;
    var d = [], w = [], Dt = typeof Uint8Array < "u" ? Uint8Array : Array, O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (I2 = 0, Q = O.length;I2 < Q; ++I2)
      d[I2] = O[I2], w[O.charCodeAt(I2)] = I2;
    var I2, Q;
    w[45] = 62;
    w[95] = 63;
    function v(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      r === -1 && (r = t);
      var i = r === t ? 0 : 4 - r % 4;
      return [r, i];
    }
    function Mt(e) {
      var t = v(e), r = t[0], i = t[1];
      return (r + i) * 3 / 4 - i;
    }
    function $t(e, t, r) {
      return (t + r) * 3 / 4 - r;
    }
    function Pt(e) {
      var t, r = v(e), i = r[0], n = r[1], o = new Dt($t(e, i, n)), u = 0, s = n > 0 ? i - 4 : i, f;
      for (f = 0;f < s; f += 4)
        t = w[e.charCodeAt(f)] << 18 | w[e.charCodeAt(f + 1)] << 12 | w[e.charCodeAt(f + 2)] << 6 | w[e.charCodeAt(f + 3)], o[u++] = t >> 16 & 255, o[u++] = t >> 8 & 255, o[u++] = t & 255;
      return n === 2 && (t = w[e.charCodeAt(f)] << 2 | w[e.charCodeAt(f + 1)] >> 4, o[u++] = t & 255), n === 1 && (t = w[e.charCodeAt(f)] << 10 | w[e.charCodeAt(f + 1)] << 4 | w[e.charCodeAt(f + 2)] >> 2, o[u++] = t >> 8 & 255, o[u++] = t & 255), o;
    }
    function Ot(e) {
      return d[e >> 18 & 63] + d[e >> 12 & 63] + d[e >> 6 & 63] + d[e & 63];
    }
    function qt(e, t, r) {
      for (var i, n = [], o = t;o < r; o += 3)
        i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), n.push(Ot(i));
      return n.join("");
    }
    function Gt(e) {
      for (var t, r = e.length, i = r % 3, n = [], o = 16383, u = 0, s = r - i;u < s; u += o)
        n.push(qt(e, u, u + o > s ? s : u + o));
      return i === 1 ? (t = e[r - 1], n.push(d[t >> 2] + d[t << 4 & 63] + "==")) : i === 2 && (t = (e[r - 2] << 8) + e[r - 1], n.push(d[t >> 10] + d[t >> 4 & 63] + d[t << 2 & 63] + "=")), n.join("");
    }
  });
  rt2 = R((q) => {
    q.read = function(e, t, r, i, n) {
      var o, u, s = n * 8 - i - 1, f = (1 << s) - 1, l = f >> 1, a = -7, c = r ? n - 1 : 0, U = r ? -1 : 1, x = e[t + c];
      for (c += U, o = x & (1 << -a) - 1, x >>= -a, a += s;a > 0; o = o * 256 + e[t + c], c += U, a -= 8)
        ;
      for (u = o & (1 << -a) - 1, o >>= -a, a += i;a > 0; u = u * 256 + e[t + c], c += U, a -= 8)
        ;
      if (o === 0)
        o = 1 - l;
      else {
        if (o === f)
          return u ? NaN : (x ? -1 : 1) * (1 / 0);
        u = u + Math.pow(2, i), o = o - l;
      }
      return (x ? -1 : 1) * u * Math.pow(2, o - i);
    };
    q.write = function(e, t, r, i, n, o) {
      var u, s, f, l = o * 8 - n - 1, a = (1 << l) - 1, c = a >> 1, U = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = i ? 0 : o - 1, P = i ? 1 : -1, Ct = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, u = a) : (u = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), u + c >= 1 ? t += U / f : t += U * Math.pow(2, 1 - c), t * f >= 2 && (u++, f /= 2), u + c >= a ? (s = 0, u = a) : u + c >= 1 ? (s = (t * f - 1) * Math.pow(2, n), u = u + c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, n), u = 0));n >= 8; e[r + x] = s & 255, x += P, s /= 256, n -= 8)
        ;
      for (u = u << n | s, l += n;l > 0; e[r + x] = u & 255, x += P, u /= 256, l -= 8)
        ;
      e[r + x - P] |= Ct * 128;
    };
  });
  Bt = R((S) => {
    var G = tt2(), T = rt2(), et2 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    S.Buffer = h;
    S.SlowBuffer = Vt;
    S.INSPECT_MAX_BYTES = 50;
    var D = 2147483647;
    S.kMaxLength = D;
    h.TYPED_ARRAY_SUPPORT = Wt();
    !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Wt() {
      try {
        let e = new Uint8Array(1), t = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(h.prototype, "parent", { enumerable: true, get: function() {
      if (!!h.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(h.prototype, "offset", { enumerable: true, get: function() {
      if (!!h.isBuffer(this))
        return this.byteOffset;
    } });
    function E2(e) {
      if (e > D)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, h.prototype), t;
    }
    function h(e, t, r) {
      if (typeof e == "number") {
        if (typeof t == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return b(e);
      }
      return ut2(e, t, r);
    }
    h.poolSize = 8192;
    function ut2(e, t, r) {
      if (typeof e == "string")
        return jt(e, t);
      if (ArrayBuffer.isView(e))
        return bt(e);
      if (e == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (B(e, ArrayBuffer) || e && B(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (B(e, SharedArrayBuffer) || e && B(e.buffer, SharedArrayBuffer)))
        return Y(e, t, r);
      if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let i = e.valueOf && e.valueOf();
      if (i != null && i !== e)
        return h.from(i, t, r);
      let n = Ht(e);
      if (n)
        return n;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return h.from(e[Symbol.toPrimitive]("string"), t, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    h.from = function(e, t, r) {
      return ut2(e, t, r);
    };
    Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(h, Uint8Array);
    function ht(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Yt(e, t, r) {
      return ht(e), e <= 0 ? E2(e) : t !== undefined ? typeof r == "string" ? E2(e).fill(t, r) : E2(e).fill(t) : E2(e);
    }
    h.alloc = function(e, t, r) {
      return Yt(e, t, r);
    };
    function b(e) {
      return ht(e), E2(e < 0 ? 0 : H(e) | 0);
    }
    h.allocUnsafe = function(e) {
      return b(e);
    };
    h.allocUnsafeSlow = function(e) {
      return b(e);
    };
    function jt(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !h.isEncoding(t))
        throw new TypeError("Unknown encoding: " + t);
      let r = st(e, t) | 0, i = E2(r), n = i.write(e, t);
      return n !== r && (i = i.slice(0, n)), i;
    }
    function W(e) {
      let t = e.length < 0 ? 0 : H(e.length) | 0, r = E2(t);
      for (let i = 0;i < t; i += 1)
        r[i] = e[i] & 255;
      return r;
    }
    function bt(e) {
      if (B(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return Y(t.buffer, t.byteOffset, t.byteLength);
      }
      return W(e);
    }
    function Y(e, t, r) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let i;
      return t === undefined && r === undefined ? i = new Uint8Array(e) : r === undefined ? i = new Uint8Array(e, t) : i = new Uint8Array(e, t, r), Object.setPrototypeOf(i, h.prototype), i;
    }
    function Ht(e) {
      if (h.isBuffer(e)) {
        let t = H(e.length) | 0, r = E2(t);
        return r.length === 0 || e.copy(r, 0, 0, t), r;
      }
      if (e.length !== undefined)
        return typeof e.length != "number" || X(e.length) ? E2(0) : W(e);
      if (e.type === "Buffer" && Array.isArray(e.data))
        return W(e.data);
    }
    function H(e) {
      if (e >= D)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + D.toString(16) + " bytes");
      return e | 0;
    }
    function Vt(e) {
      return +e != e && (e = 0), h.alloc(+e);
    }
    h.isBuffer = function(t) {
      return t != null && t._isBuffer === true && t !== h.prototype;
    };
    h.compare = function(t, r) {
      if (B(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), B(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), !h.isBuffer(t) || !h.isBuffer(r))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === r)
        return 0;
      let i = t.length, n = r.length;
      for (let o = 0, u = Math.min(i, n);o < u; ++o)
        if (t[o] !== r[o]) {
          i = t[o], n = r[o];
          break;
        }
      return i < n ? -1 : n < i ? 1 : 0;
    };
    h.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    h.concat = function(t, r) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0)
        return h.alloc(0);
      let i;
      if (r === undefined)
        for (r = 0, i = 0;i < t.length; ++i)
          r += t[i].length;
      let n = h.allocUnsafe(r), o = 0;
      for (i = 0;i < t.length; ++i) {
        let u = t[i];
        if (B(u, Uint8Array))
          o + u.length > n.length ? (h.isBuffer(u) || (u = h.from(u)), u.copy(n, o)) : Uint8Array.prototype.set.call(n, u, o);
        else if (h.isBuffer(u))
          u.copy(n, o);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        o += u.length;
      }
      return n;
    };
    function st(e, t) {
      if (h.isBuffer(e))
        return e.length;
      if (ArrayBuffer.isView(e) || B(e, ArrayBuffer))
        return e.byteLength;
      if (typeof e != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
      let r = e.length, i = arguments.length > 2 && arguments[2] === true;
      if (!i && r === 0)
        return 0;
      let n = false;
      for (;; )
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return j(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return dt(e).length;
          default:
            if (n)
              return i ? -1 : j(e).length;
            t = ("" + t).toLowerCase(), n = true;
        }
    }
    h.byteLength = st;
    function Xt(e, t, r) {
      let i = false;
      if ((t === undefined || t < 0) && (t = 0), t > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
        return "";
      for (e || (e = "utf8");; )
        switch (e) {
          case "hex":
            return ir2(this, t, r);
          case "utf8":
          case "utf-8":
            return ct(this, t, r);
          case "ascii":
            return rr(this, t, r);
          case "latin1":
          case "binary":
            return er(this, t, r);
          case "base64":
            return vt(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return nr(this, t, r);
          default:
            if (i)
              throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), i = true;
        }
    }
    h.prototype._isBuffer = true;
    function F(e, t, r) {
      let i = e[t];
      e[t] = e[r], e[r] = i;
    }
    h.prototype.swap16 = function() {
      let t = this.length;
      if (t % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let r = 0;r < t; r += 2)
        F(this, r, r + 1);
      return this;
    };
    h.prototype.swap32 = function() {
      let t = this.length;
      if (t % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let r = 0;r < t; r += 4)
        F(this, r, r + 3), F(this, r + 1, r + 2);
      return this;
    };
    h.prototype.swap64 = function() {
      let t = this.length;
      if (t % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let r = 0;r < t; r += 8)
        F(this, r, r + 7), F(this, r + 1, r + 6), F(this, r + 2, r + 5), F(this, r + 3, r + 4);
      return this;
    };
    h.prototype.toString = function() {
      let t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? ct(this, 0, t) : Xt.apply(this, arguments);
    };
    h.prototype.toLocaleString = h.prototype.toString;
    h.prototype.equals = function(t) {
      if (!h.isBuffer(t))
        throw new TypeError("Argument must be a Buffer");
      return this === t ? true : h.compare(this, t) === 0;
    };
    h.prototype.inspect = function() {
      let t = "", r = S.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
    };
    et2 && (h.prototype[et2] = h.prototype.inspect);
    h.prototype.compare = function(t, r, i, n, o) {
      if (B(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
      if (r === undefined && (r = 0), i === undefined && (i = t ? t.length : 0), n === undefined && (n = 0), o === undefined && (o = this.length), r < 0 || i > t.length || n < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (n >= o && r >= i)
        return 0;
      if (n >= o)
        return -1;
      if (r >= i)
        return 1;
      if (r >>>= 0, i >>>= 0, n >>>= 0, o >>>= 0, this === t)
        return 0;
      let u = o - n, s = i - r, f = Math.min(u, s), l = this.slice(n, o), a = t.slice(r, i);
      for (let c = 0;c < f; ++c)
        if (l[c] !== a[c]) {
          u = l[c], s = a[c];
          break;
        }
      return u < s ? -1 : s < u ? 1 : 0;
    };
    function ft(e, t, r, i, n) {
      if (e.length === 0)
        return -1;
      if (typeof r == "string" ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, X(r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (n)
          return -1;
        r = e.length - 1;
      } else if (r < 0)
        if (n)
          r = 0;
        else
          return -1;
      if (typeof t == "string" && (t = h.from(t, i)), h.isBuffer(t))
        return t.length === 0 ? -1 : it(e, t, r, i, n);
      if (typeof t == "number")
        return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : it(e, [t], r, i, n);
      throw new TypeError("val must be string, number or Buffer");
    }
    function it(e, t, r, i, n) {
      let o = 1, u = e.length, s = t.length;
      if (i !== undefined && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
          return -1;
        o = 2, u /= 2, s /= 2, r /= 2;
      }
      function f(a, c) {
        return o === 1 ? a[c] : a.readUInt16BE(c * o);
      }
      let l;
      if (n) {
        let a = -1;
        for (l = r;l < u; l++)
          if (f(e, l) === f(t, a === -1 ? 0 : l - a)) {
            if (a === -1 && (a = l), l - a + 1 === s)
              return a * o;
          } else
            a !== -1 && (l -= l - a), a = -1;
      } else
        for (r + s > u && (r = u - s), l = r;l >= 0; l--) {
          let a = true;
          for (let c = 0;c < s; c++)
            if (f(e, l + c) !== f(t, c)) {
              a = false;
              break;
            }
          if (a)
            return l;
        }
      return -1;
    }
    h.prototype.includes = function(t, r, i) {
      return this.indexOf(t, r, i) !== -1;
    };
    h.prototype.indexOf = function(t, r, i) {
      return ft(this, t, r, i, true);
    };
    h.prototype.lastIndexOf = function(t, r, i) {
      return ft(this, t, r, i, false);
    };
    function Jt(e, t, r, i) {
      r = Number(r) || 0;
      let n = e.length - r;
      i ? (i = Number(i), i > n && (i = n)) : i = n;
      let o = t.length;
      i > o / 2 && (i = o / 2);
      let u;
      for (u = 0;u < i; ++u) {
        let s = parseInt(t.substr(u * 2, 2), 16);
        if (X(s))
          return u;
        e[r + u] = s;
      }
      return u;
    }
    function zt(e, t, r, i) {
      return M(j(t, e.length - r), e, r, i);
    }
    function Kt(e, t, r, i) {
      return M(sr(t), e, r, i);
    }
    function Zt(e, t, r, i) {
      return M(dt(t), e, r, i);
    }
    function Qt(e, t, r, i) {
      return M(fr(t, e.length - r), e, r, i);
    }
    h.prototype.write = function(t, r, i, n) {
      if (r === undefined)
        n = "utf8", i = this.length, r = 0;
      else if (i === undefined && typeof r == "string")
        n = r, i = this.length, r = 0;
      else if (isFinite(r))
        r = r >>> 0, isFinite(i) ? (i = i >>> 0, n === undefined && (n = "utf8")) : (n = i, i = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let o = this.length - r;
      if ((i === undefined || i > o) && (i = o), t.length > 0 && (i < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");
      let u = false;
      for (;; )
        switch (n) {
          case "hex":
            return Jt(this, t, r, i);
          case "utf8":
          case "utf-8":
            return zt(this, t, r, i);
          case "ascii":
          case "latin1":
          case "binary":
            return Kt(this, t, r, i);
          case "base64":
            return Zt(this, t, r, i);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Qt(this, t, r, i);
          default:
            if (u)
              throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), u = true;
        }
    };
    h.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function vt(e, t, r) {
      return t === 0 && r === e.length ? G.fromByteArray(e) : G.fromByteArray(e.slice(t, r));
    }
    function ct(e, t, r) {
      r = Math.min(e.length, r);
      let i = [], n = t;
      for (;n < r; ) {
        let o = e[n], u = null, s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (n + s <= r) {
          let f, l, a, c;
          switch (s) {
            case 1:
              o < 128 && (u = o);
              break;
            case 2:
              f = e[n + 1], (f & 192) === 128 && (c = (o & 31) << 6 | f & 63, c > 127 && (u = c));
              break;
            case 3:
              f = e[n + 1], l = e[n + 2], (f & 192) === 128 && (l & 192) === 128 && (c = (o & 15) << 12 | (f & 63) << 6 | l & 63, c > 2047 && (c < 55296 || c > 57343) && (u = c));
              break;
            case 4:
              f = e[n + 1], l = e[n + 2], a = e[n + 3], (f & 192) === 128 && (l & 192) === 128 && (a & 192) === 128 && (c = (o & 15) << 18 | (f & 63) << 12 | (l & 63) << 6 | a & 63, c > 65535 && c < 1114112 && (u = c));
          }
        }
        u === null ? (u = 65533, s = 1) : u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), i.push(u), n += s;
      }
      return tr(i);
    }
    var nt = 4096;
    function tr(e) {
      let t = e.length;
      if (t <= nt)
        return String.fromCharCode.apply(String, e);
      let r = "", i = 0;
      for (;i < t; )
        r += String.fromCharCode.apply(String, e.slice(i, i += nt));
      return r;
    }
    function rr(e, t, r) {
      let i = "";
      r = Math.min(e.length, r);
      for (let n = t;n < r; ++n)
        i += String.fromCharCode(e[n] & 127);
      return i;
    }
    function er(e, t, r) {
      let i = "";
      r = Math.min(e.length, r);
      for (let n = t;n < r; ++n)
        i += String.fromCharCode(e[n]);
      return i;
    }
    function ir2(e, t, r) {
      let i = e.length;
      (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
      let n = "";
      for (let o = t;o < r; ++o)
        n += cr[e[o]];
      return n;
    }
    function nr(e, t, r) {
      let i = e.slice(t, r), n = "";
      for (let o = 0;o < i.length - 1; o += 2)
        n += String.fromCharCode(i[o] + i[o + 1] * 256);
      return n;
    }
    h.prototype.slice = function(t, r) {
      let i = this.length;
      t = ~~t, r = r === undefined ? i : ~~r, t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), r < 0 ? (r += i, r < 0 && (r = 0)) : r > i && (r = i), r < t && (r = t);
      let n = this.subarray(t, r);
      return Object.setPrototypeOf(n, h.prototype), n;
    };
    function p(e, t, r) {
      if (e % 1 !== 0 || e < 0)
        throw new RangeError("offset is not uint");
      if (e + t > r)
        throw new RangeError("Trying to access beyond buffer length");
    }
    h.prototype.readUintLE = h.prototype.readUIntLE = function(t, r, i) {
      t = t >>> 0, r = r >>> 0, i || p(t, r, this.length);
      let n = this[t], o = 1, u = 0;
      for (;++u < r && (o *= 256); )
        n += this[t + u] * o;
      return n;
    };
    h.prototype.readUintBE = h.prototype.readUIntBE = function(t, r, i) {
      t = t >>> 0, r = r >>> 0, i || p(t, r, this.length);
      let n = this[t + --r], o = 1;
      for (;r > 0 && (o *= 256); )
        n += this[t + --r] * o;
      return n;
    };
    h.prototype.readUint8 = h.prototype.readUInt8 = function(t, r) {
      return t = t >>> 0, r || p(t, 1, this.length), this[t];
    };
    h.prototype.readUint16LE = h.prototype.readUInt16LE = function(t, r) {
      return t = t >>> 0, r || p(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    h.prototype.readUint16BE = h.prototype.readUInt16BE = function(t, r) {
      return t = t >>> 0, r || p(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    h.prototype.readUint32LE = h.prototype.readUInt32LE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    h.prototype.readUint32BE = h.prototype.readUInt32BE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    h.prototype.readBigUInt64LE = m(function(t) {
      t = t >>> 0, N(t, "offset");
      let r = this[t], i = this[t + 7];
      (r === undefined || i === undefined) && _(t, this.length - 8);
      let n = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + i * 2 ** 24;
      return BigInt(n) + (BigInt(o) << BigInt(32));
    });
    h.prototype.readBigUInt64BE = m(function(t) {
      t = t >>> 0, N(t, "offset");
      let r = this[t], i = this[t + 7];
      (r === undefined || i === undefined) && _(t, this.length - 8);
      let n = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + i;
      return (BigInt(n) << BigInt(32)) + BigInt(o);
    });
    h.prototype.readIntLE = function(t, r, i) {
      t = t >>> 0, r = r >>> 0, i || p(t, r, this.length);
      let n = this[t], o = 1, u = 0;
      for (;++u < r && (o *= 256); )
        n += this[t + u] * o;
      return o *= 128, n >= o && (n -= Math.pow(2, 8 * r)), n;
    };
    h.prototype.readIntBE = function(t, r, i) {
      t = t >>> 0, r = r >>> 0, i || p(t, r, this.length);
      let n = r, o = 1, u = this[t + --n];
      for (;n > 0 && (o *= 256); )
        u += this[t + --n] * o;
      return o *= 128, u >= o && (u -= Math.pow(2, 8 * r)), u;
    };
    h.prototype.readInt8 = function(t, r) {
      return t = t >>> 0, r || p(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    h.prototype.readInt16LE = function(t, r) {
      t = t >>> 0, r || p(t, 2, this.length);
      let i = this[t] | this[t + 1] << 8;
      return i & 32768 ? i | 4294901760 : i;
    };
    h.prototype.readInt16BE = function(t, r) {
      t = t >>> 0, r || p(t, 2, this.length);
      let i = this[t + 1] | this[t] << 8;
      return i & 32768 ? i | 4294901760 : i;
    };
    h.prototype.readInt32LE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    h.prototype.readInt32BE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    h.prototype.readBigInt64LE = m(function(t) {
      t = t >>> 0, N(t, "offset");
      let r = this[t], i = this[t + 7];
      (r === undefined || i === undefined) && _(t, this.length - 8);
      let n = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (i << 24);
      return (BigInt(n) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
    });
    h.prototype.readBigInt64BE = m(function(t) {
      t = t >>> 0, N(t, "offset");
      let r = this[t], i = this[t + 7];
      (r === undefined || i === undefined) && _(t, this.length - 8);
      let n = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
      return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + i);
    });
    h.prototype.readFloatLE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), T.read(this, t, true, 23, 4);
    };
    h.prototype.readFloatBE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), T.read(this, t, false, 23, 4);
    };
    h.prototype.readDoubleLE = function(t, r) {
      return t = t >>> 0, r || p(t, 8, this.length), T.read(this, t, true, 52, 8);
    };
    h.prototype.readDoubleBE = function(t, r) {
      return t = t >>> 0, r || p(t, 8, this.length), T.read(this, t, false, 52, 8);
    };
    function y(e, t, r, i, n, o) {
      if (!h.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > n || t < o)
        throw new RangeError('"value" argument is out of bounds');
      if (r + i > e.length)
        throw new RangeError("Index out of range");
    }
    h.prototype.writeUintLE = h.prototype.writeUIntLE = function(t, r, i, n) {
      if (t = +t, r = r >>> 0, i = i >>> 0, !n) {
        let s = Math.pow(2, 8 * i) - 1;
        y(this, t, r, i, s, 0);
      }
      let o = 1, u = 0;
      for (this[r] = t & 255;++u < i && (o *= 256); )
        this[r + u] = t / o & 255;
      return r + i;
    };
    h.prototype.writeUintBE = h.prototype.writeUIntBE = function(t, r, i, n) {
      if (t = +t, r = r >>> 0, i = i >>> 0, !n) {
        let s = Math.pow(2, 8 * i) - 1;
        y(this, t, r, i, s, 0);
      }
      let o = i - 1, u = 1;
      for (this[r + o] = t & 255;--o >= 0 && (u *= 256); )
        this[r + o] = t / u & 255;
      return r + i;
    };
    h.prototype.writeUint8 = h.prototype.writeUInt8 = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 1, 255, 0), this[r] = t & 255, r + 1;
    };
    h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 2, 65535, 0), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255, r + 4;
    };
    h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    function at(e, t, r, i, n) {
      xt2(t, i, n, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
      let u = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r++] = u, u = u >> 8, e[r++] = u, u = u >> 8, e[r++] = u, u = u >> 8, e[r++] = u, r;
    }
    function lt(e, t, r, i, n) {
      xt2(t, i, n, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
      let u = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r + 3] = u, u = u >> 8, e[r + 2] = u, u = u >> 8, e[r + 1] = u, u = u >> 8, e[r] = u, r + 8;
    }
    h.prototype.writeBigUInt64LE = m(function(t, r = 0) {
      return at(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h.prototype.writeBigUInt64BE = m(function(t, r = 0) {
      return lt(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h.prototype.writeIntLE = function(t, r, i, n) {
      if (t = +t, r = r >>> 0, !n) {
        let f = Math.pow(2, 8 * i - 1);
        y(this, t, r, i, f - 1, -f);
      }
      let o = 0, u = 1, s = 0;
      for (this[r] = t & 255;++o < i && (u *= 256); )
        t < 0 && s === 0 && this[r + o - 1] !== 0 && (s = 1), this[r + o] = (t / u >> 0) - s & 255;
      return r + i;
    };
    h.prototype.writeIntBE = function(t, r, i, n) {
      if (t = +t, r = r >>> 0, !n) {
        let f = Math.pow(2, 8 * i - 1);
        y(this, t, r, i, f - 1, -f);
      }
      let o = i - 1, u = 1, s = 0;
      for (this[r + o] = t & 255;--o >= 0 && (u *= 256); )
        t < 0 && s === 0 && this[r + o + 1] !== 0 && (s = 1), this[r + o] = (t / u >> 0) - s & 255;
      return r + i;
    };
    h.prototype.writeInt8 = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1;
    };
    h.prototype.writeInt16LE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 2, 32767, -32768), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    h.prototype.writeInt16BE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    h.prototype.writeInt32LE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 4, 2147483647, -2147483648), this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
    };
    h.prototype.writeInt32BE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    h.prototype.writeBigInt64LE = m(function(t, r = 0) {
      return at(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    h.prototype.writeBigInt64BE = m(function(t, r = 0) {
      return lt(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function pt(e, t, r, i, n, o) {
      if (r + i > e.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("Index out of range");
    }
    function yt(e, t, r, i, n) {
      return t = +t, r = r >>> 0, n || pt(e, t, r, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), T.write(e, t, r, i, 23, 4), r + 4;
    }
    h.prototype.writeFloatLE = function(t, r, i) {
      return yt(this, t, r, true, i);
    };
    h.prototype.writeFloatBE = function(t, r, i) {
      return yt(this, t, r, false, i);
    };
    function wt(e, t, r, i, n) {
      return t = +t, r = r >>> 0, n || pt(e, t, r, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), T.write(e, t, r, i, 52, 8), r + 8;
    }
    h.prototype.writeDoubleLE = function(t, r, i) {
      return wt(this, t, r, true, i);
    };
    h.prototype.writeDoubleBE = function(t, r, i) {
      return wt(this, t, r, false, i);
    };
    h.prototype.copy = function(t, r, i, n) {
      if (!h.isBuffer(t))
        throw new TypeError("argument should be a Buffer");
      if (i || (i = 0), !n && n !== 0 && (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < i && (n = i), n === i || t.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (i < 0 || i >= this.length)
        throw new RangeError("Index out of range");
      if (n < 0)
        throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), t.length - r < n - i && (n = t.length - r + i);
      let o = n - i;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, i, n) : Uint8Array.prototype.set.call(t, this.subarray(i, n), r), o;
    };
    h.prototype.fill = function(t, r, i, n) {
      if (typeof t == "string") {
        if (typeof r == "string" ? (n = r, r = 0, i = this.length) : typeof i == "string" && (n = i, i = this.length), n !== undefined && typeof n != "string")
          throw new TypeError("encoding must be a string");
        if (typeof n == "string" && !h.isEncoding(n))
          throw new TypeError("Unknown encoding: " + n);
        if (t.length === 1) {
          let u = t.charCodeAt(0);
          (n === "utf8" && u < 128 || n === "latin1") && (t = u);
        }
      } else
        typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (r < 0 || this.length < r || this.length < i)
        throw new RangeError("Out of range index");
      if (i <= r)
        return this;
      r = r >>> 0, i = i === undefined ? this.length : i >>> 0, t || (t = 0);
      let o;
      if (typeof t == "number")
        for (o = r;o < i; ++o)
          this[o] = t;
      else {
        let u = h.isBuffer(t) ? t : h.from(t, n), s = u.length;
        if (s === 0)
          throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0;o < i - r; ++o)
          this[o + r] = u[o % s];
      }
      return this;
    };
    var C2 = {};
    function V2(e, t, r) {
      C2[e] = class extends r {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
        }
        get code() {
          return e;
        }
        set code(n) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    V2("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    V2("ERR_INVALID_ARG_TYPE", function(e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError);
    V2("ERR_OUT_OF_RANGE", function(e, t, r) {
      let i = `The value of "${e}" is out of range.`, n = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = ot(String(r)) : typeof r == "bigint" && (n = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (n = ot(n)), n += "n"), i += ` It must be ${t}. Received ${n}`, i;
    }, RangeError);
    function ot(e) {
      let t = "", r = e.length, i = e[0] === "-" ? 1 : 0;
      for (;r >= i + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function or(e, t, r) {
      N(t, "offset"), (e[t] === undefined || e[t + r] === undefined) && _(t, e.length - (r + 1));
    }
    function xt2(e, t, r, i, n, o) {
      if (e > r || e < t) {
        let u = typeof t == "bigint" ? "n" : "", s;
        throw o > 3 ? t === 0 || t === BigInt(0) ? s = `>= 0${u} and < 2${u} ** ${(o + 1) * 8}${u}` : s = `>= -(2${u} ** ${(o + 1) * 8 - 1}${u}) and < 2 ** ${(o + 1) * 8 - 1}${u}` : s = `>= ${t}${u} and <= ${r}${u}`, new C2.ERR_OUT_OF_RANGE("value", s, e);
      }
      or(i, n, o);
    }
    function N(e, t) {
      if (typeof e != "number")
        throw new C2.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function _(e, t, r) {
      throw Math.floor(e) !== e ? (N(e, r), new C2.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new C2.ERR_BUFFER_OUT_OF_BOUNDS : new C2.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
    }
    var ur = /[^+/0-9A-Za-z-_]/g;
    function hr(e) {
      if (e = e.split("=")[0], e = e.trim().replace(ur, ""), e.length < 2)
        return "";
      for (;e.length % 4 !== 0; )
        e = e + "=";
      return e;
    }
    function j(e, t) {
      t = t || 1 / 0;
      let r, i = e.length, n = null, o = [];
      for (let u = 0;u < i; ++u) {
        if (r = e.charCodeAt(u), r > 55295 && r < 57344) {
          if (!n) {
            if (r > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (u + 1 === i) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            n = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), n = r;
            continue;
          }
          r = (n - 55296 << 10 | r - 56320) + 65536;
        } else
          n && (t -= 3) > -1 && o.push(239, 191, 189);
        if (n = null, r < 128) {
          if ((t -= 1) < 0)
            break;
          o.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0)
            break;
          o.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0)
            break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0)
            break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function sr(e) {
      let t = [];
      for (let r = 0;r < e.length; ++r)
        t.push(e.charCodeAt(r) & 255);
      return t;
    }
    function fr(e, t) {
      let r, i, n, o = [];
      for (let u = 0;u < e.length && !((t -= 2) < 0); ++u)
        r = e.charCodeAt(u), i = r >> 8, n = r % 256, o.push(n), o.push(i);
      return o;
    }
    function dt(e) {
      return G.toByteArray(hr(e));
    }
    function M(e, t, r, i) {
      let n;
      for (n = 0;n < i && !(n + r >= t.length || n >= e.length); ++n)
        t[n + r] = e[n];
      return n;
    }
    function B(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function X(e) {
      return e !== e;
    }
    var cr = function() {
      let e = "0123456789abcdef", t = new Array(256);
      for (let r = 0;r < 16; ++r) {
        let i = r * 16;
        for (let n = 0;n < 16; ++n)
          t[i + n] = e[r] + e[n];
      }
      return t;
    }();
    function m(e) {
      return typeof BigInt > "u" ? ar : e;
    }
    function ar() {
      throw new Error("BigInt not supported");
    }
  });
  mt = R((J2, Et2) => {
    var $ = Bt(), g = $.Buffer;
    function gt(e, t) {
      for (var r in e)
        t[r] = e[r];
    }
    g.from && g.alloc && g.allocUnsafe && g.allocUnsafeSlow ? Et2.exports = $ : (gt($, J2), J2.Buffer = A);
    function A(e, t, r) {
      return g(e, t, r);
    }
    A.prototype = Object.create(g.prototype);
    gt(g, A);
    A.from = function(e, t, r) {
      if (typeof e == "number")
        throw new TypeError("Argument must not be a number");
      return g(e, t, r);
    };
    A.alloc = function(e, t, r) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      var i = g(e);
      return t !== undefined ? typeof r == "string" ? i.fill(t, r) : i.fill(t) : i.fill(0), i;
    };
    A.allocUnsafe = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return g(e);
    };
    A.allocUnsafeSlow = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return $.SlowBuffer(e);
    };
  });
  At2 = R((Ft) => {
    var K = mt().Buffer, It = K.isEncoding || function(e) {
      switch (e = "" + e, e && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function lr(e) {
      if (!e)
        return "utf8";
      for (var t;; )
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t)
              return;
            e = ("" + e).toLowerCase(), t = true;
        }
    }
    function pr(e) {
      var t = lr(e);
      if (typeof t != "string" && (K.isEncoding === It || !It(e)))
        throw new Error("Unknown encoding: " + e);
      return t || e;
    }
    Ft.StringDecoder = L;
    function L(e) {
      this.encoding = pr(e);
      var t;
      switch (this.encoding) {
        case "utf16le":
          this.text = gr, this.end = Er2, t = 4;
          break;
        case "utf8":
          this.fillLast = xr, t = 4;
          break;
        case "base64":
          this.text = mr, this.end = Ir, t = 3;
          break;
        default:
          this.write = Fr, this.end = Ar;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = K.allocUnsafe(t);
    }
    L.prototype.write = function(e) {
      if (e.length === 0)
        return "";
      var t, r;
      if (this.lastNeed) {
        if (t = this.fillLast(e), t === undefined)
          return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else
        r = 0;
      return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
    };
    L.prototype.end = Br;
    L.prototype.text = dr;
    L.prototype.fillLast = function(e) {
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
    function z(e) {
      return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
    }
    function yr(e, t, r) {
      var i = t.length - 1;
      if (i < r)
        return 0;
      var n = z(t[i]);
      return n >= 0 ? (n > 0 && (e.lastNeed = n - 1), n) : --i < r || n === -2 ? 0 : (n = z(t[i]), n >= 0 ? (n > 0 && (e.lastNeed = n - 2), n) : --i < r || n === -2 ? 0 : (n = z(t[i]), n >= 0 ? (n > 0 && (n === 2 ? n = 0 : e.lastNeed = n - 3), n) : 0));
    }
    function wr(e, t, r) {
      if ((t[0] & 192) !== 128)
        return e.lastNeed = 0, "�";
      if (e.lastNeed > 1 && t.length > 1) {
        if ((t[1] & 192) !== 128)
          return e.lastNeed = 1, "�";
        if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
          return e.lastNeed = 2, "�";
      }
    }
    function xr(e) {
      var t = this.lastTotal - this.lastNeed, r = wr(this, e, t);
      if (r !== undefined)
        return r;
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
    }
    function dr(e, t) {
      var r = yr(this, e, t);
      if (!this.lastNeed)
        return e.toString("utf8", t);
      this.lastTotal = r;
      var i = e.length - (r - this.lastNeed);
      return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i);
    }
    function Br(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "�" : t;
    }
    function gr(e, t) {
      if ((e.length - t) % 2 === 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var i = r.charCodeAt(r.length - 1);
          if (i >= 55296 && i <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
        }
        return r;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
    }
    function Er2(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function mr(e, t) {
      var r = (e.length - t) % 3;
      return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
    }
    function Ir(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
    }
    function Fr(e) {
      return e.toString(this.encoding);
    }
    function Ar(e) {
      return e && e.length ? this.write(e) : "";
    }
  });
  Ut2 = kt(At2());
  export_StringDecoder = Ut2.StringDecoder;
  export_default = Ut2.StringDecoder;
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// node_modules/sax/lib/sax.js
var require_sax = __commonJS((exports) => {
  (function(sax) {
    sax.parser = function(strict, opt) {
      return new SAXParser(strict, opt);
    };
    sax.SAXParser = SAXParser;
    sax.SAXStream = SAXStream;
    sax.createStream = createStream;
    sax.MAX_BUFFER_LENGTH = 64 * 1024;
    var buffers = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script"
    ];
    sax.EVENTS = [
      "text",
      "processinginstruction",
      "sgmldeclaration",
      "doctype",
      "comment",
      "opentagstart",
      "attribute",
      "opentag",
      "closetag",
      "opencdata",
      "cdata",
      "closecdata",
      "error",
      "end",
      "ready",
      "script",
      "opennamespace",
      "closenamespace"
    ];
    function SAXParser(strict, opt) {
      if (!(this instanceof SAXParser)) {
        return new SAXParser(strict, opt);
      }
      var parser = this;
      clearBuffers(parser);
      parser.q = parser.c = "";
      parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
      parser.opt = opt || {};
      parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
      parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
      parser.tags = [];
      parser.closed = parser.closedRoot = parser.sawRoot = false;
      parser.tag = parser.error = null;
      parser.strict = !!strict;
      parser.noscript = !!(strict || parser.opt.noscript);
      parser.state = S.BEGIN;
      parser.strictEntities = parser.opt.strictEntities;
      parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
      parser.attribList = [];
      if (parser.opt.xmlns) {
        parser.ns = Object.create(rootNS);
      }
      if (parser.opt.unquotedAttributeValues === undefined) {
        parser.opt.unquotedAttributeValues = !strict;
      }
      parser.trackPosition = parser.opt.position !== false;
      if (parser.trackPosition) {
        parser.position = parser.line = parser.column = 0;
      }
      emit(parser, "onready");
    }
    if (!Object.create) {
      Object.create = function(o) {
        function F() {
        }
        F.prototype = o;
        var newf = new F;
        return newf;
      };
    }
    if (!Object.keys) {
      Object.keys = function(o) {
        var a = [];
        for (var i in o)
          if (o.hasOwnProperty(i))
            a.push(i);
        return a;
      };
    }
    function checkBufferLength(parser) {
      var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
      var maxActual = 0;
      for (var i = 0, l = buffers.length;i < l; i++) {
        var len = parser[buffers[i]].length;
        if (len > maxAllowed) {
          switch (buffers[i]) {
            case "textNode":
              closeText(parser);
              break;
            case "cdata":
              emitNode(parser, "oncdata", parser.cdata);
              parser.cdata = "";
              break;
            case "script":
              emitNode(parser, "onscript", parser.script);
              parser.script = "";
              break;
            default:
              error(parser, "Max buffer length exceeded: " + buffers[i]);
          }
        }
        maxActual = Math.max(maxActual, len);
      }
      var m = sax.MAX_BUFFER_LENGTH - maxActual;
      parser.bufferCheckPosition = m + parser.position;
    }
    function clearBuffers(parser) {
      for (var i = 0, l = buffers.length;i < l; i++) {
        parser[buffers[i]] = "";
      }
    }
    function flushBuffers(parser) {
      closeText(parser);
      if (parser.cdata !== "") {
        emitNode(parser, "oncdata", parser.cdata);
        parser.cdata = "";
      }
      if (parser.script !== "") {
        emitNode(parser, "onscript", parser.script);
        parser.script = "";
      }
    }
    SAXParser.prototype = {
      end: function() {
        end(this);
      },
      write,
      resume: function() {
        this.error = null;
        return this;
      },
      close: function() {
        return this.write(null);
      },
      flush: function() {
        flushBuffers(this);
      }
    };
    var Stream;
    try {
      Stream = (init_stream(), __toCommonJS(exports_stream)).Stream;
    } catch (ex) {
      Stream = function() {
      };
    }
    if (!Stream)
      Stream = function() {
      };
    var streamWraps = sax.EVENTS.filter(function(ev) {
      return ev !== "error" && ev !== "end";
    });
    function createStream(strict, opt) {
      return new SAXStream(strict, opt);
    }
    function SAXStream(strict, opt) {
      if (!(this instanceof SAXStream)) {
        return new SAXStream(strict, opt);
      }
      Stream.apply(this);
      this._parser = new SAXParser(strict, opt);
      this.writable = true;
      this.readable = true;
      var me = this;
      this._parser.onend = function() {
        me.emit("end");
      };
      this._parser.onerror = function(er) {
        me.emit("error", er);
        me._parser.error = null;
      };
      this._decoder = null;
      streamWraps.forEach(function(ev) {
        Object.defineProperty(me, "on" + ev, {
          get: function() {
            return me._parser["on" + ev];
          },
          set: function(h) {
            if (!h) {
              me.removeAllListeners(ev);
              me._parser["on" + ev] = h;
              return h;
            }
            me.on(ev, h);
          },
          enumerable: true,
          configurable: false
        });
      });
    }
    SAXStream.prototype = Object.create(Stream.prototype, {
      constructor: {
        value: SAXStream
      }
    });
    SAXStream.prototype.write = function(data) {
      if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
        if (!this._decoder) {
          var SD = (init_string_decoder(), __toCommonJS(exports_string_decoder)).StringDecoder;
          this._decoder = new SD("utf8");
        }
        data = this._decoder.write(data);
      }
      this._parser.write(data.toString());
      this.emit("data", data);
      return true;
    };
    SAXStream.prototype.end = function(chunk) {
      if (chunk && chunk.length) {
        this.write(chunk);
      }
      this._parser.end();
      return true;
    };
    SAXStream.prototype.on = function(ev, handler) {
      var me = this;
      if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
        me._parser["on" + ev] = function() {
          var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          args.splice(0, 0, ev);
          me.emit.apply(me, args);
        };
      }
      return Stream.prototype.on.call(me, ev, handler);
    };
    var CDATA = "[CDATA[";
    var DOCTYPE = "DOCTYPE";
    var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
    var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
    var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function isWhitespace(c) {
      return c === " " || c === `
` || c === "\r" || c === "\t";
    }
    function isQuote(c) {
      return c === '"' || c === "'";
    }
    function isAttribEnd(c) {
      return c === ">" || isWhitespace(c);
    }
    function isMatch(regex, c) {
      return regex.test(c);
    }
    function notMatch(regex, c) {
      return !isMatch(regex, c);
    }
    var S = 0;
    sax.STATE = {
      BEGIN: S++,
      BEGIN_WHITESPACE: S++,
      TEXT: S++,
      TEXT_ENTITY: S++,
      OPEN_WAKA: S++,
      SGML_DECL: S++,
      SGML_DECL_QUOTED: S++,
      DOCTYPE: S++,
      DOCTYPE_QUOTED: S++,
      DOCTYPE_DTD: S++,
      DOCTYPE_DTD_QUOTED: S++,
      COMMENT_STARTING: S++,
      COMMENT: S++,
      COMMENT_ENDING: S++,
      COMMENT_ENDED: S++,
      CDATA: S++,
      CDATA_ENDING: S++,
      CDATA_ENDING_2: S++,
      PROC_INST: S++,
      PROC_INST_BODY: S++,
      PROC_INST_ENDING: S++,
      OPEN_TAG: S++,
      OPEN_TAG_SLASH: S++,
      ATTRIB: S++,
      ATTRIB_NAME: S++,
      ATTRIB_NAME_SAW_WHITE: S++,
      ATTRIB_VALUE: S++,
      ATTRIB_VALUE_QUOTED: S++,
      ATTRIB_VALUE_CLOSED: S++,
      ATTRIB_VALUE_UNQUOTED: S++,
      ATTRIB_VALUE_ENTITY_Q: S++,
      ATTRIB_VALUE_ENTITY_U: S++,
      CLOSE_TAG: S++,
      CLOSE_TAG_SAW_WHITE: S++,
      SCRIPT: S++,
      SCRIPT_ENDING: S++
    };
    sax.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'"
    };
    sax.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    };
    Object.keys(sax.ENTITIES).forEach(function(key) {
      var e = sax.ENTITIES[key];
      var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
      sax.ENTITIES[key] = s2;
    });
    for (var s in sax.STATE) {
      sax.STATE[sax.STATE[s]] = s;
    }
    S = sax.STATE;
    function emit(parser, event, data) {
      parser[event] && parser[event](data);
    }
    function emitNode(parser, nodeType, data) {
      if (parser.textNode)
        closeText(parser);
      emit(parser, nodeType, data);
    }
    function closeText(parser) {
      parser.textNode = textopts(parser.opt, parser.textNode);
      if (parser.textNode)
        emit(parser, "ontext", parser.textNode);
      parser.textNode = "";
    }
    function textopts(opt, text) {
      if (opt.trim)
        text = text.trim();
      if (opt.normalize)
        text = text.replace(/\s+/g, " ");
      return text;
    }
    function error(parser, er) {
      closeText(parser);
      if (parser.trackPosition) {
        er += `
Line: ` + parser.line + `
Column: ` + parser.column + `
Char: ` + parser.c;
      }
      er = new Error(er);
      parser.error = er;
      emit(parser, "onerror", er);
      return parser;
    }
    function end(parser) {
      if (parser.sawRoot && !parser.closedRoot)
        strictFail(parser, "Unclosed root tag");
      if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
        error(parser, "Unexpected end");
      }
      closeText(parser);
      parser.c = "";
      parser.closed = true;
      emit(parser, "onend");
      SAXParser.call(parser, parser.strict, parser.opt);
      return parser;
    }
    function strictFail(parser, message) {
      if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
        throw new Error("bad call to strictFail");
      }
      if (parser.strict) {
        error(parser, message);
      }
    }
    function newTag(parser) {
      if (!parser.strict)
        parser.tagName = parser.tagName[parser.looseCase]();
      var parent = parser.tags[parser.tags.length - 1] || parser;
      var tag = parser.tag = { name: parser.tagName, attributes: {} };
      if (parser.opt.xmlns) {
        tag.ns = parent.ns;
      }
      parser.attribList.length = 0;
      emitNode(parser, "onopentagstart", tag);
    }
    function qname(name, attribute) {
      var i = name.indexOf(":");
      var qualName = i < 0 ? ["", name] : name.split(":");
      var prefix = qualName[0];
      var local = qualName[1];
      if (attribute && name === "xmlns") {
        prefix = "xmlns";
        local = "";
      }
      return { prefix, local };
    }
    function attrib(parser) {
      if (!parser.strict) {
        parser.attribName = parser.attribName[parser.looseCase]();
      }
      if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
        parser.attribName = parser.attribValue = "";
        return;
      }
      if (parser.opt.xmlns) {
        var qn = qname(parser.attribName, true);
        var prefix = qn.prefix;
        var local = qn.local;
        if (prefix === "xmlns") {
          if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
            strictFail(parser, "xml: prefix must be bound to " + XML_NAMESPACE + `
` + "Actual: " + parser.attribValue);
          } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
            strictFail(parser, "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + `
` + "Actual: " + parser.attribValue);
          } else {
            var tag = parser.tag;
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns === parent.ns) {
              tag.ns = Object.create(parent.ns);
            }
            tag.ns[local] = parser.attribValue;
          }
        }
        parser.attribList.push([parser.attribName, parser.attribValue]);
      } else {
        parser.tag.attributes[parser.attribName] = parser.attribValue;
        emitNode(parser, "onattribute", {
          name: parser.attribName,
          value: parser.attribValue
        });
      }
      parser.attribName = parser.attribValue = "";
    }
    function openTag(parser, selfClosing) {
      if (parser.opt.xmlns) {
        var tag = parser.tag;
        var qn = qname(parser.tagName);
        tag.prefix = qn.prefix;
        tag.local = qn.local;
        tag.uri = tag.ns[qn.prefix] || "";
        if (tag.prefix && !tag.uri) {
          strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
          tag.uri = qn.prefix;
        }
        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (tag.ns && parent.ns !== tag.ns) {
          Object.keys(tag.ns).forEach(function(p) {
            emitNode(parser, "onopennamespace", {
              prefix: p,
              uri: tag.ns[p]
            });
          });
        }
        for (var i = 0, l = parser.attribList.length;i < l; i++) {
          var nv = parser.attribList[i];
          var name = nv[0];
          var value = nv[1];
          var qualName = qname(name, true);
          var prefix = qualName.prefix;
          var local = qualName.local;
          var uri = prefix === "" ? "" : tag.ns[prefix] || "";
          var a = {
            name,
            value,
            prefix,
            local,
            uri
          };
          if (prefix && prefix !== "xmlns" && !uri) {
            strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
            a.uri = prefix;
          }
          parser.tag.attributes[name] = a;
          emitNode(parser, "onattribute", a);
        }
        parser.attribList.length = 0;
      }
      parser.tag.isSelfClosing = !!selfClosing;
      parser.sawRoot = true;
      parser.tags.push(parser.tag);
      emitNode(parser, "onopentag", parser.tag);
      if (!selfClosing) {
        if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
          parser.state = S.SCRIPT;
        } else {
          parser.state = S.TEXT;
        }
        parser.tag = null;
        parser.tagName = "";
      }
      parser.attribName = parser.attribValue = "";
      parser.attribList.length = 0;
    }
    function closeTag(parser) {
      if (!parser.tagName) {
        strictFail(parser, "Weird empty close tag.");
        parser.textNode += "</>";
        parser.state = S.TEXT;
        return;
      }
      if (parser.script) {
        if (parser.tagName !== "script") {
          parser.script += "</" + parser.tagName + ">";
          parser.tagName = "";
          parser.state = S.SCRIPT;
          return;
        }
        emitNode(parser, "onscript", parser.script);
        parser.script = "";
      }
      var t = parser.tags.length;
      var tagName = parser.tagName;
      if (!parser.strict) {
        tagName = tagName[parser.looseCase]();
      }
      var closeTo = tagName;
      while (t--) {
        var close = parser.tags[t];
        if (close.name !== closeTo) {
          strictFail(parser, "Unexpected close tag");
        } else {
          break;
        }
      }
      if (t < 0) {
        strictFail(parser, "Unmatched closing tag: " + parser.tagName);
        parser.textNode += "</" + parser.tagName + ">";
        parser.state = S.TEXT;
        return;
      }
      parser.tagName = tagName;
      var s2 = parser.tags.length;
      while (s2-- > t) {
        var tag = parser.tag = parser.tags.pop();
        parser.tagName = parser.tag.name;
        emitNode(parser, "onclosetag", parser.tagName);
        var x = {};
        for (var i in tag.ns) {
          x[i] = tag.ns[i];
        }
        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (parser.opt.xmlns && tag.ns !== parent.ns) {
          Object.keys(tag.ns).forEach(function(p) {
            var n = tag.ns[p];
            emitNode(parser, "onclosenamespace", { prefix: p, uri: n });
          });
        }
      }
      if (t === 0)
        parser.closedRoot = true;
      parser.tagName = parser.attribValue = parser.attribName = "";
      parser.attribList.length = 0;
      parser.state = S.TEXT;
    }
    function parseEntity(parser) {
      var entity = parser.entity;
      var entityLC = entity.toLowerCase();
      var num;
      var numStr = "";
      if (parser.ENTITIES[entity]) {
        return parser.ENTITIES[entity];
      }
      if (parser.ENTITIES[entityLC]) {
        return parser.ENTITIES[entityLC];
      }
      entity = entityLC;
      if (entity.charAt(0) === "#") {
        if (entity.charAt(1) === "x") {
          entity = entity.slice(2);
          num = parseInt(entity, 16);
          numStr = num.toString(16);
        } else {
          entity = entity.slice(1);
          num = parseInt(entity, 10);
          numStr = num.toString(10);
        }
      }
      entity = entity.replace(/^0+/, "");
      if (isNaN(num) || numStr.toLowerCase() !== entity) {
        strictFail(parser, "Invalid character entity");
        return "&" + parser.entity + ";";
      }
      return String.fromCodePoint(num);
    }
    function beginWhiteSpace(parser, c) {
      if (c === "<") {
        parser.state = S.OPEN_WAKA;
        parser.startTagPosition = parser.position;
      } else if (!isWhitespace(c)) {
        strictFail(parser, "Non-whitespace before first tag.");
        parser.textNode = c;
        parser.state = S.TEXT;
      }
    }
    function charAt(chunk, i) {
      var result = "";
      if (i < chunk.length) {
        result = chunk.charAt(i);
      }
      return result;
    }
    function write(chunk) {
      var parser = this;
      if (this.error) {
        throw this.error;
      }
      if (parser.closed) {
        return error(parser, "Cannot write after close. Assign an onready handler.");
      }
      if (chunk === null) {
        return end(parser);
      }
      if (typeof chunk === "object") {
        chunk = chunk.toString();
      }
      var i = 0;
      var c = "";
      while (true) {
        c = charAt(chunk, i++);
        parser.c = c;
        if (!c) {
          break;
        }
        if (parser.trackPosition) {
          parser.position++;
          if (c === `
`) {
            parser.line++;
            parser.column = 0;
          } else {
            parser.column++;
          }
        }
        switch (parser.state) {
          case S.BEGIN:
            parser.state = S.BEGIN_WHITESPACE;
            if (c === "\uFEFF") {
              continue;
            }
            beginWhiteSpace(parser, c);
            continue;
          case S.BEGIN_WHITESPACE:
            beginWhiteSpace(parser, c);
            continue;
          case S.TEXT:
            if (parser.sawRoot && !parser.closedRoot) {
              var starti = i - 1;
              while (c && c !== "<" && c !== "&") {
                c = charAt(chunk, i++);
                if (c && parser.trackPosition) {
                  parser.position++;
                  if (c === `
`) {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.textNode += chunk.substring(starti, i - 1);
            }
            if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
              parser.state = S.OPEN_WAKA;
              parser.startTagPosition = parser.position;
            } else {
              if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                strictFail(parser, "Text data outside of root node.");
              }
              if (c === "&") {
                parser.state = S.TEXT_ENTITY;
              } else {
                parser.textNode += c;
              }
            }
            continue;
          case S.SCRIPT:
            if (c === "<") {
              parser.state = S.SCRIPT_ENDING;
            } else {
              parser.script += c;
            }
            continue;
          case S.SCRIPT_ENDING:
            if (c === "/") {
              parser.state = S.CLOSE_TAG;
            } else {
              parser.script += "<" + c;
              parser.state = S.SCRIPT;
            }
            continue;
          case S.OPEN_WAKA:
            if (c === "!") {
              parser.state = S.SGML_DECL;
              parser.sgmlDecl = "";
            } else if (isWhitespace(c)) {
            } else if (isMatch(nameStart, c)) {
              parser.state = S.OPEN_TAG;
              parser.tagName = c;
            } else if (c === "/") {
              parser.state = S.CLOSE_TAG;
              parser.tagName = "";
            } else if (c === "?") {
              parser.state = S.PROC_INST;
              parser.procInstName = parser.procInstBody = "";
            } else {
              strictFail(parser, "Unencoded <");
              if (parser.startTagPosition + 1 < parser.position) {
                var pad = parser.position - parser.startTagPosition;
                c = new Array(pad).join(" ") + c;
              }
              parser.textNode += "<" + c;
              parser.state = S.TEXT;
            }
            continue;
          case S.SGML_DECL:
            if (parser.sgmlDecl + c === "--") {
              parser.state = S.COMMENT;
              parser.comment = "";
              parser.sgmlDecl = "";
              continue;
            }
            if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
              parser.state = S.DOCTYPE_DTD;
              parser.doctype += "<!" + parser.sgmlDecl + c;
              parser.sgmlDecl = "";
            } else if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
              emitNode(parser, "onopencdata");
              parser.state = S.CDATA;
              parser.sgmlDecl = "";
              parser.cdata = "";
            } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
              parser.state = S.DOCTYPE;
              if (parser.doctype || parser.sawRoot) {
                strictFail(parser, "Inappropriately located doctype declaration");
              }
              parser.doctype = "";
              parser.sgmlDecl = "";
            } else if (c === ">") {
              emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
              parser.sgmlDecl = "";
              parser.state = S.TEXT;
            } else if (isQuote(c)) {
              parser.state = S.SGML_DECL_QUOTED;
              parser.sgmlDecl += c;
            } else {
              parser.sgmlDecl += c;
            }
            continue;
          case S.SGML_DECL_QUOTED:
            if (c === parser.q) {
              parser.state = S.SGML_DECL;
              parser.q = "";
            }
            parser.sgmlDecl += c;
            continue;
          case S.DOCTYPE:
            if (c === ">") {
              parser.state = S.TEXT;
              emitNode(parser, "ondoctype", parser.doctype);
              parser.doctype = true;
            } else {
              parser.doctype += c;
              if (c === "[") {
                parser.state = S.DOCTYPE_DTD;
              } else if (isQuote(c)) {
                parser.state = S.DOCTYPE_QUOTED;
                parser.q = c;
              }
            }
            continue;
          case S.DOCTYPE_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.q = "";
              parser.state = S.DOCTYPE;
            }
            continue;
          case S.DOCTYPE_DTD:
            if (c === "]") {
              parser.doctype += c;
              parser.state = S.DOCTYPE;
            } else if (c === "<") {
              parser.state = S.OPEN_WAKA;
              parser.startTagPosition = parser.position;
            } else if (isQuote(c)) {
              parser.doctype += c;
              parser.state = S.DOCTYPE_DTD_QUOTED;
              parser.q = c;
            } else {
              parser.doctype += c;
            }
            continue;
          case S.DOCTYPE_DTD_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.state = S.DOCTYPE_DTD;
              parser.q = "";
            }
            continue;
          case S.COMMENT:
            if (c === "-") {
              parser.state = S.COMMENT_ENDING;
            } else {
              parser.comment += c;
            }
            continue;
          case S.COMMENT_ENDING:
            if (c === "-") {
              parser.state = S.COMMENT_ENDED;
              parser.comment = textopts(parser.opt, parser.comment);
              if (parser.comment) {
                emitNode(parser, "oncomment", parser.comment);
              }
              parser.comment = "";
            } else {
              parser.comment += "-" + c;
              parser.state = S.COMMENT;
            }
            continue;
          case S.COMMENT_ENDED:
            if (c !== ">") {
              strictFail(parser, "Malformed comment");
              parser.comment += "--" + c;
              parser.state = S.COMMENT;
            } else if (parser.doctype && parser.doctype !== true) {
              parser.state = S.DOCTYPE_DTD;
            } else {
              parser.state = S.TEXT;
            }
            continue;
          case S.CDATA:
            if (c === "]") {
              parser.state = S.CDATA_ENDING;
            } else {
              parser.cdata += c;
            }
            continue;
          case S.CDATA_ENDING:
            if (c === "]") {
              parser.state = S.CDATA_ENDING_2;
            } else {
              parser.cdata += "]" + c;
              parser.state = S.CDATA;
            }
            continue;
          case S.CDATA_ENDING_2:
            if (c === ">") {
              if (parser.cdata) {
                emitNode(parser, "oncdata", parser.cdata);
              }
              emitNode(parser, "onclosecdata");
              parser.cdata = "";
              parser.state = S.TEXT;
            } else if (c === "]") {
              parser.cdata += "]";
            } else {
              parser.cdata += "]]" + c;
              parser.state = S.CDATA;
            }
            continue;
          case S.PROC_INST:
            if (c === "?") {
              parser.state = S.PROC_INST_ENDING;
            } else if (isWhitespace(c)) {
              parser.state = S.PROC_INST_BODY;
            } else {
              parser.procInstName += c;
            }
            continue;
          case S.PROC_INST_BODY:
            if (!parser.procInstBody && isWhitespace(c)) {
              continue;
            } else if (c === "?") {
              parser.state = S.PROC_INST_ENDING;
            } else {
              parser.procInstBody += c;
            }
            continue;
          case S.PROC_INST_ENDING:
            if (c === ">") {
              emitNode(parser, "onprocessinginstruction", {
                name: parser.procInstName,
                body: parser.procInstBody
              });
              parser.procInstName = parser.procInstBody = "";
              parser.state = S.TEXT;
            } else {
              parser.procInstBody += "?" + c;
              parser.state = S.PROC_INST_BODY;
            }
            continue;
          case S.OPEN_TAG:
            if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else {
              newTag(parser);
              if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, "Invalid character in tag name");
                }
                parser.state = S.ATTRIB;
              }
            }
            continue;
          case S.OPEN_TAG_SLASH:
            if (c === ">") {
              openTag(parser, true);
              closeTag(parser);
            } else {
              strictFail(parser, "Forward-slash in opening tag not followed by >");
              parser.state = S.ATTRIB;
            }
            continue;
          case S.ATTRIB:
            if (isWhitespace(c)) {
              continue;
            } else if (c === ">") {
              openTag(parser);
            } else if (c === "/") {
              parser.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c;
              parser.attribValue = "";
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_NAME:
            if (c === "=") {
              parser.state = S.ATTRIB_VALUE;
            } else if (c === ">") {
              strictFail(parser, "Attribute without value");
              parser.attribValue = parser.attribName;
              attrib(parser);
              openTag(parser);
            } else if (isWhitespace(c)) {
              parser.state = S.ATTRIB_NAME_SAW_WHITE;
            } else if (isMatch(nameBody, c)) {
              parser.attribName += c;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_NAME_SAW_WHITE:
            if (c === "=") {
              parser.state = S.ATTRIB_VALUE;
            } else if (isWhitespace(c)) {
              continue;
            } else {
              strictFail(parser, "Attribute without value");
              parser.tag.attributes[parser.attribName] = "";
              parser.attribValue = "";
              emitNode(parser, "onattribute", {
                name: parser.attribName,
                value: ""
              });
              parser.attribName = "";
              if (c === ">") {
                openTag(parser);
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
                parser.state = S.ATTRIB;
              }
            }
            continue;
          case S.ATTRIB_VALUE:
            if (isWhitespace(c)) {
              continue;
            } else if (isQuote(c)) {
              parser.q = c;
              parser.state = S.ATTRIB_VALUE_QUOTED;
            } else {
              if (!parser.opt.unquotedAttributeValues) {
                error(parser, "Unquoted attribute value");
              }
              parser.state = S.ATTRIB_VALUE_UNQUOTED;
              parser.attribValue = c;
            }
            continue;
          case S.ATTRIB_VALUE_QUOTED:
            if (c !== parser.q) {
              if (c === "&") {
                parser.state = S.ATTRIB_VALUE_ENTITY_Q;
              } else {
                parser.attribValue += c;
              }
              continue;
            }
            attrib(parser);
            parser.q = "";
            parser.state = S.ATTRIB_VALUE_CLOSED;
            continue;
          case S.ATTRIB_VALUE_CLOSED:
            if (isWhitespace(c)) {
              parser.state = S.ATTRIB;
            } else if (c === ">") {
              openTag(parser);
            } else if (c === "/") {
              parser.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              strictFail(parser, "No whitespace between attributes");
              parser.attribName = c;
              parser.attribValue = "";
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_VALUE_UNQUOTED:
            if (!isAttribEnd(c)) {
              if (c === "&") {
                parser.state = S.ATTRIB_VALUE_ENTITY_U;
              } else {
                parser.attribValue += c;
              }
              continue;
            }
            attrib(parser);
            if (c === ">") {
              openTag(parser);
            } else {
              parser.state = S.ATTRIB;
            }
            continue;
          case S.CLOSE_TAG:
            if (!parser.tagName) {
              if (isWhitespace(c)) {
                continue;
              } else if (notMatch(nameStart, c)) {
                if (parser.script) {
                  parser.script += "</" + c;
                  parser.state = S.SCRIPT;
                } else {
                  strictFail(parser, "Invalid tagname in closing tag.");
                }
              } else {
                parser.tagName = c;
              }
            } else if (c === ">") {
              closeTag(parser);
            } else if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else if (parser.script) {
              parser.script += "</" + parser.tagName;
              parser.tagName = "";
              parser.state = S.SCRIPT;
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, "Invalid tagname in closing tag");
              }
              parser.state = S.CLOSE_TAG_SAW_WHITE;
            }
            continue;
          case S.CLOSE_TAG_SAW_WHITE:
            if (isWhitespace(c)) {
              continue;
            }
            if (c === ">") {
              closeTag(parser);
            } else {
              strictFail(parser, "Invalid characters in closing tag");
            }
            continue;
          case S.TEXT_ENTITY:
          case S.ATTRIB_VALUE_ENTITY_Q:
          case S.ATTRIB_VALUE_ENTITY_U:
            var returnState;
            var buffer;
            switch (parser.state) {
              case S.TEXT_ENTITY:
                returnState = S.TEXT;
                buffer = "textNode";
                break;
              case S.ATTRIB_VALUE_ENTITY_Q:
                returnState = S.ATTRIB_VALUE_QUOTED;
                buffer = "attribValue";
                break;
              case S.ATTRIB_VALUE_ENTITY_U:
                returnState = S.ATTRIB_VALUE_UNQUOTED;
                buffer = "attribValue";
                break;
            }
            if (c === ";") {
              var parsedEntity = parseEntity(parser);
              if (parser.opt.unparsedEntities && !Object.values(sax.XML_ENTITIES).includes(parsedEntity)) {
                parser.entity = "";
                parser.state = returnState;
                parser.write(parsedEntity);
              } else {
                parser[buffer] += parsedEntity;
                parser.entity = "";
                parser.state = returnState;
              }
            } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
              parser.entity += c;
            } else {
              strictFail(parser, "Invalid character in entity name");
              parser[buffer] += "&" + parser.entity + c;
              parser.entity = "";
              parser.state = returnState;
            }
            continue;
          default: {
            throw new Error(parser, "Unknown state: " + parser.state);
          }
        }
      }
      if (parser.position >= parser.bufferCheckPosition) {
        checkBufferLength(parser);
      }
      return parser;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    if (!String.fromCodePoint) {
      (function() {
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        var fromCodePoint = function() {
          var MAX_SIZE = 16384;
          var codeUnits = [];
          var highSurrogate;
          var lowSurrogate;
          var index = -1;
          var length = arguments.length;
          if (!length) {
            return "";
          }
          var result = "";
          while (++index < length) {
            var codePoint = Number(arguments[index]);
            if (!isFinite(codePoint) || codePoint < 0 || codePoint > 1114111 || floor(codePoint) !== codePoint) {
              throw RangeError("Invalid code point: " + codePoint);
            }
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              highSurrogate = (codePoint >> 10) + 55296;
              lowSurrogate = codePoint % 1024 + 56320;
              codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
              result += stringFromCharCode.apply(null, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        if (Object.defineProperty) {
          Object.defineProperty(String, "fromCodePoint", {
            value: fromCodePoint,
            configurable: true,
            writable: true
          });
        } else {
          String.fromCodePoint = fromCodePoint;
        }
      })();
    }
  })(typeof exports === "undefined" ? exports.sax = {} : exports);
});

// node_modules/xml-js/lib/array-helper.js
var require_array_helper = __commonJS((exports, module) => {
  module.exports = {
    isArray: function(value) {
      if (Array.isArray) {
        return Array.isArray(value);
      }
      return Object.prototype.toString.call(value) === "[object Array]";
    }
  };
});

// node_modules/xml-js/lib/options-helper.js
var require_options_helper = __commonJS((exports, module) => {
  var isArray2 = require_array_helper().isArray;
  module.exports = {
    copyOptions: function(options) {
      var key, copy = {};
      for (key in options) {
        if (options.hasOwnProperty(key)) {
          copy[key] = options[key];
        }
      }
      return copy;
    },
    ensureFlagExists: function(item, options) {
      if (!(item in options) || typeof options[item] !== "boolean") {
        options[item] = false;
      }
    },
    ensureSpacesExists: function(options) {
      if (!("spaces" in options) || typeof options.spaces !== "number" && typeof options.spaces !== "string") {
        options.spaces = 0;
      }
    },
    ensureAlwaysArrayExists: function(options) {
      if (!("alwaysArray" in options) || typeof options.alwaysArray !== "boolean" && !isArray2(options.alwaysArray)) {
        options.alwaysArray = false;
      }
    },
    ensureKeyExists: function(key, options) {
      if (!(key + "Key" in options) || typeof options[key + "Key"] !== "string") {
        options[key + "Key"] = options.compact ? "_" + key : key;
      }
    },
    checkFnExists: function(key, options) {
      return key + "Fn" in options;
    }
  };
});

// node_modules/xml-js/lib/xml2js.js
var require_xml2js = __commonJS((exports, module) => {
  var sax = require_sax();
  var expat = { on: function() {
  }, parse: function() {
  } };
  var helper = require_options_helper();
  var isArray2 = require_array_helper().isArray;
  var options;
  var pureJsParser = true;
  var currentElement;
  function validateOptions(userOptions) {
    options = helper.copyOptions(userOptions);
    helper.ensureFlagExists("ignoreDeclaration", options);
    helper.ensureFlagExists("ignoreInstruction", options);
    helper.ensureFlagExists("ignoreAttributes", options);
    helper.ensureFlagExists("ignoreText", options);
    helper.ensureFlagExists("ignoreComment", options);
    helper.ensureFlagExists("ignoreCdata", options);
    helper.ensureFlagExists("ignoreDoctype", options);
    helper.ensureFlagExists("compact", options);
    helper.ensureFlagExists("alwaysChildren", options);
    helper.ensureFlagExists("addParent", options);
    helper.ensureFlagExists("trim", options);
    helper.ensureFlagExists("nativeType", options);
    helper.ensureFlagExists("nativeTypeAttributes", options);
    helper.ensureFlagExists("sanitize", options);
    helper.ensureFlagExists("instructionHasAttributes", options);
    helper.ensureFlagExists("captureSpacesBetweenElements", options);
    helper.ensureAlwaysArrayExists(options);
    helper.ensureKeyExists("declaration", options);
    helper.ensureKeyExists("instruction", options);
    helper.ensureKeyExists("attributes", options);
    helper.ensureKeyExists("text", options);
    helper.ensureKeyExists("comment", options);
    helper.ensureKeyExists("cdata", options);
    helper.ensureKeyExists("doctype", options);
    helper.ensureKeyExists("type", options);
    helper.ensureKeyExists("name", options);
    helper.ensureKeyExists("elements", options);
    helper.ensureKeyExists("parent", options);
    helper.checkFnExists("doctype", options);
    helper.checkFnExists("instruction", options);
    helper.checkFnExists("cdata", options);
    helper.checkFnExists("comment", options);
    helper.checkFnExists("text", options);
    helper.checkFnExists("instructionName", options);
    helper.checkFnExists("elementName", options);
    helper.checkFnExists("attributeName", options);
    helper.checkFnExists("attributeValue", options);
    helper.checkFnExists("attributes", options);
    return options;
  }
  function nativeType(value) {
    var nValue = Number(value);
    if (!isNaN(nValue)) {
      return nValue;
    }
    var bValue = value.toLowerCase();
    if (bValue === "true") {
      return true;
    } else if (bValue === "false") {
      return false;
    }
    return value;
  }
  function addField(type, value) {
    var key;
    if (options.compact) {
      if (!currentElement[options[type + "Key"]] && (isArray2(options.alwaysArray) ? options.alwaysArray.indexOf(options[type + "Key"]) !== -1 : options.alwaysArray)) {
        currentElement[options[type + "Key"]] = [];
      }
      if (currentElement[options[type + "Key"]] && !isArray2(currentElement[options[type + "Key"]])) {
        currentElement[options[type + "Key"]] = [currentElement[options[type + "Key"]]];
      }
      if (type + "Fn" in options && typeof value === "string") {
        value = options[type + "Fn"](value, currentElement);
      }
      if (type === "instruction" && (("instructionFn" in options) || ("instructionNameFn" in options))) {
        for (key in value) {
          if (value.hasOwnProperty(key)) {
            if ("instructionFn" in options) {
              value[key] = options.instructionFn(value[key], key, currentElement);
            } else {
              var temp = value[key];
              delete value[key];
              value[options.instructionNameFn(key, temp, currentElement)] = temp;
            }
          }
        }
      }
      if (isArray2(currentElement[options[type + "Key"]])) {
        currentElement[options[type + "Key"]].push(value);
      } else {
        currentElement[options[type + "Key"]] = value;
      }
    } else {
      if (!currentElement[options.elementsKey]) {
        currentElement[options.elementsKey] = [];
      }
      var element = {};
      element[options.typeKey] = type;
      if (type === "instruction") {
        for (key in value) {
          if (value.hasOwnProperty(key)) {
            break;
          }
        }
        element[options.nameKey] = "instructionNameFn" in options ? options.instructionNameFn(key, value, currentElement) : key;
        if (options.instructionHasAttributes) {
          element[options.attributesKey] = value[key][options.attributesKey];
          if ("instructionFn" in options) {
            element[options.attributesKey] = options.instructionFn(element[options.attributesKey], key, currentElement);
          }
        } else {
          if ("instructionFn" in options) {
            value[key] = options.instructionFn(value[key], key, currentElement);
          }
          element[options.instructionKey] = value[key];
        }
      } else {
        if (type + "Fn" in options) {
          value = options[type + "Fn"](value, currentElement);
        }
        element[options[type + "Key"]] = value;
      }
      if (options.addParent) {
        element[options.parentKey] = currentElement;
      }
      currentElement[options.elementsKey].push(element);
    }
  }
  function manipulateAttributes(attributes) {
    if ("attributesFn" in options && attributes) {
      attributes = options.attributesFn(attributes, currentElement);
    }
    if ((options.trim || ("attributeValueFn" in options) || ("attributeNameFn" in options) || options.nativeTypeAttributes) && attributes) {
      var key;
      for (key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          if (options.trim)
            attributes[key] = attributes[key].trim();
          if (options.nativeTypeAttributes) {
            attributes[key] = nativeType(attributes[key]);
          }
          if ("attributeValueFn" in options)
            attributes[key] = options.attributeValueFn(attributes[key], key, currentElement);
          if ("attributeNameFn" in options) {
            var temp = attributes[key];
            delete attributes[key];
            attributes[options.attributeNameFn(key, attributes[key], currentElement)] = temp;
          }
        }
      }
    }
    return attributes;
  }
  function onInstruction(instruction) {
    var attributes = {};
    if (instruction.body && (instruction.name.toLowerCase() === "xml" || options.instructionHasAttributes)) {
      var attrsRegExp = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
      var match;
      while ((match = attrsRegExp.exec(instruction.body)) !== null) {
        attributes[match[1]] = match[2] || match[3] || match[4];
      }
      attributes = manipulateAttributes(attributes);
    }
    if (instruction.name.toLowerCase() === "xml") {
      if (options.ignoreDeclaration) {
        return;
      }
      currentElement[options.declarationKey] = {};
      if (Object.keys(attributes).length) {
        currentElement[options.declarationKey][options.attributesKey] = attributes;
      }
      if (options.addParent) {
        currentElement[options.declarationKey][options.parentKey] = currentElement;
      }
    } else {
      if (options.ignoreInstruction) {
        return;
      }
      if (options.trim) {
        instruction.body = instruction.body.trim();
      }
      var value = {};
      if (options.instructionHasAttributes && Object.keys(attributes).length) {
        value[instruction.name] = {};
        value[instruction.name][options.attributesKey] = attributes;
      } else {
        value[instruction.name] = instruction.body;
      }
      addField("instruction", value);
    }
  }
  function onStartElement(name, attributes) {
    var element;
    if (typeof name === "object") {
      attributes = name.attributes;
      name = name.name;
    }
    attributes = manipulateAttributes(attributes);
    if ("elementNameFn" in options) {
      name = options.elementNameFn(name, currentElement);
    }
    if (options.compact) {
      element = {};
      if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
        element[options.attributesKey] = {};
        var key;
        for (key in attributes) {
          if (attributes.hasOwnProperty(key)) {
            element[options.attributesKey][key] = attributes[key];
          }
        }
      }
      if (!(name in currentElement) && (isArray2(options.alwaysArray) ? options.alwaysArray.indexOf(name) !== -1 : options.alwaysArray)) {
        currentElement[name] = [];
      }
      if (currentElement[name] && !isArray2(currentElement[name])) {
        currentElement[name] = [currentElement[name]];
      }
      if (isArray2(currentElement[name])) {
        currentElement[name].push(element);
      } else {
        currentElement[name] = element;
      }
    } else {
      if (!currentElement[options.elementsKey]) {
        currentElement[options.elementsKey] = [];
      }
      element = {};
      element[options.typeKey] = "element";
      element[options.nameKey] = name;
      if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
        element[options.attributesKey] = attributes;
      }
      if (options.alwaysChildren) {
        element[options.elementsKey] = [];
      }
      currentElement[options.elementsKey].push(element);
    }
    element[options.parentKey] = currentElement;
    currentElement = element;
  }
  function onText(text) {
    if (options.ignoreText) {
      return;
    }
    if (!text.trim() && !options.captureSpacesBetweenElements) {
      return;
    }
    if (options.trim) {
      text = text.trim();
    }
    if (options.nativeType) {
      text = nativeType(text);
    }
    if (options.sanitize) {
      text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    addField("text", text);
  }
  function onComment(comment) {
    if (options.ignoreComment) {
      return;
    }
    if (options.trim) {
      comment = comment.trim();
    }
    addField("comment", comment);
  }
  function onEndElement(name) {
    var parentElement = currentElement[options.parentKey];
    if (!options.addParent) {
      delete currentElement[options.parentKey];
    }
    currentElement = parentElement;
  }
  function onCdata(cdata) {
    if (options.ignoreCdata) {
      return;
    }
    if (options.trim) {
      cdata = cdata.trim();
    }
    addField("cdata", cdata);
  }
  function onDoctype(doctype) {
    if (options.ignoreDoctype) {
      return;
    }
    doctype = doctype.replace(/^ /, "");
    if (options.trim) {
      doctype = doctype.trim();
    }
    addField("doctype", doctype);
  }
  function onError(error) {
    error.note = error;
  }
  module.exports = function(xml, userOptions) {
    var parser = pureJsParser ? sax.parser(true, {}) : parser = new expat.Parser("UTF-8");
    var result = {};
    currentElement = result;
    options = validateOptions(userOptions);
    if (pureJsParser) {
      parser.opt = { strictEntities: true };
      parser.onopentag = onStartElement;
      parser.ontext = onText;
      parser.oncomment = onComment;
      parser.onclosetag = onEndElement;
      parser.onerror = onError;
      parser.oncdata = onCdata;
      parser.ondoctype = onDoctype;
      parser.onprocessinginstruction = onInstruction;
    } else {
      parser.on("startElement", onStartElement);
      parser.on("text", onText);
      parser.on("comment", onComment);
      parser.on("endElement", onEndElement);
      parser.on("error", onError);
    }
    if (pureJsParser) {
      parser.write(xml).close();
    } else {
      if (!parser.parse(xml)) {
        throw new Error("XML parsing error: " + parser.getError());
      }
    }
    if (result[options.elementsKey]) {
      var temp = result[options.elementsKey];
      delete result[options.elementsKey];
      result[options.elementsKey] = temp;
      delete result.text;
    }
    return result;
  };
});

// node_modules/xml-js/lib/xml2json.js
var require_xml2json = __commonJS((exports, module) => {
  var helper = require_options_helper();
  var xml2js = require_xml2js();
  function validateOptions(userOptions) {
    var options = helper.copyOptions(userOptions);
    helper.ensureSpacesExists(options);
    return options;
  }
  module.exports = function(xml, userOptions) {
    var options, js, json, parentKey;
    options = validateOptions(userOptions);
    js = xml2js(xml, options);
    parentKey = "compact" in options && options.compact ? "_parent" : "parent";
    if ("addParent" in options && options.addParent) {
      json = JSON.stringify(js, function(k2, v) {
        return k2 === parentKey ? "_" : v;
      }, options.spaces);
    } else {
      json = JSON.stringify(js, null, options.spaces);
    }
    return json.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  };
});

// node_modules/xml-js/lib/js2xml.js
var require_js2xml = __commonJS((exports, module) => {
  var helper = require_options_helper();
  var isArray2 = require_array_helper().isArray;
  var currentElement;
  var currentElementName;
  function validateOptions(userOptions) {
    var options = helper.copyOptions(userOptions);
    helper.ensureFlagExists("ignoreDeclaration", options);
    helper.ensureFlagExists("ignoreInstruction", options);
    helper.ensureFlagExists("ignoreAttributes", options);
    helper.ensureFlagExists("ignoreText", options);
    helper.ensureFlagExists("ignoreComment", options);
    helper.ensureFlagExists("ignoreCdata", options);
    helper.ensureFlagExists("ignoreDoctype", options);
    helper.ensureFlagExists("compact", options);
    helper.ensureFlagExists("indentText", options);
    helper.ensureFlagExists("indentCdata", options);
    helper.ensureFlagExists("indentAttributes", options);
    helper.ensureFlagExists("indentInstruction", options);
    helper.ensureFlagExists("fullTagEmptyElement", options);
    helper.ensureFlagExists("noQuotesForNativeAttributes", options);
    helper.ensureSpacesExists(options);
    if (typeof options.spaces === "number") {
      options.spaces = Array(options.spaces + 1).join(" ");
    }
    helper.ensureKeyExists("declaration", options);
    helper.ensureKeyExists("instruction", options);
    helper.ensureKeyExists("attributes", options);
    helper.ensureKeyExists("text", options);
    helper.ensureKeyExists("comment", options);
    helper.ensureKeyExists("cdata", options);
    helper.ensureKeyExists("doctype", options);
    helper.ensureKeyExists("type", options);
    helper.ensureKeyExists("name", options);
    helper.ensureKeyExists("elements", options);
    helper.checkFnExists("doctype", options);
    helper.checkFnExists("instruction", options);
    helper.checkFnExists("cdata", options);
    helper.checkFnExists("comment", options);
    helper.checkFnExists("text", options);
    helper.checkFnExists("instructionName", options);
    helper.checkFnExists("elementName", options);
    helper.checkFnExists("attributeName", options);
    helper.checkFnExists("attributeValue", options);
    helper.checkFnExists("attributes", options);
    helper.checkFnExists("fullTagEmptyElement", options);
    return options;
  }
  function writeIndentation(options, depth, firstLine) {
    return (!firstLine && options.spaces ? `
` : "") + Array(depth + 1).join(options.spaces);
  }
  function writeAttributes(attributes, options, depth) {
    if (options.ignoreAttributes) {
      return "";
    }
    if ("attributesFn" in options) {
      attributes = options.attributesFn(attributes, currentElementName, currentElement);
    }
    var key, attr, attrName, quote, result = [];
    for (key in attributes) {
      if (attributes.hasOwnProperty(key) && attributes[key] !== null && attributes[key] !== undefined) {
        quote = options.noQuotesForNativeAttributes && typeof attributes[key] !== "string" ? "" : '"';
        attr = "" + attributes[key];
        attr = attr.replace(/"/g, "&quot;");
        attrName = "attributeNameFn" in options ? options.attributeNameFn(key, attr, currentElementName, currentElement) : key;
        result.push(options.spaces && options.indentAttributes ? writeIndentation(options, depth + 1, false) : " ");
        result.push(attrName + "=" + quote + ("attributeValueFn" in options ? options.attributeValueFn(attr, key, currentElementName, currentElement) : attr) + quote);
      }
    }
    if (attributes && Object.keys(attributes).length && options.spaces && options.indentAttributes) {
      result.push(writeIndentation(options, depth, false));
    }
    return result.join("");
  }
  function writeDeclaration(declaration, options, depth) {
    currentElement = declaration;
    currentElementName = "xml";
    return options.ignoreDeclaration ? "" : "<?" + "xml" + writeAttributes(declaration[options.attributesKey], options, depth) + "?>";
  }
  function writeInstruction(instruction, options, depth) {
    if (options.ignoreInstruction) {
      return "";
    }
    var key;
    for (key in instruction) {
      if (instruction.hasOwnProperty(key)) {
        break;
      }
    }
    var instructionName = "instructionNameFn" in options ? options.instructionNameFn(key, instruction[key], currentElementName, currentElement) : key;
    if (typeof instruction[key] === "object") {
      currentElement = instruction;
      currentElementName = instructionName;
      return "<?" + instructionName + writeAttributes(instruction[key][options.attributesKey], options, depth) + "?>";
    } else {
      var instructionValue = instruction[key] ? instruction[key] : "";
      if ("instructionFn" in options)
        instructionValue = options.instructionFn(instructionValue, key, currentElementName, currentElement);
      return "<?" + instructionName + (instructionValue ? " " + instructionValue : "") + "?>";
    }
  }
  function writeComment(comment, options) {
    return options.ignoreComment ? "" : "<!--" + ("commentFn" in options ? options.commentFn(comment, currentElementName, currentElement) : comment) + "-->";
  }
  function writeCdata(cdata, options) {
    return options.ignoreCdata ? "" : "<![CDATA[" + ("cdataFn" in options ? options.cdataFn(cdata, currentElementName, currentElement) : cdata.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
  }
  function writeDoctype(doctype, options) {
    return options.ignoreDoctype ? "" : "<!DOCTYPE " + ("doctypeFn" in options ? options.doctypeFn(doctype, currentElementName, currentElement) : doctype) + ">";
  }
  function writeText(text, options) {
    if (options.ignoreText)
      return "";
    text = "" + text;
    text = text.replace(/&amp;/g, "&");
    text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return "textFn" in options ? options.textFn(text, currentElementName, currentElement) : text;
  }
  function hasContent(element, options) {
    var i;
    if (element.elements && element.elements.length) {
      for (i = 0;i < element.elements.length; ++i) {
        switch (element.elements[i][options.typeKey]) {
          case "text":
            if (options.indentText) {
              return true;
            }
            break;
          case "cdata":
            if (options.indentCdata) {
              return true;
            }
            break;
          case "instruction":
            if (options.indentInstruction) {
              return true;
            }
            break;
          case "doctype":
          case "comment":
          case "element":
            return true;
          default:
            return true;
        }
      }
    }
    return false;
  }
  function writeElement(element, options, depth) {
    currentElement = element;
    currentElementName = element.name;
    var xml = [], elementName = "elementNameFn" in options ? options.elementNameFn(element.name, element) : element.name;
    xml.push("<" + elementName);
    if (element[options.attributesKey]) {
      xml.push(writeAttributes(element[options.attributesKey], options, depth));
    }
    var withClosingTag = element[options.elementsKey] && element[options.elementsKey].length || element[options.attributesKey] && element[options.attributesKey]["xml:space"] === "preserve";
    if (!withClosingTag) {
      if ("fullTagEmptyElementFn" in options) {
        withClosingTag = options.fullTagEmptyElementFn(element.name, element);
      } else {
        withClosingTag = options.fullTagEmptyElement;
      }
    }
    if (withClosingTag) {
      xml.push(">");
      if (element[options.elementsKey] && element[options.elementsKey].length) {
        xml.push(writeElements(element[options.elementsKey], options, depth + 1));
        currentElement = element;
        currentElementName = element.name;
      }
      xml.push(options.spaces && hasContent(element, options) ? `
` + Array(depth + 1).join(options.spaces) : "");
      xml.push("</" + elementName + ">");
    } else {
      xml.push("/>");
    }
    return xml.join("");
  }
  function writeElements(elements, options, depth, firstLine) {
    return elements.reduce(function(xml, element) {
      var indent = writeIndentation(options, depth, firstLine && !xml);
      switch (element.type) {
        case "element":
          return xml + indent + writeElement(element, options, depth);
        case "comment":
          return xml + indent + writeComment(element[options.commentKey], options);
        case "doctype":
          return xml + indent + writeDoctype(element[options.doctypeKey], options);
        case "cdata":
          return xml + (options.indentCdata ? indent : "") + writeCdata(element[options.cdataKey], options);
        case "text":
          return xml + (options.indentText ? indent : "") + writeText(element[options.textKey], options);
        case "instruction":
          var instruction = {};
          instruction[element[options.nameKey]] = element[options.attributesKey] ? element : element[options.instructionKey];
          return xml + (options.indentInstruction ? indent : "") + writeInstruction(instruction, options, depth);
      }
    }, "");
  }
  function hasContentCompact(element, options, anyContent) {
    var key;
    for (key in element) {
      if (element.hasOwnProperty(key)) {
        switch (key) {
          case options.parentKey:
          case options.attributesKey:
            break;
          case options.textKey:
            if (options.indentText || anyContent) {
              return true;
            }
            break;
          case options.cdataKey:
            if (options.indentCdata || anyContent) {
              return true;
            }
            break;
          case options.instructionKey:
            if (options.indentInstruction || anyContent) {
              return true;
            }
            break;
          case options.doctypeKey:
          case options.commentKey:
            return true;
          default:
            return true;
        }
      }
    }
    return false;
  }
  function writeElementCompact(element, name, options, depth, indent) {
    currentElement = element;
    currentElementName = name;
    var elementName = "elementNameFn" in options ? options.elementNameFn(name, element) : name;
    if (typeof element === "undefined" || element === null || element === "") {
      return "fullTagEmptyElementFn" in options && options.fullTagEmptyElementFn(name, element) || options.fullTagEmptyElement ? "<" + elementName + "></" + elementName + ">" : "<" + elementName + "/>";
    }
    var xml = [];
    if (name) {
      xml.push("<" + elementName);
      if (typeof element !== "object") {
        xml.push(">" + writeText(element, options) + "</" + elementName + ">");
        return xml.join("");
      }
      if (element[options.attributesKey]) {
        xml.push(writeAttributes(element[options.attributesKey], options, depth));
      }
      var withClosingTag = hasContentCompact(element, options, true) || element[options.attributesKey] && element[options.attributesKey]["xml:space"] === "preserve";
      if (!withClosingTag) {
        if ("fullTagEmptyElementFn" in options) {
          withClosingTag = options.fullTagEmptyElementFn(name, element);
        } else {
          withClosingTag = options.fullTagEmptyElement;
        }
      }
      if (withClosingTag) {
        xml.push(">");
      } else {
        xml.push("/>");
        return xml.join("");
      }
    }
    xml.push(writeElementsCompact(element, options, depth + 1, false));
    currentElement = element;
    currentElementName = name;
    if (name) {
      xml.push((indent ? writeIndentation(options, depth, false) : "") + "</" + elementName + ">");
    }
    return xml.join("");
  }
  function writeElementsCompact(element, options, depth, firstLine) {
    var i, key, nodes, xml = [];
    for (key in element) {
      if (element.hasOwnProperty(key)) {
        nodes = isArray2(element[key]) ? element[key] : [element[key]];
        for (i = 0;i < nodes.length; ++i) {
          switch (key) {
            case options.declarationKey:
              xml.push(writeDeclaration(nodes[i], options, depth));
              break;
            case options.instructionKey:
              xml.push((options.indentInstruction ? writeIndentation(options, depth, firstLine) : "") + writeInstruction(nodes[i], options, depth));
              break;
            case options.attributesKey:
            case options.parentKey:
              break;
            case options.textKey:
              xml.push((options.indentText ? writeIndentation(options, depth, firstLine) : "") + writeText(nodes[i], options));
              break;
            case options.cdataKey:
              xml.push((options.indentCdata ? writeIndentation(options, depth, firstLine) : "") + writeCdata(nodes[i], options));
              break;
            case options.doctypeKey:
              xml.push(writeIndentation(options, depth, firstLine) + writeDoctype(nodes[i], options));
              break;
            case options.commentKey:
              xml.push(writeIndentation(options, depth, firstLine) + writeComment(nodes[i], options));
              break;
            default:
              xml.push(writeIndentation(options, depth, firstLine) + writeElementCompact(nodes[i], key, options, depth, hasContentCompact(nodes[i], options)));
          }
          firstLine = firstLine && !xml.length;
        }
      }
    }
    return xml.join("");
  }
  module.exports = function(js, options) {
    options = validateOptions(options);
    var xml = [];
    currentElement = js;
    currentElementName = "_root_";
    if (options.compact) {
      xml.push(writeElementsCompact(js, options, 0, true));
    } else {
      if (js[options.declarationKey]) {
        xml.push(writeDeclaration(js[options.declarationKey], options, 0));
      }
      if (js[options.elementsKey] && js[options.elementsKey].length) {
        xml.push(writeElements(js[options.elementsKey], options, 0, !xml.length));
      }
    }
    return xml.join("");
  };
});

// node_modules/xml-js/lib/json2xml.js
var require_json2xml = __commonJS((exports, module) => {
  var js2xml = require_js2xml();
  module.exports = function(json, options) {
    if (json instanceof Buffer) {
      json = json.toString();
    }
    var js = null;
    if (typeof json === "string") {
      try {
        js = JSON.parse(json);
      } catch (e) {
        throw new Error("The JSON structure is invalid");
      }
    } else {
      js = json;
    }
    return js2xml(js, options);
  };
});

// node_modules/xml-js/lib/index.js
var require_lib = __commonJS((exports, module) => {
  var xml2js = require_xml2js();
  var xml2json = require_xml2json();
  var js2xml = require_js2xml();
  var json2xml = require_json2xml();
  module.exports = {
    xml2js,
    xml2json,
    js2xml,
    json2xml
  };
});

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length;i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0;i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length;i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(typeof setImmediate === "function", isFunction(_global.postMessage));
var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/helpers/null.js
var null_default = null;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (null_default || FormData);
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(formData, el, utils_default.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\x00"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  if (utils_default.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// node_modules/axios/lib/core/InterceptorManager.js
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

// node_modules/axios/lib/platform/browser/classes/FormData.js
var FormData_default = typeof FormData !== "undefined" ? FormData : null;

// node_modules/axios/lib/platform/browser/classes/Blob.js
var Blob_default = typeof Blob !== "undefined" ? Blob : null;

// node_modules/axios/lib/platform/browser/index.js
var browser_default = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: Blob_default
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};

// node_modules/axios/lib/platform/common/utils.js
var exports_utils = {};
__export(exports_utils, {
  origin: () => origin,
  navigator: () => _navigator,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasBrowserEnv: () => hasBrowserEnv
});
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var _navigator = typeof navigator === "object" && navigator || undefined;
var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
var hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var origin = hasBrowserEnv && window.location.href || "http://localhost";

// node_modules/axios/lib/platform/index.js
var platform_default = {
  ...exports_utils,
  ...browser_default
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams, Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0;i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__")
      return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(isFileList2 ? { "files[]": data } : data, _FormData && new _FormData, this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": undefined
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split(`
`).forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value))
    return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === undefined || _rewrite === true || _rewrite === undefined && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else if (utils_default.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default("Request failed with status code " + response.status, [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/progressEventReducer.js
var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return throttle_default((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
var progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform_default.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(new URL(platform_default.origin), platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)) : () => true;

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? {
  write(name, value, expires, path, domain, secure) {
    const cookie = [name + "=" + encodeURIComponent(value)];
    utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
    utils_default.isString(path) && cookie.push("path=" + path);
    utils_default.isString(domain) && cookie.push("domain=" + domain);
    secure === true && cookie.push("secure");
    document.cookie = cookie.join("; ");
  },
  read(name) {
    const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
    return match ? decodeURIComponent(match[3]) : null;
  },
  remove(name) {
    this.write(name, "", Date.now() - 86400000);
  }
} : {
  write() {
  },
  read() {
    return null;
  },
  remove() {
  }
};

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(undefined, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/helpers/resolveConfig.js
var resolveConfig_default = (config) => {
  const newConfig = mergeConfig({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders_default.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
  if (auth) {
    headers.set("Authorization", "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")));
  }
  let contentType;
  if (utils_default.isFormData(data)) {
    if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform_default.hasStandardBrowserEnv) {
    withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};

// node_modules/axios/lib/adapters/xhr.js
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig_default(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest;
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional = _config.transitional || transitional_default;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    requestData === undefined && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/helpers/composeSignals.js
var composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController;
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils_default.asap(unsubscribe);
    return signal;
  }
};
var composeSignals_default = composeSignals;

// node_modules/axios/lib/helpers/trackStream.js
var streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
var readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
var readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (;; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
var trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator.next();
        if (done2) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};

// node_modules/axios/lib/adapters/fetch.js
var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? ((encoder) => (str) => encoder.encode(str))(new TextEncoder) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
var test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
var supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform_default.origin, {
    body: new ReadableStream,
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
var resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
    !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
      throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
    });
  });
})(new Response);
var getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils_default.isBlob(body)) {
    return body.size;
  }
  if (utils_default.isSpecCompliantForm(body)) {
    const _request = new Request(platform_default.origin, {
      method: "POST",
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils_default.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils_default.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
var resolveBodyLength = async (headers, body) => {
  const length = utils_default.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
var fetch_default = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig_default(config);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress)));
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils_default.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });
    let response = await fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
      response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
        flush && flush();
        unsubscribe && unsubscribe();
      }), options);
    }
    responseType = responseType || "text";
    let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders_default.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
      throw Object.assign(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request), {
        cause: err.cause || err
      });
    }
    throw AxiosError_default.from(err, err && err.code, config, request);
  }
});

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: null_default,
  xhr: xhr_default,
  fetch: fetch_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0;i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === undefined) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
      let s = length ? reasons.length > 1 ? `since :
` + reasons.map(renderReason).join(`
`) : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(`There is no suitable adapter to dispatch the request ` + s, "ERR_NOT_SUPPORT");
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(config, config.transformRequest);
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(config, config.transformResponse, response);
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/env/data.js
var VERSION = "1.7.9";

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError_default.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;

class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default,
      response: new InterceptorManager_default
    };
  }
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error;
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += `
` + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== undefined) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    validator_default.assertOptions(config, {
      baseUrl: validators2.spelling("baseURL"),
      withXsrfToken: validators2.spelling("withXSRFToken")
    }, true);
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(headers.common, headers[config.method]);
    headers && utils_default.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (method) => {
      delete headers[method];
    });
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController;
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (value[0] === '"' && value.endsWith('"') && !value.includes("\\")) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// src/XML.ts
var import_xml_js = __toESM(require_lib(), 1);

class XML {
  static xmlToJsonDestr(value) {
    return this.transformJson(destr(import_xml_js.xml2json(value, {
      compact: true,
      spaces: 4,
      ignoreComment: true,
      ignoreText: false
    })));
  }
  static cleanJson(input) {
    if (typeof input !== "object" || input === null)
      return input;
    if ("_text" in input && Object.keys(input).length === 1)
      return input._text;
    if (Array.isArray(input)) {
      return input.map((item) => this.cleanJson(item));
    }
    return Object.fromEntries(Object.entries(input).filter(([key]) => !key.includes("_attributes")).map(([key, value]) => [key, this.cleanJson(value)]));
  }
  static transformJson(input) {
    if (typeof input !== "object" || input === null)
      return input;
    return Object.fromEntries(Object.entries(input).filter(([key]) => !key.includes("_declaration")).map(([key, value]) => [key, this.cleanJson(value)]));
  }
  static jsonToXml(json) {
    const convert = (obj, indent = "") => Object.entries(obj).map(([key, value]) => Array.isArray(value) ? value.map((item) => `
${indent}<${key}>${convert(item, indent + "  ")}
${indent}</${key}>`).join("") : typeof value === "object" && value !== null ? `
${indent}<${key}>${convert(value, indent + "  ")}
${indent}</${key}>` : `
${indent}<${key}>${value}</${key}>`).join("");
    const rootKey = Object.keys(json)[0];
    return `<${rootKey}>
${convert(json[rootKey]).trim()}
</${rootKey}>`;
  }
}
var XML_default = XML;

// src/AWSSignatureV4.ts
class AWSSignatureV4Exception extends Error {
  code;
  response;
  type;
  constructor(message, code = 0, type = "", response = "") {
    super(message);
    this.name = "AWSSignatureV4Exception";
    this.message = message;
    this.code = code;
    this.type = type;
    this.response = response;
  }
}

class AWSSignatureV4 {
  static CHUNK_SIZE = 1024 * 1024 * 5;
  accessKeyId;
  secretAccessKey;
  region;
  service;
  constructor(accessKeyId, secretAccessKey, region, service) {
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
    this.region = region;
    this.service = service;
  }
  async HMAC(key, data) {
    const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    return crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(data));
  }
  async HASH(data) {
    const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(data));
    return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  async getSignatureKey(dateStamp) {
    const key = new TextEncoder().encode("AWS4" + this.secretAccessKey);
    const kDate = await this.HMAC(key, dateStamp);
    const kRegion = await this.HMAC(kDate, this.region);
    const kService = await this.HMAC(kRegion, this.service);
    return this.HMAC(kService, "aws4_request");
  }
  async prepareRequestSign(method, url, headers = {}, params = {}) {
    const now = new Date;
    const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
    const dateStamp = amzDate.slice(0, 8);
    headers = Object.assign({}, headers, {
      host: url.host,
      "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
      "x-amz-date": amzDate
    });
    let options = {
      method,
      headers
    };
    if (method === "GET") {
      for (const [key, value] of Object.entries(AWSSignatureV4.flatten(params))) {
        if (!url.searchParams.has(key)) {
          url.searchParams.append(key, value);
        }
      }
    } else {
      switch (headers["content-type"]) {
        case "application/json":
          options.body = JSON.stringify(params);
          break;
        case "multipart/form-data":
          const formData = new FormData;
          for (const [key, value] of Object.entries(params)) {
            if (value instanceof File) {
              formData.append(key, value, value.name);
            } else if (Array.isArray(value)) {
              for (const nestedValue of value) {
                formData.append(`${key}[]`, nestedValue);
              }
            } else {
              formData.append(key, value);
            }
          }
          options.body = formData;
          delete headers["content-type"];
          break;
        case "application/xml":
          options.body = XML_default.jsonToXml(params);
          delete headers["content-type"];
          break;
      }
    }
    const canonicalRequest = [
      method,
      url.pathname,
      url.searchParams.toString(),
      Object.keys(headers).sort().map((k2) => `${k2.toLowerCase()}:${headers[k2].trim()}
`).join(""),
      Object.keys(headers).sort().join(";"),
      "UNSIGNED-PAYLOAD"
    ].join(`
`);
    const credentialScope = `${dateStamp}/${this.region}/${this.service}/aws4_request`;
    const stringToSign = `AWS4-HMAC-SHA256
${amzDate}
${credentialScope}
${await this.HASH(canonicalRequest)}`;
    const signingKey = await this.getSignatureKey(dateStamp);
    const signatureBuffer = await this.HMAC(signingKey, stringToSign);
    const signature = Array.from(new Uint8Array(signatureBuffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    options.headers = Object.assign({}, options.headers, {
      authorization: `AWS4-HMAC-SHA256 Credential=${this.accessKeyId}/${credentialScope}, SignedHeaders=${Object.keys(headers).sort().join(";")}, Signature=${signature}`
    });
    return { uri: url, options };
  }
  async call(method, url, headers = {}, params = {}, responseType = "json") {
    const { uri, options } = await this.prepareRequestSign(method, url, headers, params);
    let data = null;
    const response = await fetch(uri, options);
    if (response.headers.get("content-type")?.includes("application/json")) {
      data = await response.json();
    } else if (response.headers.get("content-type")?.includes("application/xml")) {
      data = XML_default.xmlToJsonDestr(await response.text());
    } else if (responseType === "arrayBuffer") {
      data = await response.arrayBuffer();
    } else {
      data = await response.text();
    }
    if (400 < response.status) {
      throw new AWSSignatureV4Exception(data?.message, response.status, data?.Error.Code, data?.Error);
    }
    return data;
  }
  async chunkedUpload(method, url, headers = {}, params = {}, onUploadProgress) {
    const { uri, options } = await this.prepareRequestSign(method, url, headers, params);
    let file = undefined;
    if (typeof options.body !== "undefined" && options.body instanceof FormData) {
      file = Object.values(params).find((value) => value instanceof File);
    }
    if (typeof file === "undefined") {
      throw new Error("File not found!");
    }
    const response = await axios_default(uri.toString(), {
      method: options.method,
      headers: options.headers,
      data: file,
      onUploadProgress
    });
    return response.status === 200 ? 0 : undefined;
  }
  async getPresignedUrl(method, url, expiresIn = 900) {
    const now = new Date;
    const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
    const dateStamp = amzDate.slice(0, 8);
    const credentialScope = [
      dateStamp,
      this.region,
      this.service,
      "aws4_request"
    ].join("/");
    const params = {
      "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
      "X-Amz-Credential": `${this.accessKeyId}/${credentialScope}`,
      "X-Amz-Date": amzDate,
      "X-Amz-Expires": expiresIn.toString(),
      "X-Amz-SignedHeaders": "host"
    };
    const { uri } = await this.prepareRequestSign(method, url, {}, params);
    const canonicalRequest = [
      method,
      uri.pathname,
      uri.searchParams.toString(),
      "host:" + url.host + `
`,
      "host",
      "UNSIGNED-PAYLOAD"
    ].join(`
`);
    const stringToSign = [
      "AWS4-HMAC-SHA256",
      amzDate,
      credentialScope,
      await this.HASH(canonicalRequest)
    ].join(`
`);
    const signingKey = await this.getSignatureKey(dateStamp);
    const signatureArrayBuffer = await this.HMAC(signingKey, stringToSign);
    const signature = Array.from(new Uint8Array(signatureArrayBuffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    uri.searchParams.append("X-Amz-Signature", signature);
    return uri;
  }
  static flatten(data, prefix = "") {
    let output = {};
    for (const [key, value] of Object.entries(data)) {
      const finalKey = prefix ? prefix + `[${key}]` : key;
      if (Array.isArray(value)) {
        output = { ...output, ...AWSSignatureV4.flatten(value, finalKey) };
      } else {
        output[finalKey] = value;
      }
    }
    return output;
  }
  static replaceNegatif(payload, prefix = "-") {
    if (!payload)
      return {};
    let output = {};
    for (const [key, value] of Object.entries(payload)) {
      const finalKey = prefix ? AWSSignatureV4.toKebabCase(key, prefix) : key;
      if (Array.isArray(value)) {
        output = { ...output, ...AWSSignatureV4.replaceNegatif(value, finalKey) };
      } else {
        output[finalKey] = value;
      }
    }
    return output;
  }
  static toKebabCase(str, prefix = "-") {
    return str.replace(/[\s_]+/g, `${prefix}`);
  }
}
var AWSSignatureV4_default = AWSSignatureV4;
// src/InputFile.ts
class InputFile {
  static fromBuffer(parts, name) {
    return new File([parts], name);
  }
}
var InputFile_default = InputFile;
// src/S3Operations.ts
class S3Operations {
  endpoint;
  awssignaturev4;
  constructor(endpoint, awssignaturev4) {
    this.endpoint = endpoint;
    this.awssignaturev4 = awssignaturev4;
  }
  async abortMultipartUpload(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key);
    uri.searchParams.append("UploadId=", Req.UploadId);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async completeMultipartUpload(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?uploadId=" + Req.UploadId);
    const payload = {
      CompleteMultipartUpload: {
        Part: []
      }
    };
    if (Req.Parts) {
      for (const value of Req.Parts) {
        payload.CompleteMultipartUpload.Part.push(value);
      }
    }
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("POST", uri, headers, payload);
  }
  async copyObject(Req) {
    const target = Req.TargetBucket + "/" + Req.TargetKey;
    const source = "/" + Req.Bucket + "/" + Req.Key;
    const uri = new URL(this.endpoint + "/" + target);
    const headers = {
      "x-amz-copy-source": source,
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("PUT", uri, headers, {});
  }
  async createBucket(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("PUT", uri, headers, {});
  }
  async createBucketMetadataTableConfiguration(Req) {
    const uri = new URL(this.endpoint);
    uri.pathname = Req.Bucket;
    const headers = {
      "content-type": "application/json",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    const payload = Req.Configuration;
    return this.awssignaturev4.call("POST", uri, headers, payload);
  }
  async createMultipartUpload(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?uploads");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("POST", uri, headers);
  }
  async createSession(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?session");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async deleteBucket(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketAnalyticsConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?analytics&id=" + Req.Id);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketCors(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?cors");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketEncryption(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?encryption");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketIntelligentTieringConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?intelligent-tiering&id=" + Req.Id);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketInventoryConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?inventory&id=" + Req.Id);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketLifecycle(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?lifecycle");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketMetadataTableConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?metadataTable");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketMetricsConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?metrics&id=" + Req.Id);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketOwnershipControls(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?ownershipControls");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketPolicy(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?policy");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketReplication(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?replication");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketTagging(Req) {
    const uri = new URL(this.endpoint);
    uri.pathname = Req.Bucket;
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteBucketWebsite(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?website");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteObject(Req) {
    const uri = new URL(this.endpoint);
    uri.pathname = Req.Bucket + "/" + Req.Key;
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deleteObjects(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?delete");
    let payload = {
      Delete: {
        Object: []
      }
    };
    for (const object of Object.values(Req.Objects)) {
      payload.Delete.Object.push(object);
    }
    if (Req.Quiet !== undefined) {
      payload.Delete.Quiet = Req.Quiet;
    }
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("POST", uri, headers, payload);
  }
  async deleteObjectTagging(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?tagging");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async deletePublicAccessBlock(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?publicAccessBlock");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("DELETE", uri, headers, {});
  }
  async getBucketAccelerateConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?accelerate");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketAcl(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?acl");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketAnalyticsConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?analytics&id=" + Req.Id);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketCors(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?cors");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketEncryption(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?encryption");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketIntelligentTieringConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?intelligent-tiering&id=" + Req.Id);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketInventoryConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?inventory&id=" + Req.Id);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketLifecycle(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?lifecycle");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketLifecycleConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?lifecycle");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketLocation(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?location");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketLogging(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?logging");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketMetadataTableConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?metadataTable");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketMetricsConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?metrics&id=" + Req.Id);
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketNotification(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?notification");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketNotificationConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?notification");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketOwnershipControls(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?ownershipControls");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketPolicy(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?policy");
    const headers = {
      "content-type": "application/json",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketPolicyStatus(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?policyStatus");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketReplication(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?replication");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketRequestPayment(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?requestPayment");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketTagging(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?tagging");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketVersioning(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?versioning");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getBucketWebsite(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?website");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getObject(Req) {
    const uri = new URL(this.endpoint);
    uri.pathname = Req.Bucket + "/" + Req.Key;
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getObjectAcl(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?acl");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getObjectAttributes(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?attributes");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getObjectLegalHold(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?legal-hold");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getObjectLockConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?object-lock");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getObjectRetention(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?retention");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getObjectTagging(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?tagging");
    const payload = {};
    if (Req.VersionId !== undefined) {
      payload["versionId"] = Req.VersionId;
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, payload);
  }
  async getObjectTorrent(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?torrent");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async getPublicAccessBlock(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?publicAccessBlock");
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async headBucket(Req) {
    const uri = new URL(this.endpoint);
    uri.pathname = Req.Bucket;
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("HEAD", uri, headers);
  }
  async headObject(Req) {
    const uri = new URL(this.endpoint);
    uri.pathname = Req.Bucket + "/" + Req.Key;
    if (Req.MetaObject) {
      const meta = Req.MetaObject;
      if (meta.partNumber !== undefined) {
        uri.searchParams.append("partNumber", meta.partNumber);
      }
      if (meta.ResponseCacheControl !== undefined) {
        uri.searchParams.append("response-cache-control", meta.ResponseCacheControl);
      }
      if (meta.ResponseContentDisposition !== undefined) {
        uri.searchParams.append("response-content-disposition", meta.ResponseContentDisposition);
      }
      if (meta.ResponseContentEncoding !== undefined) {
        uri.searchParams.append("response-content-encoding", meta.ResponseContentEncoding);
      }
      if (meta.ResponseContentLanguage !== undefined) {
        uri.searchParams.append("response-content-language", meta.ResponseContentLanguage);
      }
      if (meta.ResponseContentType !== undefined) {
        uri.searchParams.append("response-content-type", meta.ResponseContentType);
      }
      if (meta.ResponseExpires !== undefined) {
        uri.searchParams.append("response-expires", meta.ResponseExpires);
      }
      if (meta.VersionId !== undefined) {
        uri.searchParams.append("versionId", meta.VersionId);
      }
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("HEAD", uri, headers);
  }
  async listBucketAnalyticsConfigurations(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/analytics");
    if (Req.ContinuationToken !== undefined) {
      uri.searchParams.append("continuation-token", Req.ContinuationToken);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async listBucketIntelligentTieringConfigurations(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/intelligent-tiering");
    if (Req.ContinuationToken !== undefined) {
      uri.searchParams.append("continuation-token", Req.ContinuationToken);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async listBucketInventoryConfigurations(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/inventory");
    if (Req.ContinuationToken !== undefined) {
      uri.searchParams.append("continuation-token", Req.ContinuationToken);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async listBucketMetricsConfigurations(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/metrics");
    if (Req.ContinuationToken !== undefined) {
      uri.searchParams.append("continuation-token", Req.ContinuationToken);
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async listBuckets(Req) {
    const uri = new URL(this.endpoint);
    const headers = AWSSignatureV4_default.replaceNegatif(Req?.Headers);
    return this.awssignaturev4.call("GET", uri, headers, {});
  }
  async listDirectoryBuckets(Req) {
    const uri = new URL(this.endpoint);
    let payload = {};
    if (Req.ContinuationToken !== undefined) {
      payload["continuation-token"] = Req.ContinuationToken;
    }
    if (Req.MaxDirectoryBuckets !== undefined) {
      payload["max-directory-buckets"] = Req.MaxDirectoryBuckets;
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, payload);
  }
  async listMultipartUploads(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?uploads");
    let payload = {};
    if (Req.Delimiter !== undefined) {
      payload["delimiter"] = Req.Delimiter;
    }
    if (Req.EncodingType !== undefined) {
      payload["encoding-type"] = Req.EncodingType;
    }
    if (Req.KeyMarker !== undefined) {
      payload["key-marker"] = Req.KeyMarker;
    }
    if (Req.MaxUploads !== undefined) {
      payload["max-uploads"] = Req.MaxUploads;
    }
    if (Req.Prefix !== undefined) {
      payload["prefix"] = Req.Prefix;
    }
    if (Req.UploadIdMarker !== undefined) {
      payload["upload-id-marker"] = Req.UploadIdMarker;
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, payload);
  }
  async listObjects() {
    console.warn("listObjects() is deprecated. Please use listObjectsV2() instead.");
  }
  async listObjectsV2(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket);
    const payload = {};
    if (Req.ListType !== undefined) {
      payload["list-type"] = Req.ListType;
    }
    if (Req.ContinuationToken !== undefined) {
      payload["continuation-token"] = Req.ContinuationToken;
    }
    if (Req.Delimiter !== undefined) {
      payload["delimiter"] = Req.Delimiter;
    }
    if (Req.EncodingType !== undefined) {
      payload["encoding-type"] = Req.EncodingType;
    }
    if (Req.FetchOwner !== undefined) {
      payload["fetch-owner"] = Req.FetchOwner;
    }
    if (Req.MaxKeys !== undefined) {
      payload["max-keys"] = Req.MaxKeys;
    }
    if (Req.Prefix !== undefined) {
      payload["prefix"] = Req.Prefix;
    }
    if (Req.StartAfter !== undefined) {
      payload["start-after"] = Req.StartAfter;
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, payload);
  }
  async listObjectVersions(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket);
    const payload = {};
    if (Req.Delimiter !== undefined) {
      payload["delimiter"] = Req.Delimiter;
    }
    if (Req.EncodingType !== undefined) {
      payload["encoding-typ"] = Req.EncodingType;
    }
    if (Req.KeyMarker !== undefined) {
      payload["key-marker"] = Req.KeyMarker;
    }
    if (Req.MaxKeys !== undefined) {
      payload["max-keys"] = Req.MaxKeys;
    }
    if (Req.Prefix !== undefined) {
      payload["prefix"] = Req.Prefix;
    }
    if (Req.VersionIdMarker !== undefined) {
      payload["version-id-marker"] = Req.VersionIdMarker;
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, payload);
  }
  async listParts(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key);
    const payload = {};
    if (Req.UploadId !== undefined) {
      payload["uploadId"] = Req.UploadId;
    }
    if (Req.MaxParts !== undefined) {
      payload["max-parts"] = Req.MaxParts;
    }
    if (Req.PartNumberMarker !== undefined) {
      payload["part-number-marker"] = Req.PartNumberMarker;
    }
    const headers = AWSSignatureV4_default.replaceNegatif(Req.Headers);
    return this.awssignaturev4.call("GET", uri, headers, payload);
  }
  async putBucketAccelerateConfiguration() {
  }
  async putBucketAcl() {
  }
  async putBucketAnalyticsConfiguration() {
  }
  async putBucketCors() {
  }
  async putBucketEncryption() {
  }
  async putBucketIntelligentTieringConfiguration() {
  }
  async putBucketInventoryConfiguration() {
  }
  async putBucketLifecycle() {
  }
  async putBucketLifecycleConfiguration() {
  }
  async putBucketLogging() {
  }
  async putBucketMetricsConfiguration() {
  }
  async putBucketNotification() {
  }
  async putBucketNotificationConfiguration() {
  }
  async putBucketOwnershipControls() {
  }
  async putBucketPolicy() {
  }
  async putBucketReplication() {
  }
  async putBucketRequestPayment() {
  }
  async putBucketTagging(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?tagging");
    let payload = {
      Tagging: {
        TagSet: {
          Tag: Req.Tagging.TagSet
        }
      }
    };
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async putBucketVersioning(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "?versioning");
    const payload = {
      VersioningConfiguration: {}
    };
    if (Req.Status) {
      payload.VersioningConfiguration["Status"] = Req.Status;
    }
    if (Req.MFADelete !== undefined) {
      payload.VersioningConfiguration["MFADelete"] = Req.MFADelete;
    }
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async putBucketWebsite(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?website");
    let payload = {
      WebsiteConfiguration: {}
    };
    if (Req.ErrorDocument !== undefined && typeof payload.WebsiteConfiguration.ErrorDocument === "undefined") {
      payload.WebsiteConfiguration.ErrorDocument = Req.ErrorDocument;
    }
    if (Req.IndexDocument !== undefined && typeof payload.WebsiteConfiguration.IndexDocument === "undefined") {
      payload.WebsiteConfiguration.IndexDocument = Req.IndexDocument;
    }
    if (Req.RedirectAllRequestsTo !== undefined && typeof payload.WebsiteConfiguration.RedirectAllRequestsTo === "undefined") {
      payload.WebsiteConfiguration.RedirectAllRequestsTo = Req.RedirectAllRequestsTo;
    }
    if (Req.RoutingRules !== undefined && typeof payload.WebsiteConfiguration.RoutingRules === "undefined") {
      payload.WebsiteConfiguration.RoutingRules = {
        RoutingRule: []
      };
      for (const key of Req.RoutingRules) {
        payload.WebsiteConfiguration.RoutingRules.RoutingRule.push(key);
      }
    }
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async putObject(Req) {
    const uri = new URL(this.endpoint);
    uri.pathname = Req.Bucket + "/" + Req.Key;
    const payload = {};
    if (typeof Req.Body !== "undefined") {
      payload["file"] = InputFile_default.fromBuffer(Req.Body, Req.Key);
    }
    const headers = {
      "content-type": "multipart/form-data"
    };
    return this.awssignaturev4.chunkedUpload("PUT", uri, headers, payload, Req.OnProgress);
  }
  async putObjectAcl(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?acl");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    let headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    if (Req.ACL !== undefined) {
      headers["x-amz-acl"] = Req.ACL;
    }
    let payload = {
      AccessControlPolicy: {
        AccessControlList: {
          Grant: []
        }
      }
    };
    if (Req.AccessControlPolicy.Owner !== undefined) {
      payload.AccessControlPolicy.Owner = Req.AccessControlPolicy.Owner;
    }
    if (Req.AccessControlPolicy.Grant !== undefined) {
      for (const [_, value] of Object.entries(Req.AccessControlPolicy.Grant)) {
        let pull = {
          Grantee: {}
        };
        for (const key of Object.keys(value)) {
          const k2 = key;
          if (key === "Permission") {
            pull.Permission = value[k2];
          } else {
            if (pull.Grantee[key] === undefined) {
              pull.Grantee[key] = value[k2];
            }
          }
        }
        payload.AccessControlPolicy.AccessControlList.Grant.push(pull);
      }
    }
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async putObjectLegalHold(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?legal-hold");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const payload = {
      LegalHold: {
        Status: Req.LegalHold.Status
      }
    };
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async putObjectLockConfiguration(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?object-lock");
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    const payload = {
      ObjectLockConfiguration: Req.ObjectLockConfiguration
    };
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async putObjectRetention(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?retention");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    const payload = {
      Retention: Req.Retention
    };
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async putObjectTagging(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?tagging");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    const payload = {
      Tagging: {
        TagSet: {
          Tag: Req.Tagging
        }
      }
    };
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async putPublicAccessBlock(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/?publicAccessBlock");
    const payload = {
      PublicAccessBlockConfiguration: Req.PublicAccessBlockConfiguration
    };
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("PUT", uri, headers, payload);
  }
  async restoreObject(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?restore");
    if (Req.VersionId !== undefined) {
      uri.searchParams.append("versionId", Req.VersionId);
    }
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    const payload = {
      RestoreRequest: Req.RestoreRequest
    };
    return this.awssignaturev4.call("POST", uri, headers, payload);
  }
  async selectObjectContent(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key + "?select&select-type=2");
    let payload = {
      SelectObjectContentRequest: {
        Expression: Req.Expression,
        ExpressionType: Req.ExpressionType,
        InputSerialization: Req.InputSerialization,
        OutputSerialization: Req.OutputSerialization
      }
    };
    if (Req.RequestProgress !== undefined && typeof payload.SelectObjectContentRequest.RequestProgress === "undefined") {
      payload.SelectObjectContentRequest.RequestProgress = Req.RequestProgress;
    }
    if (Req.ScanRange !== undefined && typeof payload.SelectObjectContentRequest.ScanRange === "undefined") {
      if (Req.ScanRange.End !== undefined) {
        payload.SelectObjectContentRequest.ScanRange = {
          End: Req.ScanRange.End
        };
      }
      if (Req.ScanRange.Start !== undefined) {
        payload.SelectObjectContentRequest.ScanRange = {
          Start: Req.ScanRange.Start
        };
      }
      if (Req.ScanRange.End !== undefined && Req.ScanRange.Start !== undefined) {
        payload.SelectObjectContentRequest.ScanRange = Req.ScanRange;
      }
    }
    const headers = {
      "content-type": "application/xml",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("POST", uri, headers, payload);
  }
  async uploadPart(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key);
    if (Req.PartNumber !== undefined) {
      uri.searchParams.append("partNumber", Req.PartNumber);
    }
    if (Req.UploadId !== undefined) {
      uri.searchParams.append("uploadId", Req.UploadId);
    }
    const payload = {};
    if (Req.Body !== undefined) {
      payload["file"] = InputFile_default.fromBuffer(Req.Body, Req.Key);
    }
    const headers = {
      "content-type": "multipart/form-data",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.chunkedUpload("PUT", uri, headers, payload);
  }
  async uploadPartCopy(Req) {
    const uri = new URL(this.endpoint + "/" + Req.Bucket + "/" + Req.Key);
    if (Req.PartNumber !== undefined) {
      uri.searchParams.append("partNumber", Req.PartNumber);
    }
    if (Req.UploadId !== undefined) {
      uri.searchParams.append("uploadId", Req.UploadId);
    }
    if (Req.CopySource === undefined) {
      throw new Error("Copy Source not undefined");
    }
    const headers = {
      "x-amz-copy-source": Req.CopySource,
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    return this.awssignaturev4.call("PUT", uri, headers, {});
  }
  async writeGetObjectResponse(Req) {
    const uri = new URL(this.endpoint + "/WriteGetObjectResponse");
    const headers = {
      "content-type": "multipart/form-data",
      ...AWSSignatureV4_default.replaceNegatif(Req.Headers)
    };
    if (Req.RequestRoute !== undefined) {
      headers["x-amz-request-route"] = Req.RequestRoute;
    }
    if (Req.RequestToken !== undefined) {
      headers["x-amz-request-token"] = Req.RequestToken;
    }
    const payload = {};
    if (Req.Body !== undefined && Req.KeyBody !== undefined) {
      payload["file"] = InputFile_default.fromBuffer(Req.Body, Req.KeyBody);
    }
    return this.awssignaturev4.chunkedUpload("POST", uri, headers, payload);
  }
  async presign(Req) {
    const uri = new URL(this.endpoint);
    uri.pathname = Req.Bucket + "/" + Req.Key;
    return this.awssignaturev4.getPresignedUrl("GET", uri, 900);
  }
}
export {
  S3Operations,
  AWSSignatureV4Exception,
  AWSSignatureV4
};
