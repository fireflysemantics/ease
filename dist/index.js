"use strict";
/**
 * ========================================
 *
 * Collection of animation easing functions.
 *
 * ========================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} linear ease value
 */
function linearEase(t, b, c, d) {
    return c * t / d + b;
}
exports.linearEase = linearEase;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in quad value value
 */
function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}
exports.easeInQuad = easeInQuad;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out quad value
 */
function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}
exports.easeOutQuad = easeOutQuad;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out quad value
 */
function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}
exports.easeInOutQuad = easeInOutQuad;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in cubic value
 */
function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
}
exports.easeInCubic = easeInCubic;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out cubic value
 */
function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}
exports.easeOutCubic = easeOutCubic;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out cubic value
 */
function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}
exports.easeInOutCubic = easeInOutCubic;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in quart value
 */
function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
}
exports.easeInQuart = easeInQuart;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out quart value
 */
function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
exports.easeOutQuart = easeOutQuart;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out quart value
 */
function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}
exports.easeInOutQuart = easeInOutQuart;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in quint value
 */
function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}
exports.easeInQuint = easeInQuint;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out quint value
 */
function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
exports.easeOutQuint = easeOutQuint;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out quint value
 */
function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}
exports.easeInOutQuint = easeInOutQuint;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in sine value
 */
function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}
exports.easeInSine = easeInSine;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out sine value
 */
function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
}
exports.easeOutSine = easeOutSine;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out sine value
 */
function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}
exports.easeInOutSine = easeInOutSine;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in expo value
 */
function easeInExpo(t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}
exports.easeInExpo = easeInExpo;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out expo value
 */
function easeOutExpo(t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}
exports.easeOutExpo = easeOutExpo;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out expo value
 */
function easeInOutExpo(t, b, c, d) {
    if (t == 0) {
        return b;
    }
    ;
    if (t == d) {
        return b + c;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
exports.easeInOutExpo = easeInOutExpo;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in circ value
 */
function easeInCirc(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}
exports.easeInCirc = easeInCirc;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out circ value
 */
function easeOutCirc(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
exports.easeOutCirc = easeOutCirc;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out circ value
 */
function easeInOutCirc(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
exports.easeInOutCirc = easeInOutCirc;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in elastic value
 */
function easeInElastic(t, b, c, d) {
    var s = 1.70158;
    var p = d * 0.3;
    var a = c;
    if (t == 0) {
        return b;
    }
    if ((t /= d) == 1) {
        return b + c;
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
}
exports.easeInElastic = easeInElastic;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out elastic value
 */
function easeOutElastic(t, b, c, d) {
    var s = 1.70158;
    var p = d * 0.3;
    var a = c;
    if (t == 0) {
        return b;
    }
    if ((t /= d) == 1) {
        return b + c;
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
}
exports.easeOutElastic = easeOutElastic;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out elastic value
 */
function easeInOutElastic(t, b, c, d) {
    var s = 1.70158;
    var p = d * (0.3 * 1.5);
    var a = c;
    if (t == 0) {
        return b;
    }
    if ((t /= d / 2) == 2) {
        return b + c;
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) *
        Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
}
exports.easeInOutElastic = easeInOutElastic;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in back value
 */
function easeInBack(t, b, c, d, s) {
    if (s === void 0) { s = 1.70158; }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
exports.easeInBack = easeInBack;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease out back value
 */
function easeOutBack(t, b, c, d, s) {
    if (s === void 0) { s = 1.70158; }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
exports.easeOutBack = easeOutBack;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out back value
 */
function easeInOutBack(t, b, c, d, s) {
    if (s === void 0) { s = 1.70158; }
    if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}
exports.easeInOutBack = easeInOutBack;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in bounce value
 */
function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
}
exports.easeInBounce = easeInBounce;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease bounce value
 */
function easeOutBounce(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    }
    else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
    }
    else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
    }
    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
}
exports.easeOutBounce = easeOutBounce;
;
/**
 * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
 * @param {number} b The start value of the animation property
 * @param {number} c The change between the beginning and destination value of the animation property
 * @param {number} d The total time of the neonate
 * @return {number} The ease in out bounce value
 */
function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
        return easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    }
    return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
exports.easeInOutBounce = easeInOutBounce;
;
/**
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.

 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions
 * and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 * and the following disclaimer in the documentation and/or other materials provided with the
 * distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ 
//# sourceMappingURL=index.js.map