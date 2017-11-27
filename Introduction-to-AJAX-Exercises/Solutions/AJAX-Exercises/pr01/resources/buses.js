function getInfo() {
    let stopIdVal = $('#stopId').val();
    let databaseURL = `https://judgetests.firebaseio.com/businfo/${stopIdVal}.json`;
    let stopNameDiv = $('#stopName');
    let busesList = $('#buses');

    $.ajax({
        url: databaseURL,
        success: showStopInfo,
        error: showError
    });

    function showStopInfo(stopInfo) {
        let stopName = stopInfo.name;
        let buses = stopInfo.buses;
        busesList.empty();
        stopNameDiv.text(stopName);
        for (let busId in buses) {
            let busTime = buses[busId];
            let listItem = $(`<li>Bus ${busId} arrives in ${busTime} minutes</li>`)
           listItem.appendTo(busesList);
        }
    }

    function showError() {
        busesList.empty();
        stopNameDiv.text('Error');
    }
}