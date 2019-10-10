/**
 * //////////////////////////
 * @name Saturn.js
 * @author Dev Ahmad Hasan
 * @version 1.0.0 2019-10-10
 * @copyright (c) 2019-2020 Saturn
 * @license MIT-License-(MIT)
 * @website https://devahmad7.github.io/saturn/index.html
 * @todo Updates coming soon
 * //////////////////////////
**/

"use strict";

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else { obj[key] = value; }
    return obj;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; }
}

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; }
}

function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var Getter =
    /*#__PURE__*/
    function () {
        function Getter(data) {
            _classCallCheck(this, Getter);

            this.norm = _typeof(data) == 'object' ? data.length == undefined ? [data] : data : data.indexOf('<') > -1 ? [document.createElement(data.replace(/[><\/]/mig, ''))] : document.querySelectorAll(data);
        } /////////////////////////////////////////


        _createClass(Getter, [{
            key: "find",
            value: function find(x) {
                var arr = [];
                this.norm.forEach(function (e, v) {
                    arr.push(e.querySelectorAll(x));
                });
                return arr[0];
            }
        }, {
            key: "each",
            ////////////////////////////////////
            value: function each(x) {
                this.norm.forEach(function (e, v) {
                    if (x != undefined) x(e, v);
                });
                return this;
            } ////////////////////////////////////

        }, {
            key: "html",
            value: function html(x) {
                this.norm.forEach(function (e) {
                    e.innerHTML = x;
                });
                return this;
            } ////////////////////////////////////

        }, {
            key: "addClass",
            value: function addClass(x) {
                var _this = this;

                x.split(' ').forEach(function (c) {
                    _this.norm.forEach(function (e) {
                        e.classList.add(c);
                    });
                });
                return this;
            } ////////////////////////////////////

        }, {
            key: "removeClass",
            value: function removeClass(x) {
                var _this2 = this;

                x.split(' ').forEach(function (c) {
                    _this2.norm.forEach(function (e) {
                        e.classList.remove(c);
                    });
                });
                return this;
            } ////////////////////////////////////

        }, {
            key: "css",
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
            } ////////////////////////////////////

        }, {
            key: "attr",
            value: function attr(x, z) {
                if (z != undefined) {
                    this.norm.forEach(function (e) {
                        e.setAttribute(x, z);
                    });
                    return this;
                } else {
                    return this.norm[0].getAttribute(x);
                }
            } ///////////////////////////////////

        }, {
            key: "append",
            value: function append(x) {
                this.norm.forEach(function (e) {
                    e.append(x);
                });
                return this;
            } ////////////////////////////////////////////////////

        }, {
            key: "on",
            value: function on(x, call) {
                var _this3 = this;

                var cond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                x.split(' ').forEach(function (e) {
                    _this3.norm.forEach(function (z) {
                        if (document.addEventListener) z.addEventListener(e, call, cond);
                        else if (document.attachEvent) z.attachEvent("on".concat(e), call, cond);
                    });
                });
                return this;
            } ////////////////////////////////////////////////////

        }, {
            key: "width",
            value: function width(x) {
                if (x != undefined) {
                    this.norm.forEach(function (e) {
                        e.style['width'] = "".concat(parseFloat(x), "px");
                    });
                    return this;
                } else {
                    return this.norm[0].clientWidth;
                }
            } ////////////////////////////////////////////////////

        }, {
            key: "height",
            value: function height(x) {
                if (x != undefined) {
                    this.norm.forEach(function (e) {
                        e.style['height'] = "".concat(parseFloat(x), "px");
                    });
                    return this;
                } else {
                    return this.norm[0].clientHeight;
                }
            } ////////////////////////////////////////////////////

        }, {
            key: "client",
            value: function client() {
                var rect = this.norm[0].getBoundingClientRect();
                return {
                    left: rect.left + window.scrollX,
                    top: rect.top + window.scrollY
                };
            }
        }, {
            key: "length",
            get: function get() {
                return this.norm.length;
            }
        }]);

        return Getter;
    }(); ////////////////////////////////////////


var $dev = function $dev(data) {
    return new Getter(data);
}; ////////////////////////////////////////


