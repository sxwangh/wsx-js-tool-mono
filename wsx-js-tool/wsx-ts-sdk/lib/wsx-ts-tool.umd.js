(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.wsx = factory());
})(this, (function () { 'use strict';

    function getUrlParamByName(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = null;
        // location.search :设置/获取url？后面的部分 （?q=123&page=1&type=note）
        if (window.location.href.split('?')[1]) { // (q=123&page=1&type=note)
            r = window.location.href.split('?')[1].match(reg); // /(^|&)enterpriseId=([^&]*)(&|$)/i
        }
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        return '';
    }
    function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

    function getToday(withTime) {
        if (withTime === void 0) { withTime = false; }
        var today = new Date();
        if (!withTime) {
            today.setHours(0);
            today.setMinutes(0);
            today.setSeconds(0);
        }
        today.setMilliseconds(0);
        return today;
    }
    function getDaysAgo(day, withTime) {
        if (withTime === void 0) { withTime = false; }
        var daysAgo = new Date();
        daysAgo.setDate(daysAgo.getDate() - day + 1);
        if (!withTime) {
            daysAgo.setHours(0);
            daysAgo.setMinutes(0);
            daysAgo.setSeconds(0);
        }
        daysAgo.setMilliseconds(0);
        return daysAgo;
    }
    // 把Date类型，或时间戳 转换成2020-11-24 的字符串
    function getFormatDate(date) {
        var newDate = new Date(date);
        var Y = "".concat(newDate.getFullYear(), "-");
        var M = "".concat(newDate.getMonth() + 1 < 10 ? "0".concat(newDate.getMonth() + 1) : newDate.getMonth() + 1, "-");
        var D = "".concat(newDate.getDate() < 10 ? "0".concat(newDate.getDate()) : newDate.getDate(), " ");
        return "".concat(Y).concat(M).concat(D);
    }

    // import WebsocketHeart from './tool/WebsocketHeart';
    var wsxJsTool = {
        getUrlParamByName: getUrlParamByName,
        trim: trim,
        getToday: getToday,
        getDaysAgo: getDaysAgo,
        getFormatDate: getFormatDate,
        // WebsocketHeart,
    };
    // module.exports = wsxJsTool;

    return wsxJsTool;

}));

if(typeof window !== 'undefined') {
  window._wsx_VERSION_ = '1.0.5'
}
