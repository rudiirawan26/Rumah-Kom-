$(function() {
    $('[data-toogle="tooltip"]').tooltip()
})

// Smoot Scrolling
$('#navbar a).on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html,body').animate({
                    scrollTop: $(hash).offset().top - 100
                },

            800

        );
    }
});
