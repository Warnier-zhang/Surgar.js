/**
 * Copyright © 2017.4, Warnier-zhang <warnier.zhang@gmail.com>, All Rights Reserved.
 *
 * 文件名称：Surgar.js
 *
 * 文件描述：工具方法类。
 */

var $ = Surgar = {};

/**
 * 若数字小于10，则填充零前缀。
 */
(function ($) {
    $.plus0 = function (digit) {
        return digit < 10 ? "0" + digit : digit;
    };
})(Surgar);

/**
 * 基于PHP日期时间格式，格式化日期时间。
 *
 * @param format 格式字符串
 * @param timestamp 时间戳
 */
(function ($) {
    $.dateFormat = function (format, timestamp) {
        var dateTime = null;
        if (typeof timestamp === 'undefined' || isNaN(timestamp)) {
            dateTime = new Date();
        } else {
            dateTime = new Date(timestamp);
        }

        var year = dateTime.getFullYear();
        var month = dateTime.getMonth() + 1;
        var dayOfMonth = dateTime.getDate();
        var hours = dateTime.getHours();
        var minutes = dateTime.getMinutes();
        var seconds = dateTime.getSeconds();
        var dateBody = {
            "Y": year,
            "m": $.plus0(month),
            "d": $.plus0(dayOfMonth),
            "H": $.plus0(hours),
            "i": $.plus0(minutes),
            "s": $.plus0(seconds)
        };

        var formats = format.split("");
        for (var i = 0; i < formats.length; i++) {
            if (typeof dateBody[formats[i]] !== 'undefined') {
                formats[i] = dateBody[formats[i]];
            }
        }
        return formats.join("");
    };
})(Surgar);



