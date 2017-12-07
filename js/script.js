$(() => {
    $('#portfolio').tabs();

    $('#form').submit(() => {
        $('#form').find('input, textarea').val('');
    });

    $('.portfolio-item-wrapper').click((event) => {
        const target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = $(target).parent('a');
        blueimp.Gallery(links, options);
    });
});
