function buttonClicked() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
}

function attachEvents() {
   $('.button').on('click', buttonClicked);
}
