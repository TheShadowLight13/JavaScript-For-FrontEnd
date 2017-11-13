let addBook = (function bookGenerator() {
    let id = 1;
    return function (selector, title, author, ISBN) {
        let book = $("<div></div>");
        book.attr('id', 'book' + id);
        let titleInfo = $(`<p>${title}</p>`);
        titleInfo.addClass('title');
        titleInfo.appendTo(book);

        let authorInfo = $(`<p>${author}</p>`);
        authorInfo.addClass('author');
        authorInfo.appendTo(book);

        let isbnInfo = $(`<p>${ISBN}</p>`);
        isbnInfo.addClass('isbn');
        isbnInfo.appendTo(book);

        let selectButton = $('<button>Select</button>');
        selectButton.on('click', function () {
            book.css('border', '2px solid blue');
        });
        selectButton.appendTo(book);

        let deselectButton = $('<button>Deselect</button>');
        deselectButton.on('click', function () {
            book.css('border', 'medium none');
        });

        deselectButton.appendTo(book);
        $(selector).append(book);
        id++;
    }
}());

addBook('#wrapper', 'Alice in Wonderland', 'Lewis Carroll', 1112);