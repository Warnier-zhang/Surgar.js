/**
 * Copyright © 2017.4, Warnier-zhang <warnier.zhang@gmail.com>, All Rights Reserved.
 *
 * @author Warnier-zhang
 */

var $ = Surgar = {};

/**
 * Fill 0 when parameter less than 10.
 */
(function ($) {
    $.plus0 = function (digit) {
        return digit < 10 ? "0" + digit : digit;
    };
})(Surgar);

/**
 * Format datetime using PHP formatString.
 *
 * @param formatString
 * @param timestamp
 */
(function ($) {
    $.dateFormat = function (formatString, timestamp) {
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

        var formats = formatString.split("");
        for (var i = 0; i < formats.length; i++) {
            if (typeof dateBody[formats[i]] !== 'undefined') {
                formats[i] = dateBody[formats[i]];
            }
        }
        return formats.join("");
    };
})(Surgar);