var SATURN =
    /*#__PURE__*/
    function () {
        function SATURN(elem, data) {
            var _this4 = this;

            _classCallCheck(this, SATURN);

            // standerd values
            this.standerd = {
                dir: 'left',
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
                moveAfterAnimation: false,
                wiatTime: 2500,
                pauseOnHover: false,
                effect: null,
                onDrag: function onDrag() { },
                onChange: function onChange() { },
                lazyLoad: false
            }; // set id for element

            this.id = elem == undefined ? '' : elem;
            this.mainElem = $dev(this.id).addClass('saturn');
            this.images = $dev(this.mainElem.find('[saturn-lazy]'));
            this.Encapsulation = [];
            this.original = [];
            this.originalArr = _toConsumableArray(this.mainElem.norm[0].children).forEach(function (data) {
                _this4.original.push(data.cloneNode(true));
            });
            this.items = _toConsumableArray(this.mainElem.norm[0].children).forEach(function (data) {
                _this4.Encapsulation.push($dev('<div>').addClass('saturn-item').append(data).norm[0]);
            });
            this.items = $dev(this.Encapsulation);
            this.mainLength = this.items.length;
            this.container = $dev('<div>').addClass('saturn-container');
            this.centering = $dev('<div>').addClass('saturn-center');
            this.outerItems = $dev('<div>').addClass('saturn-items');
            this.controller = $dev('<div>').addClass('saturn-controller');
            this.outerDots = $dev('<ul>').addClass('saturn-dots');
            this.thumbs = $dev('<img>').addClass('saturn-thumbs').attr('src', 'https://i.ibb.co/nQsD21Z/saturn.png'); // set values as template

            this.setData = function (opt, std) {
                if (opt == undefined) {
                    return std;
                } else {
                    return {
                        navigationContainer: opt.navigationContainer == undefined ? std.navigationContainer : opt.navigationContainer,
                        moveAfterAnimation: opt.moveAfterAnimation == undefined ? std.moveAfterAnimation : opt.moveAfterAnimation,
                        pauseOnHover: opt.pauseOnHover == undefined ? std.pauseOnHover : opt.pauseOnHover,
                        lazyLoad: opt.lazyLoad == undefined ? std.lazyLoad : opt.lazyLoad,
                        effect: opt.effect == undefined ? std.effect : opt.effect,
                        wiatTime: opt.wiatTime == undefined ? std.wiatTime : opt.wiatTime,
                        active: opt.active == undefined ? std.active : opt.active,
                        starter: opt.starter == undefined ? std.starter : opt.starter,
                        loop: opt.loop == undefined ? std.loop : opt.loop,
                        navShow: opt.navShow == undefined ? std.navShow : opt.navShow,
                        navPrev: opt.navPrev == undefined ? std.navPrev : opt.navPrev,
                        navNext: opt.navNext == undefined ? std.navNext : opt.navNext,
                        dir: opt.dir == undefined ? std.dir : opt.dir,
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
                        onDrag: opt.onDrag == undefined ? std.onDrag : opt.onDrag,
                        onChange: opt.onChange == undefined ? std.onChange : opt.onChange
                    };
                }
            };

            this.desktop = this.setData(data.desktop, this.standerd);
            this.laptop = this.setData(data.laptop, this.desktop);
            this.tablet = this.setData(data.tablet, this.desktop);
            this.phone = this.setData(data.phone, this.desktop);
            this.notMouseOver = false; /////////////////////////////////////////

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
            }; /////////////////////////////////////////


            this.build = ''; // set style as template

            if ($dev('#saturn-style').norm[0] == undefined) {
                var styleoriginal = ".saturn {overflow: hidden;} .saturn-container, .saturn-center {width: 100%;display: flex;margin: auto;position: relative;}\n .saturn-items {display: flex;position: relative;} .saturn-item {position: relative;} .saturn-item img {display: flex;width: 100%;}\n .saturn-item .saturn-thumbs {z-index: 999;width: auto;height: auto;position: absolute;left: 50%;top: 50%;".concat(this.prefix(), "transform: translate(-50%, -50%);}\n .saturn-grab {cursor: grab;cursor: ").concat(this.prefix(), "grab;}\n .saturn-grabbing {cursor: grabbing;cursor: ").concat(this.prefix(), "grabbing;}\n /* if saturn-controller false */\n .saturn .saturn-dots {position: absolute;display: flex;left: 50%;bottom: 10px;").concat(this.prefix(), "transform: translateX(-50%);}\n .saturn .saturn-dot {display: inline-block;margin: 0px 2px;width: 11px;height: 11px;border: 1px solid #ffffff;border-radius: 50%;cursor: pointer}\n .saturn .saturn-dot.active, .saturn .saturn-dot:hover {background-color: #ffffff;}\n .saturn .saturn-prev, .saturn .saturn-next {position: absolute;cursor: pointer;height: 30px;line-height: 30px;\n font-size: 15px;text-align: center;width: 50px;color: #ffffff;top: 50%;").concat(this.prefix(), "transform: translateY(-50%)}\n .saturn .saturn-prev {left: 0px;} .saturn .saturn-next {right: 0px;}\n /* if saturn-controller true */\n .saturn-controller {position: absolute;width: 100%;bottom: 0px; border-radius: 2px;background-color: rgba(0, 0, 0, .2);height: 30px;}\n .saturn-controller .saturn-dots {bottom: auto;top: 50%;").concat(this.prefix(), "transform: translate(-50%, -50%);}");
                $dev('html head meta').norm[0].parentNode.insertBefore($dev('<style>').attr('id', 'saturn-style').html(styleoriginal).norm[0], $dev('html head meta').norm[0].nextSibling);
            } /////////////////////////////////////////


            this.setup().observer().buildItems().resize().dragment().ctrAutoPlay();
        }

        _createClass(SATURN, [{
            key: "setup",
            value: function setup() {
                var _this5 = this;

                this.mainElem.html('').append(this.container.norm[0]).css('position', 'relative');
                this.container.append(this.centering.norm[0]);
                this.centering.append(this.outerItems.norm[0]);
                this.outerItems.on("transitionstart", function (e) {
                    _this5.transMoving = true;
                }).on("transitionend", function (e) {
                    _this5.transMoving = false;
                });
                return this;
            } /////////////////////////////////////////////

        }, {
            key: "observer",
            value: function observer() {
                this.windowWidth = this.detectPhone() ? window.screen.width : window.innerWidth; /////////////////////////////////////////

                if (this.windowWidth > 1300) this.options = this.desktop, this.building = 'desk'; else if (this.windowWidth < 1300 && this.windowWidth > 1000) this.options = this.laptop, this.building = 'lap'; else if (this.windowWidth < 1000 && this.windowWidth > 600) this.options = this.tablet, this.building = 'tab'; else if (this.windowWidth < 600 && this.windowWidth > 100) this.options = this.phone, this.building = 'pho'; /////////////////////////////////////////

                return this;
            } ////////////////////////////////////////////

        }, {
            key: "handlePrev",
            value: function handlePrev(e) {
                var _this6 = this;

                if (this.options.loop) {
                    this.startPoint--;

                    if (this.startPoint < this.started) {
                        this.startPoint = this.ended - 1;
                        this.moveJust(-this.startPoint * this.oneWidth, '0ms');
                        this.startPoint--;
                    }
                } else {
                    if (this.startPoint > 0) this.startPoint--; else this.repeateAutoPlay = true;
                }

                setTimeout(function () {
                    _this6.movement(-_this6.startPoint * _this6.oneWidth, _this6.transition);
                }, 70);
            }
        }, {
            key: "handleNext",
            value: function handleNext(e) {
                var _this7 = this;

                if (this.options.loop) {
                    this.startPoint++;

                    if (this.startPoint >= this.ended) {
                        this.startPoint = this.started;
                        this.moveJust(-this.startPoint * this.oneWidth, '0ms');
                        this.startPoint++;
                    }
                } else {
                    if (this.startPoint < this.ended) this.startPoint++; else this.repeateAutoPlay = true;
                }

                setTimeout(function () {
                    _this7.movement(-_this7.startPoint * _this7.oneWidth, _this7.transition);
                }, 70);
            } ////////////////////////////////////////////

        }, {
            key: "buildArrows",
            value: function buildArrows() {
                var _this8 = this;

                if ($dev(this.mainElem.find('.saturn-prev')).norm[0] != undefined) {
                    $dev(this.mainElem.find('.saturn-prev')).norm[0].remove();
                }

                if ($dev(this.mainElem.find('.saturn-next')).norm[0] != undefined) {
                    $dev(this.mainElem.find('.saturn-next')).norm[0].remove();
                }

                var navPrev = $dev('<div>').addClass('saturn-prev').html(this.options.navPrev).on('mouseup touchstart', function (e) {
                    _this8.handlePrev(e);
                }).norm[0];
                var navNext = $dev('<div>').addClass('saturn-next').html(this.options.navNext).on('click', function (e) {
                    _this8.handleNext(e);
                }).norm[0];

                if (this.options.navigationContainer) {
                    this.controller.append(navPrev).append(navNext);
                } else {
                    this.mainElem.append(navPrev).append(navNext);
                }
            } ////////////////////////////////////////////

        }, {
            key: "buildDots",
            value: function buildDots() {
                if (this.options.navigationContainer) {
                    this.controller.append(this.outerDots.html('').norm[0]);
                } else {
                    this.mainElem.append(this.outerDots.html('').norm[0]);
                }

                if (this.options.dotEach) {
                    if (this.options.loop) {
                        for (var i = 0, index = this.cloned; index < this.mainLength + this.cloned; index++ , i++) {
                            var elem = $dev('<li>').attr("index", index).addClass('saturn-dot');
                            this.outerDots.append(elem.norm[0]);
                            $dev(this.items.norm[i]).attr("index", index);
                        }
                    } else {
                        for (var _i = 0; _i < this.mainLength - (this.options.active - 1); _i++) {
                            var _elem = $dev('<li>').attr("index", _i).addClass('saturn-dot');

                            this.outerDots.append(_elem.norm[0]);
                            $dev(this.items.norm[_i]).attr("index", _i);
                        }
                    }
                } else {
                    if (this.options.loop) {
                        for (var _i2 = 0, _index = this.cloned; _index < this.mainLength + this.cloned; _index += this.options.active, _i2 += this.options.active) {
                            var _elem2 = $dev('<li>').attr("index", _index).addClass('saturn-dot');

                            this.outerDots.append(_elem2.norm[0]);

                            for (var inx = _i2; inx < _index; inx++) {
                                if (this.items.norm[inx] != undefined) $dev(this.items.norm[inx]).attr("index", _index);
                            }
                        }
                    } else {
                        for (var _index2 = 0; _index2 < this.mainLength; _index2 += this.options.active) {
                            var _inx = _index2;
                            if (_inx > this.mainLength - this.options.active) _inx = this.mainLength - this.options.active;

                            var _elem3 = $dev('<li>').attr("index", _inx).addClass('saturn-dot');

                            this.outerDots.append(_elem3.norm[0]);

                            for (var _i3 = _inx; _i3 < _inx + this.options.active; _i3++) {
                                if (this.items.norm[_i3] != undefined) $dev(this.items.norm[_i3]).attr("index", _inx);
                            }
                        }
                    }
                }
            } /////////////////////////////////////////////

        }, {
            key: "buildItems",
            value: function buildItems() {
                var _this9 = this;

                if (this.build != this.building) {
                    this.build = this.building; /////////////////////////////////////

                    if (this.options.lazyLoad) {
                        this.images.each(function (e) {
                            e.removeAttribute('src');
                        });
                    } /////////////////////////////////////


                    this.options.starter = this.options.starter > this.mainLength || this.options.starter <= 0 ? 1 : this.options.starter;
                    this.options.active = this.options.active > this.mainLength ? this.mainLength : this.options.active;
                    this.cloned = this.options.active > 2 ? this.options.active : 3;
                    this.cloned = this.cloned >= this.mainLength ? this.mainLength : this.cloned; /////////////////////////////////////

                    this.transition = this.options.effect == null ? "all ".concat(this.options.moveSpeed / 1000, "s ").concat(this.options.moveType, " 0s") : "all ".concat(0 / 1000, "s ").concat(this.options.moveType, " 0s"); /////////////////////////////////////

                    this.items.css({
                        'margin-left': "".concat(typeof this.options.margin == 'number' ? "".concat(this.options.margin, "px") : this.options.margin),
                        'margin-right': "".concat(typeof this.options.margin == 'number' ? "".concat(this.options.margin, "px") : this.options.margin)
                    }); /////////////////////////////////////////

                    if (this.options.autoHeight) {
                        this.mainElem.css('height', 'auto');
                        this.container.css('height', 'auto');
                        this.centering.css('height', 'auto');
                        this.items.css('height', 'auto');
                    }

                    this.outerItems.html(''); /////////////////////////////////////////

                    if (this.options.navigationContainer) {
                        if ($dev(this.mainElem.find('.saturn-dots')).norm[0] != undefined) {
                            $dev(this.mainElem.find('.saturn-dots')).norm[0].remove();
                        }

                        if (this.options.dotShow || this.options.navShow) this.mainElem.append(this.controller.html('').norm[0]);
                    } else {
                        this.controller.html('').norm[0].remove();
                    } /////////////////////////////////////


                    if (this.options.navShow) {
                        this.buildArrows();
                    } /////////////////////////////////////


                    if (this.options.dotShow) {
                        this.buildDots();

                        var handleDots = function handleDots(data) {
                            _this9.startPoint = parseInt($dev(data).attr('index'));
                            if (_this9.startPoint > _this9.ended && !_this9.options.loop) _this9.startPoint = _this9.ended;

                            _this9.movement(-_this9.startPoint * _this9.oneWidth, _this9.transition);
                        };

                        $dev(this.outerDots.find('.saturn-dot')).each(function (data) {
                            $dev(data).on("mousedown touchstart", function (e) {
                                if (_this9.detectPhone() && e.type == 'touchstart') handleDots(data);
                                if (!_this9.detectPhone() && e.type == 'mousedown') handleDots(data);
                            });
                        });
                    } /////////////////////////////////////


                    if (this.options.loop) {
                        var firstElement = [],
                            lastElement = []; /////////////////////////////////////

                        for (var i = 0, o = this.mainLength - this.cloned; i < this.cloned; i++ , o++) {
                            firstElement.push(this.items.norm[i].cloneNode(true));
                            lastElement.push(this.items.norm[o].cloneNode(true));
                        } /////////////////////////////////////


                        this.newItems = $dev([].concat(lastElement, _toConsumableArray(this.items.norm), firstElement)).each(function (data, i) {
                            if (_this9.options.lazyLoad) data.append(_this9.thumbs.norm[0].cloneNode(true));

                            _this9.outerItems.append(data);
                        }); /////////////////////////////////////

                        this.newLength = this.newItems.length;
                        this.startPoint = this.options.starter + (this.cloned - 1);
                        this.started = this.cloned - 1;
                        this.ended = this.newLength - this.cloned;
                    } else {
                        this.newItems = this.items.each(function (data) {
                            if (_this9.options.lazyLoad) data.append(_this9.thumbs.norm[0].cloneNode(true));

                            _this9.outerItems.append(data);
                        });
                        this.newLength = this.newItems.length;
                        this.startPoint = this.options.starter - 1;
                        this.started = 0;
                        this.ended = this.newLength - this.options.active;
                        if (this.startPoint > this.ended) this.startPoint = this.ended;
                    } /////////////////////////////////////


                    this.newItems.on('animationstart', function () {
                        _this9.transMoving = true;
                    }).on("animationend", function (e) {
                        _this9.transMoving = false;

                        if (!_this9.checker && _this9.options.effect != null) {
                            _this9.newItems.removeClass(_this9.options.effect);
                        }
                    }); /////////////////////////////////////

                    this.stopAuto().playAuto(this.options.wiatTime);
                } /////////////////////////////////////////


                if (this.options.centering) {
                    this.centering.css(_defineProperty({
                        'width': "calc(100% - ".concat(this.container.width() / (this.options.active + 2), "px)")
                    }, "".concat(this.prefix(), "transition"), 'none'));
                } else {
                    this.centering.css(_defineProperty({
                        'width': '100%'
                    }, "".concat(this.prefix(), "transition"), 'none'));
                } /////////////////////////////////////////


                this.mainWidth = this.centering.width();
                this.oneWidth = parseFloat(this.mainWidth / this.options.active); /////////////////////////////////////////

                this.outerItems.width(parseFloat(this.oneWidth * this.newLength));
                this.newItems.width(this.oneWidth); /////////////////////////////////////////

                this.movement(-this.startPoint * this.oneWidth, '0s');
                return this;
            } /////////////////////////////////////////////

        }, {
            key: "detectPhone",
            value: function detectPhone() {
                var expressMop = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|ipad|playbook|silk|Android|webOS|iPhone|iPod|IEMobile|Mobi/i;
                return expressMop.test(navigator.userAgent) || expressMop.test(navigator.platform);
            } /////////////////////////////////////////////

        }, {
            key: "resize",
            value: function resize() {
                var _this10 = this;

                this.lastWidth = this.detectPhone() ? window.screen.width : window.innerWidth;
                setInterval(function () {
                    _this10.currnetWidth = _this10.detectPhone() ? window.screen.width : window.innerWidth;

                    if (_this10.lastWidth != _this10.currnetWidth) {

                        _this10.lastWidth = _this10.currnetWidth;

                        _this10.observer();

                        _this10.buildItems();
                    }
                }, this.options.refreshRate);
                return this;
            }
        }, {
            key: "refresh",
            value: function refresh() {
                this.build = '';
                this.observer();
                this.buildItems();
            } ////////////////////////////////////////////

        }, {
            key: "moveJust",
            value: function moveJust(move, speed, opt) {
                this.outerItems.css(["".concat(this.prefix(), "transition")], speed).css(["".concat(this.prefix(), "transform")], "translateX(".concat(move, "px)"));
                this.activeItems(opt, speed);
                return this;
            }
        }, {
            key: "activeItems",
            value: function activeItems(index, speed) {
                this.checker = index != undefined;
                if (speed == '0ms' && !this.checker) this.newItems.css(["".concat(this.prefix(), "transition")], speed); else this.newItems.css(["".concat(this.prefix(), "transition")], '');
                this.newItems.removeClass('prev-item active next-item');
                var moveto = this.checker ? index : this.startPoint;

                for (var i = 0; i < this.options.active; i++) {
                    if (this.newItems.norm[moveto - 1] != undefined) $dev(this.newItems.norm[moveto - 1]).addClass('prev-item');
                    if (this.newItems.norm[moveto + i] != undefined) $dev(this.newItems.norm[moveto + i]).addClass('active');
                    if (this.newItems.norm[moveto + this.options.active] != undefined) $dev(this.newItems.norm[moveto + this.options.active]).addClass('next-item');
                }

                if (this.options.lazyLoad) {
                    var saturnLazy;
                    if (!this.options.centering) saturnLazy = $dev(this.mainElem.find('.saturn-item.active [saturn-lazy]')); else saturnLazy = $dev(this.mainElem.find('.saturn-item.active [saturn-lazy], .saturn-item.prev-item [saturn-lazy], .saturn-item.next-item [saturn-lazy]'));
                    saturnLazy.each(function (e) {
                        if (!$dev(e).norm[0].hasAttribute('src')) {
                            $dev(e).attr('src', $dev(e).attr('saturn-lazy')).on('load', function () {
                                if ($dev($dev(e.closest('.saturn-item')).find('.saturn-thumbs')).norm[0] != undefined) {
                                    $dev($dev(e.closest('.saturn-item')).find('.saturn-thumbs')).norm[0].remove();
                                }
                            });
                        }
                    });
                }

                if (!this.checker && this.options.effect != null) {
                    $dev(this.mainElem.find('.saturn-item.active')).addClass(this.options.effect);
                }
            }
        }, {
            key: "movement",
            value: function movement(move, speed, opt) {
                if (this.transMoving && this.options.moveAfterAnimation) return this;
                this.moveJust(move, speed, opt);

                if (this.options.dotShow) {
                    var dotIndex = parseInt($dev(this.newItems.norm[this.startPoint]).attr('index'));

                    if (!isNaN(dotIndex)) {
                        $dev(this.outerDots.find('.saturn-dot')).removeClass('active');
                        $dev(this.outerDots.find(".saturn-dot[index=\"".concat(dotIndex, "\"]"))).addClass('active');
                    }
                }

                if (this.lastIndex != this.startPoint) {
                    this.lastIndex = this.startPoint;
                    this.options.onChange(this.newItems.norm[this.startPoint]);
                }

                return this;
            } ////////////////////////////////////////////

        }, {
            key: "playAuto",
            value: function playAuto(speed) {
                var _this11 = this;

                if (this.options.autoPlay && !document.hidden) {
                    this.setPlayAuto = setInterval(function () {
                        if (_this11.options.dir == "left") {
                            _this11.handleNext();

                            if (!_this11.options.loop && _this11.repeateAutoPlay) {
                                _this11.repeateAutoPlay = false;
                                _this11.startPoint = _this11.started;
                            }
                        } else {
                            _this11.handlePrev();

                            if (!_this11.options.loop && _this11.repeateAutoPlay) {
                                _this11.repeateAutoPlay = false;
                                _this11.startPoint = _this11.ended;
                            }
                        }
                    }, speed);
                    this.playing = true;
                }

                return this;
            }
        }, {
            key: "stopAuto",
            value: function stopAuto() {
                window.clearInterval(this.setPlayAuto);
                this.playing = false;
                return this;
            }
        }, {
            key: "ctrAutoPlay",
            value: function ctrAutoPlay() {
                var _this12 = this;

                this.mainElem.on('mouseenter touchstart', function () {
                    if (_this12.options.pauseOnHover) _this12.stopAuto();
                }).on('mouseleave touchend', function (e) {
                    if (_this12.options.pauseOnHover && !_this12.playing) _this12.playAuto(_this12.options.wiatTime);
                });
                $dev(document).on('visibilitychange', function () {
                    if (document.hidden) _this12.stopAuto(); else _this12.playAuto(_this12.options.wiatTime);
                });
                return this;
            } ////////////////////////////////////////////

        }, {
            key: "dragment",
            value: function dragment() {
                var _this13 = this;

                var startPos,
                    dragr = false,
                    post,
                    ended;
                var constant = this.options.dragType == 'swipe' ? 0.1 : 1; ////////////////////////////////////////////

                var dragestart = function dragestart(pos) {
                    dragr = true;

                    _this13.container.addClass('saturn-grabbing').removeClass('saturn-grab');

                    post = parseFloat(_this13.outerItems.client().left - _this13.centering.client().left).toFixed(2);

                    _this13.movement(post, _this13.transition, false);

                    return startPos = pos;
                }; ////////////////////////////////////////////


                var drageend = function drageend(pos, e) {
                    if (dragr) {
                        dragr = false;
                        var distance = Math.ceil(Math.abs((startPos - pos) / _this13.oneWidth));
                        var swipe = _this13.options.dragType == 'swipe';
                        distance = swipe ? distance > 1 ? 1 : distance : distance;

                        if (_this13.options.loop) {
                            if (startPos - pos > 20) {
                                _this13.startPoint += distance;

                                _this13.movement(-_this13.startPoint * _this13.oneWidth, _this13.transition);
                            } else if (pos - startPos > 20) {
                                _this13.startPoint -= distance;

                                _this13.movement(-_this13.startPoint * _this13.oneWidth, _this13.transition);
                            } else {
                                _this13.movement(-_this13.startPoint * _this13.oneWidth, _this13.transition);
                            }
                        } else {
                            if (startPos - pos > 20) {
                                _this13.startPoint += distance;
                                if (_this13.startPoint >= _this13.ended) _this13.startPoint = _this13.ended;

                                _this13.movement(-_this13.startPoint * _this13.oneWidth, _this13.transition);
                            } else if (startPos - pos < 20) {
                                _this13.startPoint -= distance;
                                if (_this13.startPoint <= 0) _this13.startPoint = 0;

                                _this13.movement(-_this13.startPoint * _this13.oneWidth, _this13.transition);
                            } else {
                                _this13.movement(-_this13.startPoint * _this13.oneWidth, _this13.transition);
                            }
                        }

                        _this13.container.addClass('saturn-grab').removeClass('saturn-grabbing');
                    }
                }; ////////////////////////////////////////


                var dragemove = function dragemove(pos, e) {
                    if (dragr) {
                        var farq = (startPos - pos) * constant;
                        ended = post - farq;
                        var distance = Math.ceil(Math.abs(farq / _this13.oneWidth));
                        var observer;
                        var swipe = _this13.options.dragType == 'swipe';
                        constant = swipe ? 0.1 : 1;
                        distance = swipe ? distance > 1 ? 1 : distance : distance;

                        if (_this13.options.loop) {
                            // = 1;
                            if (pos < startPos) {
                                if (_this13.startPoint + distance > _this13.ended - 1) {
                                    _this13.startPoint = _this13.started;
                                    startPos = pos;
                                    post = -(_this13.startPoint * _this13.oneWidth);
                                }

                                observer = _this13.startPoint + distance;
                            } else {
                                if (_this13.startPoint - distance < _this13.started) {
                                    _this13.startPoint = _this13.ended - 1;
                                    startPos = pos;
                                    post = -(_this13.startPoint * _this13.oneWidth);
                                }

                                observer = _this13.startPoint - distance;
                            }
                        } else {
                            if (pos < startPos) {
                                if (_this13.startPoint >= _this13.ended) {
                                    constant = 0.1;
                                }

                                observer = _this13.startPoint + distance;
                            } else {
                                if (_this13.startPoint <= 0) {
                                    constant = 0.1;
                                }

                                observer = _this13.startPoint - distance;
                            }
                        }

                        _this13.movement(ended, '0ms', observer);

                        _this13.options.onDrag(_this13.newItems.norm[observer]);
                    }
                }; ////////////////////////////////////////////


                this.container.on("mousedown touchstart mouseup touchend touchleave mousemove touchmove mouseleave", function (e) {
                    e.preventDefault();
                    if (!_this13.options.dragger) return 0;
                    if (!_this13.detectPhone() && e.type == 'mousedown') dragestart(e.clientX);
                    if (_this13.detectPhone() && e.type == 'touchstart') dragestart(e.changedTouches[0].clientX); ///////////////////////////////

                    if (!_this13.detectPhone() && e.type == 'mousemove') dragemove(e.clientX, e);
                    if (_this13.detectPhone() && e.type == 'touchmove') dragemove(e.changedTouches[0].clientX, e); // // ///////////////////////////////

                    if (!_this13.detectPhone() && (e.type == 'mouseup' || e.type == 'mouseleave')) drageend(e.clientX, e);
                    if (_this13.detectPhone() && (e.type == 'touchend' || e.type == 'touchleave')) drageend(e.changedTouches[0].clientX, e);
                });
                return this;
            } ////////////////////////////////////////////

        }, {
            key: "destroy",
            value: function destroy() {
                var _this14 = this;

                this.mainElem.removeClass('saturn saturn-grab saturn-grabbing').html('');
                this.original.forEach(function (e) {
                    _this14.mainElem.append(e);
                });
            }
        }]);

        return SATURN;
    }();

