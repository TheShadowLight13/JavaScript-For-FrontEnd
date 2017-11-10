function cityClicked() {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    } else {
        $(this).addClass('selected');
    }
}

function townsButtonClicked() {
    let selectedTowns = $.map($('li.selected'), function(value, index) {
        return [value];
    });
    let selectedTownNames = selectedTowns.map(c => c.textContent);
    let selectedTownsInfo = selectedTownNames.join(", ");
    $('#selectedTowns').text(selectedTownsInfo);
}

function attachEvents() {
    $(document).ready(function () {
        $('#items li').on('click', cityClicked);
        $('#showTownsButton').on('click', townsButtonClicked);
    });

}

attachEvents();
