'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const logoWrapper = document.querySelector('.logos');

    const logos = [
        "VISA", "MASTERCARD", "AMEX", "ASTROPAY", "SKRILL", "PAYSAFE", "ECOPAYZ", "BITCOIN", "LITECOIN", "ETHEREUM", "RIPPLE", "TETHER", "CARDANO", "BINANCE", "USDC"
    ]

    // slider settings
    new Swiper('.swiper', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        simulateTouch: false,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },
        speed: 1000
    });


    // image output in <div class="logos"></div>
    for (let key of logos) {
        let imgWrapper = document.createElement('div');
        imgWrapper.classList.add('current_img');

        let img = document.createElement('img');
        img.alt = key;
        img.src = `images/logos/${key}.png`;

        imgWrapper.append(img);
        logoWrapper.append(imgWrapper);
    }

})