$(function(){

    // bnav
    $('.bnavbtn').on('click', function() {
        $('.bnav-menu-wrapper').slideToggle(800);
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $(this).children('img').attr('src', 'img/nav2.svg');
        }else {
            $(this).children('img').attr('src', 'img/nav.svg');
        }
        return false;
    });

    $('.bnav-menu a').on('click', function() {
        $('.bnavbtn').click();
    });

    // header固定
    var navPos = $(window).height() - 80;
    $(window).scroll(function() {
        if($(this).scrollTop() > navPos) {
            $('nav').addClass('nav-fixed');
        } else {
            $('nav').removeClass('nav-fixed');
        }
    });

    // カート機能
    var imgdata = $('.gotocart').data('img'),
    cnt = 0,
    clicked = [],
    cartItems = [], // localstorage保存用の配列
    iitems = JSON.parse(localStorage.getItem("items"));
    
    if(iitems) {
        var id;
        for (var i = 0; i < iitems.length; i++) {
        id = iitems[i].img;

        cartItems.push(iitems[i]);
        clicked.push(id);
        // cnt_active(id);
        }
        if(iitems.length != 0) {
            cnt_active(clicked.length);
        }
    }

    $('.gotocart').each(function(index) {
        $(this).on('click', function() {
            // この商品がすでにローカルストレージに保存されているか
            var checkedThis = false;
            iitems = JSON.parse(localStorage.getItem("items"));
            // iitemsがローカルストレージに存在しているとき
            if (iitems) {
                for (var i = 0; i < iitems.length; i++) {
                    if (iitems[i].img == imgdata) {
                        checkedThis = true;
                    }
                }
            }
            if (!checkedThis) {
                // ローカルストレージに保存されていない場合のみ追加
                if (clicked.indexOf(index) >= 0) {
                    for (var i = 0; i < clicked.length; i++) {
                    if(clicked[i] == index){
                        clicked.splice(i, 1);
                        cartItems.splice(i, 1);
                    }
                    }
                    // cnt_active(clicked.length);
                }else if(clicked.indexOf(index) == -1){
                    clicked.push(imgdata);
                    var name = $(this).data('name'),
                    price = $(this).data('price');
                    cartItems.push({
                        img: imgdata,
                        name: name,
                        price: price
                    });
                    // カートの数字を更新
                    cnt_active(clicked.length);
                    $(this).addClass('_active');
                }
                localStorage.setItem("items", JSON.stringify(cartItems));
            }
        });
    });

    function cnt_active(cnt) {
        // cnt++;
        // $('#js_cart_cnt').parent().removeClass('hidden');
        // $('#js_cart_cnt').html(cnt);
        $('.cart_cnt').removeClass('hidden');
        $('.cart_cnt span').html(cnt);
    };

    function cnt_inactive() {
        cnt--;
        $('#js_cart_cnt').parent().addClass('hidden');
    };
});

