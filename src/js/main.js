jQuery(document).ready(function($) {


    //FIXANDO HEADER
    window.onscroll = function() {
        if (window.pageYOffset > 140) {
            $("#header").addClass("active")
        } else {
            $("#header").removeClass("active")
        }
    };

    //ISOTOPE
    let btns = $("#servicos .button-group button");

    btns.click(function(e) {
        $("#servicos .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#servicos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function() {
        $("#servicos .grid").isotope({
            filter: "*",
        });
    });


    //MAGNIFY
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Proxima",
            tCounter: "%curr% de %total%",
        },

    });
    //OWL CAROUSEL
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            loop: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true,
            lazyLoad: false,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 2,
                },
            },

        });
    });

});