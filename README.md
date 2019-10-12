<h1 align="center">saturn.js</h1>

<div align="center">
    <img src="https://i.ibb.co/nQsD21Z/saturn.png" alt="saturn.js" />
</div>

## :checkered_flag: Javascript Pure Extends ES6

## :computer: Installation

* Example

- call the script from your file like

```html
<script src="saturn.min.js"></script>
```
- or call the script from your cdn like

```html
<script src="https://devahmad7.github.io/saturn/saturn.min.js"></script>
```

## :joystick: Usage

- create html tags like this
```html
<div class="nameElem">
    <img src="img-1">
    <img src="img-2">
    <img src="img-3">
</div>
```

- then create script and write 

## Short code
```js
saturn('.nameElem').run();
```

## Long code
```js
saturn('.nameElem').run({
    desktop: { // desktop = default for all windows
        dir: 'rtl', // type(string) default: ltr
        moveTo: 'left', // type(string) default: left
        dotShow: true, // type(boolean) default: true
        dotEach: false, // type(boolean) default: left
        autoPlay: true, // type(boolean) default: false
        active: 3, // type(number) default: 2
        centering: true, // type(boolean) default: false
        dragger: true, // type(boolean) default: true
        starter: 1, // type(number) default: 1
        navShow: true, // type(boolean) default: true
        navPrev: '<i class="fa fa-angle-left"></i>', // type(html-text) default: prev
        navNext: '<i class="fa fa-angle-right"></i>', // type(html-text) default: next
        margin: 4, // type(string-number) default: ''
        moveSpeed: 1500, // type(number) default: 250
        refreshRate: 100, // type(number) default: 250
        wiatTime: 3000, // type(number) default: 2500
        moveType: 'ease', // type(string) default: 'ease'
        autoHeight: true, // type(boolean) default: true
        pauseOnHover: true, // type(boolean) default: false
        lazyLoad: true, // type(boolean) default: false
        dragType: 'swipe', // type(string) default: 'free'
        navigationContainer: false, // type(boolean) default: false
        moveAfterAnimation: false, // type(boolean) default: false
        effect: null, // type(null) default: null
        loop: false, // type(boolean) default: true
        onDrag: function onDrag() { }, // type(function) default: null
        onChange: function onChange() { } // type(function) default: null
    }
});
```

## More usage
```js
saturn('.nameElem').run({
    desktop: { // desktop = default for all windows
        dotShow: true, // type(boolean) default: true
        dotEach: false, // type(boolean) default: left
        autoPlay: true, // type(boolean) default: false
        active: 3, // type(number) default: 2
        centering: true, // type(boolean) default: false
        dragger: true, // type(boolean) default: true
        starter: 1, // type(number) default: 1
        navShow: true, // type(boolean) default: true
        navPrev: '<i class="fa fa-angle-left"></i>', // type(html-text) default: prev
        navNext: '<i class="fa fa-angle-right"></i>', // type(html-text) default: next
        margin: 4, // type(string-number) default: ''
        moveSpeed: 1500, // type(number) default: 250
        refreshRate: 100, // type(number) default: 250
        wiatTime: 3000, // type(number) default: 2500
        moveType: 'ease', // type(string) default: 'ease'
        autoHeight: true, // type(boolean) default: true
        pauseOnHover: true, // type(boolean) default: false
        lazyLoad: true, // type(boolean) default: false
        dragType: 'swipe', // type(string) default: 'free'
        navigationContainer: false, // type(boolean) default: false
        moveAfterAnimation: false, // type(boolean) default: false
        effect: null, // type(null) default: null
        loop: false, // type(boolean) default: true
        onDrag: function onDrag() { }, // type(function) default: null
        onChange: function onChange() { } // type(function) default: null
    },
    laptop: { 
        dragger: false, // type(boolean) default: true
        starter: 3, // type(number) default: 1
        navShow: true, // type(boolean) default: true
        margin: 7, // type(string-number) default: ''
        moveSpeed: 1500, // type(number) default: 250
        wiatTime: 5, // type(number) default: 2500
        autoHeight: true, // type(boolean) default: true
        pauseOnHover: true, // type(boolean) default: false
        dragType: 'free', // type(string) default: 'free'
        moveAfterAnimation: true, // type(boolean) default: false
        effect: 'animated jello', // type(null) default: null
        loop: true // type(boolean) default: true
    },
    tablet: {
        dotShow: false, // type(boolean) default: true
        autoPlay: true, // type(boolean) default: false
        active: 2, // type(number) default: 2
        centering: true, // type(boolean) default: false
        dragger: true, // type(boolean) default: true
        navShow: false // type(boolean) default: true
    },
    phone: {
        autoPlay: false, // type(boolean) default: false
        active: 1, // type(number) default: 2
        centering: false, // type(boolean) default: false
    }
});
```

## Lazy Load
```html
<div class="nameElem">
    <div>
        <!-- write saturn-lazy not src -->
        <img saturn-lazy="img-4">
    </div>
</div>
```
- then 
```js
saturn('.nameElem').run({
    desktop: {
        lazyLoad: true // type(boolean) default: false
    }
});
```

## :joystick:Other usage !
```js
var slider = saturn('.nameElem').run();
/////////////////////////////////////////
slider.laptop({
    starter: 3, // type(number) default: 1
    navShow: false, // type(boolean) default: true
    margin: 7, // type(string-number) default: ''
    dotShow: false, // type(boolean) default: true
    autoPlay: true, // type(boolean) default: false
}).desktop({
    dragger: false, // type(boolean) default: true
    starter: 3, // type(number) default: 1
    navShow: true, // type(boolean) default: true
    margin: 7, // type(string-number) default: ''
    moveSpeed: 1500, // type(number) default: 250
    wiatTime: 5, // type(number) default: 2500
    autoHeight: true, // type(boolean) default: true
    pauseOnHover: true, // type(boolean) default: false
    dragType: 'free', // type(string) default: 'free'
    moveAfterAnimation: true, // type(boolean) default: false
    effect: 'animated jello', // type(null) default: null
    loop: true // type(boolean) default: true
});
```
## Control prev-next 

```Html
<div class="next"></div>
<div class="prev"></div>
```
- then 

```js
var slider = saturn('.nameElem').run();

document.querySelector('.next').onclick = function () {slider.next()}
document.querySelector('.prev').onclick = function () {slider.prev()}
```

## Control play-stop 
```Html
<div class="play"></div>
<div class="stop"></div>
```
- then 

```js
var slider = saturn('.nameElem').run();

document.querySelector('.play').onclick = function () {slider.play()}
document.querySelector('.stop').onclick = function () {slider.stop()}
```

## refresh saturn
```js
var slider = saturn('.nameElem').run();

slider.refresh();
```

## destroy saturn
```js
var slider = saturn('.nameElem').run();

slider.destroy();
```

## Main file

go [saturn.min.js](saturn.min.js).

go [saturn.js](saturn.js).