// itemsArray
function getItemsArray(){
    var itemsArray = [
        {
            no: '001',
            img1: 'uq-00101.png',
            img2: 'uq-00102.png',
            img3: 'uq-00103.png',
            artist: 'エイドリアン・アラン・ガリー',
            title: '祝辞用の椀',
            text: '木材工芸師ガリーによるヤシの実を用いた祝辞用の椀。首長への献上品として拵えられた。フランスによる植民地統治前の古き良きニューカレドニアのエッセンスが垣間見られる。',
            price: 18000,
            year: 1834,
            country: 'ニューカレドニア',
            material: '木',
            size: 'W:200 / h:50 / D:200mm 250g'
        },
        {
            no: '002',
            img1: 'uq-00201.png',
            img2: 'uq-00202.png',
            img3: 'uq-00203.png',
            artist: 'アンドレアス・H・ブレマー',
            title: 'ブレマー兄弟の扉飾り（女児）',
            text: 'トイレの扉掛け。幼少期に両親を亡くしたブレマー兄弟は貧しくトイレのない木の小屋での暮らしを余儀なくされた。当時の記憶から豊かさの象徴として水回りをモチーフとした作品となっている。',
            price: 12000,
            year: 1880,
            country: 'チェコ',
            material: '銅・金',
            size: 'W:150 / h:200 / D:30mm 700g'
        },
        {
            no: '003',
            img1: 'uq-00301.png',
            img2: 'uq-00302.png',
            img3: 'uq-00303.png',
            artist: 'シルビオ・C・ブレマー',
            title: 'ブレマー兄弟の扉飾り（男児）',
            text: 'トイレの扉掛け。兄アンドレアスの亡き後に弟シルビオが男性用トイレのモチーフを全く同じサイズ・素材で製作するしたものである。女児に比べ、金の含有量が多く、100年の歳月を経ても輝きを放っている',
            price: 21000,
            year: 1896,
            country: 'チェコ',
            material: '銅・金',
            size: 'W:150 / h:200 / D:30mm 700g'
        },
        {
            no: '004',
            img1: 'uq-00401.png',
            img2: 'uq-00402.png',
            img3: 'uq-00403.png',
            artist: 'ユレン・フライレ',
            title: 'アルメンゴル会合のグラス',
            text: 'スペイン・バスク地方の秘密結社アルメンゴルの会合で用いられたグラス。フライレの作品はいずれも繊細な細工が施されていることが特徴。',
            price: 24000,
            year: 1819,
            country: 'スペイン',
            material: 'ガラス・銀',
            size: 'W:60 / h:200 / D:60mm 600g'
        },
        {
            no: '005',
            img1: 'uq-00501.png',
            img2: 'uq-00502.png',
            img3: 'uq-00503.png',
            artist: 'アメリア・オッターソン',
            title: 'アメリアの天秤',
            text: '占い師としての下積みが長かったアメリアは婚前に自ら金物細工を加工した作品を出し生計を立ていた。男女の写真を左右に吊るし相性を見たとされている。',
            price: 21000,
            year: 1823,
            country: 'イギリス',
            material: '鉛',
            size: 'W:200 / h:300 / D:100mm 1030g'
        },
        {
            no: '006',
            img1: 'uq-00601.png',
            img2: 'uq-00602.png',
            img3: 'uq-00603.png',
            artist: 'イェン・トラン・ホァン・アン',
            title: '阮朝時代の薬箱',
            text: '家具職人の息子として育ったイェンは父の見よう見まねで幼少期から収納用具を作っていた。64等分の敷居で細かく分かれた箱は、医療用に採取された野草の保存に用いられたと見られる。',
            price: 12000,
            year: 1892,
            country: 'ベトナム',
            material: '木',
            size: 'W:280 / h:130 / D:200mm 550g'
        },
        {
            no: '007',
            img1: 'uq-00701.png',
            img2: 'uq-00702.png',
            img3: 'uq-00703.png',
            artist: 'ガエターノ・ロッシ・ビアンケット',
            title: '統一国家誕生の記念酒器',
            text: 'イタリア統一直前のトリノで新国王となったエマヌルール４世へ献上されたガラス酒器。毒を盛られることを危惧したエマヌルールはガラス食器をこよなく愛し、代々ガラス工芸職人であったビアンケット家は寵愛を受けた。',
            price: 19000,
            year: 1856,
            country: 'イタリア',
            material: 'ガラス',
            size: 'W:60 / h:210 / D:60mm 630g'
        },
        {
            no: '008',
            img1: 'uq-00801.png',
            img2: 'uq-00802.png',
            img3: 'uq-00803.png',
            artist: '駒ヶ嶺 登貴子',
            title: '小堀相馬焼の醤油皿',
            text: '福島県の醤油の醸造家の次女として生まれた登貴子は農家の地主へ嫁いだが主人を疫病で亡くしたのち、小堀相馬焼の陶芸家としての生活を送る。幼少時代を思い出す醤油皿を生産し続けた。淡い白を基調とし、女性ならではの繊細さ・細工のか細さが見受けられる。',
            price: 20000,
            year: 1899,
            country: '日本',
            material: '陶器',
            size: 'W:100 / h:30 / D:100mm 350g'
        },
        {
            no: '009',
            img1: 'uq-00901.png',
            img2: 'uq-00902.png',
            img3: 'uq-00903.png',
            artist: 'アルチョム・オブモチャエフ',
            title: 'ポモシュニコフ家のマッチ',
            text: '紙巻き煙草が一般化するにつれ、マッチのデザインが多様化した。自らも愛煙家であったアルチョムはある雨上がりの日に見た雲からインスパイアを受けて趣味で製作した。当時執事として仕えていたポモシュニコフ家の主人の誕生日にプレゼントし、喜ばれたとされる。',
            price: 8000,
            year: 1876,
            country: 'ロシア',
            material: '紙',
            size: 'W:80 / h:30 / D:40mm 150g'
        },
        {
            no: '010',
            img1: 'uq-01001.png',
            img2: 'uq-01002.png',
            img3: 'uq-01003.png',
            artist: 'アルチョム・オブモチャエフ',
            title: 'ポモシュニコフ家の灰皿',
            text: 'アルチョムの趣味は多岐にわたり、陶芸やガラス工芸などにも精通していた。ガラスで製作された本作にも、雲のニュアンスが施されていることがわかる。アルチョムの作品は次第に趣味の域を超え、彼の息子であるグレゴリーによって東アジア諸国へ広く売り出されることとなった。',
            price: 14000,
            year: 1879,
            country: 'ロシア',
            material: 'ガラス・鉛',
            size: 'W:120 / h:40 / D:120mm 380g'
        },
        {
            no: '011',
            img1: 'uq-01101.png',
            img2: 'uq-01102.png',
            img3: 'uq-01103.png',
            artist: 'ダナー・ヘンドリクソン',
            title: '金属製の耳かき',
            text: '従来の綿棒に多大なる課題を感じたダナーは金属製の耳かきを作れないかを画策、その記念すべき最初で最後の作品である。鍵用の金型を利用したことで、耳へのフィット感に欠け、使い回しにより雑菌が増殖。炎症を起こす人が多発したため以降の製作をやめたとされる。',
            price: 9000,
            year: 1888,
            country: 'アメリカ',
            material: '青銅',
            size: 'W:30 / h:200 / D:10mm 400g'
        },
        {
            no: '012',
            img1: 'uq-01201.png',
            img2: 'uq-01202.png',
            img3: 'uq-01203.png',
            artist: 'タク・スンヒョン',
            title: 'ビビンパのためのスプーン',
            text: '韓国プロダクトデザインの巨匠・タク・スンヒョンによる韓国料理用のスプーン。量産されたものではなく、青年期の試作品である。当時は木製の食器が多い中、カプサイシン（唐辛子）の色が着色されにくいことで、以降の韓国カトラリーへの影響を与えたとされる。',
            price: 22000,
            year: 1895,
            country: '韓国',
            material: '銀',
            size: 'W:45 / h:10 / D:220mm 420g'
        },
    ];
    return itemsArray;
}
// common.js外からitemsArrayを呼び出し可能にする
window.itemsLib = window.itemsLib || {};
window.itemsLib.items = getItemsArray;