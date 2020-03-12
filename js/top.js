$(function(){
  // js外からitemsArrayを読み込む
  var itemsArray = window.itemsLib.items();

  // メイン画像をランダム表示
  if (window.matchMedia('(min-width: 560px)').matches){
    var i = [Math.floor(Math.random() * itemsArray.length)];
    var mainImg = '<a href="item' + itemsArray[i]['no'] + '.html' + '"><img class="' + itemsArray[i]['no'] + '" src="img/' + itemsArray[i]['img1'] + '" alt=""><figcaption>' + '『' + itemsArray[i]['title'] + '』<br>' + itemsArray[i]['artist'] + ' （' + itemsArray[i]['year'] + '年）</figcaption></a>'
    $('.fig-area').html(mainImg);
  } else {
    var i = [Math.floor(Math.random() * itemsArray.length)];
    var mainImg = '<a href="item' + itemsArray[i]['no'] + '.html' + '"><img class="' + itemsArray[i]['no'] + '" src="img/' + itemsArray[i]['img1'] + '" alt=""><figcaption>' + '『' + itemsArray[i]['title'] + '』' + '<br>' + itemsArray[i]['artist'] + '<br>' + '（' + itemsArray[i]['year'] + '年）</figcaption></a>'
    $('.fig-area').html(mainImg);
  };

  // 要素までスクロールダウン
  $('a[href ^= "#"]').on('click', function(){
    event.preventDefault();
    var target = $(this.hash);
    if(!target.length) return;
    var targetY = target.offset().top;
    $('body,html').animate({scrollTop: targetY}, 1300, 'swing');
  });
});