function search() {
    let searchText = $('#searchText').val();
    let matchedItemsCount = 0;
    $('#towns li').each(function() {
        let currElement = $(this).text().trim();
        if (currElement.includes(searchText)) {
            $(this).css('font-weight', 'bold');
            matchedItemsCount++;
        } else {
            $(this).css('font-weight', 'normal');
        }
    });

    $('#result').text(`${matchedItemsCount} matches found.`);
}