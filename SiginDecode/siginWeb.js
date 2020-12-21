const token="221c61f85864d3ef42d757d32ffc2d04" //登陆后可以拿到的
const s_t=(new Date).getTime()
const appkey='12574478' //登陆后可以拿到的
const datas={"currentCityId":"0","cityOption":1,"pageIndex":1,"pageSize":15,"sortType":3,"categoryId":0,"returnItemOption":4,"dateType":0,"dmChannel":"damai@damaih5_h5"}
var a=function (t) {
    // console.log(t)
    function e(t, e) {
        return t << e | t >>> 32 - e
    }

    function n(t, e) {
        var n, r, i, o, a;
        return i = 2147483648 & t, o = 2147483648 & e, a = (1073741823 & t) + (1073741823 & e), (n = 1073741824 & t) & (r = 1073741824 & e) ? 2147483648 ^ a ^ i ^ o : n | r ? 1073741824 & a ? 3221225472 ^ a ^ i ^ o : 1073741824 ^ a ^ i ^ o : a ^ i ^ o
    }

    function r(t, r, i, o, a, s, c) {
        return n(e(t = n(t, n(n(function (t, e, n) {
            return t & e | ~t & n
        }(r, i, o), a), c)), s), r)
    }

    function i(t, r, i, o, a, s, c) {
        return n(e(t = n(t, n(n(function (t, e, n) {
            return t & n | e & ~n
        }(r, i, o), a), c)), s), r)
    }

    function o(t, r, i, o, a, s, c) {
        return n(e(t = n(t, n(n(function (t, e, n) {
            return t ^ e ^ n
        }(r, i, o), a), c)), s), r)
    }

    function a(t, r, i, o, a, s, c) {
        return n(e(t = n(t, n(n(function (t, e, n) {
            return e ^ (t | ~n)
        }(r, i, o), a), c)), s), r)
    }

    function s(t) {
        var e, n = "",
            r = "";
        for (e = 0; 3 >= e; e++) n += (r = "0" + (t >>> 8 * e & 255).toString(16)).substr(r.length - 2, 2);
        return n
    }
    var c, u, l, f, p, d, h, m, v, g;
    for (g = function (t) {
            for (var e, n = t.length, r = n + 8, i = 16 * ((r - r % 64) / 64 + 1), o = new Array(i - 1), a = 0, s = 0; n > s;) a = s % 4 * 8, o[e = (s - s % 4) / 4] = o[e] | t.charCodeAt(s) << a, s++;
            return a = s % 4 * 8, o[e = (s - s % 4) / 4] = o[e] | 128 << a, o[i - 2] = n << 3, o[i - 1] = n >>> 29, o
        }(t = function (t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", n = 0; n < t.length; n++) {
                var r = t.charCodeAt(n);
                128 > r ? e += String.fromCharCode(r) : r > 127 && 2048 > r ? (e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128))
            }
            return e
        }(t)), d = 1732584193, h = 4023233417, m = 2562383102, v = 271733878, c = 0; c < g.length; c += 16) u = d, l = h, f = m, p = v, h = a(h = a(h = a(h = a(h = o(h = o(h = o(h = o(h = i(h = i(h = i(h = i(h = r(h = r(h = r(h = r(h, m = r(m, v = r(v, d = r(d, h, m, v, g[c + 0], 7, 3614090360), h, m, g[c + 1], 12, 3905402710), d, h, g[c + 2], 17, 606105819), v, d, g[c + 3], 22, 3250441966), m = r(m, v = r(v, d = r(d, h, m, v, g[c + 4], 7, 4118548399), h, m, g[c + 5], 12, 1200080426), d, h, g[c + 6], 17, 2821735955), v, d, g[c + 7], 22, 4249261313), m = r(m, v = r(v, d = r(d, h, m, v, g[c + 8], 7, 1770035416), h, m, g[c + 9], 12, 2336552879), d, h, g[c + 10], 17, 4294925233), v, d, g[c + 11], 22, 2304563134), m = r(m, v = r(v, d = r(d, h, m, v, g[c + 12], 7, 1804603682), h, m, g[c + 13], 12, 4254626195), d, h, g[c + 14], 17, 2792965006), v, d, g[c + 15], 22, 1236535329), m = i(m, v = i(v, d = i(d, h, m, v, g[c + 1], 5, 4129170786), h, m, g[c + 6], 9, 3225465664), d, h, g[c + 11], 14, 643717713), v, d, g[c + 0], 20, 3921069994), m = i(m, v = i(v, d = i(d, h, m, v, g[c + 5], 5, 3593408605), h, m, g[c + 10], 9, 38016083), d, h, g[c + 15], 14, 3634488961), v, d, g[c + 4], 20, 3889429448), m = i(m, v = i(v, d = i(d, h, m, v, g[c + 9], 5, 568446438), h, m, g[c + 14], 9, 3275163606), d, h, g[c + 3], 14, 4107603335), v, d, g[c + 8], 20, 1163531501), m = i(m, v = i(v, d = i(d, h, m, v, g[c + 13], 5, 2850285829), h, m, g[c + 2], 9, 4243563512), d, h, g[c + 7], 14, 1735328473), v, d, g[c + 12], 20, 2368359562), m = o(m, v = o(v, d = o(d, h, m, v, g[c + 5], 4, 4294588738), h, m, g[c + 8], 11, 2272392833), d, h, g[c + 11], 16, 1839030562), v, d, g[c + 14], 23, 4259657740), m = o(m, v = o(v, d = o(d, h, m, v, g[c + 1], 4, 2763975236), h, m, g[c + 4], 11, 1272893353), d, h, g[c + 7], 16, 4139469664), v, d, g[c + 10], 23, 3200236656), m = o(m, v = o(v, d = o(d, h, m, v, g[c + 13], 4, 681279174), h, m, g[c + 0], 11, 3936430074), d, h, g[c + 3], 16, 3572445317), v, d, g[c + 6], 23, 76029189), m = o(m, v = o(v, d = o(d, h, m, v, g[c + 9], 4, 3654602809), h, m, g[c + 12], 11, 3873151461), d, h, g[c + 15], 16, 530742520), v, d, g[c + 2], 23, 3299628645), m = a(m, v = a(v, d = a(d, h, m, v, g[c + 0], 6, 4096336452), h, m, g[c + 7], 10, 1126891415), d, h, g[c + 14], 15, 2878612391), v, d, g[c + 5], 21, 4237533241), m = a(m, v = a(v, d = a(d, h, m, v, g[c + 12], 6, 1700485571), h, m, g[c + 3], 10, 2399980690), d, h, g[c + 10], 15, 4293915773), v, d, g[c + 1], 21, 2240044497), m = a(m, v = a(v, d = a(d, h, m, v, g[c + 8], 6, 1873313359), h, m, g[c + 15], 10, 4264355552), d, h, g[c + 6], 15, 2734768916), v, d, g[c + 13], 21, 1309151649), m = a(m, v = a(v, d = a(d, h, m, v, g[c + 4], 6, 4149444226), h, m, g[c + 11], 10, 3174756917), d, h, g[c + 2], 15, 718787259), v, d, g[c + 9], 21, 3951481745), d = n(d, u), h = n(h, l), m = n(m, f), v = n(v, p);
    return (s(d) + s(h) + s(m) + s(v)).toLowerCase()
}(token + "&" + s_t + "&" + appkey + "&" + datas)


console.log('计算sigin',a)