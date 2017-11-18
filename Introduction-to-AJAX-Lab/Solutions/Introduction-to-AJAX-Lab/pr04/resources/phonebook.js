$(function () {

    attachEvents();

    function attachEvents() {
        $('#btnCreate').on('click', createContact);
    }

    let baseDatabaseURL = 'https://test-4855b.firebaseio.com/phone_book';
    let phoneBookDatabaseUrl = baseDatabaseURL + '.json';
    let loading = $('#loading');
    let phoneBook = $('#phonebook');
    loadContacts();

    function loadContacts() {
        phoneBook.empty();
        loading.text('Loading...');
        $.ajax({
            url: phoneBookDatabaseUrl,
            success: displayContacts
        });
    }

    function displayContacts(contacts) {
        loading.empty();
        for (let key in contacts) {
            let contact = contacts[key];
            let contactName = contact.name;
            let contactPhone = contact.phone;
            let deleteLink = $('<a id="delete" href="#">[Delete]</a>');
            deleteLink.attr('data-id', key);
            deleteLink.on('click', deleteContact);
            let contactInfo = $(`<li>${contactName}: ${contactPhone}</li>`);
            deleteLink.appendTo(contactInfo);
            phoneBook.append(contactInfo);
        }
    }

    function createContact() {
        let name = $('#name');
        let phone = $('#phone');
        let nameValue = name.val();
        let phoneValue = phone.val();

        if (nameValue.length < 1 || phoneValue.length < 1) {
            $('#error').text('Invalid name or phone');
            return;
        } else {
            $('#error').empty();
        }

        let newContactInfo = JSON.stringify({name: nameValue, phone: phoneValue});
        $.ajax({
            url: phoneBookDatabaseUrl,
            method: 'POST',
            data: newContactInfo,
            success: loadContacts
        });

        name.val('');
        phone.val('');
    }

    function deleteContact(key) {
     let contactId = $(key.target).attr('data-id');
     let deleteContactURL = baseDatabaseURL + `/${contactId}.json`;
     $.ajax({
        url: deleteContactURL,
        method: 'DELETE',
        success: loadContacts
     });
    }
});