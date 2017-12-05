$(() => {
    $('#portfolio').tabs();

    $('#form').submit(() => {
        $('#form').find('input, textarea').val('');
    });
});
