
$(function(){
    var iitems = JSON.parse(localStorage.getItem("items")),//ローカルストレージの商品データの配列
    ele = document.getElementById('js_shopping_list'),//カートの商品を追加する要素
    fragment = document.createDocumentFragment(),//DOMの追加処理用のフラグメント
    total = 0,//商品の合計金額
    total_ele = document.getElementById('js_total');//商品の合計金額表示用の要素

    if(iitems){
        // カート商品の数分、要素を生成
        for(var i = 0; i < iitems.length; i++){
            var li = document.createElement('li'),
            icon = document.createElement('div'),
            thumb = document.createElement('div'),
            h2 = document.createElement('div'),
            price = document.createElement('div');

            //生成した要素にクラスを追加
            li.classList.add('item');
            icon.classList.add('del-btn');
            thumb.classList.add('thumb');
            h2.classList.add('text');
            price.classList.add('price');

            //要素に商品データを追加
            thumb.innerHTML = '<img src="img/uq-' + iitems[i].img + '.png">';
            h2.appendChild(document.createTextNode(iitems[i].name));
            price.appendChild(document.createTextNode('¥' + iitems[i].price.toLocaleString()));

            //商品名と価格の要素をliに追加
            li.appendChild(icon);
            li.appendChild(thumb);
            li.appendChild(h2);
            li.appendChild(price);
            fragment.appendChild(li);

            // 合計金額を加算
            total += iitems[i].price;
        }
    }
    // 作成した要素の追加
    ele.appendChild(fragment);
    total_ele.innerHTML = total.toLocaleString();

    $('.del-btn').on('click', function(){
        var iitems = JSON.parse(localStorage.getItem("items"));
        var delItem = $(this).parent().find('img').attr('src');
        var delID = delItem.match(/\d+/)[0];
        var delPrice = $(this).parent().find('.price').text();
        var delNum = delPrice.replace(/[^0-9]/g, '');
        var index = -1;
        for (var i=0; i<iitems.length; i++) {
            if (iitems[i].img == delID) {
                index = i;
            }
        }

        if (index > -1) {
            iitems.splice(index, 1);
            localStorage.setItem("items", JSON.stringify(iitems));
            // カートアイコンの数字更新
            cnt_active(iitems.length);
            // カートに入っているアイテム一覧から削除
            $('img[src="img/uq-'+delID+'.png"]').parents('.item').remove();
            // 合計金額を減算
            total -= delNum;
        }
        total_ele.innerHTML = total.toLocaleString();
    });
    function cnt_active(cnt) {
        $('.cart_cnt').removeClass('hidden');
        $('.cart_cnt span').html(cnt);
    };
})