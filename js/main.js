
$(function(){
    (function(){//使用匿名函数不污染全局
        var con = $('#pic-list'),
            item = $('.item'),
            offset = $(item[0]).width(),
            conCon = $('.con'),
            timer,//定时器
            pre = $('#pre'),
            next = $('#next');

        function animateNext() {
            var offsetLeft = parseInt(con.css('left'));
                if (offsetLeft == -offset*5) {
                    con.css('transition-duration','0s');
                    con.css('left',-offset);
                    con.css('left');//不能没有，可能是因为时间太快还没有来的急改变？？
                    con.css('transition-duration','1s');
                    var offsetLeft = parseInt(con.css('left'));
                    con.css('left', -offset*2);
                }else{
                    var offsetLeft = parseInt(con.css('left'));
                    con.css('left', offsetLeft-offset);//这里是一个变化的过程，实际的动作并没有完成。
                }
        }
        //和上面的函数重复度太高，可以在封装一个函数
        function animatePre() {
            var offsetLeft = parseInt(con.css('left'));
                if (offsetLeft == 0) {
                    con.css('transition-duration','0s');
                    con.css('left',-offset*4);
                    // clearInterval(timer);
                    con.css('left');//不能没有，可能是因为时间太快还没有来的急改变？？
                    con.css('transition-duration','1s');
                    var offsetLeft = parseInt(con.css('left'));
                    con.css('left', -offset*3);
                }else{
                    var offsetLeft = parseInt(con.css('left'));
                    con.css('left', offsetLeft+offset);//这里是一个变化的过程，实际的动作并没有完成。
                }
        }
    //实现无限轮播
        function loop() {
            timer = setInterval(function() {
               animateNext();
            }, 2500);
        }

    //鼠标滑过停止运动，
        conCon.on('mouseover', function(){
            clearInterval(timer);
        })
    //鼠标划出继续运动
        conCon.on('mouseout', function(){
            loop();
        })

    //下一张
        next.on('click', function(){//有一个问题，就是没有运动完继续点击会错位，可以加一个判断解决
            clearInterval(timer);
            animateNext();
            loop();
        })

    //上一张
        pre.on('click', function() {
            clearInterval(timer);
            animatePre();
            loop();
        })

    //自动循环
        loop();

        //还有待完善

    }());



})