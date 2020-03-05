// ルーペ
// (c) 2010 jdbartlett, MIT license
(function(a){a.fn.loupe=function(b){var c=a.extend({loupe:"loupe",width:200,height:150},b||{});return this.length?this.each(function(){var j=a(this),g,k,f=j.is("img")?j:j.find("img:first"),e,h=function(){k.hide()},i;if(j.data("loupe")!=null){return j.data("loupe",b)}e=function(p){var o=f.offset(),q=f.outerWidth(),m=f.outerHeight(),l=c.width/2,n=c.height/2;if(!j.data("loupe")||p.pageX>q+o.left+10||p.pageX<o.left-10||p.pageY>m+o.top+10||p.pageY<o.top-10){return h()}i=i?clearTimeout(i):0;k.show().css({left:p.pageX-l,top:p.pageY-n});g.css({left:-(((p.pageX-o.left)/q)*g.width()-l)|0,top:-(((p.pageY-o.top)/m)*g.height()-n)|0})};k=a("<div />").addClass(c.loupe).css({width:c.width,height:c.height,position:"absolute",overflow:"hidden"}).append(g=a("<img />").attr("src",j.attr(j.is("img")?"src":"href")).css("position","absolute")).mousemove(e).hide().appendTo("body");j.data("loupe",true).mouseenter(e).mouseout(function(){i=setTimeout(h,10)})}):this}}(jQuery));

$(function() {
    $('.zoom').loupe({
        loupe: 'loupe',
        width: 300,
        height: 300
    });

    // サムネイルの切り替え
    $('.item-block-thumb li img').on('click', function() {
        var img_name = $(this).attr('src');
        $('.main img').attr('src', img_name);
        $('.loupe img').attr('src', img_name);
    });

    $('.like-btn').on('click', function(){
        $(this).toggleClass('is-active');
    });
    
    // // カート機能
    // var gotocart = document.querySelectorAll('.gotocart'),
    // cart_cnt_icon = document.getElementById('js_cart_cnt'),
    // cart_cnt = 0,
    // clicked = [],
    // save_items = [],//ローカルストレージ保存用の配列
    // items = JSON.parse(localStorage.getItem("items"));//ローカルストレージの商品データ配列

    // if(items){
    //     var id;
    //     for (var i = 0; i < items.length; i++) {
    //       id = items[i].id;
    //       save_items.push(items[i]);
    //       clicked.push(id);
    //       activate_btn(id);
    //     }
    
    //     if(items.length != 0){
    //       cart_cnt_icon.parentNode.classList.remove('hidden');
    //       cart_cnt_icon.innerHTML = cart_cnt;
    //     }
    // }

    // gotocart.forEach(function(cart_btn,index){
    //     cart_btn.addEventListener('click', function(){
    //         if(clicked.indexOf(index) >= 0){
    //             //クリック管理用の配列から対象のボタンのindexを削除
    //             for(var i = 0; i < clicked.length; i++){
    //                 if(clicked[i] == index){
    //                 clicked.splice(i, 1);
    //                 //データ保管ようの配列から対象の商品データを削除
    //                 save_items.splice(i, 1);
    //                 }
    //             }
    //             //カートアイコンの数を減らす
    //             cart_cnt--;
    //             //0の時はカートアイコンのカウントを表示させない
    //             if(cart_cnt == 0){
    //                 $('.cart_cnt').addClass('hidden');
    //             }
    //             $('#js_cart_cnt').html(cart_cnt);

    //             //カートボタンを非アクティブにする
    //             cart_btn.classList.remove('_active');
    //             //ボタンのindexが配列に含まれていたら、配列から削除
    //             for(var i = 0; i < clicked.length; i++){
    //                 if(clicked[i] == index){
    //                     clicked.splice(i, 1);
    //                 }
    //             }
    //         }else if(clicked.indexOf(index) == -1){
    //             var name = cart_btn.dataset.name//商品の名前を取得
    //             var price = Number(cart_btn.dataset.price);//商品の値段を取得
    //             //データ保存用の配列に商品データを追加
    //             save_items.push({
    //                 id: index,
    //                 name: name,
    //                 price: price
    //             });

    //             //ボタンのindexが配列に含まれていなかったら、配列に追加
    //             clicked.push(index);
    //             cart_cnt++;
    //             if(cart_cnt >= 1){
    //             $('.cart_cnt').removeClass('hidden');
    //             }
    //         }
    //         $('#js_cart_cnt').html(cart_cnt);
    //         console.log(cart_cnt);
    //         cart_btn.classList.add('_active');

    //         // ローカルストレージに商品データを保管(上書き)
    //         localStorage.setItem("items",JSON.stringify(save_items));
    //     })
    // });

    // function activate_btn(index){
    //     cart_cnt++;
    //     if(cart_cnt >= 1){
    //       cart_cnt_icon.parentNode.classList.remove('hidden');
    //     }
    //     cart_cnt_icon.innerHTML = cart_cnt;
    //     gotocart[index].classList.add('_active');
    // }
    
    // function inactivate_btn(index){
    //     cart_cnt--;
    //     if(cart_cnt == 0){
    //       cart_cnt_icon.parentNode.classList.add('hidden');
    //     }
    //     cart_cnt_icon.innerHTML = cart_cnt;
    //     gotocart[index].classList.remove('_active');
    // }
});