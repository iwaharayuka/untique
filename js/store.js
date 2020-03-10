$(function(){
    // js外からitemsArrayを読み込む
    var itemsArray = window.itemsLib.items();

    // 商品を追加して並べる
    for(var i = 0; i < itemsArray.length; i++){
        var htmlContents = '<div class="item-block"><a href="item' + itemsArray[i]['no'] + '.html"><img src="img/' + itemsArray[i]['img1'] + '" alt=""></a><div class="item-box"><h4>' + '『' + itemsArray[i]['title'] + '』' + '<br>' + itemsArray[i]['artist'] + '<br>' + '（ ' + itemsArray[i]['year'] + '年 ）' + '</h4><br><p>' + '¥' + itemsArray[i]['price'].toLocaleString() + '</p></div></div>'
        $('#item-container').prepend(htmlContents);
    }

    // 並び替え[newest]
    $('.newest').on('click', function(){
        var sortArray = upDownN($(this));
        addList(sortArray);
    });

    // 並び替え[year]
    $('.year').on('click', function(){
        var sortArray = upDownY($(this));
        addList(sortArray);
    });

    // 並び替え[price]
    $('.price').on('click', function(){
        var sortArray = upDownP($(this));
        addList(sortArray);
    });

    function upDownN(tab) {
        var sort = tab.hasClass('down');
        $('.tab').removeClass('down up');
        if (sort) {
            tab.addClass('up');
            $('.newest span').html('↑');
            $('.year span').empty();
            $('.price span').empty();
            var sortArray = [...itemsArray].sort((a, b) => b.no - a.no);
        } else {
            tab.addClass('down');
            $('.newest span').html('↓')
            $('.year span').empty();
            $('.price span').empty();
            var sortArray = [...itemsArray].sort((a, b) => a.no - b.no);
        }
        return sortArray;
    }

    function upDownY(tab) {
        var sort = tab.hasClass('down');
        $('.tab').removeClass('down up');
        if (sort) {
            tab.addClass('up');
            $('.year span').html('↑')
            $('.newest span').empty();
            $('.price span').empty();
            var sortArray = [...itemsArray].sort((a, b) => a.year - b.year);
        } else {
            tab.addClass('down');
            $('.year span').html('↓');
            $('.newest span').empty();
            $('.price span').empty();
            var sortArray = [...itemsArray].sort((a, b) => b.year - a.year);
        }
        return sortArray;
    }

    function upDownP(tab) {
        var sort = tab.hasClass('down');
        $('.tab').removeClass('down up');
        if (sort) {
            tab.addClass('up');
            $('.price span').html('↑');
            $('.newest span').empty();
            $('.year span').empty();
            var sortArray = [...itemsArray].sort((a, b) => a.price - b.price);
        } else {
            tab.addClass('down');
            $('.price span').html('↓');
            $('.newest span').empty();
            $('.year span').empty();
            var sortArray = [...itemsArray].sort((a, b) => b.price - a.price);
        }
        return sortArray;
    }

    function addList(sortArray) {
        $('#item-container').css('opacity', 0);
        setTimeout(function() {
            $('#item-container').empty();
            for(var i = 0; i < sortArray.length; i++){
                var htmlCont = ' \
                    <div class="item-block"> \
                        <a href="item' + sortArray[i]['no'] + '.html"> \
                            <img src="img/' + sortArray[i]['img1'] + '"> \
                        </a> \
                    <div class="item-box"> \
                        <h4>' + '『' + sortArray[i]['title'] + '』' + '<br>' + sortArray[i]['artist'] + '<br>' + '（ ' + sortArray[i]['year'] + '年 ）' + '</h4><br><p>' + '¥' + sortArray[i]['price'].toLocaleString() + '</p> \
                    </div></div>';
                $('#item-container').prepend(htmlCont);
            };
            $('#item-container').css('opacity', 1);
        }, 500);
    }
});