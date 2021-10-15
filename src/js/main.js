jQuery(document).ready(function($) {

    //FIXANDO HEADER
    window.onscroll = function() {
        if (window.pageYOffset > 140) {
            $("#header").addClass("active")
        } else {
            $("#header").removeClass("active")
        }
    }
})