(function(window){਍ഀഀ
    function random(min, max) {਍        爀攀琀甀爀渀 洀椀渀 ⬀ 䴀愀琀栀⸀昀氀漀漀爀⠀䴀愀琀栀⸀爀愀渀搀漀洀⠀⤀ ⨀ ⠀洀愀砀 ⴀ 洀椀渀 ⬀ ㄀⤀⤀㬀ഀഀ
    }਍ഀഀ
    function bezier(cp, t) {  ਍        瘀愀爀 瀀㄀ 㴀 挀瀀嬀　崀⸀洀甀氀⠀⠀㄀ ⴀ 琀⤀ ⨀ ⠀㄀ ⴀ 琀⤀⤀㬀ഀഀ
        var p2 = cp[1].mul(2 * t * (1 - t));਍        瘀愀爀 瀀㌀ 㴀 挀瀀嬀㈀崀⸀洀甀氀⠀琀 ⨀ 琀⤀㬀 ഀഀ
        return p1.add(p2).add(p3);਍    紀  ഀഀ
਍    昀甀渀挀琀椀漀渀 椀渀栀攀愀爀琀⠀砀Ⰰ 礀Ⰰ 爀⤀ 笀ഀഀ
        // x^2+(y-(x^2)^(1/3))^2 = 1਍        ⼀⼀ ⼀眀眀眀⸀眀漀氀昀爀愀洀愀氀瀀栀愀⸀挀漀洀⼀椀渀瀀甀琀⼀㼀椀㴀砀─㔀䔀㈀─㈀䈀─㈀㠀礀ⴀ─㈀㠀砀─㔀䔀㈀─㈀㤀─㔀䔀─㈀㠀㄀─㈀䘀㌀─㈀㤀─㈀㤀─㔀䔀㈀⬀─㌀䐀⬀㄀ഀഀ
        var z = ((x / r) * (x / r) + (y / r) * (y / r) - 1) * ((x / r) * (x / r) + (y / r) * (y / r) - 1) * ((x / r) * (x / r) + (y / r) * (y / r) - 1) - (x / r) * (x / r) * (y / r) * (y / r) * (y / r);਍        爀攀琀甀爀渀 稀 㰀 　㬀ഀഀ
    }਍ഀഀ
    Point = function(x, y) {਍        琀栀椀猀⸀砀 㴀 砀 簀簀 　㬀ഀഀ
        this.y = y || 0;਍    紀ഀഀ
    Point.prototype = {਍        挀氀漀渀攀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            return new Point(this.x, this.y);਍        紀Ⰰഀഀ
        add: function(o) {਍            瀀 㴀 琀栀椀猀⸀挀氀漀渀攀⠀⤀㬀ഀഀ
            p.x += o.x;਍            瀀⸀礀 ⬀㴀 漀⸀礀㬀ഀഀ
            return p;਍        紀Ⰰഀഀ
        sub: function(o) {਍            瀀 㴀 琀栀椀猀⸀挀氀漀渀攀⠀⤀㬀ഀഀ
            p.x -= o.x;਍            瀀⸀礀 ⴀ㴀 漀⸀礀㬀ഀഀ
            return p;਍        紀Ⰰഀഀ
        div: function(n) {਍            瀀 㴀 琀栀椀猀⸀挀氀漀渀攀⠀⤀㬀ഀഀ
            p.x /= n;਍            瀀⸀礀 ⼀㴀 渀㬀ഀഀ
            return p;਍        紀Ⰰഀഀ
        mul: function(n) {਍            瀀 㴀 琀栀椀猀⸀挀氀漀渀攀⠀⤀㬀ഀഀ
            p.x *= n;਍            瀀⸀礀 ⨀㴀 渀㬀ഀഀ
            return p;਍        紀ഀഀ
    }਍ഀഀ
    Heart = function() {਍        ⼀⼀ 砀 㴀 ㄀㘀 猀椀渀帀㌀ 琀ഀഀ
        // y = 13 cos t - 5 cos 2t - 2 cos 3t - cos 4t਍        ⼀⼀ ⼀眀眀眀⸀眀漀氀昀爀愀洀愀氀瀀栀愀⸀挀漀洀⼀椀渀瀀甀琀⼀㼀椀㴀砀⬀─㌀䐀⬀㄀㘀⬀猀椀渀─㔀䔀㌀⬀琀─㈀䌀⬀礀⬀─㌀䐀⬀⠀㄀㌀⬀挀漀猀⬀琀⬀ⴀ⬀㔀⬀挀漀猀⬀㈀琀⬀ⴀ⬀㈀⬀挀漀猀⬀㌀琀⬀ⴀ⬀挀漀猀⬀㐀琀⤀ഀഀ
        var points = [], x, y, t;਍        昀漀爀 ⠀瘀愀爀 椀 㴀 ㄀　㬀 椀 㰀 ㌀　㬀 椀 ⬀㴀 　⸀㈀⤀ 笀ഀഀ
            t = i / Math.PI;਍            砀 㴀 ㄀㘀 ⨀ 䴀愀琀栀⸀瀀漀眀⠀䴀愀琀栀⸀猀椀渀⠀琀⤀Ⰰ ㌀⤀㬀ഀഀ
            y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);਍            瀀漀椀渀琀猀⸀瀀甀猀栀⠀渀攀眀 倀漀椀渀琀⠀砀Ⰰ 礀⤀⤀㬀ഀഀ
        }਍        琀栀椀猀⸀瀀漀椀渀琀猀 㴀 瀀漀椀渀琀猀㬀ഀഀ
        this.length = points.length;਍    紀ഀഀ
    Heart.prototype = {਍        最攀琀㨀 昀甀渀挀琀椀漀渀⠀椀Ⰰ 猀挀愀氀攀⤀ 笀ഀഀ
            return this.points[i].mul(scale || 1);਍        紀ഀഀ
    }਍ഀഀ
    Seed = function(tree, point, scale, color) {਍        琀栀椀猀⸀琀爀攀攀 㴀 琀爀攀攀㬀ഀഀ
਍        瘀愀爀 猀挀愀氀攀 㴀 猀挀愀氀攀 簀簀 ㄀ഀഀ
        var color = color || '#FF0000';਍ഀഀ
        this.heart = {਍            瀀漀椀渀琀  㨀 瀀漀椀渀琀Ⰰഀഀ
            scale  : scale,਍            挀漀氀漀爀  㨀 挀漀氀漀爀Ⰰഀഀ
            figure : new Heart(),਍        紀ഀഀ
਍        琀栀椀猀⸀挀椀爀氀攀 㴀 笀ഀഀ
            point  : point,਍            猀挀愀氀攀  㨀 猀挀愀氀攀Ⰰഀഀ
            color  : color,਍            爀愀搀椀甀猀 㨀 㔀Ⰰഀഀ
        }਍    紀ഀഀ
    Seed.prototype = {਍        搀爀愀眀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            this.drawHeart();਍            琀栀椀猀⸀搀爀愀眀吀攀砀琀⠀⤀㬀ഀഀ
        },਍        愀搀搀倀漀猀椀琀椀漀渀㨀 昀甀渀挀琀椀漀渀⠀砀Ⰰ 礀⤀ 笀ഀഀ
            this.cirle.point = this.cirle.point.add(new Point(x, y));਍        紀Ⰰഀഀ
        canMove: function() {਍            爀攀琀甀爀渀 琀栀椀猀⸀挀椀爀氀攀⸀瀀漀椀渀琀⸀礀 㰀 ⠀琀栀椀猀⸀琀爀攀攀⸀栀攀椀最栀琀 ⬀ ㈀　⤀㬀 ഀഀ
        },਍        洀漀瘀攀㨀 昀甀渀挀琀椀漀渀⠀砀Ⰰ 礀⤀ 笀ഀഀ
            this.clear();਍            琀栀椀猀⸀搀爀愀眀䌀椀爀氀攀⠀⤀㬀ഀഀ
            this.addPosition(x, y);਍        紀Ⰰഀഀ
        canScale: function() {਍            爀攀琀甀爀渀 琀栀椀猀⸀栀攀愀爀琀⸀猀挀愀氀攀 㸀 　⸀㈀㬀ഀഀ
        },਍        猀攀琀䠀攀愀爀琀匀挀愀氀攀㨀 昀甀渀挀琀椀漀渀⠀猀挀愀氀攀⤀ 笀ഀഀ
            this.heart.scale *= scale;਍        紀Ⰰഀഀ
        scale: function(scale) {਍            琀栀椀猀⸀挀氀攀愀爀⠀⤀㬀ഀഀ
            this.drawCirle();਍            琀栀椀猀⸀搀爀愀眀䠀攀愀爀琀⠀⤀㬀ഀഀ
            this.setHeartScale(scale);਍        紀Ⰰഀഀ
        drawHeart: function() {਍            瘀愀爀 挀琀砀 㴀 琀栀椀猀⸀琀爀攀攀⸀挀琀砀Ⰰ 栀攀愀爀琀 㴀 琀栀椀猀⸀栀攀愀爀琀㬀ഀഀ
            var point = heart.point, color = heart.color, ਍                猀挀愀氀攀 㴀 栀攀愀爀琀⸀猀挀愀氀攀㬀ഀഀ
            ctx.save();਍            挀琀砀⸀昀椀氀氀匀琀礀氀攀 㴀 挀漀氀漀爀㬀ഀഀ
            ctx.translate(point.x, point.y);਍            挀琀砀⸀戀攀最椀渀倀愀琀栀⠀⤀㬀ഀഀ
            ctx.moveTo(0, 0);਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　㬀 椀 㰀 栀攀愀爀琀⸀昀椀最甀爀攀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ 笀ഀഀ
                var p = heart.figure.get(i, scale);਍                挀琀砀⸀氀椀渀攀吀漀⠀瀀⸀砀Ⰰ ⴀ瀀⸀礀⤀㬀ഀഀ
            }਍            挀琀砀⸀挀氀漀猀攀倀愀琀栀⠀⤀㬀ഀഀ
            ctx.fill();਍            挀琀砀⸀爀攀猀琀漀爀攀⠀⤀㬀ഀഀ
        },਍        搀爀愀眀䌀椀爀氀攀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            var ctx = this.tree.ctx, cirle = this.cirle;਍            瘀愀爀 瀀漀椀渀琀 㴀 挀椀爀氀攀⸀瀀漀椀渀琀Ⰰ 挀漀氀漀爀 㴀 挀椀爀氀攀⸀挀漀氀漀爀Ⰰ ഀഀ
                scale = cirle.scale, radius = cirle.radius;਍            挀琀砀⸀猀愀瘀攀⠀⤀㬀ഀഀ
            ctx.fillStyle = color;਍            挀琀砀⸀琀爀愀渀猀氀愀琀攀⠀瀀漀椀渀琀⸀砀Ⰰ 瀀漀椀渀琀⸀礀⤀㬀ഀഀ
            ctx.scale(scale, scale);਍            挀琀砀⸀戀攀最椀渀倀愀琀栀⠀⤀㬀ഀഀ
            ctx.moveTo(0, 0);਍    ऀ    挀琀砀⸀愀爀挀⠀　Ⰰ 　Ⰰ 爀愀搀椀甀猀Ⰰ 　Ⰰ ㈀ ⨀ 䴀愀琀栀⸀倀䤀⤀㬀ഀഀ
            ctx.closePath();਍            挀琀砀⸀昀椀氀氀⠀⤀㬀ഀഀ
            ctx.restore();਍        紀Ⰰഀഀ
        drawText: function() {਍            瘀愀爀 挀琀砀 㴀 琀栀椀猀⸀琀爀攀攀⸀挀琀砀Ⰰ 栀攀愀爀琀 㴀 琀栀椀猀⸀栀攀愀爀琀㬀ഀഀ
            var point = heart.point, color = heart.color, ਍                猀挀愀氀攀 㴀 栀攀愀爀琀⸀猀挀愀氀攀㬀ഀഀ
            ctx.save();਍            挀琀砀⸀猀琀爀漀欀攀匀琀礀氀攀 㴀 挀漀氀漀爀㬀ഀഀ
            ctx.fillStyle = color;਍            挀琀砀⸀琀爀愀渀猀氀愀琀攀⠀瀀漀椀渀琀⸀砀Ⰰ 瀀漀椀渀琀⸀礀⤀㬀ഀഀ
            ctx.scale(scale, scale);਍            挀琀砀⸀洀漀瘀攀吀漀⠀　Ⰰ 　⤀㬀ഀഀ
    	    ctx.lineTo(15, 15);਍    ऀ    挀琀砀⸀氀椀渀攀吀漀⠀㘀　Ⰰ ㄀㔀⤀㬀ഀഀ
            ctx.stroke();਍ഀഀ
            ctx.moveTo(0, 0);਍            挀琀砀⸀猀挀愀氀攀⠀　⸀㜀㔀Ⰰ 　⸀㜀㔀⤀㬀ഀഀ
            ctx.font = "12px 瀵邦喛钂嬮梿鍛寸拨,Verdana"; // 鐎涙褰块懖澶哥疄濞屸剝婀侀悽锟�? (钘�(閳拷)钘�)਍            挀琀砀⸀昀椀氀氀吀攀砀琀⠀∀挀氀椀挀欀 栀攀爀攀∀Ⰰ ㈀㌀Ⰰ ㄀㘀⤀㬀ഀഀ
            ctx.restore();਍        紀Ⰰഀഀ
        clear: function() {਍            瘀愀爀 挀琀砀 㴀 琀栀椀猀⸀琀爀攀攀⸀挀琀砀Ⰰ 挀椀爀氀攀 㴀 琀栀椀猀⸀挀椀爀氀攀㬀ഀഀ
            var point = cirle.point, scale = cirle.scale, radius = 26;਍            瘀愀爀 眀 㴀 栀 㴀 ⠀爀愀搀椀甀猀 ⨀ 猀挀愀氀攀⤀㬀ഀഀ
            ctx.clearRect(point.x - w, point.y - h, 4 * w, 4 * h);਍        紀Ⰰഀഀ
        hover: function(x, y) {਍            瘀愀爀 挀琀砀 㴀 琀栀椀猀⸀琀爀攀攀⸀挀琀砀㬀ഀഀ
            var pixel = ctx.getImageData(x, y, 1, 1);਍            爀攀琀甀爀渀 瀀椀砀攀氀⸀搀愀琀愀嬀㌀崀 㴀㴀 ㈀㔀㔀ഀഀ
        }਍    紀ഀഀ
਍    䘀漀漀琀攀爀 㴀 昀甀渀挀琀椀漀渀⠀琀爀攀攀Ⰰ 眀椀搀琀栀Ⰰ 栀攀椀最栀琀Ⰰ 猀瀀攀攀搀⤀ 笀ഀഀ
        this.tree = tree;਍        琀栀椀猀⸀瀀漀椀渀琀 㴀 渀攀眀 倀漀椀渀琀⠀琀爀攀攀⸀猀攀攀搀⸀栀攀愀爀琀⸀瀀漀椀渀琀⸀砀Ⰰ 琀爀攀攀⸀栀攀椀最栀琀 ⴀ 栀攀椀最栀琀 ⼀ ㈀⤀㬀ഀഀ
        this.width = width;਍        琀栀椀猀⸀栀攀椀最栀琀 㴀 栀攀椀最栀琀㬀ഀഀ
        this.speed = speed || 2;਍        琀栀椀猀⸀氀攀渀最琀栀 㴀 　㬀ഀഀ
    }਍    䘀漀漀琀攀爀⸀瀀爀漀琀漀琀礀瀀攀 㴀 笀ഀഀ
        draw: function() {਍            瘀愀爀 挀琀砀 㴀 琀栀椀猀⸀琀爀攀攀⸀挀琀砀Ⰰ 瀀漀椀渀琀 㴀 琀栀椀猀⸀瀀漀椀渀琀㬀ഀഀ
            var len = this.length / 2;਍ഀഀ
            ctx.save();਍            挀琀砀⸀猀琀爀漀欀攀匀琀礀氀攀 㴀 ✀爀最戀⠀㌀㔀Ⰰ ㌀㄀Ⰰ ㌀㈀⤀✀㬀ഀഀ
            ctx.lineWidth = this.height;਍            挀琀砀⸀氀椀渀攀䌀愀瀀 㴀 ✀爀漀甀渀搀✀㬀ഀഀ
            ctx.lineJoin = 'round';਍            挀琀砀⸀琀爀愀渀猀氀愀琀攀⠀瀀漀椀渀琀⸀砀Ⰰ 瀀漀椀渀琀⸀礀⤀㬀ഀഀ
            ctx.beginPath();਍            挀琀砀⸀洀漀瘀攀吀漀⠀　Ⰰ 　⤀㬀ഀഀ
    	    ctx.lineTo(len, 0);਍    ऀ    挀琀砀⸀氀椀渀攀吀漀⠀ⴀ氀攀渀Ⰰ 　⤀㬀ഀഀ
            ctx.stroke();਍            挀琀砀⸀爀攀猀琀漀爀攀⠀⤀㬀ഀഀ
਍            椀昀 ⠀琀栀椀猀⸀氀攀渀最琀栀 㰀 琀栀椀猀⸀眀椀搀琀栀⤀ 笀ഀഀ
                this.length += this.speed;਍            紀ഀഀ
        }਍    紀ഀഀ
਍    吀爀攀攀 㴀 昀甀渀挀琀椀漀渀⠀挀愀渀瘀愀猀Ⰰ 眀椀搀琀栀Ⰰ 栀攀椀最栀琀Ⰰ 漀瀀琀⤀ 笀ഀഀ
        this.canvas = canvas;਍        琀栀椀猀⸀挀琀砀 㴀 挀愀渀瘀愀猀⸀最攀琀䌀漀渀琀攀砀琀⠀✀㈀搀✀⤀㬀ഀഀ
        this.width = width;਍        琀栀椀猀⸀栀攀椀最栀琀 㴀 栀攀椀最栀琀㬀ഀഀ
        this.opt = opt || {};਍ഀഀ
        this.record = {};਍        ഀഀ
        this.initSeed();਍        琀栀椀猀⸀椀渀椀琀䘀漀漀琀攀爀⠀⤀㬀ഀഀ
        this.initBranch();਍        琀栀椀猀⸀椀渀椀琀䈀氀漀漀洀⠀⤀㬀ഀഀ
    }਍    吀爀攀攀⸀瀀爀漀琀漀琀礀瀀攀 㴀 笀ഀഀ
        initSeed: function() {਍            瘀愀爀 猀攀攀搀 㴀 琀栀椀猀⸀漀瀀琀⸀猀攀攀搀 簀簀 笀紀㬀ഀഀ
            var x = seed.x || this.width / 2;਍            瘀愀爀 礀 㴀 猀攀攀搀⸀礀 簀簀 琀栀椀猀⸀栀攀椀最栀琀 ⼀ ㈀㬀ഀഀ
            var point = new Point(x, y);਍            瘀愀爀 挀漀氀漀爀 㴀 猀攀攀搀⸀挀漀氀漀爀 簀簀 ✀⌀䘀䘀　　　　✀㬀ഀഀ
            var scale = seed.scale || 1;਍ഀഀ
            this.seed = new Seed(this, point, scale, color);਍        紀Ⰰഀഀ
਍        椀渀椀琀䘀漀漀琀攀爀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            var footer = this.opt.footer || {};਍            瘀愀爀 眀椀搀琀栀 㴀 昀漀漀琀攀爀⸀眀椀搀琀栀 簀簀 琀栀椀猀⸀眀椀搀琀栀㬀ഀഀ
            var height = footer.height || 5;਍            瘀愀爀 猀瀀攀攀搀 㴀 昀漀漀琀攀爀⸀猀瀀攀攀搀 簀簀 ㈀㬀ഀഀ
            this.footer = new Footer(this, width, height, speed);਍        紀Ⰰഀഀ
਍        椀渀椀琀䈀爀愀渀挀栀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            var branchs = this.opt.branch || []਍            琀栀椀猀⸀戀爀愀渀挀栀猀 㴀 嬀崀㬀ഀഀ
            this.addBranchs(branchs);਍        紀Ⰰഀഀ
਍        椀渀椀琀䈀氀漀漀洀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            var bloom = this.opt.bloom || {};਍            瘀愀爀 挀愀挀栀攀 㴀 嬀崀Ⰰഀഀ
                num = bloom.num || 500, ਍                眀椀搀琀栀 㴀 戀氀漀漀洀⸀眀椀搀琀栀 簀簀 琀栀椀猀⸀眀椀搀琀栀Ⰰഀഀ
                height = bloom.height || this.height,਍                昀椀最甀爀攀 㴀 琀栀椀猀⸀猀攀攀搀⸀栀攀愀爀琀⸀昀椀最甀爀攀㬀ഀഀ
            var r = 240, x, y;਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　㬀 椀 㰀 渀甀洀㬀 椀⬀⬀⤀ 笀ഀഀ
                cache.push(this.createBloom(width, height, r, figure));਍            紀ഀഀ
            this.blooms = [];਍            琀栀椀猀⸀戀氀漀漀洀猀䌀愀挀栀攀 㴀 挀愀挀栀攀㬀ഀഀ
        },਍ഀഀ
        toDataURL: function(type) {਍            爀攀琀甀爀渀 琀栀椀猀⸀挀愀渀瘀愀猀⸀琀漀䐀愀琀愀唀刀䰀⠀琀礀瀀攀⤀㬀ഀഀ
        },਍ഀഀ
        draw: function(k) {਍            瘀愀爀 猀 㴀 琀栀椀猀Ⰰ 挀琀砀 㴀 猀⸀挀琀砀㬀ഀഀ
            var rec = s.record[k];਍            椀昀 ⠀℀爀攀挀⤀ 笀ഀഀ
                return ;਍            紀ഀഀ
            var point = rec.point,਍                椀洀愀最攀 㴀 爀攀挀⸀椀洀愀最攀㬀ഀഀ
਍            挀琀砀⸀猀愀瘀攀⠀⤀㬀ഀഀ
            ctx.putImageData(image, point.x, point.y);਍        ऀ挀琀砀⸀爀攀猀琀漀爀攀⠀⤀㬀ഀഀ
        },਍ഀഀ
        addBranch: function(branch) {਍        ऀ琀栀椀猀⸀戀爀愀渀挀栀猀⸀瀀甀猀栀⠀戀爀愀渀挀栀⤀㬀ഀഀ
        },਍ഀഀ
        addBranchs: function(branchs){਍            瘀愀爀 猀 㴀 琀栀椀猀Ⰰ 戀Ⰰ 瀀㄀Ⰰ 瀀㈀Ⰰ 瀀㌀Ⰰ 爀Ⰰ 氀Ⰰ 挀㬀ഀഀ
        	for (var i = 0; i < branchs.length; i++) {਍                戀 㴀 戀爀愀渀挀栀猀嬀椀崀㬀ഀഀ
                p1 = new Point(b[0], b[1]);਍                瀀㈀ 㴀 渀攀眀 倀漀椀渀琀⠀戀嬀㈀崀Ⰰ 戀嬀㌀崀⤀㬀ഀഀ
                p3 = new Point(b[4], b[5]);਍                爀 㴀 戀嬀㘀崀㬀ഀഀ
                l = b[7];਍                挀 㴀 戀嬀㠀崀ഀഀ
                s.addBranch(new Branch(s, p1, p2, p3, r, l, c)); ਍            紀ഀഀ
        },਍ഀഀ
        removeBranch: function(branch) {਍            瘀愀爀 戀爀愀渀挀栀猀 㴀 琀栀椀猀⸀戀爀愀渀挀栀猀㬀ഀഀ
        	for (var i = 0; i < branchs.length; i++) {਍        ऀऀ椀昀 ⠀戀爀愀渀挀栀猀嬀椀崀 㴀㴀㴀 戀爀愀渀挀栀⤀ 笀ഀഀ
        			branchs.splice(i, 1);਍                紀ഀഀ
            }਍        紀Ⰰഀഀ
਍        挀愀渀䜀爀漀眀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            return !!this.branchs.length;਍        紀Ⰰഀഀ
        grow: function() {਍            瘀愀爀 戀爀愀渀挀栀猀 㴀 琀栀椀猀⸀戀爀愀渀挀栀猀㬀ഀഀ
    	    for (var i = 0; i < branchs.length; i++) {਍                瘀愀爀 戀爀愀渀挀栀 㴀 戀爀愀渀挀栀猀嬀椀崀㬀ഀഀ
                if (branch) {਍                    戀爀愀渀挀栀⸀最爀漀眀⠀⤀㬀ഀഀ
                }਍            紀ഀഀ
        },਍ഀഀ
        addBloom: function (bloom) {਍            琀栀椀猀⸀戀氀漀漀洀猀⸀瀀甀猀栀⠀戀氀漀漀洀⤀㬀ഀഀ
        },਍ഀഀ
        removeBloom: function (bloom) {਍            瘀愀爀 戀氀漀漀洀猀 㴀 琀栀椀猀⸀戀氀漀漀洀猀㬀ഀഀ
            for (var i = 0; i < blooms.length; i++) {਍                椀昀 ⠀戀氀漀漀洀猀嬀椀崀 㴀㴀㴀 戀氀漀漀洀⤀ 笀ഀഀ
                    blooms.splice(i, 1);਍                紀ഀഀ
            }਍        紀Ⰰഀഀ
਍        挀爀攀愀琀攀䈀氀漀漀洀㨀 昀甀渀挀琀椀漀渀⠀眀椀搀琀栀Ⰰ 栀攀椀最栀琀Ⰰ 爀愀搀椀甀猀Ⰰ 昀椀最甀爀攀Ⰰ 挀漀氀漀爀Ⰰ 愀氀瀀栀愀Ⰰ 愀渀最氀攀Ⰰ 猀挀愀氀攀Ⰰ 瀀氀愀挀攀Ⰰ 猀瀀攀攀搀⤀ 笀ഀഀ
            var x, y;਍            眀栀椀氀攀 ⠀琀爀甀攀⤀ 笀ഀഀ
                x = random(20, width - 20);਍                礀 㴀 爀愀渀搀漀洀⠀㈀　Ⰰ 栀攀椀最栀琀 ⴀ ㈀　⤀㬀ഀഀ
                if (inheart(x - width / 2, height - (height - 40) / 2 - y, radius)) {਍                    爀攀琀甀爀渀 渀攀眀 䈀氀漀漀洀⠀琀栀椀猀Ⰰ 渀攀眀 倀漀椀渀琀⠀砀Ⰰ 礀⤀Ⰰ 昀椀最甀爀攀Ⰰ 挀漀氀漀爀Ⰰ 愀氀瀀栀愀Ⰰ 愀渀最氀攀Ⰰ 猀挀愀氀攀Ⰰ 瀀氀愀挀攀Ⰰ 猀瀀攀攀搀⤀㬀ഀഀ
                }਍            紀ഀഀ
        },਍        ഀഀ
        canFlower: function() {਍            爀攀琀甀爀渀 ℀℀琀栀椀猀⸀戀氀漀漀洀猀⸀氀攀渀最琀栀㬀ഀഀ
        }, ਍        昀氀漀眀攀爀㨀 昀甀渀挀琀椀漀渀⠀渀甀洀⤀ 笀ഀഀ
            var s = this, blooms = s.bloomsCache.splice(0, num);਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　㬀 椀 㰀 戀氀漀漀洀猀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ 笀ഀഀ
                s.addBloom(blooms[i]);਍            紀ഀഀ
            blooms = s.blooms;਍            昀漀爀 ⠀瘀愀爀 樀 㴀 　㬀 樀 㰀 戀氀漀漀洀猀⸀氀攀渀最琀栀㬀 樀⬀⬀⤀ 笀ഀഀ
                blooms[j].flower();਍            紀ഀഀ
        },਍ഀഀ
        snapshot: function(k, x, y, width, height) {਍            瘀愀爀 挀琀砀 㴀 琀栀椀猀⸀挀琀砀㬀ഀഀ
            var image = ctx.getImageData(x, y, width, height); ਍            琀栀椀猀⸀爀攀挀漀爀搀嬀欀崀 㴀 笀ഀഀ
                image: image,਍                瀀漀椀渀琀㨀 渀攀眀 倀漀椀渀琀⠀砀Ⰰ 礀⤀Ⰰഀഀ
                width: width,਍                栀攀椀最栀琀㨀 栀攀椀最栀琀ഀഀ
            }਍        紀Ⰰഀഀ
        setSpeed: function(k, speed) {਍            琀栀椀猀⸀爀攀挀漀爀搀嬀欀 簀簀 ∀洀漀瘀攀∀崀⸀猀瀀攀攀搀 㴀 猀瀀攀攀搀㬀ഀഀ
        },਍        洀漀瘀攀㨀 昀甀渀挀琀椀漀渀⠀欀Ⰰ 砀Ⰰ 礀⤀ 笀ഀഀ
            var s = this, ctx = s.ctx;਍            瘀愀爀 爀攀挀 㴀 猀⸀爀攀挀漀爀搀嬀欀 簀簀 ∀洀漀瘀攀∀崀㬀ഀഀ
            var point = rec.point,਍                椀洀愀最攀 㴀 爀攀挀⸀椀洀愀最攀Ⰰഀഀ
                speed = rec.speed || 10,਍                眀椀搀琀栀 㴀 爀攀挀⸀眀椀搀琀栀Ⰰഀഀ
                height = rec.height; ਍ഀഀ
            i = point.x + speed < x ? point.x + speed : x;਍            樀 㴀 瀀漀椀渀琀⸀礀 ⬀ 猀瀀攀攀搀 㰀 礀 㼀 瀀漀椀渀琀⸀礀 ⬀ 猀瀀攀攀搀 㨀 礀㬀 ഀഀ
਍            挀琀砀⸀猀愀瘀攀⠀⤀㬀ഀഀ
            ctx.clearRect(point.x, point.y, width, height);਍            挀琀砀⸀瀀甀琀䤀洀愀最攀䐀愀琀愀⠀椀洀愀最攀Ⰰ 椀Ⰰ 樀⤀㬀ഀഀ
        	ctx.restore();਍ഀഀ
            rec.point = new Point(i, j);਍            爀攀挀⸀猀瀀攀攀搀 㴀 猀瀀攀攀搀 ⨀ 　⸀㤀㔀㬀ഀഀ
਍            椀昀 ⠀爀攀挀⸀猀瀀攀攀搀 㰀 ㈀⤀ 笀ഀഀ
                rec.speed = 2;਍            紀ഀഀ
            return i < x || j < y;਍        紀Ⰰഀഀ
਍        樀甀洀瀀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            var s = this, blooms = s.blooms;਍            椀昀 ⠀戀氀漀漀洀猀⸀氀攀渀最琀栀⤀ 笀ഀഀ
                for (var i = 0; i < blooms.length; i++) {਍                    戀氀漀漀洀猀嬀椀崀⸀樀甀洀瀀⠀⤀㬀ഀഀ
                }਍            紀 ഀഀ
            if ((blooms.length && blooms.length < 3) || !blooms.length) {਍                瘀愀爀 戀氀漀漀洀 㴀 琀栀椀猀⸀漀瀀琀⸀戀氀漀漀洀 簀簀 笀紀Ⰰഀഀ
                    width = bloom.width || this.width,਍                    栀攀椀最栀琀 㴀 戀氀漀漀洀⸀栀攀椀最栀琀 簀簀 琀栀椀猀⸀栀攀椀最栀琀Ⰰഀഀ
                    figure = this.seed.heart.figure;਍                瘀愀爀 爀 㴀 ㈀㐀　Ⰰ 砀Ⰰ 礀㬀ഀഀ
                for (var i = 0; i < random(1,2); i++) {਍                    戀氀漀漀洀猀⸀瀀甀猀栀⠀琀栀椀猀⸀挀爀攀愀琀攀䈀氀漀漀洀⠀眀椀搀琀栀 ⼀ ㈀ ⬀ 眀椀搀琀栀Ⰰ 栀攀椀最栀琀Ⰰ 爀Ⰰ 昀椀最甀爀攀Ⰰ 渀甀氀氀Ⰰ ㄀Ⰰ 渀甀氀氀Ⰰ ㄀Ⰰ 渀攀眀 倀漀椀渀琀⠀爀愀渀搀漀洀⠀ⴀ㄀　　Ⰰ㘀　　⤀Ⰰ 㜀㈀　⤀Ⰰ 爀愀渀搀漀洀⠀㈀　　Ⰰ㌀　　⤀⤀⤀㬀ഀഀ
                }਍            紀ഀഀ
        }਍    紀ഀഀ
਍    䈀爀愀渀挀栀 㴀 昀甀渀挀琀椀漀渀⠀琀爀攀攀Ⰰ 瀀漀椀渀琀㄀Ⰰ 瀀漀椀渀琀㈀Ⰰ 瀀漀椀渀琀㌀Ⰰ 爀愀搀椀甀猀Ⰰ 氀攀渀最琀栀Ⰰ 戀爀愀渀挀栀猀⤀ 笀ഀഀ
        this.tree = tree;਍        琀栀椀猀⸀瀀漀椀渀琀㄀ 㴀 瀀漀椀渀琀㄀㬀ഀഀ
        this.point2 = point2;਍        琀栀椀猀⸀瀀漀椀渀琀㌀ 㴀 瀀漀椀渀琀㌀㬀ഀഀ
        this.radius = radius;਍        琀栀椀猀⸀氀攀渀最琀栀 㴀 氀攀渀最琀栀 簀簀 ㄀　　㬀    ഀഀ
        this.len = 0;਍        琀栀椀猀⸀琀 㴀 ㄀ ⼀ ⠀琀栀椀猀⸀氀攀渀最琀栀 ⴀ ㄀⤀㬀   ഀഀ
        this.branchs = branchs || [];਍    紀ഀഀ
਍    䈀爀愀渀挀栀⸀瀀爀漀琀漀琀礀瀀攀 㴀 笀ഀഀ
        grow: function() {਍            瘀愀爀 猀 㴀 琀栀椀猀Ⰰ 瀀㬀 ഀഀ
            if (s.len <= s.length) {਍                瀀 㴀 戀攀稀椀攀爀⠀嬀猀⸀瀀漀椀渀琀㄀Ⰰ 猀⸀瀀漀椀渀琀㈀Ⰰ 猀⸀瀀漀椀渀琀㌀崀Ⰰ 猀⸀氀攀渀 ⨀ 猀⸀琀⤀㬀ഀഀ
                s.draw(p);਍                猀⸀氀攀渀 ⬀㴀 ㄀㬀ഀഀ
                s.radius *= 0.97;਍            紀 攀氀猀攀 笀ഀഀ
                s.tree.removeBranch(s);਍                猀⸀琀爀攀攀⸀愀搀搀䈀爀愀渀挀栀猀⠀猀⸀戀爀愀渀挀栀猀⤀㬀ഀഀ
            }਍        紀Ⰰഀഀ
        draw: function(p) {਍            瘀愀爀 猀 㴀 琀栀椀猀㬀ഀഀ
            var ctx = s.tree.ctx;਍            挀琀砀⸀猀愀瘀攀⠀⤀㬀ഀഀ
        	ctx.beginPath();਍        ऀ挀琀砀⸀昀椀氀氀匀琀礀氀攀 㴀 ✀爀最戀⠀㌀㔀Ⰰ ㌀㄀Ⰰ ㌀㈀⤀✀㬀ഀഀ
            ctx.shadowColor = 'rgb(35, 31, 32)';਍            挀琀砀⸀猀栀愀搀漀眀䈀氀甀爀 㴀 ㈀㬀ഀഀ
        	ctx.moveTo(p.x, p.y);਍        ऀ挀琀砀⸀愀爀挀⠀瀀⸀砀Ⰰ 瀀⸀礀Ⰰ 猀⸀爀愀搀椀甀猀Ⰰ 　Ⰰ ㈀ ⨀ 䴀愀琀栀⸀倀䤀⤀㬀ഀഀ
        	ctx.closePath();਍        ऀ挀琀砀⸀昀椀氀氀⠀⤀㬀ഀഀ
        	ctx.restore();਍        紀ഀഀ
    }਍ഀഀ
    Bloom = function(tree, point, figure, color, alpha, angle, scale, place, speed) {਍        琀栀椀猀⸀琀爀攀攀 㴀 琀爀攀攀㬀ഀഀ
        this.point = point;਍        琀栀椀猀⸀挀漀氀漀爀 㴀 挀漀氀漀爀 簀簀 ✀爀最戀⠀㈀㔀㔀Ⰰ✀ ⬀ 爀愀渀搀漀洀⠀　Ⰰ ㈀㔀㔀⤀ ⬀ ✀Ⰰ✀ ⬀ 爀愀渀搀漀洀⠀　Ⰰ ㈀㔀㔀⤀ ⬀ ✀⤀✀㬀ഀഀ
        this.alpha = alpha || random(0.3, 1);਍        琀栀椀猀⸀愀渀最氀攀 㴀 愀渀最氀攀 簀簀 爀愀渀搀漀洀⠀　Ⰰ ㌀㘀　⤀㬀ഀഀ
        this.scale = scale || 0.1;਍        琀栀椀猀⸀瀀氀愀挀攀 㴀 瀀氀愀挀攀㬀ഀഀ
        this.speed = speed;਍ഀഀ
        this.figure = figure;਍    紀ഀഀ
    Bloom.prototype = {਍        猀攀琀䘀椀最甀爀攀㨀 昀甀渀挀琀椀漀渀⠀昀椀最甀爀攀⤀ 笀ഀഀ
            this.figure = figure;਍        紀Ⰰഀഀ
        flower: function() {਍            瘀愀爀 猀 㴀 琀栀椀猀㬀ഀഀ
            s.draw();਍            猀⸀猀挀愀氀攀 ⬀㴀 　⸀㄀㬀ഀഀ
            if (s.scale > 1) {਍                猀⸀琀爀攀攀⸀爀攀洀漀瘀攀䈀氀漀漀洀⠀猀⤀㬀ഀഀ
            }਍        紀Ⰰഀഀ
        draw: function() {਍            瘀愀爀 猀 㴀 琀栀椀猀Ⰰ 挀琀砀 㴀 猀⸀琀爀攀攀⸀挀琀砀Ⰰ 昀椀最甀爀攀 㴀 猀⸀昀椀最甀爀攀㬀ഀഀ
਍            挀琀砀⸀猀愀瘀攀⠀⤀㬀ഀഀ
            ctx.fillStyle = s.color;਍            挀琀砀⸀最氀漀戀愀氀䄀氀瀀栀愀 㴀 猀⸀愀氀瀀栀愀㬀ഀഀ
            ctx.translate(s.point.x, s.point.y);਍            挀琀砀⸀猀挀愀氀攀⠀猀⸀猀挀愀氀攀Ⰰ 猀⸀猀挀愀氀攀⤀㬀ഀഀ
            ctx.rotate(s.angle);਍            挀琀砀⸀戀攀最椀渀倀愀琀栀⠀⤀㬀ഀഀ
            ctx.moveTo(0, 0);਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　㬀 椀 㰀 昀椀最甀爀攀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ 笀ഀഀ
                var p = figure.get(i);਍                挀琀砀⸀氀椀渀攀吀漀⠀瀀⸀砀Ⰰ ⴀ瀀⸀礀⤀㬀ഀഀ
            }਍            挀琀砀⸀挀氀漀猀攀倀愀琀栀⠀⤀㬀ഀഀ
            ctx.fill();਍            挀琀砀⸀爀攀猀琀漀爀攀⠀⤀㬀ഀഀ
        },਍        樀甀洀瀀㨀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
            var s = this, height = s.tree.height;਍ഀഀ
            if (s.point.x < -20 || s.point.y > height + 20) {਍                猀⸀琀爀攀攀⸀爀攀洀漀瘀攀䈀氀漀漀洀⠀猀⤀㬀ഀഀ
            } else {਍                猀⸀搀爀愀眀⠀⤀㬀ഀഀ
                s.point = s.place.sub(s.point).div(s.speed).add(s.point);਍                猀⸀愀渀最氀攀 ⬀㴀 　⸀　㔀㬀ഀഀ
                s.speed -= 1;਍            紀ഀഀ
        }਍    紀ഀഀ
਍    眀椀渀搀漀眀⸀爀愀渀搀漀洀 㴀 爀愀渀搀漀洀㬀ഀഀ
    window.bezier = bezier;਍    眀椀渀搀漀眀⸀倀漀椀渀琀 㴀 倀漀椀渀琀㬀ഀഀ
    window.Tree = Tree;਍ഀഀ
})(window);