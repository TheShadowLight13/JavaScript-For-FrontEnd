function domDynamicForm(selector) {
    let container = $(selector);

    let addControls = $('<div></div>');
    addControls.addClass('add-controls');
    let addControlsLabel = $('<label>Enter text: </label>');
    addControlsLabel.appendTo(addControls);
    let addControlsInput = $('<input/>');
    addControlsInput.appendTo(addControls);
    let addControlsButton = $('<a>Add</a>');
    addControlsButton.addClass('button');
    addControlsButton.on('click', function () {
        let listItem = $('<li></li>');
        listItem.addClass('list-item');
        let deleteButton = $('<a>X</a>');
        deleteButton.addClass('button');
        deleteButton.on('click', function () {
            $(this).parent().css('display', 'none');
        });

        deleteButton.appendTo(listItem);
        let inputVal = addControlsInput.val();
        let listItemValue = $(`<strong>${inputVal}</strong>`);
        listItemValue.appendTo(listItem);
        listItem.appendTo(resultControlsList);
    });
    addControlsButton.appendTo(addControls);
    container.append(addControls);

    let resultControls = $('<div></div>');
    resultControls.addClass('result-controls');
    let resultControlsList = $('<ul></ul>');
    resultControlsList.addClass('items-list');
    resultControlsList.appendTo(resultControls);
    container.append(resultControls);
}

domDynamicForm("#content");