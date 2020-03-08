// ルーペ
// (c) 2010 jdbartlett, MIT license
(function(a){a.fn.loupe=function(b){var c=a.extend({loupe:"loupe",width:200,height:150},b||{});return this.length?this.each(function(){var j=a(this),g,k,f=j.is("img")?j:j.find("img:first"),e,h=function(){k.hide()},i;if(j.data("loupe")!=null){return j.data("loupe",b)}e=function(p){var o=f.offset(),q=f.outerWidth(),m=f.outerHeight(),l=c.width/2,n=c.height/2;if(!j.data("loupe")||p.pageX>q+o.left+10||p.pageX<o.left-10||p.pageY>m+o.top+10||p.pageY<o.top-10){return h()}i=i?clearTimeout(i):0;k.show().css({left:p.pageX-l,top:p.pageY-n});g.css({left:-(((p.pageX-o.left)/q)*g.width()-l)|0,top:-(((p.pageY-o.top)/m)*g.height()-n)|0})};k=a("<div />").addClass(c.loupe).css({width:c.width,height:c.height,position:"absolute",overflow:"hidden"}).append(g=a("<img />").attr("src",j.attr(j.is("img")?"src":"href")).css("position","absolute")).mousemove(e).hide().appendTo("body");j.data("loupe",true).mouseenter(e).mouseout(function(){i=setTimeout(h,10)})}):this}}(jQuery));

$(function() {
    
    $('.zoom').loupe({
        loupe: 'loupe',
        width: 300,
        height: 300
    });

    // var num = 0;
    // $(".zoom").click(function() {
    // $(this).data("click", ++num);
    // var click = $(this).data("click");
    // if(click >= 2){
    //     console.log('ok');
    //     alert("Don't Touch!");
    // }
    // return false;
    // });

    // サムネイルの切り替え
    $('.item-block-thumb li img').on('click', function() {
        var img_name = $(this).attr('src');
        $('.main img').attr('src', img_name);
        $('.loupe img').attr('src', img_name);
    });

    $('.like-btn').on('click', function(){
        $(this).toggleClass('is-active');
    });
});