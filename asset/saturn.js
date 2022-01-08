/**
 * //////////////////////////
 * @name Saturn.js
 * @author Dev Ahmad Hasan
 * @version 1.0.1 2019-10-10
 * @update 2019-11-10
 * @copyright (c) 2019-2020 Saturn
 * @license MIT-License-(MIT)
 * @website https://devahmad7.github.io/saturn/
 * @todo Updates coming soon
 * //////////////////////////
**/
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Getter = function () {
    function Getter(data) {
        _classCallCheck(this, Getter);

        this.norm = (typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object' ? data.length == undefined ? [data] : data : data.indexOf('<') > -1 ? [document.createElement(data.replace(/[><\/]/mig, ''))] : document.querySelectorAll(data);
    }
    /////////////////////////////////////////


    _createClass(Getter, [{
        key: 'find',
        value: function find(x) {
            var arr = [];
            this.norm.forEach(function (e, v) {
                arr.push(e.querySelectorAll(x));
            });
            return arr[0];
        }
    }, {
        key: 'each',

        ////////////////////////////////////
        value: function each(x) {
            this.norm.forEach(function (e, v) {
                if (x != undefined) x(e, v);
            });
            return this;
        }
        ////////////////////////////////////

    }, {
        key: 'html',
        value: function html(x) {
            this.norm.forEach(function (e) {
                e.innerHTML = x;
            });
            return this;
        }
        ////////////////////////////////////

    }, {
        key: 'addClass',
        value: function addClass(x) {
            var _this = this;

            x.split(' ').forEach(function (c) {
                _this.norm.forEach(function (e) {
                    e.classList.add(c);
                });
            });
            return this;
        }
        ////////////////////////////////////

    }, {
        key: 'removeClass',
        value: function removeClass(x) {
            var _this2 = this;

            x.split(' ').forEach(function (c) {
                _this2.norm.forEach(function (e) {
                    e.classList.remove(c);
                });
            });
            return this;
        }
        ////////////////////////////////////

    }, {
        key: 'css',
        value: function css(x, z) {
            if (z != undefined) {
                this.norm.forEach(function (e) {
                    e.style[x] = z;
                });
                return this;
            } else {
                if (typeof x == 'string') {
                    return this.norm[0].style[x];
                } else {
                    if (x == undefined) {
                        return this.norm[0].style;
                    } else {
                        this.norm.forEach(function (e) {
                            for (var key in x) {
                                e.style[key] = x[key];
                            }
                        });
                        return this;
                    }
                }
            }
        }
        ////////////////////////////////////

    }, {
        key: 'attr',
        value: function attr(x, z) {
            if (z != undefined) {
                this.norm.forEach(function (e) {
                    e.setAttribute(x, z);
                });
                return this;
            } else {
                return this.norm[0].getAttribute(x);
            }
        }
    }, {
        key: 'removeAttr',
        value: function removeAttr(x) {
            var _this3 = this;

            x.split(' ').forEach(function (c) {
                _this3.norm.forEach(function (e) {
                    e.removeAttribute(c);
                });
            });
            return this;
        }
        ///////////////////////////////////

    }, {
        key: 'append',
        value: function append(x) {
            this.norm.forEach(function (e) {
                e.append(x);
            });
            return this;
        }
        ////////////////////////////////////////////////////

    }, {
        key: 'on',
        value: function on(x, call) {
            var _this4 = this;

            var cond = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

            x.split(' ').forEach(function (e) {
                _this4.norm.forEach(function (z) {
                    if (document.addEventListener) z.addEventListener(e, call, cond);else if (document.attachEvent) z.attachEvent('on' + e, call, cond);
                });
            });
            return this;
        }
        ////////////////////////////////////////////////////

    }, {
        key: 'width',
        value: function width(x) {
            if (x != undefined) {
                this.norm.forEach(function (e) {
                    e.style['width'] = parseFloat(x) + 'px';
                });
                return this;
            } else {
                return this.norm[0].clientWidth;
            }
        }
        ////////////////////////////////////////////////////

    }, {
        key: 'height',
        value: function height(x) {
            if (x != undefined) {
                this.norm.forEach(function (e) {
                    e.style['height'] = parseFloat(x) + 'px';
                });
                return this;
            } else {
                return this.norm[0].clientHeight;
            }
        }
        ////////////////////////////////////////////////////

    }, {
        key: 'client',
        value: function client() {
            var rect = this.norm[0].getBoundingClientRect();
            return {
                left: rect.left + window.scrollX,
                right: rect.right + window.scrollX,
                top: rect.top + window.scrollY
            };
        }
    }, {
        key: 'length',
        get: function get() {
            return this.norm.length;
        }
    }]);

    return Getter;
}();
////////////////////////////////////////


var $dev = function $dev(data) {
    return new Getter(data);
};
////////////////////////////////////////

var SATURN = function () {
    function SATURN(elem, data) {
        var _this5 = this;

        _classCallCheck(this, SATURN);

        // standerd values
        this.standerd = {
            dir: 'ltr',
            moveTo: 'left',
            dotShow: true,
            dotEach: false,
            autoPlay: false,
            active: 2,
            starter: 1,
            loop: true,
            margin: '',
            autoHeight: true,
            centering: false,
            navShow: true,
            navPrev: 'prev',
            navNext: 'next',
            moveSpeed: 250,
            refreshRate: 250,
            moveType: 'ease',
            dragType: 'free',
            dragger: true,
            navigationContainer: false,
            moveAfterTransition: false,
            wiatTime: 2500,
            pauseOnHover: false,
            effectIn: null,
            effectOut: null,
            onStart: function onStart() {},
            onDrag: function onDrag() {},
            onEnd: function onEnd() {},
            onChange: function onChange() {},
            lazyLoad: false,
            mouseWheel: false,
            dotCustom: false,
            responsiveBase: window
        };
        // set id for element
        this.id = elem == undefined ? '' : elem;
        this.mainElem = $dev(this.id).addClass('saturn');
        this.images = $dev(this.mainElem.find('[saturn-lazy]'));
        this.Encapsulation = [];
        this.original = [];
        this.originalArr = [].concat(_toConsumableArray(this.mainElem.norm[0].children)).forEach(function (data) {
            _this5.original.push(data.cloneNode(true));
        });
        this.items = [].concat(_toConsumableArray(this.mainElem.norm[0].children)).forEach(function (data) {
            _this5.Encapsulation.push($dev('<div>').addClass('saturn-item').append(data).norm[0]);
        });
        this.items = $dev(this.Encapsulation);
        this.mainLength = this.items.length;
        this.container = $dev('<div>').addClass('saturn-container');
        this.centering = $dev('<div>').addClass('saturn-center');
        this.outerItems = $dev('<div>').addClass('saturn-items');
        this.controller = $dev('<div>').addClass('saturn-controller');
        this.outerDots = $dev('<ul>').addClass('saturn-dots');
        this.thumbs = $dev('<img>').addClass('saturn-thumbs').attr('src', 'https://i.ibb.co/nQsD21Z/saturn.png');
        // set values as template
        this.setData = function (opt, std) {
            if (opt == undefined) {
                return std;
            } else {
                return {
                    navigationContainer: opt.navigationContainer == undefined ? std.navigationContainer : opt.navigationContainer,
                    moveAfterTransition: opt.moveAfterTransition == undefined ? std.moveAfterTransition : opt.moveAfterTransition,
                    pauseOnHover: opt.pauseOnHover == undefined ? std.pauseOnHover : opt.pauseOnHover,
                    responsiveBase: opt.responsiveBase == undefined ? std.responsiveBase : opt.responsiveBase,
                    mouseWheel: opt.mouseWheel == undefined ? std.mouseWheel : opt.mouseWheel,
                    lazyLoad: opt.lazyLoad == undefined ? std.lazyLoad : opt.lazyLoad,
                    dotCustom: opt.dotCustom == undefined ? std.dotCustom : opt.dotCustom,
                    effectIn: opt.effectIn == undefined ? std.effectIn : opt.effectIn,
                    effectOut: opt.effectOut == undefined ? std.effectOut : opt.effectOut,
                    wiatTime: opt.wiatTime == undefined ? std.wiatTime : opt.wiatTime,
                    active: opt.active == undefined ? std.active : opt.active,
                    starter: opt.starter == undefined ? std.starter : opt.starter,
                    loop: opt.loop == undefined ? std.loop : opt.loop,
                    navShow: opt.navShow == undefined ? std.navShow : opt.navShow,
                    navPrev: opt.navPrev == undefined ? std.navPrev : opt.navPrev,
                    navNext: opt.navNext == undefined ? std.navNext : opt.navNext,
                    dir: opt.dir == undefined ? std.dir : opt.dir,
                    moveTo: opt.moveTo == undefined ? std.moveTo : opt.moveTo,
                    dotShow: opt.dotShow == undefined ? std.dotShow : opt.dotShow,
                    dotEach: opt.dotEach == undefined ? std.dotEach : opt.dotEach,
                    autoPlay: opt.autoPlay == undefined ? std.autoPlay : opt.autoPlay,
                    autoHeight: opt.autoHeight == undefined ? std.autoHeight : opt.autoHeight,
                    centering: opt.centering == undefined ? std.centering : opt.centering,
                    margin: opt.margin == undefined ? std.margin : opt.margin,
                    refreshRate: opt.refreshRate == undefined ? std.refreshRate : opt.refreshRate,
                    moveSpeed: opt.moveSpeed == undefined ? std.moveSpeed : opt.moveSpeed,
                    moveType: opt.moveType == undefined ? std.moveType : opt.moveType,
                    dragger: opt.dragger == undefined ? std.dragger : opt.dragger,
                    dragType: opt.dragType == undefined ? std.dragType : opt.dragType,
                    onStart: opt.onStart == undefined ? std.onStart : opt.onStart,
                    onDrag: opt.onDrag == undefined ? std.onDrag : opt.onDrag,
                    onEnd: opt.onEnd == undefined ? std.onEnd : opt.onEnd,
                    onChange: opt.onChange == undefined ? std.onChange : opt.onChange
                };
            }
        };
        this.desktop = this.setData(data.desktop, this.standerd);
        this.laptop = this.setData(data.laptop, this.desktop);
        this.tablet = this.setData(data.tablet, this.desktop);
        this.phone = this.setData(data.phone, this.desktop);
        this.options = this.desktop;
        /////////////////////////////////////////
        this.prefix = function () {
            var express = function express(regexp) {
                return regexp.test(navigator.userAgent);
            };
            switch (true) {
                case express(/edge/i):
                    return "-ms-";
                case express(/opr/i) && (!!window.opr || !!window.opera):
                    return "-o-";
                case express(/chrome/ig) && !!window.chrome:
                    return "-webkit-";
                case express(/trident/i):
                    return "-ms-";
                case express(/firefox/ig):
                    return "-moz-";
                case express(/safari/i):
                    return "-webkit-";
                default:
                    return "";
            }
        };
        /////////////////////////////////////////
        this.build = '';
        // set style as template
        if ($dev('#saturn-style').norm[0] == undefined) {
            var styleoriginal = '.saturn {overflow: hidden;} .saturn-container, .saturn-center {width: 100%;display: flex;margin: auto;position: relative;}\n            .saturn-items {display: flex;position: relative;} .saturn-item {position: relative;} .saturn-item img {display: flex;width: 100%;}\n            .saturn-item .saturn-thumbs {z-index: 999;width: auto;height: auto;position: absolute;left: 50%;top: 50%;' + this.prefix() + 'transform: translate(-50%, -50%);}\n            .saturn-grab {cursor: grab;cursor: ' + this.prefix() + 'grab;}\n            .saturn-grabbing {cursor: grabbing;cursor: ' + this.prefix() + 'grabbing;}\n            /* if saturn-controller false */\n            .saturn .saturn-dots {position: absolute;display: flex;left: 50%;bottom: 10px;' + this.prefix() + 'transform: translateX(-50%);}\n            .saturn .saturn-dot {display: inline-block;margin: 0px 2px;width: 11px;height: 11px;border: 1px solid #ffffff;border-radius: 50%;cursor: pointer}\n            .saturn .saturn-dot.active, .saturn .saturn-dot:hover {background-color: #ffffff;}\n            .saturn .saturn-prev, .saturn .saturn-next {position: absolute;cursor: pointer;height: 30px;line-height: 30px;\n                font-size: 15px;text-align: center;width: 50px;color: #ffffff;top: 50%;' + this.prefix() + 'transform: translateY(-50%)}\n            .saturn .saturn-prev {left: 0px;} .saturn .saturn-next {right: 0px;} .saturn-hide {display: none}\n            /* if saturn-controller true */\n            .saturn-controller {position: absolute;width: 100%;bottom: 0px; border-radius: 2px;background-color: rgba(0, 0, 0, .2);height: 30px;}\n            .saturn-controller .saturn-dots {bottom: auto;top: 50%;' + this.prefix() + 'transform: translate(-50%, -50%);}';
            $dev('html head').norm[0].prepend($dev('<style>').attr('id', 'saturn-style').html(styleoriginal).norm[0]);
        }
        /////////////////////////////////////////
        this.setup().observer().buildItems().resize().dragment().ctrAutoPlay();
    }

    _createClass(SATURN, [{
        key: 'setup',
        value: function setup() {
            var _this6 = this;

            this.mainElem.html('').append(this.container.norm[0]).css('position', 'relative');
            this.container.append(this.centering.norm[0]);
            this.centering.append(this.outerItems.norm[0]);
            this.outerItems.on('transitionstart', function (e) {
                _this6.transMoving = true;
                setTimeout(function () {
                    _this6.transMoving = false;
                }, _this6.options.moveSpeed);
            });
            /////////////////////////////////////////
            this.outerDotCustom = $dev($dev(document).find('[dot-for="' + this.mainElem.norm[0].id + '"]'));
            if (this.outerDotCustom.norm[0] != undefined) {
                this.dotsCustom = this.outerDotCustom.norm[0].children;
                this.dotsCustom.length == this.mainLength ? this.buildCustom = true : this.buildCustom = false;
            }
            /////////////////////////////////////////
            return this;
        }
        /////////////////////////////////////////////

    }, {
        key: 'observer',
        value: function observer() {
            this.windowWidth = this.containment();
            /////////////////////////////////////////
            if (this.windowWidth > 1400) this.options = this.desktop, this.building = 'desk';else if (this.windowWidth < 1400 && this.windowWidth > 1000) this.options = this.laptop, this.building = 'lap';else if (this.windowWidth < 1000 && this.windowWidth > 600) this.options = this.tablet, this.building = 'tab';else if (this.windowWidth < 600 && this.windowWidth > 100) this.options = this.phone, this.building = 'pho';
            /////////////////////////////////////////
            return this;
        }
        ////////////////////////////////////////////

    }, {
        key: 'handlePrev',
        value: function handlePrev(e) {
            var _this7 = this;

            if (this.transMoving && this.options.moveAfterTransition) return this;
            if (this.options.loop) {
                this.startPoint--;
                if (this.startPoint < this.started) {
                    this.startPoint = this.ended - 1;
                    this.moveJust(this.direction * (this.startPoint * this.oneWidth), '0ms');
                    this.startPoint--;
                }
            } else {
                if (this.startPoint > 0) this.startPoint--;else this.repeateAutoPlay = true;
            }
            setTimeout(function () {
                _this7.moveForClick(_this7.direction * (_this7.startPoint * _this7.oneWidth), _this7.transitionClick);
            }, 70);
        }
    }, {
        key: 'handleNext',
        value: function handleNext(e) {
            var _this8 = this;

            if (this.transMoving && this.options.moveAfterTransition) return this;
            if (this.options.loop) {
                this.startPoint++;
                if (this.startPoint >= this.ended) {
                    this.startPoint = this.started;
                    this.moveJust(this.direction * (this.startPoint * this.oneWidth), '0ms');
                    this.startPoint++;
                }
            } else {
                if (this.startPoint < this.ended) this.startPoint++;else this.repeateAutoPlay = true;
            }
            setTimeout(function () {
                _this8.moveForClick(_this8.direction * (_this8.startPoint * _this8.oneWidth), _this8.transitionClick);
            }, 70);
        }
        ////////////////////////////////////////////

    }, {
        key: 'buildArrows',
        value: function buildArrows() {
            var _this9 = this;

            if ($dev(this.mainElem.find('.saturn-prev')).norm[0] != undefined) {
                $dev(this.mainElem.find('.saturn-prev')).norm[0].remove();
            }

            if ($dev(this.mainElem.find('.saturn-next')).norm[0] != undefined) {
                $dev(this.mainElem.find('.saturn-next')).norm[0].remove();
            }

            var navPrev = $dev('<div>').addClass('saturn-prev').html(this.options.navPrev).on('click', function (e) {
                _this9.handlePrev(e);
            }).norm[0];
            var navNext = $dev('<div>').addClass('saturn-next').html(this.options.navNext).on('click', function (e) {
                _this9.handleNext(e);
            }).norm[0];
            if (this.options.navigationContainer) {
                this.controller.append(navPrev).append(navNext);
            } else {
                this.mainElem.append(navPrev).append(navNext);
            }
        }
        ////////////////////////////////////////////

    }, {
        key: 'buildDots',
        value: function buildDots(dots, custom) {
            if (dots) {
                if (this.options.navigationContainer) {
                    this.controller.append(this.outerDots.html('').norm[0]);
                } else {
                    this.mainElem.append(this.outerDots.html('').norm[0]);
                }
            }
            if (custom) $dev([].concat(_toConsumableArray(this.dotsCustom))).addClass('saturn-hide');
            if (this.options.dotEach) {
                if (this.options.loop) {
                    for (var i = 0, index = this.cloned; index < this.mainLength + this.cloned; index++, i++) {
                        if (this.options.dotShow) {
                            var elem = $dev('<li>').attr("index", index).addClass('saturn-dot');
                            this.outerDots.append(elem.norm[0]);
                        }
                        if (this.options.dotCustom && this.buildCustom) {
                            $dev(this.dotsCustom[i]).attr("index", index).addClass('saturn-goto').removeClass('saturn-hide');
                        }
                        $dev(this.items.norm[i]).attr("index", index);
                    }
                } else {
                    for (var _i = 0; _i < this.mainLength - (this.activate - 1); _i++) {
                        if (this.options.dotShow) {
                            var _elem = $dev('<li>').attr("index", _i).addClass('saturn-dot');
                            this.outerDots.append(_elem.norm[0]);
                        }
                        if (this.options.dotCustom && this.buildCustom) {
                            $dev(this.dotsCustom[_i]).attr("index", _i).addClass('saturn-goto').removeClass('saturn-hide');
                        }
                        $dev(this.items.norm[_i]).attr("index", _i);
                    }
                }
            } else {
                if (this.options.loop) {
                    for (var _i2 = 0, _index = this.cloned; _index < this.mainLength + this.cloned; _index += this.activate, _i2 += this.activate) {
                        if (this.options.dotShow) {
                            var _elem2 = $dev('<li>').attr("index", _index).addClass('saturn-dot');
                            this.outerDots.append(_elem2.norm[0]);
                        }
                        if (this.options.dotCustom && this.buildCustom) {
                            $dev(this.dotsCustom[_i2]).attr("index", _index).addClass('saturn-goto').removeClass('saturn-hide');
                        }
                        for (var inx = _i2; inx < _index; inx++) {
                            if (this.items.norm[inx] != undefined) $dev(this.items.norm[inx]).attr("index", _index);
                        }
                    }
                } else {
                    for (var _index2 = 0; _index2 < this.mainLength; _index2 += this.activate) {
                        var _inx = _index2;
                        if (_inx > this.mainLength - this.activate) _inx = this.mainLength - this.activate;
                        if (this.options.dotShow) {
                            var _elem3 = $dev('<li>').attr("index", _inx).addClass('saturn-dot');
                            this.outerDots.append(_elem3.norm[0]);
                        }
                        if (this.options.dotCustom && this.buildCustom) {
                            $dev(this.dotsCustom[_inx]).attr("index", _inx).addClass('saturn-goto').removeClass('saturn-hide');
                        }
                        for (var _i3 = _inx; _i3 < _inx + this.activate; _i3++) {
                            if (this.items.norm[_i3] != undefined) $dev(this.items.norm[_i3]).attr("index", _inx);
                        }
                    }
                }
            }
        }
        /////////////////////////////////////////////

    }, {
        key: 'handleDots',
        value: function handleDots(data) {
            if (this.transMoving && this.options.moveAfterTransition) return this;
            this.startPoint = parseInt($dev(data).attr('index'));
            if (this.startPoint > this.ended && !this.options.loop) this.startPoint = this.ended;
            this.moveForClick(this.direction * (this.startPoint * this.oneWidth), this.transitionClick);
        }
        /////////////////////////////////////////////

    }, {
        key: 'buildItems',
        value: function buildItems() {
            var _this10 = this;

            if (this.build != this.building) {
                this.build = this.building;
                /////////////////////////////////////
                $dev(this.mainElem.find('.saturn-thumbs')).each(function (e) {
                    e.remove();
                });
                if (this.options.lazyLoad) {
                    this.images.each(function (e) {
                        e.removeAttribute('src');
                    });
                }
                /////////////////////////////////////
                if (this.options.dir == 'ltr') {
                    this.mainElem.css('direction', '');this.direction = -1;
                } else {
                    this.mainElem.css('direction', this.options.dir);this.direction = 1;
                }
                this.starter = this.options.starter > this.mainLength || this.options.starter <= 0 ? 1 : this.options.starter;
                this.activate = this.options.active > this.mainLength ? this.mainLength : this.options.active;
                this.cloned = this.activate > 2 ? this.activate : 3;
                this.cloned = this.cloned >= this.mainLength ? this.mainLength : this.cloned;
                /////////////////////////////////////
                if (this.options.effectIn != null && this.options.effectOut != null) {
                    this.transitionClick = 'all ' + 0 / 1000 + 's ' + this.options.moveType + ' 0s';
                } else {
                    this.transitionClick = 'all ' + this.options.moveSpeed / 1000 + 's ' + this.options.moveType + ' 0s';
                }
                this.transition = 'all ' + this.options.moveSpeed / 1000 + 's ' + this.options.moveType + ' 0s';
                /////////////////////////////////////
                this.items.css({
                    'margin-left': '' + (typeof this.options.margin == 'number' ? this.options.margin + 'px' : this.options.margin),
                    'margin-right': '' + (typeof this.options.margin == 'number' ? this.options.margin + 'px' : this.options.margin)
                });
                /////////////////////////////////////////
                if (this.options.autoHeight) {
                    this.mainElem.css('height', 'auto');
                    this.container.css('height', 'auto');
                    this.centering.css('height', 'auto');
                    this.items.css('height', 'auto');
                }
                this.outerItems.html('');
                /////////////////////////////////////////
                if (this.options.navigationContainer) {
                    if ($dev(this.mainElem.find('.saturn-dots')).norm[0] != undefined) {
                        $dev(this.mainElem.find('.saturn-dots')).norm[0].remove();
                    }
                    if (this.options.dotShow || this.options.navShow) this.mainElem.append(this.controller.html('').norm[0]);
                } else {
                    this.controller.html('').norm[0].remove();
                }

                /////////////////////////////////////
                if (this.options.navShow) {
                    this.buildArrows();
                }
                /////////////////////////////////////
                if (this.options.dotShow || this.options.dotCustom) {
                    this.buildDots(this.options.dotShow, this.options.dotCustom);
                }
                if (this.options.dotShow) {
                    $dev(this.outerDots.find('.saturn-dot')).on('click', function (e) {
                        _this10.handleDots(e.target);
                    });
                }
                if (this.options.dotCustom && this.buildCustom) {
                    $dev([].concat(_toConsumableArray(this.dotsCustom))).on('click', function (e) {
                        _this10.handleDots(e.target.closest('.saturn-goto'));
                    });
                }
                /////////////////////////////////////
                if (this.options.loop) {
                    var firstElement = [],
                        lastElement = [];
                    /////////////////////////////////////
                    for (var i = 0, o = this.mainLength - this.cloned; i < this.cloned; i++, o++) {
                        firstElement.push(this.items.norm[i].cloneNode(true));
                        lastElement.push(this.items.norm[o].cloneNode(true));
                    }
                    /////////////////////////////////////
                    this.newItems = $dev([].concat(lastElement, _toConsumableArray(this.items.norm), firstElement)).each(function (data, i) {
                        if (_this10.options.lazyLoad) data.append(_this10.thumbs.norm[0].cloneNode(true));
                        _this10.outerItems.append(data);
                    });
                    /////////////////////////////////////
                    this.newLength = this.newItems.length;
                    this.startPoint = this.starter + (this.cloned - 1);
                    this.started = this.cloned - 1;
                    this.ended = this.newLength - this.cloned;
                } else {
                    this.newItems = this.items.each(function (data) {
                        if (_this10.options.lazyLoad) data.append(_this10.thumbs.norm[0].cloneNode(true));
                        _this10.outerItems.append(data);
                    });
                    this.newLength = this.newItems.length;
                    this.startPoint = this.starter - 1;
                    this.started = 0;
                    this.ended = this.newLength - this.activate;
                    if (this.startPoint > this.ended) this.startPoint = this.ended;
                }
                /////////////////////////////////////
                this.newItems.on('animationend', function (e) {
                    if (_this10.options.effectIn != null) {
                        _this10.newItems.removeClass(_this10.options.effectIn);
                    }
                });
                /////////////////////////////////////
                this.stopAuto().playAuto(this.options.wiatTime);
                /////////////////////////////////////
                if (this.options.lazyLoad) {
                    $dev(this.mainElem.find('.saturn-item [saturn-lazy]')).on('load', function (e) {
                        if ($dev($dev(e.target.closest('.saturn-item')).find('.saturn-thumbs')).norm[0] != undefined) {
                            $dev($dev(e.target.closest('.saturn-item')).find('.saturn-thumbs')).norm[0].remove();
                        }
                    });
                }
            }
            /////////////////////////////////////////
            if (this.options.centering) {
                this.centering.css(_defineProperty({ 'width': 'calc(100% - ' + this.container.width() / (this.activate + 2) + 'px)' }, this.prefix() + 'transition', 'none'));
            } else {
                this.centering.css(_defineProperty({ 'width': '100%' }, this.prefix() + 'transition', 'none'));
            }
            /////////////////////////////////////////
            this.mainWidth = this.centering.width();
            this.oneWidth = parseFloat(this.mainWidth / this.activate);
            /////////////////////////////////////////
            this.outerItems.width(parseFloat(this.oneWidth * this.newLength));
            this.newItems.width(this.oneWidth);
            /////////////////////////////////////////
            this.moveForDrag(this.direction * (this.startPoint * this.oneWidth), '0s', this.startPoint);
            return this;
        }
        /////////////////////////////////////////////

    }, {
        key: 'detectPhone',
        value: function detectPhone() {
            var expressMop = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|ipad|playbook|silk|Android|webOS|iPhone|iPod|IEMobile|Mobi/i;
            return expressMop.test(navigator.userAgent) || expressMop.test(navigator.platform);
        }
        /////////////////////////////////////////////

    }, {
        key: 'containment',
        value: function containment() {
            if (this.options.responsiveBase == window) return this.detectPhone() ? window.screen.width : window.innerWidth;else return $dev(this.options.responsiveBase).width();
        }
    }, {
        key: 'resize',
        value: function resize() {
            var _this11 = this;

            setTimeout(function () {
                _this11.buildItems();
            }, 150);
            this.lastWidth = this.containment();
            setInterval(function () {
                _this11.currnetWidth = _this11.containment();
                if (_this11.lastWidth != _this11.currnetWidth) {
                    _this11.lastWidth = _this11.currnetWidth;
                    _this11.observer();
                    _this11.buildItems();
                }
            }, this.options.refreshRate);
            return this;
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            var _this12 = this;

            this.build = '';
            this.observer();
            this.buildItems();
            setTimeout(function () {
                _this12.buildItems();
            }, 150);
        }
    }, {
        key: 'gotoItem',
        value: function gotoItem(index) {
            if (this.transMoving && this.options.moveAfterTransition) return this;
            index = parseInt(index) > this.mainLength || parseInt(index) <= 0 ? 1 : parseInt(index);
            if (this.options.loop) this.startPoint = index + (this.cloned - 1);else this.startPoint = index - 1;
            if (this.startPoint > this.ended && !this.options.loop) this.startPoint = this.ended;
            this.moveForClick(this.direction * (this.startPoint * this.oneWidth), this.transitionClick);
        }
        ////////////////////////////////////////////

    }, {
        key: 'checkAnimate',
        value: function checkAnimate(move, speed, observer) {
            var drag = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

            this.outerItems.css([this.prefix() + 'transition'], speed).css([this.prefix() + 'transform'], 'translateX(' + move + 'px)');
            if (this.lastIndex != this.startPoint || drag) {
                if (this.lastIndex != this.startPoint) this.options.onChange(this.newItems.norm[this.startPoint]);
                this.lastIndex = this.startPoint;
                if (this.options.dotShow || this.options.dotCustom) {
                    var dotIndex = parseInt($dev(this.newItems.norm[this.startPoint]).attr('index'));
                    if (!isNaN(dotIndex) && this.options.dotShow) {
                        $dev(this.outerDots.find('.saturn-dot')).removeClass('active');
                        $dev(this.outerDots.find('.saturn-dot[index="' + dotIndex + '"]')).addClass('active');
                    }
                    if (!isNaN(dotIndex) && this.options.dotCustom) {
                        $dev(this.outerDotCustom.find('.saturn-goto')).removeClass('active');
                        $dev(this.outerDotCustom.find('.saturn-goto[index="' + dotIndex + '"]')).addClass('active');
                    }
                }
                this.activeItems(observer);
            }
        }
    }, {
        key: 'moveJust',
        value: function moveJust(move, speed) {
            this.outerItems.css([this.prefix() + 'transition'], speed).css([this.prefix() + 'transform'], 'translateX(' + move + 'px)');
            this.activeItems(this.startPoint);
            this.newItems.css([this.prefix() + 'transition'], speed);
            return this;
        }
        ////////////////////////////////////////////

    }, {
        key: 'activeItems',
        value: function activeItems(observer) {
            this.newItems.css([this.prefix() + 'transition'], this.transition);
            this.newItems.removeClass('prev-item active next-item');
            for (var i = 0; i < this.activate; i++) {
                if (this.newItems.norm[observer - 1] != undefined) $dev(this.newItems.norm[observer - 1]).addClass('prev-item');
                if (this.newItems.norm[observer + i] != undefined) $dev(this.newItems.norm[observer + i]).addClass('active');
                if (this.newItems.norm[observer + this.activate] != undefined) $dev(this.newItems.norm[observer + this.activate]).addClass('next-item');
            }
            if (this.options.lazyLoad) {
                $dev(this.mainElem.find('.saturn-item.active [saturn-lazy], .saturn-item.prev-item [saturn-lazy], .saturn-item.next-item [saturn-lazy]')).each(function (e) {
                    if (!$dev(e).norm[0].hasAttribute('src')) {
                        $dev(e).attr('src', $dev(e).attr('saturn-lazy'));
                    }
                });
            }
        }
        ////////////////////////////////////////////

    }, {
        key: 'moveForClick',
        value: function moveForClick(move, speed) {
            var _this13 = this;

            var observer = arguments.length <= 2 || arguments[2] === undefined ? this.startPoint : arguments[2];

            if (this.options.effectOut != null && this.options.effectIn != null && this.lastIndex != this.startPoint) {
                $dev(this.mainElem.find('.saturn-item.active')).addClass(this.options.effectOut);
                setTimeout(function () {
                    _this13.newItems.removeClass(_this13.options.effectOut);
                    _this13.checkAnimate(move, speed, observer);
                    $dev(_this13.mainElem.find('.saturn-item.active')).addClass(_this13.options.effectIn);
                }, 350);
            } else {
                this.checkAnimate(move, speed, observer);
            }
            return this;
        }
    }, {
        key: 'moveForDrag',
        value: function moveForDrag(move, speed) {
            var observer = arguments.length <= 2 || arguments[2] === undefined ? this.startPoint : arguments[2];

            this.checkAnimate(move, speed, observer, true);
            return this;
        }
        ////////////////////////////////////////////

    }, {
        key: 'playAuto',
        value: function playAuto(speed) {
            var _this14 = this;

            if (this.options.autoPlay && !document.hidden) {
                this.setPlayAuto = setInterval(function () {
                    if (_this14.drager) return _this14;
                    if (_this14.options.moveTo == "left") {
                        _this14.handleNext();
                        if (!_this14.options.loop && _this14.repeateAutoPlay) {
                            _this14.repeateAutoPlay = false;
                            _this14.startPoint = _this14.started;
                        }
                    } else {
                        _this14.handlePrev();
                        if (!_this14.options.loop && _this14.repeateAutoPlay) {
                            _this14.repeateAutoPlay = false;
                            _this14.startPoint = _this14.ended;
                        }
                    }
                }, speed);
                this.playing = true;
            }
            return this;
        }
    }, {
        key: 'stopAuto',
        value: function stopAuto() {
            window.clearInterval(this.setPlayAuto);
            this.playing = false;
            return this;
        }
    }, {
        key: 'ctrAutoPlay',
        value: function ctrAutoPlay() {
            var _this15 = this;

            [this.mainElem.norm[0], this.outerDotCustom.norm[0]].forEach(function (data, i) {
                if (i == 1 && !_this15.options.dotCustom) return _this15;
                $dev(data).on('mouseenter touchstart', function () {
                    if (_this15.options.pauseOnHover) _this15.stopAuto();
                }).on('mouseleave touchend', function (e) {
                    if (_this15.options.pauseOnHover && !_this15.playing) _this15.playAuto(_this15.options.wiatTime);
                });
            });
            $dev(document).on('visibilitychange', function () {
                if (document.hidden) _this15.stopAuto();else _this15.playAuto(_this15.options.wiatTime);
            });
            return this;
        }
        ////////////////////////////////////////////

    }, {
        key: 'dragment',
        value: function dragment() {
            var _this16 = this;

            var startPos = void 0,
                post = void 0,
                ended = void 0;
            this.drager = false;
            ////////////////////////////////////////
            var dragestart = function dragestart(pos) {
                _this16.swipe = _this16.options.dragType == 'swipe';
                _this16.constant = _this16.swipe ? 0.1 : 1;
                _this16.drager = true;_this16.container.addClass('saturn-grabbing').removeClass('saturn-grab');
                if (_this16.direction == -1) {
                    post = parseFloat(_this16.outerItems.client().left - _this16.centering.client().left).toFixed(2);
                } else {
                    post = parseFloat(_this16.outerItems.client().right - _this16.centering.client().right).toFixed(2);
                }
                _this16.moveForDrag(post, '0ms');
                _this16.options.onStart(_this16.newItems.norm[_this16.startPoint]);
                return startPos = pos;
            };
            ////////////////////////////////////////
            var drageend = function drageend(pos, e) {
                if (_this16.drager) {
                    _this16.drager = false;
                    var distance = Math.ceil(Math.abs((startPos - pos) / _this16.oneWidth));
                    distance = _this16.swipe ? distance > 1 ? 1 : distance : distance;
                    if (_this16.direction == -1) {
                        if (_this16.options.loop) {
                            if (startPos - pos > 20) {
                                _this16.startPoint += distance;
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            } else if (pos - startPos > 20) {
                                _this16.startPoint -= distance;
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            } else {
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            }
                        } else {
                            if (startPos - pos > 20) {
                                _this16.startPoint += distance;
                                if (_this16.startPoint >= _this16.ended) _this16.startPoint = _this16.ended;
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            } else if (startPos - pos < 20) {
                                _this16.startPoint -= distance;
                                if (_this16.startPoint <= 0) _this16.startPoint = 0;
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            } else {
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            }
                        }
                    } else {
                        if (_this16.options.loop) {
                            if (startPos - pos > 20) {
                                _this16.startPoint -= distance;
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            } else if (pos - startPos > 20) {
                                _this16.startPoint += distance;
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            } else {
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            }
                        } else {
                            if (startPos - pos > 20) {
                                _this16.startPoint -= distance;
                                if (_this16.startPoint <= 0) _this16.startPoint = 0;
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            } else if (startPos - pos < 20) {
                                _this16.startPoint += distance;
                                if (_this16.startPoint >= _this16.ended) _this16.startPoint = _this16.ended;
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            } else {
                                _this16.moveForDrag(_this16.direction * (_this16.startPoint * _this16.oneWidth), _this16.transition);
                            }
                        }
                    }
                    _this16.container.addClass('saturn-grab').removeClass('saturn-grabbing');
                    _this16.options.onEnd(_this16.newItems.norm[_this16.startPoint]);
                }
            };
            ////////////////////////////////////////
            var dragemove = function dragemove(pos, e) {
                if (_this16.drager) {
                    var farq = (startPos - pos) * _this16.constant;
                    ended = post - farq;
                    var distance = Math.ceil(Math.abs(farq / _this16.oneWidth));
                    var observer = void 0;
                    _this16.constant = _this16.swipe ? 0.1 : 1;
                    distance = _this16.swipe ? distance > 1 ? 1 : distance : distance;
                    if (_this16.direction == -1) {
                        if (_this16.options.loop) {
                            if (pos < startPos) {
                                if (_this16.startPoint + distance > _this16.ended - 1) {
                                    _this16.startPoint = _this16.started;startPos = pos;post = _this16.direction * (_this16.startPoint * _this16.oneWidth);
                                }
                                observer = _this16.startPoint + distance;
                            } else {
                                if (_this16.startPoint - distance < _this16.started) {
                                    _this16.startPoint = _this16.ended - 1;startPos = pos;post = _this16.direction * (_this16.startPoint * _this16.oneWidth);
                                }
                                observer = _this16.startPoint - distance;
                            }
                        } else {
                            if (pos < startPos) {
                                if (_this16.startPoint >= _this16.ended) {
                                    _this16.constant = 0.1;
                                }
                                observer = _this16.startPoint + distance;
                            } else {
                                if (_this16.startPoint <= 0) {
                                    _this16.constant = 0.1;
                                }
                                observer = _this16.startPoint - distance;
                            }
                        }
                    } else {
                        if (_this16.options.loop) {
                            if (pos > startPos) {
                                if (_this16.startPoint + distance > _this16.ended - 1) {
                                    _this16.startPoint = _this16.started;startPos = pos;post = _this16.direction * (_this16.startPoint * _this16.oneWidth);
                                }
                                observer = _this16.startPoint + distance;
                            } else {
                                if (_this16.startPoint - distance < _this16.started) {
                                    _this16.startPoint = _this16.ended - 1;startPos = pos;post = _this16.direction * (_this16.startPoint * _this16.oneWidth);
                                }
                                observer = _this16.startPoint - distance;
                            }
                        } else {
                            if (pos > startPos) {
                                if (_this16.startPoint >= _this16.ended) {
                                    _this16.constant = 0.1;
                                }
                                observer = _this16.startPoint + distance;
                            } else {
                                if (_this16.startPoint <= 0) {
                                    _this16.constant = 0.1;
                                }
                                observer = _this16.startPoint - distance;
                            }
                        }
                    }
                    _this16.moveForDrag(ended, '0ms', observer);
                    _this16.options.onDrag(_this16.newItems.norm[observer]);
                }
            };
            ////////////////////////////////////////
            this.container.on('mousedown touchstart mouseup touchend touchleave mousemove touchmove mouseleave', function (e) {
                e.preventDefault();
                if (!_this16.options.dragger) return 0;
                if (!_this16.detectPhone() && e.type == 'mousedown') dragestart(e.clientX);
                if (_this16.detectPhone() && e.type == 'touchstart') dragestart(e.changedTouches[0].clientX);
                ////////////////////////////////////
                if (!_this16.detectPhone() && e.type == 'mousemove') dragemove(e.clientX, e);
                if (_this16.detectPhone() && e.type == 'touchmove') dragemove(e.changedTouches[0].clientX, e);
                // // //////////////////////////////
                if (!_this16.detectPhone() && (e.type == 'mouseup' || e.type == 'mouseleave')) drageend(e.clientX, e);
                if (_this16.detectPhone() && (e.type == 'touchend' || e.type == 'touchleave')) drageend(e.changedTouches[0].clientX, e);
            });
            ////////////////////////////////////////
            var scroll = function scroll(e) {
                if (_this16.options.mouseWheel) {
                    e.preventDefault();
                    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
                    if (delta == 1) _this16.handleNext();else if (delta == -1) _this16.handlePrev();
                }
            };
            if (this.prefix() == '-moz-') {
                this.container.on('DOMMouseScroll', function (e) {
                    scroll(e);
                });
            } else {
                this.container.on('mousewheel', function (e) {
                    scroll(e);
                });
            }
            return this;
        }
        ////////////////////////////////////////////

    }, {
        key: 'destroy',
        value: function destroy() {
            var _this17 = this;

            this.mainElem.removeClass('saturn saturn-grab saturn-grabbing').html('');
            this.original.forEach(function (e) {
                _this17.mainElem.append(e);
            });
            $dev([].concat(_toConsumableArray(this.dotsCustom))).removeAttr("index").removeClass('saturn-hide saturn-goto active');
        }
    }]);

    return SATURN;
}();

var Saturn = function () {
    function Saturn(elem) {
        _classCallCheck(this, Saturn);

        this.target = (typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) == 'object' ? elem.length == undefined ? [elem] : elem : document.querySelectorAll(elem);
    }

    _createClass(Saturn, [{
        key: 'run',
        value: function run(opt) {
            var _this18 = this;

            this.saturn = [];
            var options = opt == undefined ? {} : opt;
            this.target.forEach(function (data) {
                _this18.saturn.push(new SATURN(data, options));
            });
            return this;
        }
    }, {
        key: 'back',
        value: function back(callback, ref) {
            this.saturn.forEach(function (saturn) {
                callback(saturn);if (ref == true) saturn.refresh();
            });
            return this;
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            this.back(function (saturn) {
                saturn.refresh();
            });
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.back(function (saturn) {
                saturn.destroy();
            });
        }
    }, {
        key: 'desktop',
        value: function desktop(data) {
            if (data == undefined) return this;
            this.back(function (saturn) {
                saturn.desktop = saturn.setData(data, saturn.standerd);
            }, true);
        }
    }, {
        key: 'laptop',
        value: function laptop(data) {
            if (data == undefined) return this;
            this.back(function (saturn) {
                saturn.laptop = saturn.setData(data, saturn.desktop);
            }, true);
        }
    }, {
        key: 'tablet',
        value: function tablet(data) {
            if (data == undefined) return this;
            this.back(function (saturn) {
                saturn.tablet = saturn.setData(data, saturn.desktop);
            }, true);
        }
    }, {
        key: 'phone',
        value: function phone(data) {
            if (data == undefined) return this;
            this.back(function (saturn) {
                saturn.phone = saturn.setData(data, saturn.phone);
            }, true);
        }
    }, {
        key: 'goto',
        value: function goto(i) {
            if (i == undefined) return this;
            this.back(function (saturn) {
                saturn.gotoItem(i);
            });
        }
    }, {
        key: 'next',
        value: function next() {
            this.back(function (saturn) {
                saturn.handleNext();
            });
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.back(function (saturn) {
                saturn.handlePrev();
            });
        }
    }, {
        key: 'play',
        value: function play(s) {
            s = s == undefined ? 2500 : parseFloat(s);
            this.back(function (saturn) {
                saturn.options.autoPlay = true;
                saturn.options.wiatTime = s;
                saturn.stopAuto().playAuto(s);
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.back(function (saturn) {
                saturn.options.autoPlay = false;
                saturn.stopAuto();
            });
        }
    }]);

    return Saturn;
}();

var saturn = function saturn(data) {
    return new Saturn(data);
};