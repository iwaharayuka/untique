
$(function(){

    var items = JSON.parse(localStorage.getItem("items")),//ローカルストレージの商品データの配列
    ele = document.getElementById('js_shopping_list'),//カートの商品を追加する要素
    fragment = document.createDocumentFragment(),//DOMの追加処理用のフラグメント
    total = 0,//商品の合計金額
    total_ele = document.getElementById('js_total');//商品の合計金額表示用の要素

    if(items){
        // カート商品の数分、要素を生成
        for(var i = 0; i < items.length; i++){
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
            thumb.innerHTML = '<img src="img/uq-' + items[i].img + '.png">';
            h2.appendChild(document.createTextNode(items[i].name));
            price.appendChild(document.createTextNode('¥' + items[i].price.toLocaleString()));

            //商品名と価格の要素をliに追加
            li.appendChild(icon);
            li.appendChild(thumb);
            li.appendChild(h2);
            li.appendChild(price);
            fragment.appendChild(li);

            // 合計金額を加算
            total = total + items[i].price;
        }
    }
    // 作成した要素の追加
    ele.appendChild(fragment);
    total_ele.innerHTML = total;

    $('.del-btn').on('click', function(){
        confirm('カートから削除します');
        localStorage.removeItem(items[i]);
        $(this).parent('li').toggleClass('is-del');
        $('.total').text('¥ 0');
    });
})