var Saturn =
    /*#__PURE__*/
    function () {
        function Saturn(elem) {
            _classCallCheck(this, Saturn);

            this.target = _typeof(elem) == 'object' ? elem.length == undefined ? [elem] : elem : document.querySelectorAll(elem);
        }

        _createClass(Saturn, [{
            key: "run",
            value: function run(options) {
                var _this15 = this;

                this.saturn = [];
                this.target.forEach(function (data) {
                    _this15.saturn.push(new SATURN(data, options));
                });
                return this;
            }
        }, {
            key: "back",
            value: function back(callback, ref) {
                this.saturn.forEach(function (saturn) {
                    callback(saturn);
                    if (ref == true) saturn.refresh();
                });
                return this;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.back(function (saturn) {
                    saturn.destroy();
                });
            }
        }, {
            key: "desktop",
            value: function desktop(data) {
                this.back(function (saturn) {
                    saturn.desktop = saturn.setData(data, saturn.standerd);
                }, true);
            }
        }, {
            key: "laptop",
            value: function laptop(data) {
                this.back(function (saturn) {
                    saturn.laptop = saturn.setData(data, saturn.desktop);
                }, true);
            }
        }, {
            key: "tablet",
            value: function tablet(data) {
                this.back(function (saturn) {
                    saturn.tablet = saturn.setData(data, saturn.desktop);
                }, true);
            }
        }, {
            key: "phone",
            value: function phone(data) {
                this.back(function (saturn) {
                    saturn.phone = saturn.setData(data, saturn.phone);
                }, true);
            }
        }, {
            key: "next",
            value: function next() {
                this.back(function (saturn) {
                    saturn.handleNext();
                });
            }
        }, {
            key: "prev",
            value: function prev() {
                this.back(function (saturn) {
                    saturn.handlePrev();
                });
            }
        }, {
            key: "play",
            value: function play() {
                this.back(function (saturn) {
                    saturn.playAuto();
                });
            }
        }, {
            key: "stop",
            value: function stop() {
                this.back(function (saturn) {
                    saturn.stopAuto();
                });
            }
        }]);

        return Saturn;
    }();

var saturn = function saturn(data) {
    return new Saturn(data);
};