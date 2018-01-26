$(function(){
    var con = $('#pic-list');
    var item = $('.item');
    var offset = $(item[0]).width();

    setInterval(function() {
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
            var offsetLeft = parseInt(con.css('left'));//所以这里有一个问题
       }

    }, 2500);



















})