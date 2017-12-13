$(() => {
    $('#portfolio').tabs();

    $('#form').submit(() => {
        $('#form').find('input, textarea').val('');
    });

    $('.portfolio-item-wrapper').click((event) => {
        const target = event.target || event.srcElement,
            src = target.src ? target.parentNode : target,
            options = {index: src, event: event, hidePageScrollbars: false},
            links = $('.portfolio-item-wrapper');
        blueimp.Gallery(links, options);
    });
});
