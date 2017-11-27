function solve() {
    let nextStopId = 'depot';
    let databaseURL = `https://judgetests.firebaseio.com/schedule/${nextStopId}.json`;
    let infoDiv = $('.info');
    let departBtn = $('#depart');
    let arriveBtn = $('#arrive');
    let currentStopName = '';

    function depart() {
        $.ajax({
            url: databaseURL,
            success: success,
            error: error
        });

        function success(response) {
            currentStopName = response.name;
            infoDiv.text(`Next stop ${currentStopName}`);
            nextStopId = response.next;
            databaseURL = `https://judgetests.firebaseio.com/schedule/${nextStopId}.json`;
            departBtn.prop('disabled', true);
            arriveBtn.prop('disabled', false);
        }

        function error() {
            infoDiv.text('Error');
            departBtn.prop('disabled', true);
            arriveBtn.prop('disabled', true);
        }
    }

    function arrive() {
        infoDiv.text(`Arriving at ${currentStopName}`);
        arriveBtn.prop('disabled', true);
        departBtn.prop('disabled', false);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();