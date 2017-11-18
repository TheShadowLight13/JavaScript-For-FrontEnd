function loadData(data) {
    for (let entry of data) {
        let fullName = entry.full_name;
        let link = entry.html_url;
        let li = $(`<li><a href="${link}">${fullName}</a></li>`);
        $('#repos').append(li);
    }
}

function handleErrors() {
    let li = $(`<li>Error</li>`);
    $('#repos').append(li);
}

function loadRepos() {
    $('#repos').empty();
    let username = $('#username').val();
    $.ajax({
       url: `https://api.github.com/users/${username}/repos`,
       success: loadData,
       error: handleErrors
    });
}