$(function(){
    if(window.matchMedia('(min-width: 560px)').matches){
        var header = ' \
            <nav> \
                <ul class="nav-list"> \
                    <li class="icon"> \
                        <a href="https://www.instagram.com/untique.grats.jp" target="_blank"><img src="img/icon_ig.svg" alt="ig"> \
                        </a> \
                    </li> \
                    <li class="nav"> \
                        <a href="index.html#about-area">ABOUT</a> \
                    </li> \
                    <li class="nav"> \
                        <a href="index.html#exhibision-area">EXHIBISION</a> \
                    </li> \
                    <li class="nav"> \
                        <h1> \
                            <a href="index.html"><img src="img/icon_logo.svg" alt=""> \
                            </a> \
                        </h1> \
                    </li> \
                    <li class="nav"> \
                        <a href="store.html">STORE</a> \
                    </li> \
                    <li class="nav"> \
                        <a href="contact.html">CONTACT</a> \
                    </li> \
                    <li class="icon cart"> \
                        <div class="cart-wrapper"> \
                            <div class="cart_cnt hidden"> \
                                <span id="js_cart_cnt"></span> \
                            </div> \
                            <a href="cart.html"><img src="img/icon_cart.svg" alt=""> \
                            </a> \
                        </div> \
                    </li> \
                </ul> \
            </nav> \
        ';
        $('.header').html(header);
    } else {
        var sheader = ' \
        <nav> \
            <div class="bnav"> \
                <div class="bnavbtn"> \
                    <img src="img/nav.svg" alt=""> \
                </div> \
                <div class="logo"> \
                    <h1><a href="index.html"><img src="img/icon_logo.svg" alt=""></a></h1> \
                </div> \
                <div class="cart-wrapper"> \
                    <div class="cart_cnt hidden"> \
                        <span id="js_cart_cnt"></span> \
                    </div> \
                    <a href="cart.html"><img src="img/icon_cart.svg" alt=""></a> \
                </div> \
            </div> \
            <div class="bnav-menu-wrapper"> \
                <ul class="bnav-menu"> \
                    <li> \
                        <a href="index.html#about-area">ABOUT</a> \
                    </li> \
                    <li> \
                        <a href="index.html#exhibision-area">EXHIBISION</a> \
                    </li> \
                    <li> \
                        <a href="store.html">STORE</a> \
                    </li> \
                    <li> \
                        <a href="contact.html">CONTACT</a> \
                    </li> \
                    <li class="icon ig"> \
                        <a href="https://www.instagram.com/untique.grats.jp" target="_blank"><img src="img/icon_ig.svg" alt="ig"> \
                        </a> \
                    </li> \
                    <li> \
                        <a href="#">Terms | PrivacyPolicy</a> \
                    </li> \
                </ul> \
            </div> \
        </nav> \
        ';
        $('.header').html(sheader);
    };
});